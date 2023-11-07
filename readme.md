# next-mikro-orm-minify-issue

This repository demonstrates class names minification issues in projects with Next.js and Mikro ORM

## Reproduction

1. Clone this repository
2. Install dependencies via `pnpm i`
3. Create database and schema with `pnpm mikro-orm-esm database:create && pnpm mikro-orm-esm schema:update -r`
4. Run `pnpm build`

On the last step, the `build` script fails with following error:


```
MetadataError: Duplicate entity names are not allowed: p
```

As you can see Mikro ORM complains about duplicate entity names. But why, if there's no entities with the same name?

If you look at the console, you'll see that this is actually the case - some of two classes in bundle have the same name, but in the source code they have different names (`Post` and `InvitationCode`).
Also, you can notice that half of the classes have their original names.
From the looks of it, this happens because they don't have decorators on them.
If you uncomment `Entity` decorator in [`src/db/entities/Record.ts`](https://github.com/octet-stream/next-mikro-orm-minify-issue/blob/ad5dc2c2dee5f59d69a27efdd6b8034bb237418e/src/server/db/entities/Record.ts#L8) (just uncomment lines 3 and 8) file and run `pnpm build` again - you can clearly see that.
