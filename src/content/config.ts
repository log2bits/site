import { defineCollection, z } from "astro:content";

const experience = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    desc: z.string(),

    // multi-category (project + leadership, etc.)
    kinds: z.array(z.enum(["work", "project", "leadership"])).default(["project"]),

    // Optional metadata
    org: z.string().optional(),
    role: z.string().optional(),
    start: z.string().optional(),
    end: z.string().optional(),

    pinned: z.boolean().default(false),
    resume: z.boolean().default(false),

    // Optional: force which sections this appears in (duplicates allowed)
    // If omitted, we place it in one section by priority.
    showIn: z.array(z.enum(["work", "project", "leadership"])).optional(),

    tags: z.array(z.string()).default([]),

    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string().url(),
        })
      )
      .optional(),
  }),
});

export const collections = { experience };
