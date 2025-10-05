import { makeReverseTComposable } from "@saflib/vue";
import { notes_sdk_strings } from "./strings.ts";

export const useReverseT = makeReverseTComposable(notes_sdk_strings);
