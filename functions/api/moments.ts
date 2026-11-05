// /api/moments
// GET:  goedgekeurde momenten (voor de Community-pagina)
// POST: nieuw moment insturen (komt binnen als 'pending')
import { json, type Context, type MomentRow } from '../../lib/moments-api';

const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
const PHOTO_TYPES: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};

export async function onRequestGet({ env }: Context) {
  const { results } = await env.DB
    .prepare("SELECT id, name, location, story, instagram, photo_key, approved_at FROM moments WHERE status = 'approved' ORDER BY approved_at DESC LIMIT 60")
    .all<MomentRow>();

  return json(results.map((m) => ({
    id: m.id,
    name: m.name,
    location: m.location,
    story: m.story,
    instagram: m.instagram,
    photo: `/api/photo/${m.photo_key}`,
    approvedAt: m.approved_at,
  })));
}

export async function onRequestPost({ request, env }: Context) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ error: 'invalid' }, 400);
  }

  // Spam-val: dit veld is onzichtbaar voor mensen
  if (String(form.get('website') ?? '').trim()) return json({ ok: true });

  const name = String(form.get('name') ?? '').trim().slice(0, 60);
  const location = String(form.get('location') ?? '').trim().slice(0, 80);
  const story = String(form.get('story') ?? '').trim().slice(0, 600);
  const instagram = String(form.get('instagram') ?? '').trim().replace(/^@/, '').slice(0, 40) || null;
  const consent = form.get('consent');
  const photo = form.get('photo');

  if (!name || !location || !story || !consent) return json({ error: 'missing' }, 400);
  if (!(photo instanceof File) || !PHOTO_TYPES[photo.type]) return json({ error: 'photo' }, 400);
  if (photo.size > MAX_PHOTO_BYTES) return json({ error: 'size' }, 400);

  const id = crypto.randomUUID();
  const photoKey = `${id}.${PHOTO_TYPES[photo.type]}`;

  await env.PHOTOS.put(photoKey, await photo.arrayBuffer(), { httpMetadata: { contentType: photo.type } });
  await env.DB
    .prepare('INSERT INTO moments (id, name, location, story, instagram, photo_key, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(id, name, location, story, instagram, photoKey, 'pending', new Date().toISOString())
    .run();

  return json({ ok: true });
}
