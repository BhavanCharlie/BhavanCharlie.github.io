# Bhavan Kumar — Portfolio

Portable static version of the portfolio, including the Rouhy experience.
No Node.js installation, build step, server, or API keys are required.
Edit index.html for content and styles.css for appearance.

## Publish on GitHub Pages

1. Open https://github.com/BhavanCharlie/BhavanCharlie.github.io.
2. Download and extract this ZIP. Upload its CONTENTS to the repository root,
   not the ZIP itself or an enclosing folder. Review any existing files before
   replacing them. index.html, styles.css, and favicon.svg must sit together.
3. Commit the files to main.
4. In repository Settings > Pages, choose Deploy from a branch.
5. Select main and / (root), then Save.
6. Wait for the Pages deployment to finish. The site URL will be:
   https://bhavancharlie.github.io/

If Pages is already configured to use GitHub Actions, review its current
workflow before changing its publishing source.
GitHub Free supports Pages from public repositories.

## Push from your computer instead

Clone the existing repository, copy the extracted files into its root, review
any replacements, then run these commands from the cloned repository:

    git add index.html styles.css favicon.svg .nojekyll README.md
    git commit -m "Add portfolio with Rouhy experience"
    git push origin main

The .nojekyll file is hidden on some systems; include it when copying locally.
A plain HTML site also works with GitHub Pages' default processing.

## Other hosting options

Vercel or Cloudflare Pages can deploy these same static files from GitHub.
Select a static/no-framework project and use the repository root as output.

## Scope

This package contains editable static HTML/CSS and the icon. It is a portable
snapshot of the portfolio, not the original React project. Changes made on
GitHub do not automatically update the separately hosted ChatGPT site.

Official setup guide:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
