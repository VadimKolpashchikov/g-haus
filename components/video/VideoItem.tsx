"use client";
import cl from "./video-item.module.scss";
import Image from "next/image";

const VideoItem = ({ data, classItem = "" }: any): JSX.Element => {
  return (
    <a className={`${cl.videoItem} ${classItem}`} href="#">
      <div className={cl.videoPreview}>
        <Image
          src={data.img}
          alt="Превью к видеоролику"
          width={553}
          height={282}
          loading="lazy"
        />
        <div className={cl.videoOverlay}></div>
        <div className={cl.videoBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="38"
            viewBox="0 0 34 38"
            fill="none"
          >
            <path
              d="M32 15.5359C34.6667 17.0755 34.6667 20.9245 32 22.4641L6.5 37.1865C3.83333 38.7261 0.499998 36.8016 0.499998 33.7224L0.5 4.27757C0.5 1.19837 3.83333 -0.726135 6.5 0.813465L32 15.5359Z"
              fill="#323232"
            />
          </svg>
        </div>
      </div>
      <div className={cl.videoDescription}>
        <p
          className={cl.videoName}
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></p>
      </div>
    </a>
  );
};

export default VideoItem;
