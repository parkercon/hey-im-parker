"use client";
import React, { useState } from "react";

const AvatarModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <img
        src="gradpic.jpeg"
        alt="Avatar"
        className="w-20 h-20 rounded-full cursor-pointer"
        onClick={() => {
          const dialog = document.getElementById(
            "my_modal_2"
          ) as HTMLDialogElement;
          dialog.showModal();
        }}
      />
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <img
            src="gradpic.jpeg"
            alt="Enlarged Avatar"
            className="w-86 h-86 rounded-full"
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AvatarModal;
