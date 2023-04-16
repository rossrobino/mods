import { path } from "../deps.ts";

export const addTailwind = async (name: string) => {
	const installPackages = [
		"npm",
		"--prefix",
		`./${name}`,
		"i",
		"-D",
		"tailwindcss",
		"postcss",
		"autoprefixer",
		"prettier-plugin-tailwindcss",
	];

	const process = Deno.run({ cmd: installPackages });
	await process.status();

	const dir = path.dirname(import.meta.url);
	const tailwindConfig = path.fromFileUrl(
		path.join(dir, "assets/tailwind.config.js"),
	);
	const postCssConfig = path.fromFileUrl(
		path.join(dir, "assets/postcss.config.js"),
	);
	const appCss = path.fromFileUrl(path.join(dir, "assets/app.postcss"));

	await Deno.copyFile(
		tailwindConfig,
		`${name}/tailwind.config.js`,
	);
	await Deno.copyFile(
		postCssConfig,
		`${name}/postcss.config.js`,
	);
	await Deno.copyFile(
		appCss,
		`${name}/src/app.postcss`,
	);
};
