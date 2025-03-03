"use client";

import { useRef } from "react";

function Modal({ openElement, children }) {
  const refModal = useRef();

  const openModal = () => refModal.current?.showModal();
  const closeModal = () => refModal.current?.close();

  const handleClickOutside = (e) => {
    if (refModal.current) {
      const rect = refModal.current.getBoundingClientRect();
      const isInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        refModal.current.close();
      }
    }
  };

  return (
    <div className="relative z-50">
      <div onClick={openModal} className="w-fit cursor-pointer transition-transform transform hover:scale-105">
        {openElement}
      </div>

      <dialog
        ref={refModal}
        onMouseDown={handleClickOutside}
        className="p-12 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-10"
      >
        <div
          onClick={closeModal}
          className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-red-600 transition-colors"
        >
          ❌
        </div>

        <div className="p-6">
          {children}
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
