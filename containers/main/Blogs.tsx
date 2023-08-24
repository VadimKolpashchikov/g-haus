"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation } from "swiper";
import styles from "@/styles/components/main/blogs.module.scss";
import Blog from "@/components/blog/Blog";
import SlideBtns from "@/components/UI/slideBtns/SlideBtns";
import TitleBox from "@/components/UI/titleBox/TitleBox";
interface blogItems {
  id: number;
  img: string;
  name: string;
  desc: string;
  href: string;
}
const Blogs = (): JSX.Element => {
  const [blogItems, setBlogItems] = useState<blogItems[]>([
    {
      id: 1,
      img: "/main/blogs/blog-1.jpg",
      name: "Рецепты паштета из печени",
      desc: "Паштет станет отличной закуской для всей семьи на каждый день. Добавьте багет...",
      href: "/blog/blogOne",
    },
    {
      id: 2,
      img: "/main/blogs/blog-2.jpg",
      name: "Совмещайте работу и творчество",
      desc: "Каждый год тысячи людей в нашей стране в сезон берутся за создание теплиц и парников...",
      href: "/blog/blogOne",
    },
    {
      id: 3,
      img: "/main/blogs/blog-3.jpg",
      name: "Рецепты российского сыра",
      desc: "Этот сорт появился в продаже в середине прошлого века. Рецепт российского сыра разработал...",
      href: "/blog/blogOne",
    },
    {
      id: 4,
      img: "/main/blogs/blog-4.jpg",
      name: "Печь буржуйка. Обзор",
      desc: "Печь буржуйка имеет давнюю и интересную историю. Предполагают, что в России она появилась ещё в...",
      href: "/blog/blogOne",
    },
    {
      id: 5,
      img: "/main/blogs/blog-3.jpg",
      name: "Рецепты российского сыра",
      desc: "Этот сорт появился в продаже в середине прошлого века. Рецепт российского сыра разработал...",
      href: "/blog/blogOne",
    },
    {
      id: 6,
      img: "/main/blogs/blog-4.jpg",
      name: "Печь буржуйка. Обзор",
      desc: "Печь буржуйка имеет давнюю и интересную историю. Предполагают, что в России она появилась ещё в...",
      href: "/blog/blogOne",
    },
  ]);
  return (
    <section className={styles.main}>
      <div className="container">
        <TitleBox icon={"/main/blogs/blogs-icon.svg"} watch="/blog">
          Блог
        </TitleBox>
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
                  <Blog blog={item} href={item.href} classItem={styles.blog} />
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
