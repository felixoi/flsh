import { build } from "esbuild";

await build({
    entryPoints: ["src/index.ts"],
    outExtension: { ".js": ".mjs" },
    outdir: "dist",
    target: "esnext",
    format: "esm",
    logLevel: "info",
    bundle: true,
    sourcemap: true,
    minifySyntax: true
});
