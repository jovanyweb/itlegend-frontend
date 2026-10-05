import Image from "next/image";
import { PropsWithChildren } from "react";
import type CommentDto from "../data/CommentDto";

export default function Comment({
  image,
  commentText,
  date,
  name,
}: CommentDto) {
  return (
    <div className="flex gap-2 mt-2">
      <Image
        className="aspect-square w-25 h-25 object-cover rounded-full"
        width={100}
        height={100}
        src={image}
        alt={name}
      />
      <div className="flex flex-col gap-2  ">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="font-light text-lg text-gray-500  ">
          {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
        </p>
        <p className="font-light text-lg text-gray-500  ">{commentText}</p>
      </div>
    </div>
  );
}
