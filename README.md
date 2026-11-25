# Midnight Fridge Roast — make.fun entry

[![make.fun](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/zxpast/makefun-midnight-fridge-roast/rank.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/zxpast/makefun-midnight-fridge-roast/reward.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

One-line roast of a smart fridge that refuses to open after midnight, for the
[Midnight Fridge Roast](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
competition on make.fun.

## Entry

> At midnight my fridge filed a restraining order against me and kept my leftovers as evidence.

93 characters, one line.

## How it works

`main.ts` (Node 22, stdlib only, deterministic, no network) writes the roast to
`/output/entry.txt`:

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — entrypoint, writes the one-line roast to `/output/entry.txt`
- `CANDIDATES.md` — all candidates + originality checks (O1–O4)
- `LICENSE` — MIT

## License

MIT — see [LICENSE](LICENSE).
