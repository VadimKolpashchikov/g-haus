"use client";

import styles from "@product/about.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { productAbout } from "@/store/productAboutSlice";
import AboutDesc from "./AboutDesc";
import AboutInfo from "./AboutInfo";
import AboutReviews from "./AboutReviews";
import AboutVideo from "./AboutVideo";
import AboutDelivery from "./AboutDelivery";
import AboutAnswer from "./AboutAnswer";
interface tabs {
  name: string;
  active: boolean;
  content: any;
}
const About = (): JSX.Element => {
  const dispatch = useDispatch();
  const [tabs, setTabs] = useState<tabs[]>([
    { name: "Описание", active: true, content: <AboutDesc /> },
    { name: "Характеристики", active: false, content: <AboutInfo /> },
    { name: "Отзывы", active: false, content: <AboutReviews /> },
    { name: "Видео", active: false, content: <AboutVideo /> },
    { name: "Доставка и оплата", active: false, content: <AboutDelivery /> },
    { name: "Вопрос-ответ", active: false, content: <AboutAnswer /> },
  ]);
  function tabsChange(index: number): void {
    setTabs((prev) => {
      return prev.map((item, i) => {
        item.active = false;
        if (i === index) {
          item.active = true;
        }
        return item;
      });
    });
  }
  useMemo(() => {
    return dispatch(productAbout(0));
  }, []);
  const tabActive = useSelector(
    (state: RootState) => state.productAbout.tabActive
  );
  useEffect(() => {
    tabsChange(tabActive);
  }, [tabActive]);

  return (
    <div className={styles.main} id="product-about">
      <div className={styles.tabs}>
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
        >
          <SwiperSlide className={styles.slide}>
            <ul className={styles.tabs_list}>
              {tabs.map((item, i) => (
                <li
                  className={`${styles.tabs_item} ${
                    item.active ? styles.active : ""
                  }`}
                  key={i}
                  onClick={() => dispatch(productAbout(i))}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </SwiperSlide>
        </Swiper>
      </div>
      {tabs.map((item, i) =>
        item.active ? <div key={i}>{item.content}</div> : ""
      )}
    </div>
  );
};

export default About;
