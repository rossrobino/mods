const appPostCss = `@tailwind base;
@tailwind components;
@tailwind utilities;
`;

const postCssConfig = `/** @type {import("postcss-load-config").Config} */
export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
};
`;

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
`;

const layout = `<script lang="ts">
	import "../app.postcss";
</script>

<main><slot /></main>
`;

/**
 * - Installs required dependencies
 * - Creates config files
 * - Adds TailwindCSS prettier plugin
 * - Adds a root +layout.svelte page
 *
 * @param name - name of the project folder
 */
export const addTailwind = async (name: string) => {
	console.log("- Adding TailwindCSS");

	// install dependencies
	await new Deno.Command("npm", {
		args: [
			"--prefix",
			`./${name}`,
			"i",
			"-D",
			"--package-lock-only",
			"tailwindcss",
			"postcss",
			"autoprefixer",
			"prettier-plugin-tailwindcss",
		],
	}).output();

	// create config files
	await Deno.writeTextFile(`./${name}/src/app.postcss`, appPostCss);
	await Deno.writeTextFile(`./${name}/postcss.config.js`, postCssConfig);
	await Deno.writeTextFile(`./${name}/tailwind.config.js`, tailwindConfig);

	// add prettier plugin
	const prettierrcFile = await Deno.readTextFile(`./${name}/.prettierrc`);
	const prettierJson = JSON.parse(prettierrcFile);
	prettierJson.plugins.push("prettier-plugin-tailwindcss");
	await Deno.writeTextFile(
		`./${name}/.prettierrc`,
		JSON.stringify(prettierJson, null, 4),
	);

	// create root +layout.svelte
	await Deno.writeTextFile(`./${name}/src/routes/+layout.svelte`, layout);
};
