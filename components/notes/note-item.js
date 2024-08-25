import NoteActions from "./note-action";

export default function NoteItem({ note }) {
  const formattedDate = new Date(note.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="bg-slate-200 rounded p-4 flex flex-col gap-3 relative shadow-md">
      <div className="flex flex-col">
        <h1 className="font-bold">{note.title}</h1>
        <p className="text-slate-400 text-sm">{formattedDate}</p>
      </div>
      <div>
        <p>{note.content}</p>
        <ul className="flex flex-wrap gap-2 mt-2">
          {note?.tags?.map((tag, index) => {
            return (
              <li
                key={index}
                className="bg-slate-50 text-[.7rem] p-1 rounded-lg"
              >
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
      <NoteActions note={note} />
    </div>
  );
}
