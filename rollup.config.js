import { defineConfig } from "rollup";

export default defineConfig({
  input: "./lib/index.js",
  output: [
    {
      file: "./lib/index.cjs",
      format: "cjs",
      exports: "auto",
    },
    {
      file: "./lib/index.esm.js",
      format: "esm",
      exports: "auto",
    },
    {
      file: "./lib/index.umd.js",
      format: "umd",
      exports: "auto",
      name: "heyDad",
    },
  ],
});
