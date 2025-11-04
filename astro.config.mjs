// @ts-check
import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"~": "./src",
			},
		},
	},
	integrations: [alpinejs({ entrypoint: "./alpine.config" }), react()],
});
