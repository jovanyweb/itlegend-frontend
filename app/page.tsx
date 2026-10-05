import coursesData from "./data/Data";
import Course from "./components/Course";
import { GE_SS } from "./fonts";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <section className={`mt-2 ${GE_SS.className}`}>
      <Hero />
      <h2 className="text-2xl text-blue-900 font-bold mt-5 text-center">
        كورسات
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {coursesData.map((course) => (
          <Course course={course} key={course.id} />
        ))}
      </div>
    </section>
  );
}
