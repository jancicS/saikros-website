# Git branching and safe updates (Saikros website)

This repository uses **long-lived environment branches** so changes are reviewed and promoted in order, not edited directly on production.

## Branches

| Branch        | Purpose |
|---------------|---------|
| **`main`**    | Default branch on GitHub. Keep it **stable** and deployable. Treat merges here as “ready for production” unless you use `production` as the final gate (see below). |
| **`dev`**     | **Integration branch.** Day-to-day work merges here first. Deploy to a **development** Firebase channel or preview URL if you use one. |
| **`stage`**   | **Staging / QA.** Only receives merges from `dev` after a feature set is ready to test. Deploy to a **staging** Firebase site or channel. |
| **`production`** | **Release line.** Only receives merges from `stage` after sign-off. This branch should match what you consider **live** for the public site. |

You can also map this to Firebase Hosting [preview channels](https://firebase.google.com/docs/hosting/test-preview-deploy) (e.g. `dev` → preview, `stage` → staging, `production` → default site).

## Golden rules

1. **Never commit directly to `production` (or `stage`)** unless it is an emergency hotfix—and even then, open a PR and document it.
2. **One topic per branch.** Each change (feature, fix, copy tweak) gets its **own branch** off the right base (usually `dev`).
3. **Use pull requests (PRs).** Merge via GitHub PRs so there is a record, review, and CI (if you add it later).
4. **Pull before you branch.** `git checkout dev && git pull` then create your branch so you start from current code.

## Workflow for a normal change

### 1. Start from `dev`

```bash
git checkout dev
git pull origin dev
```

### 2. Create a dedicated branch

Use a clear prefix and short description:

```bash
git checkout -b feature/update-hero-copy
# or
git checkout -b fix/portfolio-card-overlap
# or
git checkout -b chore/bump-dependencies
```

Naming examples:

- `feature/…` — new behavior or UI
- `fix/…` — bugfix
- `chore/…` — tooling, config, deps
- `content/…` — text/media only

### 3. Work and commit locally

```bash
git add .
git commit -m "Describe the change in one sentence"
```

Use small, logical commits when possible.

### 4. Push your branch and open a PR

```bash
git push -u origin feature/update-hero-copy
```

On GitHub: **Compare & pull request** → target branch **`dev`** (not `main`/`production` unless agreed).

### 5. After review, merge into `dev`

Squash merge keeps history clean; merge commit preserves every commit—pick what the team prefers.

### 6. Promote through the line

When a batch is ready for QA:

1. Open **PR: `dev` → `stage`**, merge after checks.
2. Test on staging.
3. Open **PR: `stage` → `production`**, merge when ready to go live.

Then deploy Firebase (or your host) from the branch that matches that environment.

## Emergency hotfix on production

1. Branch from `production`: `git checkout production && git pull && git checkout -b fix/hotfix-description`
2. Fix, commit, push, PR **into `production`**.
3. Merge, deploy, then **backport** the same fix into `dev` and `stage` (cherry-pick or a small PR) so branches do not diverge.

## First-time clone

```bash
git clone https://github.com/jancicS/saikros-website.git
cd saikros-website
npm install
npm run dev
```

Build and deploy (requires Firebase CLI login and project access):

```bash
npm run deploy
```

## Summary

- **Daily work:** branch off `dev` → PR → `dev`.
- **QA:** `dev` → `stage`.
- **Live:** `stage` → `production` → deploy.

Following this keeps the site safe to change without risking the live version on every edit.
