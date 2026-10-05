import Link from "next/link";
import { MouseEvent, PropsWithChildren } from "react";

export default function CustomBtn({
  onButtonClicked,
  buttonType = "button",
  color = "[#e54860]",
  children,
}: PropsWithChildren<{
  buttonType?: "button" | "reset" | "submit";
  color: string;
  onButtonClicked?: (e: MouseEvent<HTMLButtonElement, MouseEventInit>) => void;
}>) {
  return (
    <button
      onClick={onButtonClicked}
      type={buttonType}
      className={`py-5 px-20  mt-4  w-fit text-lg   rounded-lg  text-white bg-${color}`}
      style={{ backgroundColor: color.split("[")[1].split("]")[0] }}
    >
      {children}
    </button>
  );
}
