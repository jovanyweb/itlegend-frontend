import Link from "next/link";
import { MouseEvent, PropsWithChildren } from "react";

export default function CustomLink({
  url,
  children,
}: PropsWithChildren<{
  url: string;
}>) {
  return (
    <Link href={url} className="p-2  rounded-lg bg-blue-900 text-white">
      {children}
    </Link>
  );
}
