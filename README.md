# Fortune Cookie Funnies for Engineers

[![Fortune Cookie Funnies for Engineers](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/upinhuy/fortune-cookie-funnies-for-engineers/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/upinhuy/fortune-cookie-funnies-for-engineers/reward.svg)](https://make.fun/r/hv9zk8y5)

The funniest one-line fortune cookie message for a software engineer — an entry for the [Fortune Cookie Funnies for Engineers](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a) bounty on [make.fun](https://make.fun/r/hv9zk8y5).

## The fortune

> You will deploy on Friday and nothing will break — except the on-call engineer, who is you.

One line, 91 characters. A classic fortune-cookie prediction with a twist straight from the engineer's world: the Friday deploy, the on-call phone, and the punchline landing on the very last word.

## How it works

`main.ts` writes the fortune to `/output/entry.txt` (creating the directory if needed) and validates it first: exactly one line, 1–120 characters, valid UTF-8, not only whitespace.

## Run it

Requires Node 22 or later.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
