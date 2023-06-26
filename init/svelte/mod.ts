import { addTailwind } from "./tailwind/tailwind.ts";
import { configurePrettier } from "./prettier/prettier.ts";
import { updateDeps } from "../../ncu/ncu.ts";
import { create } from "npm:create-svelte";

const name = prompt("\nEnter project name:") ?? "newSvelteApp";

console.log("\n- Creating project: " + name);
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

console.log("- Installing packages");
await new Deno.Command("npm", {
	args: ["--prefix", `./${name}`, "i"],
}).output();

console.log("- Formatting");
await new Deno.Command("npm", {
	args: ["--prefix", `./${name}`, "run", "format"],
}).output();

console.log("- Complete\n");
