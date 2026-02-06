import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    desc: z.string(),

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

export const collections = { projects };
