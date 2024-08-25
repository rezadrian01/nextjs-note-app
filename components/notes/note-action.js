"use client";
import { useState } from "react";
import { useFormState } from "react-dom";

import Modal from "../modal";
import Input from "../input";
import pencilIcon from "@/public/pencil.svg";
import trashIcon from "@/public/trash.svg";
import closeLogo from "@/public/close.svg";
import Image from "next/image";
import { updateNote } from "@/actions/note";

function EditModal({ onClose, note }) {
  const [state, formAction] = useFormState(updateNote, {});
  const [tags, setTags] = useState([...note.tags]);
  function handleAddTag(tag) {
    setTags((prevTags) => [...prevTags, tag]);
  }
  function handleRemoveTag(tag) {
    setTags((prevTags) => {
      const filteredTags = prevTags.filter((tagItem) => tagItem !== tag);
      return filteredTags;
    });
  }
  if (state?.success === true) {
    onClose();
  }
  return (
    <Modal onClose={onClose}>
      <form className="flex flex-col gap-4" action={formAction}>
        <Input name="title" label="Title" defaultValue={note.title} />
        <Input name="content" label="Content" defaultValue={note.content} />
        <Input name="date" label="Date" date defaultValue={note.date} />
        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-4 mt-2">
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
        <input type="hidden" name="noteId" defaultValue={note.id} />
        <input type="hidden" name="tags" defaultValue={tags} />
        <Input label="Tags" tags onAdd={handleAddTag} />
        <div className="flex justify-end gap-4 mt-4">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded p-1"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default function NoteActions({ note }) {
  const [isEditing, setIsEditing] = useState(false);
  function toggleEditClick() {
    setIsEditing((prevState) => !prevState);
  }
  return (
    <>
      {isEditing && <EditModal onClose={toggleEditClick} note={note} />}
      <div className="relative flex gap-4 justify-end">
        <button
          onClick={toggleEditClick}
          type="button"
          className=" w-[.8rem] aspect-square rounded-full"
        >
          <Image src={pencilIcon} alt="Pencil Icon" />
        </button>
        <button type="button" className=" w-[.8rem] aspect-square rounded-full">
          <Image src={trashIcon} alt="Trash Icon" />
        </button>
      </div>
    </>
  );
}
