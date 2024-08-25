"use client";

import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ children, onClose }) {
  return createPortal(
    <>
      <motion.div
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { duration: 0.3 } },
          exit: { opacity: 0 },
        }}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 z-10 bg-black/50"
        onClick={onClose}
      />
      <motion.dialog
        variants={{
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          exit: { opacity: 0, y: -100, transition: { duration: 0.2 } },
        }}
        initial="initial"
        animate="animate"
        exit="exit"
        open
        className="fixed bg-white z-20 w-11/12 md:w-4/6 lg:w-1/2 mt-20 p-4 rounded"
        onClose={onClose}
      >
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal-root")
  );
}
