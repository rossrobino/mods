export const configurePrettier = async (name: string) => {
	const prettierrcFile = await Deno.readTextFile(`./${name}/.prettierrc`);
	const prettierJson = JSON.parse(prettierrcFile);

	prettierJson.plugins.push("prettier-plugin-tailwindcss");
	prettierJson.printWidth = 80;
	prettierJson.trailingComma = "all";

	await Deno.writeTextFile(
		`${name}/.prettierrc`,
		JSON.stringify(prettierJson, null, 4),
	);
};
