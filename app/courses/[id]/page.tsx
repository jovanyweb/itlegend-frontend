"use client";
import Breadcrumb from "@/app/components/Breadcrumb";
import CourseSectionLinks from "@/app/components/CourseSectionLinks";
import Popup from "@/app/components/Popup";
import * as Yup from "yup";
import VideoPlayer from "@/app/components/VideoPlayer";
import MainContext from "@/app/contexts/MainContext";
import { Field, Form, Formik } from "formik";
import { ChangeEvent, useEffect, useState } from "react";
import CustomBtn from "@/app/components/CustomBtn";
import CourseMaterial from "../../components/CourseMaterial";
import CourseProgress from "@/app/components/CourseProgress";
import Accordion from "@/app/components/Accordion";
import Link from "next/link";
import Comments from "@/app/components/Comments";
import Quiz from "@/app/components/Quiz";

export default function CoursePage() {
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [isLeaderboardOpened, setIsLeaderboardOpened] = useState(false);
  const [question, setQuestion] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("question");
    } else {
      return "";
    }
  });
  const [questions, setQuestions] = useState<string[]>([]);
  const [isCourseOverviewPopupOpened, setIsCourseOverviewPopupOpened] =
    useState<boolean>(false);
  const [isQuizPopupOpened, setIsQuizPopupOpened] = useState<boolean>(false);

  return (
    <MainContext.Provider
      value={{
        isFormOpened,
        setIsFormOpened,
        questions,
        setIsLeaderboardOpened,
      }}
    >
      <main
        className={`grid grid-cols-1 lg:grid-cols-[70%_30%] mt-2 mx-2.5 after:content-[''] after:bg-black after:opacity-0 after:z-3 after:w-full after:h-full  after:fixed after:top-0 after:left-0 after:hidden ${isFormOpened && "after:inline-block after:opacity-70"}`}
      >
        <div>
          <Breadcrumb
            links={["Home", "Courses", "Course Details"]}
          ></Breadcrumb>
          <div>
            <h3 className="text-3xl font-bold">
              Starting SEO as your Home Based Business
            </h3>
            <div className="mt-6 mx-2.5">
              <VideoPlayer video="/videos/4projects.mp4" />
            </div>
            <CourseSectionLinks></CourseSectionLinks>
            <Popup open={isFormOpened} setOpen={setIsFormOpened}>
              <Formik
                initialValues={{
                  question,
                }}
                onSubmit={(values, { resetForm, setErrors }) => {
                  if (values.question) {
                    setQuestions([...questions, values.question]);
                    if (typeof window !== "undefined") {
                      sessionStorage.removeItem("question");
                    }

                    resetForm({
                      values: { question: "" },
                      errors: {},
                      status: null,
                      touched: {},
                    });
                    setErrors({});
                  }
                }}
                validationSchema={Yup.object().shape({
                  question: Yup.string()
                    .required("مطلوب")
                    .min(3, "يجب ان يكون 3 أحرف علي الأقل"),
                })}
              >
                {({ errors, touched, handleBlur, setFieldValue, values }) => (
                  <Form
                    className="flex w-[95%] flex-col gap-2"
                    dir="rtl"
                    action={""}
                  >
                    <textarea
                      placeholder="أكتب سؤالك"
                      value={values.question ?? ""}
                      name="question"
                      onBlur={handleBlur}
                      onChange={(
                        e: ChangeEvent<HTMLTextAreaElement, EventInit>,
                      ) => {
                        setFieldValue("question", e.currentTarget.value);
                        sessionStorage.setItem(
                          "question",
                          e.currentTarget.value,
                        );
                      }}
                      className={` rounded-xl resize-none p-4 shadow-lg w-[95%] outline-none ${touched.question && errors.question && "border-[#e54860]"}`}
                    ></textarea>
                    {touched.question && errors.question && (
                      <p className="text-[#e54860] mt-2">{errors.question}</p>
                    )}
                    <CustomBtn color="[#41b69d]" buttonType="submit">
                      أرسل سؤالك
                    </CustomBtn>
                  </Form>
                )}
              </Formik>
            </Popup>
            <Popup open={isLeaderboardOpened} setOpen={setIsLeaderboardOpened}>
              <h2 className="leading-[175%] text-[#080264]">
                Course Name Shown Here
              </h2>
              <h3 className="font-bold leading-[175%] text-[#080264]">
                Leaderboard
              </h3>
              <div className="rounded-[5px] p-2 text-center font-light bg-[#F5F9FA] grid grid-cols-[75%_20%]">
                <p className="leading-[175%] text-[#182578]">
                  عظيم يا صديقي.. أداءك في الكورس ده أفضل من 60% من باقي
                  الطلبة.. كمّل عايز أشوف اسمك في الليدر بورد هنا
                </p>
                <span className="text-[50px]">💪</span>
              </div>
              <div className="bg-[#F5F9FA] gap-2 flex flex-col mt-4 w-full text-center p-2">
                <div className="bg-white grid grid-cols-3 justify-between text-[#182578] rounded-lg border-[#0000001a] p-2 w-full">
                  <h3>Mohamed Ahmed</h3>
                  <p>100 🪙</p>
                  <p>🥇</p>
                </div>
                <div className="bg-white grid grid-cols-3 justify-between text-[#182578] rounded-lg border-[#0000001a] p-2 w-full">
                  <h3>Amr Ahmed</h3>
                  <p>80 🪙</p>
                  <p>🥈</p>
                </div>
                <div className="bg-white grid grid-cols-3 justify-between text-[#182578] rounded-lg border-[#0000001a] p-2 w-full">
                  <h3>Reham Kareem</h3>
                  <p>70 🪙</p>
                  <p>🥉</p>
                </div>
                <div className="bg-white grid grid-cols-3 text-[#182578] rounded-lg border-[#0000001a] p-2 w-full">
                  <h3>Nehal Ramy</h3>
                  <p>60 🪙</p>
                </div>
                <div className="bg-white grid grid-cols-3 text-[#182578] rounded-lg border-[#0000001a] p-2 w-full">
                  <h3>Karam Hany</h3>
                  <p>50 🪙</p>
                </div>
              </div>
            </Popup>
            <CourseMaterial />
          </div>
        </div>
        <div>
          <CourseProgress />
          <div className="m-8">
            <Accordion name="course-topics" title="Course Introduction">
              <ul className="list-none">
                <li>
                  <Link href="/courses/1" className="flex justify-between">
                    <span>
                      <i className="fa-regular m-2 fa-file-text"></i>
                      Introduction
                    </span>
                    <span className="">
                      <i className="fa fa-lock"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/courses/1" className="flex justify-between">
                    <span>
                      <i className="fa-regular m-2 fa-file-text"></i>
                      Course Overview
                    </span>
                    <span className="">
                      <i className="fa fa-lock"></i>
                    </span>
                  </Link>
                </li>
                <li className="flex justify-between">
                  <Popup
                    open={isCourseOverviewPopupOpened}
                    setOpen={setIsCourseOverviewPopupOpened}
                    width="full"
                    height="full"
                  >
                    <embed
                      className="w-full h-[calc(100%-20px)]"
                      type="application/pdf"
                      src="https://ineasysteps.com/wp-content/uploads/2022/11/Coding-for-Beginners-in-easy-steps-2nd-edition-9781840789751_TOCCh1.pdf"
                    ></embed>
                  </Popup>
                  <button
                    onClick={(e) => {
                      setIsCourseOverviewPopupOpened(true);
                    }}
                  >
                    <i className="fa-regular m-2 fa-file-text"></i>
                    Course Overview
                  </button>
                  <span className="flex flex-col gap-0.25 justify-center">
                    <span className="uppercase bg-[#f1f9f7] text-[#a0ccbd] rounded-full p-1">
                      0 Questions
                    </span>
                    <span className="text-[#e57092] uppercase p-2 rounded-full">
                      10 Minutes
                    </span>
                  </span>
                </li>
                <li>
                  <Link href="/courses/1" className="flex justify-between">
                    <span>
                      <i className="fa-regular m-2 fa-file-text"></i>
                      Course Exercise / Reference Files
                    </span>
                    <span className="">
                      <i className="fa fa-lock"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/courses/1" className="flex justify-between">
                    <span>
                      <i className="fa-regular m-2 fa-file-text"></i>
                      Code Editor Installation (Optional if you have one)
                    </span>
                    <span className="">
                      <i className="fa fa-lock"></i>
                    </span>
                  </Link>
                </li>
                <li className="flex justify-between">
                  <Popup
                    open={isQuizPopupOpened}
                    setOpen={setIsQuizPopupOpened}
                    width="full"
                    height="full"
                  >
                    <Quiz />
                  </Popup>
                  <button
                    onClick={(e) => {
                      setIsQuizPopupOpened(true);
                    }}
                  >
                    <i className="fa-regular m-2 fa-file-text"></i>
                    Embedding PHP in HTML
                  </button>
                  <span className="">
                    <i className="fa fa-lock"></i>
                  </span>
                </li>
              </ul>
            </Accordion>
            <Accordion name="course-topics" title="JavaScript Language Basics">
              <ul className="list-none">
                <li>
                  <Link href="/courses/1" className="flex justify-between">
                    <span>
                      <i className="fa-regular m-2 fa-file-text"></i>
                      Introduction
                    </span>
                    <span className="">
                      <i className="fa fa-lock"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/courses/1" className="flex justify-between">
                    <span>
                      <i className="fa-regular m-2 fa-file-text"></i>
                      Course Overview
                    </span>
                    <span className="">
                      <i className="fa fa-lock"></i>
                    </span>
                  </Link>
                </li>
                <li className="flex justify-between">
                  <Popup
                    open={isCourseOverviewPopupOpened}
                    setOpen={setIsCourseOverviewPopupOpened}
                    width="full"
                    height="full"
                  >
                    <embed
                      className="w-full h-[calc(100%-20px)]"
                      type="application/pdf"
                      src="https://ineasysteps.com/wp-content/uploads/2022/11/Coding-for-Beginners-in-easy-steps-2nd-edition-9781840789751_TOCCh1.pdf"
                    ></embed>
                  </Popup>
                  <button
                    onClick={(e) => {
                      setIsCourseOverviewPopupOpened(true);
                    }}
                  >
                    <i className="fa-regular m-2 fa-file-text"></i>
                    Course Overview
                  </button>
                  <span className="flex flex-col gap-0.25 justify-center">
                    <span className="uppercase bg-[#f1f9f7] text-[#a0ccbd] rounded-full p-1">
                      0 Questions
                    </span>
                    <span className="text-[#e57092] uppercase p-2 rounded-full">
                      10 Minutes
                    </span>
                  </span>
                </li>
                <li>
                  <Link href="/courses/1" className="flex justify-between">
                    <span>
                      <i className="fa-regular m-2 fa-file-text"></i>
                      Course Exercise / Reference Files
                    </span>
                    <span className="">
                      <i className="fa fa-lock"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/courses/1" className="flex justify-between">
                    <span>
                      <i className="fa-regular m-2 fa-file-text"></i>
                      Code Editor Installation (Optional if you have one)
                    </span>
                    <span className="">
                      <i className="fa fa-lock"></i>
                    </span>
                  </Link>
                </li>
                <li className="flex justify-between">
                  <Popup
                    open={isQuizPopupOpened}
                    setOpen={setIsQuizPopupOpened}
                    width="full"
                    height="full"
                  >
                    <Quiz />
                  </Popup>
                  <button
                    onClick={(e) => {
                      setIsQuizPopupOpened(true);
                    }}
                  >
                    <i className="fa-regular m-2 fa-file-text"></i>
                    Embedding PHP in HTML
                  </button>
                  <span className="">
                    <i className="fa fa-lock"></i>
                  </span>
                </li>
              </ul>
            </Accordion>
            <Accordion name="course-topics" title="Components & Data Binding">
              <ul className="list-none">
                <li>
                  <Link href="/courses/1" className="flex justify-between">
                    <span>
                      <i className="fa-regular m-2 fa-file-text"></i>
                      Introduction
                    </span>
                    <span className="">
                      <i className="fa fa-lock"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/courses/1" className="flex justify-between">
                    <span>
                      <i className="fa-regular m-2 fa-file-text"></i>
                      Course Overview
                    </span>
                    <span className="">
                      <i className="fa fa-lock"></i>
                    </span>
                  </Link>
                </li>
                <li className="flex justify-between">
                  <Popup
                    open={isCourseOverviewPopupOpened}
                    setOpen={setIsCourseOverviewPopupOpened}
                    width="full"
                    height="full"
                  >
                    <embed
                      className="w-full h-[calc(100%-20px)]"
                      type="application/pdf"
                      src="https://ineasysteps.com/wp-content/uploads/2022/11/Coding-for-Beginners-in-easy-steps-2nd-edition-9781840789751_TOCCh1.pdf"
                    ></embed>
                  </Popup>
                  <button
                    onClick={(e) => {
                      setIsCourseOverviewPopupOpened(true);
                    }}
                  >
                    <i className="fa-regular m-2 fa-file-text"></i>
                    Course Overview
                  </button>
                  <span className="flex flex-col gap-0.25 justify-center">
                    <span className="uppercase bg-[#f1f9f7] text-[#a0ccbd] rounded-full p-1">
                      0 Questions
                    </span>
                    <span className="text-[#e57092] uppercase p-2 rounded-full">
                      10 Minutes
                    </span>
                  </span>
                </li>
                <li>
                  <Link href="/courses/1" className="flex justify-between">
                    <span>
                      <i className="fa-regular m-2 fa-file-text"></i>
                      Course Exercise / Reference Files
                    </span>
                    <span className="">
                      <i className="fa fa-lock"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/courses/1" className="flex justify-between">
                    <span>
                      <i className="fa-regular m-2 fa-file-text"></i>
                      Code Editor Installation (Optional if you have one)
                    </span>
                    <span className="">
                      <i className="fa fa-lock"></i>
                    </span>
                  </Link>
                </li>
                <li className="flex justify-between">
                  <Popup
                    open={isQuizPopupOpened}
                    setOpen={setIsQuizPopupOpened}
                    width="full"
                    height="full"
                  >
                    <Quiz />
                  </Popup>
                  <button
                    onClick={(e) => {
                      setIsQuizPopupOpened(true);
                    }}
                  >
                    <i className="fa-regular m-2 fa-file-text"></i>
                    Embedding PHP in HTML
                  </button>
                  <span className="">
                    <i className="fa fa-lock"></i>
                  </span>
                </li>
              </ul>
            </Accordion>
          </div>
        </div>
        <Comments></Comments>
      </main>
    </MainContext.Provider>
  );
}
