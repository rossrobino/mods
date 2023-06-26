import { run } from "npm:npm-check-updates";

/**
 * - Updates the dependencies of the node project with the ncu package
 * 
 * @param name - name of the project directory, if blank, current directory is used
 */
export const updateDeps = async (name?: string) => {
	console.log("- Updating dependencies");

	const packageFile = name ? `./${name}/package.json` : "./package.json";

	await run({ packageFile, upgrade: true });
};
