"use client";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

export default function Accordion({
  title,
  children,
  name,
}: PropsWithChildren<{ title: string; name?: string }>) {
  const accordionDetails = useRef<HTMLDetailsElement>(null!);
  const [isAccordionOpened, setIsAccordionOpened] = useState(false);
  useEffect(() => {
    setIsAccordionOpened(accordionDetails.current?.open);
  }, []);
  return (
    <details
      ref={accordionDetails}
      onToggle={(e) => {
        setIsAccordionOpened(e.currentTarget.open);
      }}
      name={name}
      className="border-[#0000001a] border-collapse border"
    >
      <summary className="border-b flex justify-between p-4 font-bold text-xl border-[#0000001a]  list-none">
        {title}{" "}
        <i
          className={`fa-solid ${isAccordionOpened ? "fa-minus" : "fa-plus"}`}
        ></i>
      </summary>
      <div className="mt-2 p-2">{children}</div>
    </details>
  );
}
