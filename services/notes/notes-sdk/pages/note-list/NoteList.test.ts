import { describe, it, expect, vi } from "vitest";
import { stubGlobals, getElementByString } from "@saflib/vue/testing";
import { type VueWrapper } from "@vue/test-utils";
import NoteListAsync from "./NoteListAsync.vue";
import { note_list_page as strings } from "./NoteList.strings.ts";
import { mountTestApp, testAppHandlers } from "../../test-app.ts";
import { setupMockServer } from "@saflib/sdk/testing/mock";

describe("NoteList", () => {
  stubGlobals();
  setupMockServer(testAppHandlers);

  const getTitle = (wrapper: VueWrapper) => {
    return getElementByString(wrapper, strings.title);
  };

  const getDescription = (wrapper: VueWrapper) => {
    return getElementByString(wrapper, strings.description);
  };

  const getNoNotesMessage = (wrapper: VueWrapper) => {
    return getElementByString(wrapper, strings.no_notes);
  };

  it("should render the page with title and description", async () => {
    const wrapper = mountTestApp(NoteListAsync);
    // first expectation should "waitFor" since this test includes loading code and fetching data
    await vi.waitFor(() => getTitle(wrapper).exists());
    expect(getTitle(wrapper).exists()).toBe(true);
    expect(getDescription(wrapper).exists()).toBe(true);
  });

  it("should render the no notes message when no notes are available", async () => {
    const wrapper = mountTestApp(NoteListAsync);
    // Wait for the component to load and check for the no notes message
    await vi.waitFor(() => getNoNotesMessage(wrapper).exists());
    expect(getNoNotesMessage(wrapper).exists()).toBe(true);
  });
});
