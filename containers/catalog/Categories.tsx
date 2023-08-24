"use client";

import styles from "@catalog/categories.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import SlideBtns from "@/components/UI/slideBtns/SlideBtns";
import Markdown from "markdown-to-jsx";

const Categories: FC<any> = (rubric): JSX.Element => {
  return (
    <>
      {rubric.rubric.data.length ? (
        <section className={styles.main}>
          <div className={`container ${styles.container}`}>
            <div className={styles.wrapper}>
              <div className={styles.visible}>
                <Swiper
                  modules={[FreeMode, Navigation]}
                  loop={false}
                  slidesPerView={"auto"}
                  slidesPerGroupAuto={true}
                  wrapperClass={styles.swiper_wrapper}
                  navigation={{
                    prevEl: `.${styles.sliderBtns} .prev`,
                    nextEl: `.${styles.sliderBtns} .next`,
                  }}
                  freeMode={{
                    enabled: true,
                    sticky: false,
                    momentumVelocityRatio: 0.6,
                  }}
                >
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.box}>
                      {rubric.rubric.data.map((item: any, i: number) => (
                        <Link
                          href={item.page_url}
                          key={item.id}
                          className={styles.item}
                        >
                          <div className={styles.item_img}>
                            <Image
                              src={process.env.IMG_URL + item.image}
                              alt="#"
                              width={110}
                              height={180}
                            />
                          </div>
                          <div className={styles.item_content}>
                            <Markdown>{item.description}</Markdown>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <SlideBtns classItem={styles.sliderBtns} />
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Categories;
