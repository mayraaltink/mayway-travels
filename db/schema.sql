-- Database voor "Jullie momenten" (Cloudflare D1).
-- Eenmalig uitvoeren: npx wrangler d1 execute mayway-moments --remote --file=db/schema.sql

CREATE TABLE IF NOT EXISTS moments (
  id          TEXT PRIMARY KEY,
  name        TEXT NOT NULL,
  location    TEXT NOT NULL,
  story       TEXT NOT NULL,
  instagram   TEXT,
  photo_key   TEXT NOT NULL,
  status      TEXT NOT NULL DEFAULT 'pending', -- 'pending' of 'approved'
  created_at  TEXT NOT NULL,
  approved_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_moments_status ON moments (status, approved_at);
