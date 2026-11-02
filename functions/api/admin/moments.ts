// /api/admin/moments (alleen met het beheerwachtwoord)
// GET  ?status=pending|approved: lijst met momenten
// POST { id, action: 'approve' | 'delete' }: goedkeuren of verwijderen
import { isAdmin, json, type Context, type MomentRow } from '../../../lib/moments-api';

export async function onRequestGet({ request, env }: Context) {
  if (!isAdmin(request, env)) return json({ error: 'unauthorized' }, 401);

  const status = new URL(request.url).searchParams.get('status') === 'approved' ? 'approved' : 'pending';
  const { results } = await env.DB
    .prepare('SELECT * FROM moments WHERE status = ? ORDER BY created_at DESC LIMIT 200')
    .bind(status)
    .all<MomentRow>();

  return json(results);
}

export async function onRequestPost({ request, env }: Context) {
  if (!isAdmin(request, env)) return json({ error: 'unauthorized' }, 401);

  const { id, action } = (await request.json().catch(() => ({}))) as { id?: string; action?: string };
  if (!id) return json({ error: 'missing' }, 400);

  if (action === 'approve') {
    await env.DB
      .prepare("UPDATE moments SET status = 'approved', approved_at = ? WHERE id = ?")
      .bind(new Date().toISOString(), id)
      .run();
    return json({ ok: true });
  }

  if (action === 'delete') {
    const row = await env.DB.prepare('SELECT photo_key FROM moments WHERE id = ?').bind(id).first<Pick<MomentRow, 'photo_key'>>();
    if (row) await env.PHOTOS.delete(row.photo_key);
    await env.DB.prepare('DELETE FROM moments WHERE id = ?').bind(id).run();
    return json({ ok: true });
  }

  return json({ error: 'action' }, 400);
}
