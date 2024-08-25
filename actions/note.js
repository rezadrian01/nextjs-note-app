"use server";
import { revalidatePath } from "next/cache";
import { readFile, writeFile } from "node:fs/promises";

const filePath = "./data/notes.json";

export async function getNotes() {
  const result = await readFile(filePath, {
    encoding: "utf8",
  });
  const notes = JSON.parse(result);
  return notes;
}

export async function getNote(id) {
  const notes = await getNotes();
  const note = notes.find((noteItem) => noteItem.id === id);
  return note;
}

export async function createNote(formData) {
  const note = {
    id: Math.random(),
    title: formData.get("title"),
    date: formData.get("date"),
    content: formData.get("content"),
    tags: formData.get("tags").split(","),
  };
  const notes = await getNotes();
  notes.push(note);
  await writeFile(filePath, JSON.stringify(notes));
  revalidatePath("/");
}

export async function updateNote(id, noteData) {
  const notes = await getNotes();
  const existingNoteIndex = notes.findIndex((noteItem) => noteItem.id === id);
  if (existingNoteIndex === -1) return;
  notes[existingNoteIndex] = { ...noteData };
  await writeFile(filePath, notes);
}

export async function deleteNote(id) {
  const notes = await getNotes();
  const filteredNotes = notes.filter((noteItem) => noteItem.id !== id);
  await writeFile(filePath, filteredNotes);
}
