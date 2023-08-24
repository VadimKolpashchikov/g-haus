"use client";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import cl from "@main/video-block.module.scss";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import VideoItem from "@/components/video/VideoItem";
import SlideBtns from "@/components/UI/slideBtns/SlideBtns";

interface IVideoList {
  img: string;
  id: number;
  text: string;
}

const VideoBlock = (): JSX.Element => {
  const [videoList, setVideoList] = useState<IVideoList[]>([
    {
      id: 1,
      text: "Самогонный аппарат «Финляндия Экстра»: до <br/> 6 литров самогона и спирта в час",
      img: "/main/video/video-1.png",
    },
    {
      id: 2,
      text: "Ручной трубогиб DINO: от теплицы до мебели<br/> своими руками",
      img: "/main/video/video-2.png",
    },
    {
      id: 3,
      text: "Самогонный аппарат для дома<br/> «Славянка Премиум»",
      img: "/main/video/video-3.png",
    },
    {
      id: 4,
      text: "Самогонный аппарат «Финляндия Экстра»: до <br/> 6 литров самогона и спирта в час",
      img: "/main/video/video-1.png",
    },
    {
      id: 5,
      text: "Ручной трубогиб DINO: от теплицы до мебели своими руками",
      img: "/main/video/video-2.png",
    },
  ]);

  return (
    <section className={cl.videoBlock}>
      <div className="container">
        <div className="row">
          <TitleBox
            icon={"/main/video/title-icon.svg"}
            w={28}
            h={20}
            youtube={"https://www.youtube.com/channel/UChyTe0XyEpdERM9SynbM9sA"}
          >
            Видео
          </TitleBox>
          <div className={cl.videoSlider}>
            <div className={cl.visible}>
              <Swiper
                modules={[Navigation]}
                loop={false}
                slidesPerView={"auto"}
                wrapperClass={cl.swiperWrapper}
                navigation={{
                  prevEl: `.${cl.sliderBtns} .prev`,
                  nextEl: `.${cl.sliderBtns} .next`,
                }}
                breakpoints={{
                  0: {
                    spaceBetween: 15,
                    slidesPerView: "auto",
                  },
                }}
              >
                {videoList.map((v) => (
                  <SwiperSlide className={cl.slide} key={v.id}>
                    <VideoItem data={v} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <SlideBtns classItem={cl.sliderBtns} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBlock;
