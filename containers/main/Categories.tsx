"use client";
import styles from "@/styles/components/main/categories.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, FC } from "react";
import TitleBox from "../../components/UI/titleBox/TitleBox";
import Link from "next/link";
import { Navigation } from "swiper";
import SlideBtns from "@/components/UI/slideBtns/SlideBtns";
import Markdown from "markdown-to-jsx";

const Categories: FC<any> = ({ categories }): JSX.Element => {
  // console.log(categories);
  const slideCount = Math.ceil(categories.data.length / 2);
  return (
    <section className={styles.main} id="main-catalog">
      <div className="container">
        <TitleBox icon={"/main/categories/categories-icon.svg"}>
          Популярные категории
        </TitleBox>
        <div className={styles.wrapper}>
          <div className={styles.visible}>
            <Swiper
              modules={[Navigation]}
              loop={false}
              slidesPerView={"auto"}
              wrapperClass={styles.swiperWrapper}
              navigation={{
                prevEl: `.${styles.slider_btn} .prev`,
                nextEl: `.${styles.slider_btn} .next`,
              }}
              breakpoints={{
                0: {
                  spaceBetween: 15,
                },
                576: {
                  spaceBetween: 30,
                },
              }}
            >
              {[...Array(slideCount)].map((slide, number: number) => (
                <SwiperSlide key={number} className={styles.slider_item}>
                  {categories.data.map(
                    (item: any, i: number) =>
                      number * 2 <= i &&
                      i <= number * 2 + 1 && (
                        <Link key={item.id} href={`/${item.id}`}>
                          <div className={styles.item_wrapper}>
                            <div className={styles.item_content}>
                              <Markdown>{item.promo}</Markdown>
                              {/* <ul className={styles.item_list}>
                            {categoryItem.list.map((listItem, listIndex) => (
                              <li key={listIndex}>{listItem}</li>
                            ))}
                          </ul> */}
                            </div>
                            <div className={styles.item_img}>
                              <Image
                                src={process.env.IMG_URL + item.image}
                                alt="feature"
                                width={166}
                                height={252}
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </Link>
                      )
                  )}
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

export default Categories;
