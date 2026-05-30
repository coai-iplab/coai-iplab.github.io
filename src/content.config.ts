import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    affiliation: z.string(),
    link: z.string().default('#'),
    category: z.enum(['Principal Investigator', 'PhD Students', 'Bachelor Students', 'Collaborators', 'Past Visitors', 'Alumni']),
    color: z.string().default('#1b285c'),
    image: z.string().optional(),
    profile: z.string().optional(),
    alumni: z.boolean().default(false),
    years: z.string().optional(),
    notes: z.string().optional(),
  })
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.union([z.string(), z.number()]).transform(val => String(val)),
    pub_type: z.string().default('conference'),
    teaser: z.string().optional(),
    related: z.string().optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional().default([]),
    bibtex: z.string().optional(),
    active: z.boolean().default(true),
    award: z.string().optional(),
    research_line: z.union([z.string(), z.array(z.string())]).optional(),
  })
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    date: z.coerce.string(),
    type: z.string(),
    icon: z.string(),
    color: z.string(),
    title: z.string(),
  })
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    icon: z.string(),
    color: z.string(),
    title: z.string(),
  })
});

const engagements = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/engagements" }),
  schema: z.object({
    date: z.string(),
    type: z.string(),
    title: z.string(),
    venue: z.string(),
    slides: z.string().optional(),
    upcoming: z.boolean().default(false),
    speaker: z.string(),
    speakerId: z.string(),
    mediaCard: z.string().optional(),
  })
});

const home = defineCollection({
  loader: glob({ pattern: "index.md", base: "./src/content/home" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
});

const contact = defineCollection({
  loader: glob({ pattern: "index.md", base: "./src/content/contact" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    email: z.string(),
    website: z.string(),
  })
});

const missionVision = defineCollection({
  loader: glob({ pattern: "index.md", base: "./src/content/mission-vision" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    whoWeAre: z.string(),
    visionMain: z.string(),
    visionResearch: z.string(),
    perceptionMemoryDesc: z.string(),
    tasksSkillsDesc: z.string(),
    assistanceInteractionDesc: z.string(),
    methodologyValues: z.string(),
  })
});

const fundedProjects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/funded-projects" }),
  schema: z.object({
    title: z.string(),
    funding: z.string(),
    period: z.string(),
    role: z.enum(['Principal Investigator', 'Joint Leadership']),
    partners: z.string().optional(),
    description: z.string(),
    link: z.string().optional(),
    priority: z.number().default(0),
  })
});

const sessionSchema = z.object({
  date: z.string(),
  time: z.string(),
  type: z.enum(['Oral', 'Poster']),
  venue: z.string(),
  venueUrl: z.string().optional(),
  room: z.string(),
  presenters: z.array(z.string()),
  presenterIds: z.array(z.string()).optional(),
});

const mediaPresence = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/media-presence" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    event: z.string(),
    date: z.string(),
    talks: z.array(z.object({
      type: z.string(),
      title: z.string(),
      presenter: z.string(),
      presenterIds: z.array(z.string()).optional(),
      workshop: z.string(),
      workshopUrl: z.string().optional(),
      time: z.string(),
      room: z.string(),
      date: z.string(),
    })).optional().default([]),
    papers: z.array(z.object({
      title: z.string(),
      sessions: z.array(sessionSchema),
    })).optional().default([]),
  })
});

export const collections = {
  home,
  team,
  publications,
  news,
  projects,
  engagements,
  contact,
  missionVision,
  fundedProjects,
  mediaPresence,
};
