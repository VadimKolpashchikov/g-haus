"use client";
import styles from "@main/offers.module.scss";
import TitleBox from "../../components/UI/titleBox/TitleBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useState } from "react";
import Image from "next/image";
import SlideBtns from "../../components/UI/slideBtns/SlideBtns";
interface IOffersItems {
  id: number;
  img: string;
  alt: string;
}
const Offers = (): JSX.Element => {
  const [offersItems, setOffersItems] = useState<IOffersItems[]>([
    {
      id: 1,
      img: "/main/offers/offers-1.svg",
      alt: "#",
    },
    {
      id: 2,
      img: "/main/offers/offers-1.svg",
      alt: "#",
    },
    {
      id: 3,
      img: "/main/offers/offers-1.svg",
      alt: "#",
    },
    {
      id: 4,
      img: "/main/offers/offers-1.svg",
      alt: "#",
    },
    
    {
      id: 5,
      img: "/main/offers/offers-1.svg",
      alt: "#",
    },
  ]);

  return (
    <section className={styles.main}>
      <div className="container">
        <TitleBox icon="/main/offers/offers-icon.svg" watch="#">
          Сезонные предложения
        </TitleBox>
        <div className={styles.wrapper_slider}>
          <div className={styles.visible}>
            <Swiper
              modules={[Navigation]}
              loop={false}
              slidesPerView={"auto"}
              navigation={{
                prevEl: `.${styles.slider_btn} .prev`,
                nextEl: `.${styles.slider_btn} .next`,
              }}
              breakpoints={{
                0: {
                  spaceBetween: 10,
                },
                576: {
                  spaceBetween: 30,
                },
              }}
            >
              {offersItems.map((item) => (
                <SwiperSlide key={item.id} className={styles.slide_item}>
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={552}
                    height={320}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <SlideBtns classItem={styles.slider_btn} />
        </div>
      </div>
    </section>
  );
};

export default Offers;
