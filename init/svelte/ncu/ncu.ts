import { ncu } from "../deps.ts";

/**
 * - updates node dependencies with ncu package
 *
 * @param name - name of project folder
 */
export const updateDeps = async (name: string) => {
	await ncu.run({
		packageFile: `./${name}/package.json`,
		upgrade: true,
	});
};
