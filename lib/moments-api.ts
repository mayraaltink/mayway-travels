// Gedeelde types en hulpfuncties voor de Cloudflare Pages Functions in functions/.
// Bindings (in te stellen in het Cloudflare-dashboard bij het Pages-project):
// - DB: D1-database met de tabel uit db/schema.sql
// - PHOTOS: R2-bucket voor de foto's
// - ADMIN_PASSWORD: geheim wachtwoord voor de beheerpagina

export interface Env {
  DB: D1Database;
  PHOTOS: R2Bucket;
  ADMIN_PASSWORD: string;
}

// Minimale types, zodat er geen extra pakketten nodig zijn
export interface D1Database {
  prepare(query: string): D1PreparedStatement;
}
interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  all<T = Record<string, unknown>>(): Promise<{ results: T[] }>;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  run(): Promise<unknown>;
}
export interface R2Bucket {
  put(key: string, value: ReadableStream | ArrayBuffer, options?: { httpMetadata?: { contentType?: string } }): Promise<unknown>;
  get(key: string): Promise<{ body: ReadableStream; httpMetadata?: { contentType?: string } } | null>;
  delete(key: string): Promise<void>;
}

export type Context = {
  request: Request;
  env: Env;
  params: Record<string, string>;
};

export type MomentRow = {
  id: string;
  name: string;
  location: string;
  story: string;
  instagram: string | null;
  photo_key: string;
  status: 'pending' | 'approved';
  created_at: string;
  approved_at: string | null;
};

export function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

export function isAdmin(request: Request, env: Env) {
  if (!env.ADMIN_PASSWORD) return false;
  const header = request.headers.get('authorization') ?? '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : new URL(request.url).searchParams.get('token');
  return token === env.ADMIN_PASSWORD;
}
