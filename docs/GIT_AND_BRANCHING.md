# Git workflow for Saikros website

This repository uses **long-lived branches** so changes stay reviewable and safe. You can edit content and small UI tweaks yourself by following this flow.

## Branches (what each one is for)

| Branch | Purpose |
|--------|---------|
| **`production`** | Matches what is **live** (e.g. Firebase Hosting). Only merge here when you are ready to release. Keep it stable. |
| **`stage`** | **Pre-production / QA.** Merge here to test on a staging URL or local build before going live. |
| **`dev`** | **Integration branch.** Day-to-day work merges here first. Features are combined and tested together before `stage`. |
| **`main`** | **Default branch on GitHub.** In this project it tracks the same lineage as `production` unless your team agrees otherwise—treat merges to `main`/`production` as releases. |

> If your hosting (Firebase) deploys from a specific branch, note which one in your own runbook and align these names with that.

## Golden rules

1. **Never commit directly to `production` or `stage`.** Use pull requests (PRs) so changes are visible and reversible.
2. **One branch per change or feature** (e.g. `feature/hero-copy`, `fix/contact-email`, `content/services-copy`).
3. **Always branch from the right base:**
   - New work that should eventually ship: branch from **`dev`** (or `stage` if you only fix staging—ask your lead if unsure).
4. **Merge direction (typical flow):**

   ```text
   feature/your-update  →  (PR)  →  dev
   dev                  →  (PR)  →  stage   [QA / preview]
   stage                →  (PR)  →  production  [go live + deploy]
   ```

5. **Pull before you branch:** `git checkout dev && git pull` so you start from the latest code.

## Step-by-step: making an update (example)

Replace `your-name` and branch names as you like.

### 1. Clone (first time only)

```bash
git clone https://github.com/jancicS/saikros-website.git
cd saikros-website
```

### 2. Fetch all branches

```bash
git fetch origin
```

### 3. Start from `dev`

```bash
git checkout dev
git pull origin dev
```

### 4. Create a **new branch** for your change

Use a clear prefix:

- `feature/` — new behavior or section
- `fix/` — bugfix
- `content/` — copy, images, text-only

```bash
git checkout -b content/update-hero-headline
```

### 5. Edit, then commit locally

```bash
git status          # see what changed
git add -p          # or git add <files> — review chunks before staging
git commit -m "Content: clarify hero headline"
```

Write commits in **present tense**, short subject line, optional body for "why".

### 6. Push your branch to GitHub

```bash
git push -u origin content/update-hero-headline
```

### 7. Open a Pull Request on GitHub

- **Base:** `dev` (not `production`).
- **Compare:** your branch.
- Describe what changed and how to verify (e.g. "Run `npm run dev`, check hero on home").

After review/approval, **merge into `dev`**. Delete the remote branch when GitHub offers—keeps the repo tidy.

### 8. Promote toward production (when ready)

- Open **dev → stage** PR for QA.
- After staging looks good, open **stage → production** PR, merge, then **deploy** (e.g. `npm run deploy` to Firebase from the `production` commit).

## Where to edit the site (high level)

- **Page layout & sections:** `components/landing/` (e.g. `Hero.tsx`, `Services.tsx`, `Portfolio.tsx`).
- **Global styles / tokens:** `app/globals.css`, `tailwind.config.ts`.
- **Site metadata:** `app/layout.tsx`.
- **Firebase Hosting output:** static export goes to `out/` after `npm run build` (see `firebase.json`).

Always run **`npm run build`** locally before merging to `stage` or `production` so TypeScript and Next.js errors surface early.

## If something goes wrong

- **Revert a merge:** on GitHub, use "Revert" on the merged PR, or `git revert <merge-commit-sha>`.
- **Wrong base branch:** close the PR and open a new one with base `dev`.
- **Conflicts:** pull latest `dev`, merge or rebase into your feature branch, resolve files, push again.

## Quick reference

```bash
git checkout dev && git pull
git checkout -b feature/my-change
# … edit …
git add . && git commit -m "feat: describe change"
git push -u origin feature/my-change
# → open PR: feature/my-change → dev
```

Questions about release timing or branch protection should go to the project owner (repository admin).
