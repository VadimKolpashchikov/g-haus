import styles from "@/styles/components/main/Hero/week.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import BtnAddBasket from "@/components/UI/btnAddBasket/BtnAddBasket";
import { useState } from "react";
import { Navigation, Pagination } from "swiper";
import SlideBtns from "@/components/UI/slideBtns/SlideBtns";
import Count from "@/components/UI/count/Count";
type Props = {
  classItem: string;
};
interface weekItems {
  id: number;
  img: string;
  alt: string;
  price: string;
  oldPrice: string;
  desc: string;
}
const Week: React.FC<Props> = ({ classItem }): JSX.Element => {
  const [weekItems, setWeekItems] = useState<weekItems[]>([
    {
      id: 1,
      img: "/main/hero/week-1.jpg",
      alt: "#",
      price: "12 850",
      oldPrice: "23 350",
      desc: "Ручной профилегиб и трубогиб «Удачный»",
    },
    {
      id: 2,
      img: "/main/hero/week-1.jpg",
      alt: "#",
      price: "12 850",
      oldPrice: "23 350",
      desc: "Ручной профилегиб и трубогиб «Удачный»",
    },
    {
      id: 3,
      img: "/main/hero/week-1.jpg",
      alt: "#",
      price: "12 850",
      oldPrice: "23 350",
      desc: "Ручной профилегиб и трубогиб «Удачный»",
    },
    {
      id: 4,
      img: "/main/hero/week-1.jpg",
      alt: "#",
      price: "12 850",
      oldPrice: "23 350",
      desc: "Ручной профилегиб и трубогиб «Удачный»",
    },
  ]);
  return (
    <div className={`${classItem} ${styles.wrapper}`}>
      <div className={styles.block_title}>
        <h3 className={styles.title}>Товары недели</h3>
        <Count />
      </div>
      <div className={styles.wrapper_slider}>
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          spaceBetween={20}
          navigation={{
            prevEl: `.${styles.slider_btn} .prev`,
            nextEl: `.${styles.slider_btn} .next`,
          }}
          pagination={{
            clickable: true,
            el: `.${styles.pagination}`,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1401: {
              slidesPerView: 1,
            },
          }}
        >
          {weekItems.map((item) => (
            <SwiperSlide key={item.id} className={styles.slider_item}>
              <div className={styles.image}>
                <Image src={item.img} width={231} height={208} alt={item.alt} />
              </div>
              <div className={styles.content}>
                <div className={styles.sale}>
                  <span className={styles.sale_text}>Скидка</span>
                  <span className={styles.sale_count}>-45%</span>
                </div>
                <div className={styles.prices}>
                  <span className={styles.price_new}>{item.price} ₽</span>
                  <span className={styles.price_old}>{item.oldPrice}</span>
                </div>
                <span className={styles.reviews}>
                  <span>
                    <Image
                      src="/main/hero/star.svg"
                      width={18}
                      height={17}
                      alt="star"
                    />
                  </span>
                  нет отзывов
                </span>
                <p className={styles.desc}>{item.desc}</p>
              </div>
              <div className={styles.block_btn}>
                <BtnAddBasket
                  classItem={styles.btn}
                  product={{
                    id: 0,
                    name: "no-name",
                    price: 1111,
                    old_price: 2222,
                    image: "/images/image-not-found.jpg",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <SlideBtns classItem={styles.slider_btn} />
        <div className={styles.pagination}></div>
      </div>
    </div>
  );
};

export default Week;
