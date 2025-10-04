import { makeReverseTComposable } from "@saflib/vue";
import { web_app_strings } from "./strings.ts";

export const useReverseT = makeReverseTComposable(web_app_strings);
