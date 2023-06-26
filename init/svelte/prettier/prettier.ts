/**
 * - configures prettier with custom options
 *
 * @param name - name of the project folder
 */
export const configurePrettier = async (name: string) => {
	console.log("- Configuring prettier");

	const prettierrcFile = await Deno.readTextFile(`./${name}/.prettierrc`);
	const prettierJson = JSON.parse(prettierrcFile);

	prettierJson.printWidth = 80;
	prettierJson.trailingComma = "all";
	prettierJson.singleQuote = false;

	await Deno.writeTextFile(
		`./${name}/.prettierrc`,
		JSON.stringify(prettierJson, null, 4),
	);
};
