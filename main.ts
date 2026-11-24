// Entry for make.fun "Break Production, Own It"
// (u-ricoxyz-break-production-own-it-be78a994).
// Node 22, standard library only, plain JavaScript (no TypeScript
// annotations) so the grader can run it directly with node.
//
// The confession lives in entry.txt next to this file. This program reads
// it, checks it against the competition gate (UTF-8 text, 1-200 characters,
// not only whitespace, a single line with no control characters), and
// writes it unchanged to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
//
// Run it locally the way the grader does, with a stand-in output dir:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, 'entry.txt');

// An empty MAKEFUN_OUTPUT_DIR is the same as unset: fall back to /output
// instead of writing to a bare relative "entry.txt".
const rawOutDir = process.env.MAKEFUN_OUTPUT_DIR;
const outDir = rawOutDir && rawOutDir.trim().length > 0 ? rawOutDir : '/output';
const targetPath = join(outDir, 'entry.txt');

const rawText = readFileSync(sourcePath, 'utf8');
// A UTF-8 byte-order mark would be judged as part of the text (an
// invisible first character); refuse it rather than ship it silently.
if (rawText.charCodeAt(0) === 0xfeff) {
  throw new Error('entry.txt starts with a UTF-8 byte-order mark; the gate needs plain text.');
}
// Tolerate one trailing newline (a text editor's habit), but nothing else:
// the brief asks for a single line, so an embedded newline is still an error.
const text = rawText.endsWith('\n') ? rawText.slice(0, -1) : rawText;
const chars = [...text].length;

if (chars < 1 || chars > 200) {
  throw new Error('entry.txt is ' + chars + ' characters; the gate needs 1-200.');
}
if (text.trim().length === 0) {
  throw new Error('entry.txt is only whitespace; the gate needs real text.');
}
if (text.includes('\n') || text.includes('\r')) {
  throw new Error('entry.txt must be a single line; the brief asks for one line.');
}
// Control characters other than the tolerated trailing newline would
// survive as invisible bytes in the judged text; refuse them outright.
// A tab is allowed as harmless horizontal whitespace, everything else
// below 0x20 and DEL (0x7f) is not.
for (const ch of text) {
  const code = ch.charCodeAt(0);
  if ((code < 0x20 && ch !== '\t') || code === 0x7f) {
    throw new Error('entry.txt contains a control character (U+' + code.toString(16).padStart(4, '0') + '); the gate needs plain text.');
  }
}

mkdirSync(outDir, { recursive: true });
writeFileSync(targetPath, text, 'utf8');

// Round-trip check: what the grader will read must be byte-for-byte the
// entry we wrote, so a silent partial write can never slip through.
const written = readFileSync(targetPath); // no encoding: a Buffer
if (written.toString('utf8') !== text || written.length !== Buffer.byteLength(text, 'utf8')) {
  throw new Error('round-trip check failed: ' + targetPath + ' differs from entry.txt.');
}
console.log('wrote ' + targetPath + ' (' + chars + ' characters, round-trip verified)');
