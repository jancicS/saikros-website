# AI Notre website

Next.js (App Router) marketing site, static export + Firebase Hosting.

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run build   # output: out/
npm run deploy  # build + firebase deploy
```

Firebase **project ID** (used for deploy and default `*.web.app` URLs) is in `.firebaserc` — currently **`joseph-ai-website`** (display name in the console may be “ai-notre”). See [docs/FIREBASE_HOSTING.md](./docs/FIREBASE_HOSTING.md) for URLs and custom domains.

Brand source exports from the client live in **`ai notre/`**; deployable logos are copied under **`public/ai-notre-*.png`**.

## Git branches & safe updates

**Read this first if you are editing the repo:** [docs/GIT_AND_BRANCHING.md](./docs/GIT_AND_BRANCHING.md)

Long-lived branches: **`dev`**, **`stage`**, **`production`** (plus **`main`** as the default integration line on GitHub). Use a **new branch per change** and open pull requests—never pile unrelated edits on one branch.

## Repo

Maintained under [`jancicS/saikros-website`](https://github.com/jancicS/saikros-website).
