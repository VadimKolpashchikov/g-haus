"use client"
import VideoItem from "@/components/video/VideoItem";
import styles from "@product/about-video.module.scss";
import { useState } from "react";
interface IVideoList {
  img: string;
  id: number;
  text: string;
}
const AboutVideo = (): JSX.Element => {
  const [videoList, setVideoList] = useState<IVideoList[]>([
    {
      id: 1,
      text: "Самогонный аппарат «Финляндия Экстра»: до <br/> 6 литров самогона и спирта в час",
      img: "/main/video/video-1.png",
    },
    {
      id: 2,
      text: "Настойка на тыкве из самогона:<br/> классический рецепт «Гарбузовки»",
      img: "/catalog/video/video-2.png",
    },
  ]);
  return (
    <div className={styles.main}>
      {videoList.map((item) => (
        <VideoItem key={item.id} classItem={styles.item} data={item} />
      ))}
    </div>
  );
};

export default AboutVideo;
