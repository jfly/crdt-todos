import type { LinkMap } from "@saflib/links";

const subdomain = "notes";

/**
 * Links to pages in the notes client.
 */
export const notesLinks = {
  home: {
    subdomain,
    path: "/",
  },
  noteList: {
    subdomain,
    path: "/note-list",
  },
} satisfies LinkMap;