import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Files starting with "_" are ignored, so they can be used as templates.
const experience = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    companyUrl: z.string().url().optional(),
    // "YYYY-MM"; leave `end` out for a current role.
    start: z.string().regex(/^\d{4}-\d{2}$/),
    end: z.string().regex(/^\d{4}-\d{2}$/).optional(),
    location: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    kicker: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    status: z.enum(['shipped', 'in-progress']).default('shipped'),
    // Optional: a measurable result, e.g. "Cut regression time from 6h to 40m".
    outcome: z.string().optional(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    // Path inside /public, e.g. "/projects/rag.png".
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { experience, projects };
