import styles from "@/styles/components/main/Hero/hero.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import SlideBtns from "@/components/UI/slideBtns/SlideBtns";
type Props = {
  classItem: string;
};
interface bannerItems {
  id: number;
  img: string;
  imgMob: string;
  alt: string;
}
const Banner: React.FC<Props> = ({ classItem }): JSX.Element => {
  const [bannerItems, setBannerItems] = useState<bannerItems[]>([
    {
      id: 2,
      img: "/main/hero/banner-2.jpeg",
      imgMob: "/main/hero/banner-1-mob.jpg",
      alt: "#",
    },
    {
      id: 3,
      img: "/main/hero/banner-3.jpeg",
      imgMob: "/main/hero/banner-1-mob.jpg",
      alt: "#",
    },
    {
      id: 4,
      img: "/main/hero/banner-4.jpg",
      imgMob: "/main/hero/banner-1-mob.jpg",
      alt: "#",
    },
    {
      id: 5,
      img: "/main/hero/banner-3.jpeg",
      imgMob: "/main/hero/banner-1-mob.jpg",
      alt: "#",
    },
  ]);
  return (
    <div className={classItem}>
      <div className={styles.swiper_wrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          slidesPerView={1.000001}
          loopedSlides={2}
          breakpoints={{
            0: {
              spaceBetween: 20,
            },
            992: {
              spaceBetween: 40,
            },
          }}
          navigation={{
            prevEl: `.${styles.slider_btn} .prev`,
            nextEl: `.${styles.slider_btn} .next`,
          }}
          pagination={{
            clickable: true,
            el: `.${styles.pagination}`,
          }}
        >
          {bannerItems.map((item) => (
            <SwiperSlide key={item.id} className={styles.slider_item}>
              <Image src={item.img} width={1137} height={350} alt={item.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <SlideBtns classItem={styles.slider_btn} />
      <div className={styles.pagination}></div>
    </div>
  );
};

export default Banner;
