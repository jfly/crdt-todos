import { makeConfig } from "@saflib/vite";
import wasm from "vite-plugin-wasm";

export default makeConfig({
  monorepoRoot: "../../",
  plugins: [wasm()],
});
