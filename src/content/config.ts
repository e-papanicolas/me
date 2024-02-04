import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      date: z.date(),
      tag: z.array(z.string()),
      github: z.string(),
      isWIP: z.boolean().optional(),
      website: z.string().optional(),
    }),
});

const settings = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      sitename: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      logo: image().optional(),
      keywords: z.array(z.string()).optional(),
      project_tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
  projects: projectsCollection,
  settings,
};
