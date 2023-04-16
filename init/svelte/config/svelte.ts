import { create } from "../deps.ts";

export const configureSvelte = async (name: string) => {
	await create(name, {
		name,
		template: "skeleton",
		types: "typescript",
		prettier: true,
		eslint: true,
		playwright: false,
		vitest: false,
	});

	await Deno.copyFile(
		new URL("./assets/+layout.svelte", import.meta.url),
		`${name}/src/routes/+layout.svelte`,
	);
};
