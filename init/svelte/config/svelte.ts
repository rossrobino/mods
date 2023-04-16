import { create, path } from "../deps.ts";

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

	const dir = path.dirname(import.meta.url);
	const fileUrl = path.join(dir, "assets/+layout.svelte");
	const filePath = path.fromFileUrl(fileUrl);

	await Deno.copyFile(
		filePath,
		`${name}/src/routes/+layout.svelte`,
	);
};
