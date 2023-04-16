import { ncu } from "../deps.ts";

export const updateDeps = async (name: string) => {
	await ncu.run({
		packageFile: `${name}/package.json`,
		upgrade: true,
	});
};
