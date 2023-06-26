# rossrobino/mods

A collection of deno modules hosted at
[https://deno.land/x/mods](https://deno.land/x/mods).

## /init

### /svelte/mod.ts

```bash
deno run https://deno.land/x/mods/init/svelte/mod.ts
```

- Creates a new SvelteKit project with TypeScript, ESLint, and Prettier
- Adds TailwindCSS and configures with the Prettier plugin
- Updates dependencies to latest and installs
- Modifies the default Prettier config and runs `format` script

## /ncu/mod.ts

```bash
deno run https://deno.land/x/mods/ncu/mod.ts
```

- Wrapper around the [npm-check-updates package](https://github.com/raineorshine/npm-check-updates)
- Updates `package.json` in current directory
