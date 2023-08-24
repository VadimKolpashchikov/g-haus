"use client";
import SlideBtns from "@/components/UI/slideBtns/SlideBtns";
import styles from "@/styles/components/Header/header-bottom.module.scss";
import Link from "next/link";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation } from "swiper";
interface ListItem {
  id: number;
  name: string;
  url: string;
}
const HeaderBottom = (): JSX.Element => {
  const [listItems, setListItems] = useState<ListItem[]>([
    { id: 1, name: "Акции", url: "/moonshine" },
    { id: 2, name: "Гриндеры на УШМ", url: "/brewing" },
    { id: 3, name: "Самогонные аппараты", url: "/smoking" },
    { id: 4, name: "Дистилляторы без бака", url: "/cheesemaking" },
    { id: 5, name: "Сыроварни", url: "/canning" },
    { id: 6, name: "Дымогенераторы холодного копчения", url: "/presses" },
    { id: 7, name: "Дымогенераторы холодного копчения", url: "/presses" },
    { id: 8, name: "Товары для сада", url: "/furnaces" },
    { id: 9, name: "Тележки", url: "/tools" },
    { id: 10, name: "Мангалы", url: "/tools" },
    { id: 11, name: "Трубогибы", url: "/tools" },
    { id: 12, name: "Все товары", url: "/tools" },
  ]);
  const newsListSwiperRef = useRef<SwiperRef>(null);
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.wrapper_slider}>
            <div className={styles.visible}>
              <Swiper
                modules={[Navigation]}
                wrapperClass={`${styles.swiper_wrapper}`}
                ref={newsListSwiperRef}
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
                {listItems.map((item) => (
                  <SwiperSlide className={styles.slider_item} key={item.id}>
                    <Link className={styles.link} href={item.url}>
                      {item.name}
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <SlideBtns classItem={styles.slider_btn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
