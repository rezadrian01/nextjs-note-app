"use client";

import { useState } from "react";
import plusIcon from "@/public/plusIcon.svg";
import Image from "next/image";
import Modal from "./modal";
import closeLogo from "@/public/close.svg";
import { useRef } from "react";
import { getNotes } from "@/actions/note";

function Input({ label, name, date, tags, onAdd }) {
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
        required
        ref={inputRef}
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

function AddNoteModal({ onClose }) {
  const [tags, setTags] = useState([]);
  function handleAddTag(tag) {
    setTags((prevTags) => [...prevTags, tag]);
  }
  function handleRemoveTag(tag) {
    setTags((prevTags) => {
      const updatedTags = [...prevTags];
      const filteredTags = updatedTags.filter((tagItem) => tagItem !== tag);
      return filteredTags;
    });
  }
  return (
    <Modal onClose={onClose}>
      <form className="flex flex-col gap-4">
        <Input name="title" label="Title" />
        <Input name="content" label="Content" />
        <Input name="date" label="Date" date />
        {tags.length > 0 && (
          <ul className="flex gap-4 mt-2">
            {tags.map((tag, index) => {
              return (
                <li
                  key={index}
                  className="bg-blue-500 text-white text-[.7rem] p-1 rounded-lg relative"
                >
                  {tag}
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    type="button"
                    className="absolute bg-slate-100 w-[.85rem] aspect-square rounded-full text-black -top-2 -right-2"
                  >
                    <Image alt="Remove tag" src={closeLogo} />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        <input type="hidden" name="tag" defaultValue={tags} />
        <Input label="Tags" tags onAdd={handleAddTag} />
        <div className="flex justify-end gap-4 mt-4">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded p-1">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default function AddButton() {
  const [isAdd, setIsAdd] = useState(false);
  function toggleAddClick() {
    setIsAdd((prevState) => !prevState);
  }
  return (
    <>
      {isAdd && <AddNoteModal onClose={toggleAddClick} />}
      <button
        onClick={toggleAddClick}
        className="fixed bg-blue-500 p-4 w-10 aspect-square rounded-full right-8 bottom-8"
      >
        <Image
          alt="Plus Icon"
          className="absolute right-2 top-2"
          src={plusIcon}
        />
      </button>
    </>
  );
}
