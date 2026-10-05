"use client";

import localFont from "next/font/local";
import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { GE_SS } from "../fonts";

export default function Popup({
  children,
  setOpen,
  open,
  width = "1/2",
  height = "fit",
}: PropsWithChildren<{
  open: boolean;
  width?: string;
  height?: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>) {
  return (
    <dialog
      className={` z-1000 hidden h-${height} open:flex flex-col items-center justify-center text-xl fixed top-1/2 p-5 w-${width}  left-1/2  -translate-1/2 bg-white rounded-2xl ${GE_SS.className}`}
      open={open}
    >
      <button onClick={() => setOpen(false)}>
        <i className="text-lg text-[#e54860] fa-solid fa-close absolute right-2 top-2"></i>
      </button>
      {children}
    </dialog>
  );
}
