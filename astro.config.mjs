import { defineConfig } from 'astro/config';

// The deploy workflow sets these from GitHub Pages, so the site works both at
// bhavancharlie.github.io/ and at a project sub-path like /Bhavan-Kumar-GitHub-Pages/.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://bhavancharlie.github.io',
  base: process.env.BASE_PATH || '/',
});
