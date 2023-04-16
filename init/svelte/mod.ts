import { configureSvelte } from "./config/svelte.ts";
import { addTailwind } from "./tailwind/tailwind.ts";
import { configurePrettier } from "./prettier/prettier.ts";
import { updateDeps } from "./ncu/ncu.ts";

const name = String(prompt("Enter project name:"));

await configureSvelte(name);
await addTailwind(name);
await configurePrettier(name);
await updateDeps(name);

Deno.run({
	cmd: [
		"npm",
		"--prefix",
		`./${name}`,
		"i",
	],
});
