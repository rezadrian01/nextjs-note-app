import { getNotes } from "@/actions/note";
import NoteItem from "./note-item";

export default async function Notes() {
  const notes = await getNotes();
  return (
    <>
      <div className="w-full">
        <h1 className="text-3xl mb-4">Your Notes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => {
            return <NoteItem key={note.id} note={note} />;
          })}
        </div>
      </div>
    </>
  );
}
