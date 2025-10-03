import { makeReverseTComposable } from "@saflib/vue";
import { todosSdkStrings } from "./strings.ts";

export const useReverseT = makeReverseTComposable(todosSdkStrings);
