import { ChangeEvent, useState } from "react";
import Comment from "./Comment";
import CustomBtn from "./CustomBtn";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import CommentDto from "../data/CommentDto";
export default function Comments() {
  const [comments, setComments] = useState<CommentDto[]>([]);
  return (
    <div className="p-2 mt-10 mx-3.5 flex flex-col gap-5">
      <h3 className="font-600 text-[27px]">Comments</h3>
      <Comment
        image="https://itlegend.net/_next/image?url=https%3A%2F%2Fapi.itlegend.net%2FContent%2FUploads%2FCoursesMedia%2F18b88331-7ff6-47e1-9bff-fa035afaa7df.jpeg&w=640&q=75"
        date={new Date()}
        name="Student Name Goes Here"
        commentText="        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quisquam
        reprehenderit repellat quam sunt sint nobis quae voluptate eligendi?
        Temporibus nostrum aliquid reprehenderit debitis eum quasi. Aspernatur,
        commodi? Consequatur, nesciunt!"
      ></Comment>
      <Comment
        image="https://itlegend.net/_next/image?url=https%3A%2F%2Fapi.itlegend.net%2FContent%2FUploads%2FCoursesMedia%2F18b88331-7ff6-47e1-9bff-fa035afaa7df.jpeg&w=640&q=75"
        date={new Date()}
        name="Student Name Goes Here"
        commentText="        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quisquam
        reprehenderit repellat quam sunt sint nobis quae voluptate eligendi?
        Temporibus nostrum aliquid reprehenderit debitis eum quasi. Aspernatur,
        commodi? Consequatur, nesciunt!"
      ></Comment>
      <Comment
        image="https://itlegend.net/_next/image?url=https%3A%2F%2Fapi.itlegend.net%2FContent%2FUploads%2FCoursesMedia%2F18b88331-7ff6-47e1-9bff-fa035afaa7df.jpeg&w=640&q=75"
        date={new Date()}
        name="Student Name Goes Here"
        commentText="  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quisquam
        reprehenderit repellat quam sunt sint nobis quae voluptate eligendi?
        Temporibus nostrum aliquid reprehenderit debitis eum quasi. Aspernatur,
        commodi? Consequatur, nesciunt!"
      ></Comment>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          image={comment.image}
          date={comment.date}
          name={comment.name}
          commentText={comment.commentText}
        ></Comment>
      ))}
      <Formik
        initialValues={{
          comment: "",
        }}
        onSubmit={(values, { resetForm, setErrors }) => {
          if (values.comment) {
            setComments([
              ...comments,
              {
                commentText: values.comment,
                date: new Date(),
                name: "Student Name Goes Here",
                image:
                  "https://itlegend.net/_next/image?url=https%3A%2F%2Fapi.itlegend.net%2FContent%2FUploads%2FCoursesMedia%2F18b88331-7ff6-47e1-9bff-fa035afaa7df.jpeg&w=640&q=75",
              },
            ]);

            resetForm({
              values: { comment: "" },
              errors: {},
              status: null,
              touched: {},
            });
            setErrors({});
          }
        }}
        validationSchema={Yup.object().shape({
          comment: Yup.string()
            .required("Field is required")
            .min(3, "Field must be 3 letters at least"),
        })}
      >
        {({ errors, touched, handleBlur, handleChange, values }) => (
          <Form className="flex w-[95%] flex-col gap-2" dir="ltr" action={""}>
            <textarea
              placeholder="Write a comment"
              value={values.comment ?? ""}
              name="comment"
              onChange={handleChange}
              onBlur={handleBlur}
              rows={6}
              className={`mt-5 rounded-xl resize-none p-4 shadow-lg w-[95%] outline-none ${touched.question && errors.question && "border-[#e54860]"}`}
            ></textarea>
            {touched.comment && errors.comment && (
              <p className=" text-[#e54860] mt-2">{errors.comment}</p>
            )}
            <CustomBtn color="[#41b69d]" buttonType="submit">
              Submit Review <i className="fa-solid fa-arrow-right"></i>
            </CustomBtn>
          </Form>
        )}
      </Formik>
    </div>
  );
}
