"use client";

import { createPortal } from "react-dom";

export default function Modal({ children, onClose }) {
  return createPortal(
    <>
      <div className="fixed inset-0 z-10 bg-black/50" onClick={onClose} />
      <dialog
        open
        className="absolute bg-white z-20 w-1/2 mt-20 p-4 rounded"
        onClose={onClose}
      >
        {children}
      </dialog>
    </>,
    document.getElementById("modal-root")
  );
}
