"use client";

import { createPortal } from "react-dom";

export default function Modal({ children, onClose }) {
  return createPortal(
    <>
      <div className="fixed inset-0 z-10 bg-black/50" onClick={onClose} />
      <dialog
        open
        className="absolute bg-white z-20 w-11/12 md:w-4/6 lg:w-1/2 mt-20 p-4 rounded"
        onClose={onClose}
      >
        {children}
      </dialog>
    </>,
    document.getElementById("modal-root")
  );
}
