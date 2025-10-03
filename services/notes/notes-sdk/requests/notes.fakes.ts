import type { Note } from "../types.ts";

// In-memory store for fake notes
export let notes: Note[] = [
  {
    id: "1",
    title: "Welcome Note",
    contents:
      "Welcome to the notes application! This is your first note. You can create, edit, and organize your thoughts here.",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    title: "Getting Started",
    contents:
      "Here are some tips for using this notes app:\n\n1. Each note is displayed in its own card\n2. Notes are stored in memory for this demo\n3. You can view multiple notes at once\n4. The interface is responsive and works on all devices",
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02"),
  },
  {
    id: "3",
    title: "Ideas & Inspiration",
    contents:
      "This note contains some random ideas and inspiration:\n\n• Build a todo app with CRDTs\n• Learn more about distributed systems\n• Explore Vue 3 composition API\n• Practice TypeScript patterns\n• Create beautiful UIs with Vuetify",
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-03"),
  },
  {
    id: "4",
    title: "Technical Notes",
    contents:
      "Technical implementation details:\n\n- Using Vue 3 with Composition API\n- Vuetify for UI components\n- TypeScript for type safety\n- In-memory storage for simplicity\n- Responsive grid layout",
    createdAt: new Date("2024-01-04"),
    updatedAt: new Date("2024-01-04"),
  },
  {
    id: "5",
    title: "Future Plans",
    contents:
      "Things to implement in the future:\n\n1. Add note creation functionality\n2. Implement note editing\n3. Add note deletion\n4. Persist notes to a database\n5. Add search and filtering\n6. Implement CRDT synchronization",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05"),
  },
  {
    id: "6",
    title: "Quick Reference",
    contents:
      "Quick reference for common tasks:\n\n• Creating notes: Click the + button\n• Editing notes: Click on a note\n• Deleting notes: Use the delete button\n• Searching: Use the search bar\n• Organizing: Use tags or folders",
    createdAt: new Date("2024-01-06"),
    updatedAt: new Date("2024-01-06"),
  },
];

export const getNotesFake = async (): Promise<Note[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return [...notes];
};

export const getNoteFake = async (id: string): Promise<Note> => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const note = notes.find((n) => n.id === id);
  if (!note) {
    throw new Error(`Note with id ${id} not found`);
  }
  return note;
};

export const createNoteFake = async (
  noteData: Omit<Note, "id" | "createdAt" | "updatedAt">,
): Promise<Note> => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const newNote: Note = {
    ...noteData,
    id: (notes.length + 1).toString(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  notes.push(newNote);
  return newNote;
};

export const updateNoteFake = async (
  id: string,
  noteData: Partial<Note>,
): Promise<Note> => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const noteIndex = notes.findIndex((n) => n.id === id);
  if (noteIndex === -1) {
    throw new Error(`Note with id ${id} not found`);
  }
  notes[noteIndex] = {
    ...notes[noteIndex],
    ...noteData,
    updatedAt: new Date(),
  };
  return notes[noteIndex];
};

export const deleteNoteFake = async (id: string): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const noteIndex = notes.findIndex((n) => n.id === id);
  if (noteIndex === -1) {
    throw new Error(`Note with id ${id} not found`);
  }
  notes.splice(noteIndex, 1);
};
