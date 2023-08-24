"use client";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import cl from "@/styles/components/main/features.module.scss";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

interface IFeatures {
  img: string;
  w: number;
  h: number;
  text: string;
}

const Features = (): JSX.Element => {
  const [features, setFeatures] = useState<IFeatures[]>([
    {
      img: "features-1",
      w: 123,
      h: 65,
      text: "Широкий<br/> ассортимент",
    },
    {
      img: "features-2",
      w: 88,
      h: 71,
      text: "Собственное<br/> производство",
    },
    {
      img: "features-3",
      w: 75,
      h: 85,
      text: "Гарантия<br/> возврата денег",
    },
    {
      img: "features-4",
      w: 88,
      h: 87,
      text: "Рассрочка без переплаты<br/> на 6 месяцев",
    },
    {
      img: "features-5",
      w: 113,
      h: 87,
      text: "Быстрая доставка&nbsp;в любой город России",
    },
    {
      img: "features-6",
      w: 75,
      h: 87,
      text: "Гарантия<br/> качества",
    },
  ]);
  return (
    <section className={cl.features}>
      <div className="container">
        <div className="row">
          <TitleBox icon={"/main/features/title-icon.svg"}>
            Преимущества
          </TitleBox>
          <Swiper
            modules={[FreeMode]}
            loop={false}
            slidesPerView={"auto"}
            slidesPerGroupAuto={true}
            freeMode={{
              enabled: true,
              sticky: false,
              momentumVelocityRatio: 0.6,
            }}
            wrapperClass={cl.swiperWrapper}
          >
            <SwiperSlide className={cl.slide}>
              {features.map((item, i) => (
                <div key={item.img} className={cl.featureWrap}>
                  <Image
                    src={`/main/features/${item.img}.svg`}
                    alt="feature"
                    width={item.w}
                    height={item.h}
                    loading="lazy"
                  />
                  <p
                    className={cl.featureText}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  ></p>
                </div>
              ))}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Features;
