# Bhavan Kumar — Portfolio

A personal portfolio site built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run it locally

Requires Node.js 20.3 or newer.

    npm install
    npm run dev        # http://localhost:4321

## Editing content

| What                                      | Where                         |
| ----------------------------------------- | ----------------------------- |
| Name, intro, stats, about, skills, links  | `src/data/site.ts`            |
| Jobs (one Markdown file per role)         | `src/content/experience/`     |
| Projects (one Markdown file per project)  | `src/content/projects/`       |
| Résumé PDF, photo, project screenshots    | `public/`                     |
| Colors, fonts, layout                     | `src/styles/global.css`       |

- **Add a job:** copy `src/content/experience/_template.md` to a new file without the `_`.
  Jobs are sorted newest first by `start`.
- **Add a project:** copy any file in `src/content/projects/`. `order` controls position.
  Optional fields: `outcome`, `repo`, `demo`, `image`, `status: in-progress`.
- **Hide something without deleting it:** add `draft: true`.
- **Résumé / photo / email:** set them in `src/data/site.ts`. They stay hidden while `null`.

If a field is missing or malformed, `npm run build` fails with a message naming the file.

## Deploying

Pushing to `main` builds and deploys the site through `.github/workflows/deploy.yml`.

One-time setup: in the repository on GitHub, open **Settings → Pages** and set
**Source** to **GitHub Actions**.

The workflow reads the site URL and base path from GitHub Pages, so the site works
both at `https://bhavancharlie.github.io/Bhavan-Kumar-GitHub-Pages/` and, if you move it
to a repository named `BhavanCharlie.github.io`, at `https://bhavancharlie.github.io/`.
