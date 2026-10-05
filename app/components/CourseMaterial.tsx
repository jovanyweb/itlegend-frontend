export default function CourseMaterial() {
  return (
    <div className="p-2 mt-10 mx-3.5">
      <h3 className="font-600 text-[27px]">Course Materials</h3>
      <div className="mx-5 grid grid-cols-2 gap-30 mt-10">
        <ul className="list-none flex flex-col gap-5 text-gray-700">
          <li className=" border-[#0000001a] flex justify-between">
            <span>
              <i className="fa-regular fa-clock"></i> Duration:
            </span>
            <span>3 weeks</span>
          </li>
          <li className="border-[#0000001a] flex justify-between">
            <span>
              <i className="fa-solid fa-book"></i> Lessons:
            </span>
            <span>8</span>
          </li>
          <li className="border-[#0000001a] flex justify-between">
            <span>
              <i className="fa-solid fa-book-open-reader"></i> Enrolled:
            </span>
            <span>65 students</span>
          </li>
          <li className="border-[#0000001a] flex justify-between">
            <span>
              <i className="fa-solid fa-globe"></i> Language:
            </span>
            <span>English</span>
          </li>
        </ul>
        <ul className="list-none flex flex-col gap-5 text-gray-700">
          <li className=" border-[#0000001a] flex justify-between">
            <span>
              <i className="fa-regular fa-clock"></i> Duration:
            </span>
            <span>3 weeks</span>
          </li>
          <li className="border-[#0000001a] flex justify-between">
            <span>
              <i className="fa-solid fa-book"></i> Lessons:
            </span>
            <span>8</span>
          </li>
          <li className="border-[#0000001a] flex justify-between">
            <span>
              <i className="fa-solid fa-book-open-reader"></i> Enrolled:
            </span>
            <span>65 students</span>
          </li>
          <li className="border-[#0000001a] flex justify-between">
            <span>
              <i className="fa-solid fa-globe"></i> Language:
            </span>
            <span>English</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
