"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { AnimatePresence } from "framer-motion";

import Input from "./input";
import Image from "next/image";
import plusIcon from "@/public/plusIcon.svg";
import Modal from "./modal";
import closeLogo from "@/public/close.svg";
import { createNote } from "@/actions/note";

function AddNoteModal({ onClose }) {
  const [tags, setTags] = useState([]);
  const [state, formAction] = useFormState(createNote, {});
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
  if (state?.success === true) {
    onClose();
  }
  return (
    <Modal onClose={onClose}>
      <form className="flex flex-col gap-4" action={formAction}>
        <Input name="title" label="Title" />
        <Input name="content" label="Content" />
        <Input name="date" label="Date" date />
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
        <input type="hidden" name="tags" defaultValue={tags} />
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
      <AnimatePresence>
        {isAdd && <AddNoteModal onClose={toggleAddClick} />}
      </AnimatePresence>
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
