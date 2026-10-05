import { MouseEvent, useContext } from "react";
import CourseSectionLinkIcon from "./CourseSectionLinkIcon";
import MainContext from "../contexts/MainContext";

export default function CourseSectionLinks() {
  const { setIsFormOpened, isFormOpened, setIsLeaderboardOpened } =
    useContext(MainContext);
  return (
    <div className="flex gap-2 mx-8 mt-3">
      <CourseSectionLinkIcon
        url="#curriculm"
        iconClasses="fa-solid fa-list"
      ></CourseSectionLinkIcon>
      <CourseSectionLinkIcon
        url="#comment"
        iconClasses="fa-solid fa-comment"
      ></CourseSectionLinkIcon>
      <CourseSectionLinkIcon
        click={(e: MouseEvent<HTMLButtonElement, MouseEventInit>) => {
          setIsFormOpened(true);
        }}
        iconClasses="fa-solid fa-question"
      ></CourseSectionLinkIcon>
      <CourseSectionLinkIcon
        click={(e: MouseEvent<HTMLButtonElement, MouseEventInit>) => {
          setIsLeaderboardOpened(true);
        }}
        iconClasses="fa-solid fa-ranking-star"
      ></CourseSectionLinkIcon>
    </div>
  );
}
