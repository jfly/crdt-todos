import { makeConfig } from "@saflib/vite";
import { htmlHeaderPlugin } from "./html-header-plugin.ts";
import path from "path";
import { validateEnv } from "@saflib/env";
import envSchema from "./env.schema.combined.json" with { type: "json" };
import wasm from "vite-plugin-wasm";

validateEnv(process.env, envSchema);
const monorepoRoot = path.resolve(import.meta.dirname, "../..");

export default makeConfig({
  plugins: [htmlHeaderPlugin(), wasm()],
  vuetifyOverrides: "./overrides.scss",
  monorepoRoot,
});
