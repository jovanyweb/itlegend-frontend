import Image from "next/image";
import Link from "next/link";
export function Nav() {
  return (
    <nav className="z-999 p-3 fixed w-full  bg-blue-900">
      <Link href="/">
        <Image
          loading="eager"
          src="/logo.png"
          width={150}
          height={50}
          alt="Logo"
        />
      </Link>
    </nav>
  );
}
