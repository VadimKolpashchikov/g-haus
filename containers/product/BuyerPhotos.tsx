"use client";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import cl from "@product/buyer-photos.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SlideBtns from "@/components/UI/slideBtns/SlideBtns";
import Image from "next/image";
import Fancybox from "@/components/fancy/Fancybox";
interface IPhotoList {
  img: string;
  id: number;
}

function getPhoto() {
  return [
    {
      id: 1,
      img: "/product/buyer-photos/1.png",
      imgx4: "/product/buyer-photos/1x4.png",
    },
    {
      id: 2,
      img: "/product/buyer-photos/2.png",
      imgx4: "/product/buyer-photos/2x4.png",
    },
    {
      id: 3,
      img: "/product/buyer-photos/3.png",
      imgx4: "/product/buyer-photos/3x4.png",
    },
    {
      id: 4,
      img: "/product/buyer-photos/4.png",
      imgx4: "/product/buyer-photos/4x4.png",
    },
    {
      id: 5,
      img: "/product/buyer-photos/5.png",
      imgx4: "/product/buyer-photos/5x4.png",
    },
    {
      id: 6,
      img: "/product/buyer-photos/6.png",
      imgx4: "/product/buyer-photos/6x4.png",
    },
    {
      id: 7,
      img: "/product/buyer-photos/7.png",
      imgx4: "/product/buyer-photos/7x4.png",
    },
    {
      id: 8,
      img: "/product/buyer-photos/6.png",
      imgx4: "/product/buyer-photos/6x4.png",
    },
    {
      id: 9,
      img: "/product/buyer-photos/7.png",
      imgx4: "/product/buyer-photos/7x4.png",
    },
  ];
}

const BuyerPhotos = (): JSX.Element => {
  const photoList = getPhoto();

  return (
    <div className={cl.main}>
      <div className={"row " + cl.row}>
        <TitleBox classItem={cl.title}>Фото покупателей</TitleBox>
        <div className={cl.buyerSlider}>
          <Fancybox
            options={{
              Carousel: {
                infinite: true,
              },
            }}
          >
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
                  spaceBetween: 10,
                  slidesPerView: "auto",
                },
                576: {
                  spaceBetween: 15,
                },
              }}
            >
              {photoList.map((ph) => (
                <SwiperSlide key={ph.id} className={cl.slide}>
                  <a href={ph.imgx4} data-fancybox="gallery-buyer-photos">
                    <Image
                      src={ph.img}
                      alt="фото покупателей"
                      width={233}
                      height={174}
                      loading="lazy"
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </Fancybox>
          <SlideBtns classItem={cl.sliderBtns} />
        </div>
      </div>
    </div>
  );
};

export default BuyerPhotos;
