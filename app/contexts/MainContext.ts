"use client";
import { createContext, Dispatch, SetStateAction } from "react";
import CommentDto from "../data/CommentDto";

const MainContext = createContext<{setIsLeaderboardOpened:Dispatch<SetStateAction<boolean>>, questions: string[], isFormOpened: boolean,setIsFormOpened:Dispatch<SetStateAction<boolean>> }>({
    isFormOpened: false,
    setIsFormOpened: null!,
    setIsLeaderboardOpened:null!,
    questions: [],
});
export default MainContext ;