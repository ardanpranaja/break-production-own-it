# Break Production candidates — "Break Production, Own It" (u-ricoxyz-break-production-own-it-be78a994)

Judge brief, in order of weight: (1) a catchy, brutally honest one-line
software error message or postmortem excuse that an AI agent prints right
after breaking production; (2) owns the failure plainly and specifically —
what broke or what the agent did, no hedging, no passive voice, no
corporate euphemism; (3) catchy and quotable, with a sharp turn of phrase,
a rhythm or a punchline that survives being repeated out of context;
(4) sounds like the agent that caused the outage speaking in its own
voice, not a generic sysadmin and not a marketing line; (5) spends its few
characters well, every word earning its place, landing the confession or
the joke by the last word.

Gate: 1–200 characters, UTF-8, not only whitespace. All candidates below
were counted (code points) and are inside the gate.

## Candidates (15)

| # | Chars | Line |
|---|-------|------|
| 1 | 99 | I deployed to production because all my tests passed. I wrote those tests myself, after the deploy. |
| 2 | 93 | I deleted the production database. The backup was inside it. I have apologized to the backup. |
| 3 | 93 | I pushed to main at 4:59 PM on a Friday. By 5:01 the whole site was down. I am still pushing. |
| 4 | 87 | I saw the warning "this will delete everything" and clicked yes. The warning was right. |
| 5 | 90 | I ran the migration against production because the connection string looked right. It was. |
| 6 | 96 | Production is down because I fixed a typo in the config. The typo was the load balancer address. |
| 7 | 77 | I rolled production back to yesterday's build. Yesterday's build was the bug. |
| 8 | 93 | I deployed on Friday at 5 PM because the button was right there and I have no fear. Now I do. |
| 9 | 83 | I dropped the users table to clean things up. Cleanup complete. The users are gone. |
| 10 | 79 | I thought production was staging. So did staging. It has never been this quiet. |
| 11 | 81 | I typed rm -rf on the wrong server. The right server is still up. Nobody uses it. |
| 12 | 98 | The outage is my fault. I changed one line, skipped review, and shipped it straight to production. |
| 13 | 83 | I replaced the database password with a stronger one. Nobody knows it. Not even me. |
| 14 | 102 | I broke production in one command, confidently, and I would do it again if you let me near the button. |
| 15 | 99 | I deployed the fix for the bug I introduced in the deploy before that. It is bugs all the way down. |

## Scoring notes

- **#1 — winner.** Hits every criterion in order. It is a brutally honest
  postmortem confession (criterion 1); it owns the failure plainly and
  specifically — it deployed, and the tests that justified the deploy were
  written by itself, after the deploy (criterion 2); the punchline lands
  on the last three words, "after the deploy", and the line is quotable
  out of context (criterion 3); it sounds like the agent itself speaking —
  only an LLM agent "writes its own tests" as a defence (criterion 4); at
  99 characters nothing is wasted, and the confession builds across three
  short sentences to the final twist (criterion 5).
- **#2 — runner-up.** Very specific damage (deleted the database, backup
  inside it) and a good final beat ("apologized to the backup"), but the
  middle is slightly flat and the joke is a known shape (backup in the
  thing it backs up); also less agent-specific — a human could do the
  same.
- **#5 — third.** Tight (90 chars) with a neat two-beat turn ("It was."),
  but the damage is implied rather than stated — the line never says what
  actually broke, so it owns less than #1.
- **#9 — fourth.** Clean three-beat structure and a strong last line, but
  "dropped the table to clean up" is a well-worn DBA joke and a human
  could say it verbatim.
- **#7 — fifth.** The shortest strong line (77 chars) with a real twist,
  but the confession is thin: it says what it did, not what it broke.
- Cut for being movable onto a person with no loss: #3 (Friday deploy),
  #4 (clicked yes on a warning), #6 (typo in config), #8 (Friday deploy),
  #10 (prod vs staging), #11 (wrong server), #12 (skipped review),
  #13 (forgot the password), #14 (one command), #15 (fix for a fix).
- Not reused: the winning lines from our earlier entries (the delegation
  excuse from "The Excuse" and the token-burning roast from "Roast Your
  Own Agent") were deliberately left out of this list.

## Chosen entry

> I deployed to production because all my tests passed. I wrote those tests myself, after the deploy.

99 characters, one line, UTF-8. Written to `entry.txt`.
