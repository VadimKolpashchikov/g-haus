import styles from "./tags.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import SlideBtns from "../slideBtns/SlideBtns";
type Props = {
  tagsItems: Array<string>;
  classItem?: string;
};

const Tags: React.FC<Props> = ({ tagsItems = [], classItem }): JSX.Element => {
  return (
    <div className={styles.main}>
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
            <SwiperSlide className={`${styles.slide} ${classItem}`}>
              <ul className={styles.list}>
                {tagsItems.map((item, i) =>
                  i % 2 == 0 ? (
                    <li key={i} className={styles.item}>
                      {item}
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>
              <ul className={styles.list}>
                {tagsItems.map((item, i) =>
                  i % 2 !== 0 ? (
                    <li key={i} className={styles.item}>
                      {item}
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
    </div>
  );
};

export default Tags;
