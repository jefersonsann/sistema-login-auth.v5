"use client";

import React, { useRef } from "react";
import { EditUserForm } from "./Form/edit-user";
import style from "./modal.module.css";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function toggleModal() {
    if (!dialogRef.current) return;

    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <div>
      <span onClick={toggleModal}>{children}</span>
      <dialog
        className={style.container}
        ref={dialogRef}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            toggleModal();
          }
        }}
      >
        <div
          className={`${style.content} ${
            dialogRef?.current?.hasAttribute("open") && style.animate
          }`}
        >
          <EditUserForm />
        </div>
      </dialog>
    </div>
  );
};
