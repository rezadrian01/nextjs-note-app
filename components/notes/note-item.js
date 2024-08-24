export default function NoteItem() {
  return (
    <div className="bg-slate-200 rounded shadow p-4 flex flex-col gap-3 relative">
      <div className="flex flex-col">
        <h1 className="font-bold">TITLE</h1>
        <p className="text-slate-400 text-sm">DATE</p>
      </div>
      <div>
        <p>DESCRIPTION</p>
        <ul className="flex gap-2 mt-2">
          <li className="bg-slate-50 text-[.7rem] p-1 rounded-lg">Tag 1</li>
          <li className="bg-slate-50 text-[.7rem] p-1 rounded-lg">Tag 2</li>
          <li className="bg-slate-50 text-[.7rem] p-1 rounded-lg">Tag 3</li>
        </ul>
      </div>
    </div>
  );
}
