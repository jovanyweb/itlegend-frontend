import React from "react";

export default function CourseProgress() {
  return (
    <aside className="p-2 mt-10 mx-3.5">
      <h3 className="font-600 text-[27px] mb-4">Topics of This Course</h3>
      <span
        style={
          {
            "--progress": `${0.63 * 100}%`,
          } as React.CSSProperties
        }
        className={`w-full before:content-['You'] before:absolute  before:p-2 before:border-2 before:left-[calc(var(--progress)-20px)] before:top-[-700%] before:border-[#d6d6d6] before:rounded-full block bg-[#ececec] h-2 rounded-full after:content-[''] after:animate-percentage after:absolute after:top-0 after:left-0 relative after:h-full after:bg-[#6abd8a]`}
      >
        <span
          style={
            {
              "--progress": `${0.63 * 100}%`,
              "--progress-text": `'${0.63 * 100}%'`,
            } as React.CSSProperties
          }
          className={`after:absolute after:bottom-[-400%] after:left-[calc(var(--progress)-10px)] after:content-(--progress-text) before:absolute before:border-5 before:border-transparent before:z-1 before:border-t-[#d6d6d6] before:top-[-150%] before:left-[calc(var(--progress)-5px)]`}
        ></span>
      </span>
    </aside>
  );
}
