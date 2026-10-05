import Link from "next/link";
import { MouseEvent } from "react";

export default function CourseSectionLinkIcon({
  url,
  iconClasses,
  click,
}: {
  url?: string;
  iconClasses: string;
  click?: (e: MouseEvent<HTMLButtonElement, MouseEventInit>) => void;
}) {
  return (
    <>
      {url ? (
        <Link
          className="border border-gray-200 w-10 h-10 flex items-center justify-center text-gray-500 text-md p-2 rounded-full"
          href={url}
        >
          <i className={`${iconClasses}`}></i>
        </Link>
      ) : (
        <button
          {...(click && { onClick: click })}
          className="border border-gray-200 w-10 h-10 flex items-center justify-center text-gray-500 text-md p-2 rounded-full"
        >
          <i className={`${iconClasses}`}></i>
        </button>
      )}
    </>
  );
}
