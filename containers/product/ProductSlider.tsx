"use client";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import cl from "@product/product-slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SlideBtns from "@/components/UI/slideBtns/SlideBtns";
import Image from "next/image";
import { HandySvg } from "handy-svg";
import { useState } from "react";
function getSlides() {
  return [
    {
      id: 1,
      img: "/product/slider/1.png",
      imgx4: "/product/slider/1x4.png",
    },
    {
      id: 2,
      img: "/product/slider/2.png",
      imgx4: "/product/slider/2x4.png",
    },
    {
      id: 3,
      img: "/product/slider/3.png",
      imgx4: "/product/slider/3x4.png",
    },
    {
      id: 4,
      img: "/product/slider/2.png",
      imgx4: "/product/slider/2x4.png",
    },
    {
      id: 5,
      img: "/product/slider/3.png",
      imgx4: "/product/slider/3x4.png",
    },
    {
      id: 6,
      img: "/product/slider/2.png",
      imgx4: "/product/slider/2x4.png",
    },
    {
      id: 7,
      img: "/product/slider/3.png",
      imgx4: "/product/slider/3x4.png",
    },
  ];
}

const ProductSlider = (): JSX.Element => {
  const sliderList = getSlides();
  const [activeImg, setActiveImg] = useState<number>(0);
  return (
    <div className={cl.main}>
      <div className={cl.wrap}>
        <div className={cl.verticlSlider}>
          <Swiper
            modules={[Navigation]}
            loop={false}
            rewind={true}
            slidesPerView={4}
            wrapperClass={cl.swiperWrapper}
            navigation={{
              prevEl: `.${cl.sliderBtns} .prev`,
              nextEl: `.${cl.sliderBtns} .next`,
            }}
            breakpoints={{
              0: {
                spaceBetween: 11,
                slidesPerView: 4,
                direction: "horizontal",
              },
              576: {
                spaceBetween: 25,
                slidesPerView: 4,
                direction: "horizontal",
              },
              1600: {
                direction: "vertical",
                spaceBetween: 30,
                slidesPerView: "auto",
              },
            }}
            onSlideChange={(swiper) => setActiveImg(swiper.realIndex)}
          >
            {sliderList.map((sl, i) => (
              <SwiperSlide
                key={sl.id}
                className={
                  cl.slide + " " + (activeImg === i ? cl.slide_active : "")
                }
                onClick={() => setActiveImg(i)}
              >
                <div>
                  <Image src={sl.img} alt="Product" width={146} height={146} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <SlideBtns classItem={cl.sliderBtns} />
        </div>
        <div className={cl.bigImg}>
          <Image
            src={sliderList[activeImg].imgx4}
            alt="Product"
            width={580}
            height={580}
          />
          <div className={cl.stick}>
            <span>Хит</span>
            <HandySvg
              className={"icon"}
              src={"/product/slider/stick-star.svg"}
              width="16"
              height="16"
            />
          </div>
          <div className={cl.discount}>
            <span>-40%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
