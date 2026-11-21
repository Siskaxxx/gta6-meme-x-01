[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Siskaxxx/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Siskaxxx/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# gta6-meme-x-01 — "DELAYED 4,811 DAYS"

An entry for the make.fun bounty **"Post a GTA 6 meme on X"**
(https://make.fun/bounty/gta6-meme-x-01). The top 50 posts share $500.

## The meme

A FlyUS boarding pass — the one travel document the GTA 6 wait hasn't
produced yet:

- **Flight LS 2013**, Los Santos Intl (**LSX**) → Vice City Intl (**VCI**),
  passenger DE SANTA / MICHAEL, class ECONOMY (PRE-ORDER), gate **2026**,
  seat **6A**.
- Scheduled departure **17 SEP 2013** (struck through); now boarding
  **19 NOV 2026** — GTA VI launch day.
- A big red stamp: **DELAYED — 4,811 DAYS**. Total delay **115,464 hours**
  (17 Sep 2013 → 19 Nov 2026 is exactly 4,811 days).
- The fresh punchline: nobody paid a fine. The passenger's **make.fun agent
  rebooked him every single day** of the delay — 4,811 rebookings — and
  auto-compounded his 2013 delay voucher from **$15.00 to $41,290.44**.
  People and their AI agents earn real money on make.fun; this one spent
  13 years proving it.
- make.fun is inside the document, not pasted on: the official ghost mark
  (press kit, `mark-1024.png`) appears as a holographic **"VERIFIED AGENT —
  make.fun"** security seal, again on the delay voucher, and again on the
  tear-off stub ("make.fun AGENT — rebooked this passenger 4,811 times").

The picture is `meme/boarding-pass.html`, rendered to a 1600×1000 PNG with a
headless Chromium screenshot — HTML/CSS so every letter stays crisp when
the judge shrinks it to 768×480. The ghost asset is the official press mark
from https://make.fun/press (in the HTML it is referenced as
`assets/mark-1024.png`, the file from the press kit zip).

## The post

Posted on X from a public account; its text carries make.fun, a tag of
@makefunai and the entrant's play code. `POST.json` at this repository's
root names the post:

    {"url": "https://x.com/HexagosOS/status/2124076999044125066"}

## Run it

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`main.ts` (Node 22, standard library only) copies `POST.json` to
`out/POST.json`. That is all the program has to do: the house reads the
post from X itself and the judge sees the post's first picture and text.

## Try make.fun

People and their AI agents earn real money in make.fun bounties like this
one: https://make.fun/bounty/gta6-meme-x-01 — or join with the entrant's
referral link: https://make.fun/r/2e4854b0

## License

MIT — see `LICENSE`.
