# Firebase Hosting & project URL

## Default domains (`*.web.app` / `*.firebaseapp.com`)

Firebase always serves your site on **exactly two default hostnames**, both derived from the **project ID** (not the display name):

- `https://<PROJECT_ID>.web.app`
- `https://<PROJECT_ID>.firebaseapp.com`

So if the project ID is `ai-notre`, you will see **`ai-notre.web.app`** and **`ai-notre.firebaseapp.com`**. If you still see **`joseph-ai-website.web.app`**, you are either viewing the **old** project in the console or the **project ID** was never changed to `ai-notre` (display-name-only “rename” does not change URLs). Create or select the project whose ID is `ai-notre` to get the new URLs.

## Can I rename an existing Firebase project to `ai-notre`?

**No.** Google Cloud / Firebase **project IDs are permanent** once created. You cannot rename `joseph-ai-website` (or any other ID) to `ai-notre`.

To get a default hosting URL like **`https://ai-notre.web.app`**:

1. In [Firebase Console](https://console.firebase.google.com/), **Add project** and choose project ID **`ai-notre`** (must be globally unique; if taken, try `ai-notre-site`, etc.).
2. Enable **Hosting** for that project.
3. On your machine: `firebase login` then `firebase use --add` and select the new project (or rely on `.firebaserc` in this repo, which targets **`ai-notre`**).
4. Deploy: `npm run deploy` (runs `next build` + `firebase deploy`).

## Custom domain (optional)

You can also keep any Firebase project ID and map **`www.ai-notre.com`** (or similar) in Hosting → Custom domains—often better for brand than `.web.app` alone.

## Until the new project exists

If `ai-notre` is not created yet, `firebase deploy` will fail. Either create the project as above or temporarily point `.firebaserc` `default` back to a project you already have access to.
