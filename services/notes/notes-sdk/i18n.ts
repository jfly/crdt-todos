import { makeReverseTComposable } from "@saflib/vue";
import { notesSdkStrings } from "./strings.ts";

export const useReverseT = makeReverseTComposable(notesSdkStrings);
