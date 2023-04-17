import { addTailwind } from "./tailwind/tailwind.ts";
import { configurePrettier } from "./prettier/prettier.ts";
import { updateDeps } from "./ncu/ncu.ts";
import { create } from "./deps.ts";

const name = String(prompt("Enter project name:") ?? "newSvelteApp");

await create(name, {
	name,
	template: "skeleton",
	types: "typescript",
	prettier: true,
	eslint: true,
	playwright: false,
	vitest: false,
});

await addTailwind(name);
await configurePrettier(name);
await updateDeps(name);

// install all packages
const install = Deno.run({
	cmd: [
		"npm",
		"--prefix",
		`./${name}`,
		"i",
	],
});
await install.status();

// format project
const format = Deno.run({
	cmd: [
		"npm",
		"--prefix",
		`./${name}`,
		"run",
		"format",
	],
});
await format.status();
