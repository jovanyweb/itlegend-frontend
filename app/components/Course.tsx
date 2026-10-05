import Image from "next/legacy/image";
import { CourseDto } from "../data/CourseDto";
import CustomLink from "./CustomLink";
export default function Course({ course }: { course: CourseDto }) {
  return (
    <article
      dir="rtl"
      className="shadow border border-blue-200 m-2 p-3 rounded-2xl text-center"
    >
      <Image
        className="w-full rounded-2xl"
        loading="lazy"
        src={course.image}
        alt={course.name}
        width={640}
        height={360}
      />
      <h3 className="text-xl text-blue-900 font-bold">{course.name}</h3>
      <p className=" text-blue-300 mt-2 truncate text-nowrap">
        {course.description}
      </p>
      <p className="my-2 text-blue-900 ">بواسطة {course.instructor}</p>
      {course.completedPrecentage > 0 ? (
        <CustomLink url={`/courses/${course.id}`}>أكمل</CustomLink>
      ) : (
        <CustomLink url={`/courses/${course.id}`}>أبدأ</CustomLink>
      )}
    </article>
  );
}
