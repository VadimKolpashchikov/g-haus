"use client";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import styles from "@/styles/components/instructions.module.scss";
import Image from "next/image";
import useInstructionsData from "./InstructionsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import SlideBtns from "@/components/UI/slideBtns/SlideBtns";
const Instructions = (): JSX.Element => {
  const [data, setData] = useInstructionsData();
  function changeTab(i: number) {
    setData((prev) => {
      return prev.map((item, j) => {
        item.active = false;
        if (j === i) {
          item.active = true;
        }
        return item;
      });
    });
  }
  return (
    <section className={styles.section}>
      <TitleBox>Инструкции</TitleBox>
      <div className={styles.wrapper}>
        <div className={styles.visible}>
          <Swiper
            modules={[FreeMode, Navigation]}
            loop={false}
            slidesPerView={"auto"}
            slidesPerGroupAuto={true}
            wrapperClass={styles.swiper_wrapper}
            navigation={{
              prevEl: `.${styles.slider_btn} .prev`,
              nextEl: `.${styles.slider_btn} .next`,
            }}
            freeMode={{
              enabled: true,
              sticky: false,
              momentumVelocityRatio: 0.6,
            }}
          >
            <SwiperSlide className={styles.slide}>
              <ul className={styles.list}>
                {data.map((item, i) =>
                  i % 2 == 0 ? (
                    <li onClick={() => changeTab(i)} key={i} className={`${styles.item} ${item.active ? styles.active : ''}`}>
                      {item.name}
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>
              <ul className={styles.list}>
                {data.map((item, i) =>
                  i % 2 !== 0 ? (
                    <li onClick={() => changeTab(i)} key={i} className={`${styles.item} ${item.active ? styles.active : ''}`}>
                      {item.name}
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>
            </SwiperSlide>
          </Swiper>
        </div>
        <SlideBtns classItem={styles.slider_btn} />
      </div>

      {data.map((item, i: number) => (
        <div
          key={i}
          className={`${styles.content} ${item.active ? styles.active : ""}`}
        >
          {item.list.map((subitem, subi: number) => (
            <div key={subi} className={styles.content_item}>
              <h3 className={styles.content_title}>{subitem.title}</h3>
              <div className={styles.content_row}>
                {subitem.category.map(
                  (subItemCategory, subICategory: number) => (
                    <a
                      key={subICategory}
                      className={styles.content_link}
                      href={subItemCategory.link}
                    >
                      <Image
                        src="/global/pdf-icon.svg"
                        alt="pdf"
                        width={20}
                        height={26}
                      />
                      {subItemCategory.name}
                    </a>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Instructions;
