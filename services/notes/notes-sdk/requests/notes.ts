import { getClient } from "../client.ts";
import type { Note } from "../types.ts";

export const getNotes = async (): Promise<Note[]> => {
  const client = getClient();
  const response = await client.get("/notes");
  return response.data;
};

export const getNote = async (id: string): Promise<Note> => {
  const client = getClient();
  const response = await client.get(`/notes/${id}`);
  return response.data;
};

export const createNote = async (note: Omit<Note, "id" | "createdAt" | "updatedAt">): Promise<Note> => {
  const client = getClient();
  const response = await client.post("/notes", note);
  return response.data;
};

export const updateNote = async (id: string, note: Partial<Note>): Promise<Note> => {
  const client = getClient();
  const response = await client.put(`/notes/${id}`, note);
  return response.data;
};

export const deleteNote = async (id: string): Promise<void> => {
  const client = getClient();
  await client.delete(`/notes/${id}`);
};