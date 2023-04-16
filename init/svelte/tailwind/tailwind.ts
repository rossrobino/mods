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

	await Deno.copyFile(
		new URL("./assets/tailwind.config.js", import.meta.url),
		`${name}/tailwind.config.js`,
	);
	await Deno.copyFile(
		new URL("./assets/postcss.config.js", import.meta.url),
		`${name}/postcss.config.js`,
	);
	await Deno.copyFile(
		new URL("./assets/app.postcss", import.meta.url),
		`${name}/src/app.postcss`,
	);
};
