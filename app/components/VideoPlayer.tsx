"use client";
import "./styles/VideoPlayer.css";
import {
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

export default function VideoPlayer({ video }: { video: string }) {
  const videoPlayerRef = useRef<HTMLVideoElement>(null);
  const videoPlayerContainerRef = useRef<HTMLElement>(null);
  const [isVideoPaused, setIsVideoPaused] = useState(true);
  useEffect(() => {
    setIsVideoPaused(videoPlayerRef.current?.paused ?? true);
  }, []);
  return (
    <section
      ref={videoPlayerContainerRef}
      className="sticky w-fit video-player rounded-xl"
    >
      <div className=" after:opacity-0    video-overlay after:rounded-xl w-full  relative after:absolute after:content-[''] after:top-0 after:w-full after:h-full after:left-0 lg:w-180 after:bg-black  after:z-1 after:transition after:duration-500">
        <video
          className="aspect-video w-full h-full object-fit rounded-xl"
          ref={videoPlayerRef}
          src={video}
        ></video>
      </div>
      <button
        onClick={() => {
          if (isVideoPaused) {
            videoPlayerRef.current?.play();
            setIsVideoPaused(false);
          } else {
            videoPlayerRef.current?.pause();
            setIsVideoPaused(true);
          }
        }}
        className="visibility-hidden opacity-0 transition duration-500  hover:inline-block absolute top-1/2 left-1/2 -translate-1/2 bg-white  text-[#e54860] p-5 z-2   text-center rounded-full "
      >
        <i
          className={`fa-solid text-2xl ${isVideoPaused ? "fa-play" : "fa-pause"}`}
        ></i>
      </button>
      <div className="p-2 absolute rounded-b-xl z-2 text-white flex gap-2 w-full bottom-0 left-0 bg-[#e54860]">
        <button
          onClick={() =>
            document.fullscreenElement
              ? document.exitFullscreen()
              : videoPlayerContainerRef.current?.requestFullscreen()
          }
        >
          <i className="fa-solid fa-maximize"></i>
        </button>
        <button
          className="hidden lg:inline-block"
          onClick={(e: MouseEvent<HTMLButtonElement, MouseEventInit>) => {
            videoPlayerContainerRef?.current?.classList.toggle("wide");
            e?.currentTarget.scrollIntoView();
          }}
        >
          <i className="fa-solid fa-expand"></i>
        </button>
      </div>
    </section>
  );
}
