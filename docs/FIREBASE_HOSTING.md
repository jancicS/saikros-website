# Firebase Hosting & project URL

## Default domains (`*.web.app` / `*.firebaseapp.com`)

Firebase always serves your site on **exactly two default hostnames**, both derived from the **project ID** (not the display name):

- `https://<PROJECT_ID>.web.app`
- `https://<PROJECT_ID>.firebaseapp.com`

So if the project ID is `my-app`, you will see **`my-app.web.app`** and **`my-app.firebaseapp.com`**. **Renaming the display name** (e.g. to “AI Notre”) does **not** change the project ID or these URLs.

This repo deploys to project ID **`joseph-ai-website`** (display name may show as “ai-notre” in `firebase projects:list`). Default sites: **`joseph-ai-website.web.app`** and **`joseph-ai-website.firebaseapp.com`**. To get `ai-notre.web.app`, you would need a **new** Firebase project whose **project ID** is literally `ai-notre` (if available), or use a **custom domain**.

## Can I rename an existing Firebase project to `ai-notre`?

**No.** Google Cloud / Firebase **project IDs are permanent** once created. You cannot rename `joseph-ai-website` (or any other ID) to `ai-notre`.

To get a default hosting URL like **`https://ai-notre.web.app`**:

1. In [Firebase Console](https://console.firebase.google.com/), **Add project** and choose project ID **`ai-notre`** (must be globally unique; if taken, try `ai-notre-site`, etc.).
2. Enable **Hosting** for that project.
3. On your machine: `firebase login` then `firebase use --add` and select the new project (or update `.firebaserc` `default` to that project ID).
4. Deploy: `npm run deploy` (runs `next build` + `firebase deploy`).

## Custom domain (optional)

You can keep project ID `joseph-ai-website` and map **`www.ai-notre.com`** (or similar) in Hosting → Custom domains—often the best brand URL.

## This repo’s default target

`.firebaserc` uses **`joseph-ai-website`** so deploy matches the project shown in `firebase projects:list` (display name “ai-notre”, ID `joseph-ai-website`).
