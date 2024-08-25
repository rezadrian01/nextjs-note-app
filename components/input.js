"use client";
import { useRef } from "react";

export default function Input({ label, name, date, tags, onAdd, ...props }) {
  const inputRef = useRef(null);
  function handleAdd() {
    onAdd(inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <div className="relative">
      <input
        className="outline-none p-2 bg-slate-100 rounded w-full"
        type={date ? "date" : "text"}
        placeholder={label}
        name={name}
        required={tags ? false : true}
        ref={inputRef}
        {...props}
      />
      {tags && (
        <button
          type="button"
          onClick={handleAdd}
          className="bg-blue-500 text-white absolute p-1 rounded top-1 right-1"
        >
          Add
        </button>
      )}
    </div>
  );
}
