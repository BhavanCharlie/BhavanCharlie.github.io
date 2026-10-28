// Everything about you that isn't a job or a project lives here.
// Optional fields set to `null` are hidden on the site until you fill them in.

export const site = {
  name: 'Bhavan Kumar',
  title: 'Software Engineer',
  description:
    'Software engineer and co-founder at Rouhy, building AI-powered products with a deep background in test automation, OTT, connected TV, and CI/CD.',

  // <em> renders in the accent color.
  headline: 'I build software that <em>holds up</em> in production.',
  intro:
    "I'm a software engineer and co-founder at Rouhy, where I work across product architecture, full-stack development, and AI features. Before that, I spent years making streaming apps reliable on Smart TVs, consoles, and the web — so I write code with testing and release in mind from day one.",

  // Put your file at public/resume.pdf, then set this to 'resume.pdf'.
  resume: null as string | null,
  // Put your photo at public/photo.jpg, then set this to 'photo.jpg'.
  photo: null as string | null,
  email: null as string | null,
  location: null as string | null,

  links: {
    github: 'https://github.com/BhavanCharlie',
    linkedin: 'https://www.linkedin.com/in/bhavan-kumar-b694b9162/',
  },

  stats: [
    { value: '4+', label: 'years shipping OTT & connected-TV software' },
    { value: '100+', label: 'automated end-to-end web scenarios' },
    { value: '7', label: 'device & web platforms supported' },
  ],

  about: [
    "I like owning a problem end to end: understanding what users need, picking a sensible architecture, building it, and making sure it keeps working after release.",
    'At Rouhy I build the product with my co-founder — matching, profiles, messaging, and the AI features behind recommendations. My background in quality engineering across streaming platforms and delivery pipelines shapes how I build: small, testable pieces, fast feedback, and no surprises in production.',
    "Right now I'm going deeper on applied GenAI: retrieval systems, evaluation, and agent workflows that make developers faster.",
  ],

  principles: ['Maintainable by design', 'Release impact first', 'AI with human judgment'],

  skills: [
    { group: 'Languages', items: ['Java 21', 'Python'] },
    { group: 'Backend & data', items: ['FastAPI', 'PostgreSQL', 'pgvector', 'REST / GraphQL', 'Docker'] },
    { group: 'AI', items: ['RAG', 'AI agents', 'MCP', 'LLM evaluation'] },
    { group: 'Quality & delivery', items: ['Selenium', 'TestNG', 'Jenkins', 'GitHub Actions', 'Allure', 'TestRail'] },
    { group: 'Domains', items: ['OTT / Connected TV', 'Product architecture', 'Startups'] },
  ],
};
