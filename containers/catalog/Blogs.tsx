"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation } from "swiper";
import styles from "@catalog/blogs.module.scss";
import Blog from "@/components/blog/Blog";
import SlideBtns from "@/components/UI/slideBtns/SlideBtns";
import TitleBox from "@/components/UI/titleBox/TitleBox";
interface blogItems {
  id: number;
  img: string;
  name: string;
  desc: string;
}
const Blogs = (): JSX.Element => {
  const [blogItems, setBlogItems] = useState<blogItems[]>([
    {
      id: 1,
      img: "/catalog/blogs/blog-1.png",
      name: "Выбор воды для браги",
      desc: "Вода — основа жизни. Какое отношение это имеет к самогону? Самое непосредственное. Начнем с того, что...",
    },
    {
      id: 2,
      img: "/catalog/blogs/blog-2.png",
      name: "Самогон из разных стран",
      desc: "В каждой стране мира — свои особенные крепкие напитки. Иногда для приготовления браги для них берут...",
    },
    {
      id: 3,
      img: "/catalog/blogs/blog-3.png",
      name: "Сухой закон в разных странах",
      desc: "Рано или поздно правительства разных стран задумываются о вреде пьянства и вводят ограничения на употребление...",
    },
    {
      id: 4,
      img: "/catalog/blogs/blog-4.png",
      name: "Где в России пьют больше всего?",
      desc: "Грустно, однако Россия по-прежнему остаётся одной из самых «пьющих» стран мира. Но вот если брать...",
    },
    {
      id: 5,
      img: "/catalog/blogs/blog-3.png",
      name: "Сухой закон в разных странах",
      desc: "Рано или поздно правительства разных стран задумываются о вреде пьянства и вводят ограничения на употребление...",
    },
    {
      id: 6,
      img: "/catalog/blogs/blog-1.png",
      name: "Выбор воды для браги",
      desc: "Вода — основа жизни. Какое отношение это имеет к самогону? Самое непосредственное. Начнем с того, что...",
    },
  ]);
  return (
    <section className={styles.main}>
      <div className="container">
        <TitleBox>Популярные статьи о самогоноварении:</TitleBox>
        <div className={styles.wrapper_slider}>
          <div className={styles.visible}>
            <Swiper
              modules={[Navigation]}
              loop={false}
              slidesPerView={"auto"}
              navigation={{
                prevEl: `.${styles.slider_btn} .prev`,
                nextEl: `.${styles.slider_btn} .next`,
              }} 
              breakpoints={{
                0: {
                  spaceBetween: 15,
                },
              }}
            >
              {blogItems.map((item) => (
                <SwiperSlide key={item.id} className={styles.slide_item}>
                  <Blog blog={item} classItem={styles.blog} />
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

export default Blogs;
