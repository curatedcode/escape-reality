import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const blogPostsCategories = z.object({
	name: z.enum([
		"Tips & Tricks",
		"Behind the Scenes",
		"Team Building",
		"Industry Insights",
		"Events",
	]),
	count: z.number(),
});

export const blogPostSchema = z.object({
	id: z.number(),
	title: z.string().min(1),
	excerpt: z.string().min(1),
	image: z.string().min(1),
	category: blogPostsCategories.shape.name,
	author: z.string().min(1),
	date: z.string().min(1),
	readTime: z.string(),
	tags: z.array(z.string()),
});

/**
 * @typedef {Object} BlogPost
 * @property {number} id - Unique identifier for the blog post
 * @property {string} title - The blog post title
 * @property {string} excerpt - A short summary of the post
 * @property {string} image - URL to the cover image
 * @property {string} category - Category of the blog post (e.g. recipes, events)
 * @property {string} author - Author's name
 * @property {string} date - Publication date
 * @property {string} readTime - Estimated time to read
 * @property {array} tags - Keywords about content for relation functionality
 */
const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
	schema: blogPostSchema,
});

export const collections = { blog };
