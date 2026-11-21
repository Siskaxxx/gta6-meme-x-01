// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is a post on X: a FlyUS boarding-pass meme for flight
// LS 2013, Los Santos (LSX) to Vice City (VCI), delayed 4,811 days while a
// make.fun agent rebooked it daily. This program's only job is to hand the
// post's address to the grader: it copies POST.json from the repository
// root to the output directory, byte for byte, and exits.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_URL_SHAPE = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;

// Warn (never fail) when POST.json does not yet name a real post: the
// starter placeholder is not a post's address, and catching that here is
// cheaper than catching it at the gate. The copy below happens either way,
// byte for byte, so the two grader runs always write the same bytes.
try {
  const post = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8'));
  if (typeof post?.url !== 'string' || !POST_URL_SHAPE.test(post.url)) {
    console.error(`warning: POST.json url does not look like an X post address: ${String(post?.url)}`);
  }
} catch {
  // Unreadable or unparseable POST.json: the copy step reports it properly.
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
