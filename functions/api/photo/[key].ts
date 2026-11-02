// /api/photo/:key
// Toont een foto. Goedgekeurde foto's zijn openbaar; foto's die nog wachten
// zijn alleen zichtbaar op de beheerpagina (met ?token=wachtwoord).
import { isAdmin, type Context, type MomentRow } from '../../../lib/moments-api';

export async function onRequestGet({ request, env, params }: Context) {
  const key = params.key;

  const row = await env.DB
    .prepare('SELECT status FROM moments WHERE photo_key = ?')
    .bind(key)
    .first<Pick<MomentRow, 'status'>>();

  if (!row) return new Response('Not found', { status: 404 });
  if (row.status !== 'approved' && !isAdmin(request, env)) return new Response('Not found', { status: 404 });

  const object = await env.PHOTOS.get(key);
  if (!object) return new Response('Not found', { status: 404 });

  return new Response(object.body, {
    headers: {
      'content-type': object.httpMetadata?.contentType ?? 'image/jpeg',
      'cache-control': row.status === 'approved' ? 'public, max-age=86400' : 'no-store',
    },
  });
}
