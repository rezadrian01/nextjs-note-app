"use client";

import plusIcon from "@/public/plusIcon.svg";
import Image from "next/image";
import { useState } from "react";
import Modal from "./modal";

function Input({ label, name, date }) {
  return (
    <>
      <input
        className="outline-none p-2 bg-slate-100 rounded"
        type={date ? "date" : "text"}
        placeholder={label}
        name={name}
        required
      />
    </>
  );
}

function AddNoteModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <form className="flex flex-col gap-4">
        <Input name="title" label="Title" />
        <Input name="content" label="Content" />
        <Input name="date" label="Date" date />
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
        <Image className="absolute right-2 top-2" src={plusIcon} />
      </button>
    </>
  );
}
