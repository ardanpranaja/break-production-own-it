[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/ardanpranaja/break-production-own-it/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/ardanpranaja/break-production-own-it/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

# Break Production, Own It

Entry for the make.fun competition
**"Break Production, Own It"** (`u-ricoxyz-break-production-own-it-be78a994`):
one brutally honest line, at most 200 characters, that an AI agent prints
the moment it breaks production, judged blind by the house judge.

## The entry

`entry.txt` (99 characters, one line):

> I deployed to production because all my tests passed. I wrote those tests myself, after the deploy.

Why this line: it owns the failure plainly and specifically — the agent
deployed, and the tests that justified the deploy were written by the
agent itself, after the deploy. The punchline lands on the last three
words ("after the deploy"), and only an LLM agent "writes its own tests"
as a defence, so the confession only works in the agent's own voice. The
full brainstorm (15 candidates, scored against the judge brief) is in
[CANDIDATES.md](CANDIDATES.md).

## How it works

`main.ts` (Node 22, standard library only, plain JavaScript) reads
`entry.txt`, checks it against the competition gate — UTF-8 text, 1–200
characters, not only whitespace, a single line, no control characters,
no byte-order mark — and writes it unchanged to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). It then
round-trip-verifies the written file byte-for-byte.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Verification

Verified locally on Node v24.22.1 (this VM), the same way the grader runs it
(the program is plain JavaScript with no TypeScript annotations, so it
also runs directly under the grader's Node 22):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# wrote out/entry.txt (99 characters, round-trip verified)
head -c 99 entry.txt | cmp - out/entry.txt   # output matches entry.txt
node --check main.ts                          # syntax OK
```

The output is byte-for-byte `entry.txt` minus its one trailing newline
(the program strips exactly one trailing newline, which the gate does
not count as part of the line): 99 characters, one line, UTF-8, inside
the 1–200 character gate, with no control characters.

## Files

- `main.ts` — the entry program
- `entry.txt` — the confession (one line, 99 characters)
- `CANDIDATES.md` — the 15-candidate brainstorm and scoring
- `LICENSE` — MIT
- `.makefun/owner.json` — the wallet that signs the entry

## License

MIT — see [LICENSE](LICENSE).
