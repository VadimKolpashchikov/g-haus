"use client";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import cl from "@/styles/components/main/brands.module.scss";
import Image from "next/image";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import SlideBtns from "@/components/UI/slideBtns/SlideBtns";
import Link from "next/link";

const Brands: FC<any> = ({ brands }): JSX.Element => {
  return (
    <section className={cl.brands} id="main-brands">
      <div className="container">
        <div className="row">
          <TitleBox icon={"/main/brands/title-icon.svg"}>Наши бренды</TitleBox>
          <div className={cl.brandsSlider}>
            <div className={cl.visible}>
              <Swiper
                modules={[FreeMode, Navigation]}
                loop={false}
                slidesPerView={"auto"}
                wrapperClass={cl.swiperWrapper}
                navigation={{
                  prevEl: `.${cl.sliderBtns} .prev`,
                  nextEl: `.${cl.sliderBtns} .next`,
                }}
                breakpoints={{
                  0: {
                    spaceBetween: 12,
                    slidesPerView: "auto",
                  },
                  992: {
                    spaceBetween: 20,
                  },
                  1200: {
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide className={cl.brand}>
                  {brands.data.map((card: any, i: number) => (
                    <Link href={`/brands/${card.slug}`} key={card.slug}>
                      <div className={cl.brandWrap}>
                        <Image
                          src={process.env.IMG_URL + card.image}
                          alt={card.name || "бренд"}
                          width={262}
                          height={81}
                          loading="lazy"
                        />
                      </div>
                    </Link>
                  ))}
                </SwiperSlide>
              </Swiper>
            </div>
            <SlideBtns classItem={cl.sliderBtns} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
