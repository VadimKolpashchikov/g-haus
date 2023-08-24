"use client";
import { useMemo, useState } from "react";
import Blog from "@/components/blog/Blog";
import cl from "@blog/blog-panel.module.scss";
import BlogTabs from "./BlogTabs";
import Image from "next/image";
import useWindowWidth from "@/hooks/useWindowWidth";
import Link from "next/link";
// import { useGetUsersQuery } from "@/store/api";

interface IBlogItems {
  id: number;
  img: string;
  name: string;
  desc: string;
  href: string;
}

interface IPopularItems {
  id: number;
  img: string;
  name: string;
  href: string;
}
const BlogPanel = (): JSX.Element => {
  const [blogItems, setBlogItems] = useState<IBlogItems[]>([
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
    {
      id: 7,
      img: "/main/blogs/blog-4.jpg",
      name: "Печь буржуйка. Обзор",
      desc: "Печь буржуйка имеет давнюю и интересную историю. Предполагают, что в России она появилась ещё в...",
      href: "/blog/blogOne",
    },
    {
      id: 8,
      img: "/main/blogs/blog-3.jpg",
      name: "Рецепты российского сыра",
      desc: "Этот сорт появился в продаже в середине прошлого века. Рецепт российского сыра разработал...",
      href: "/blog/blogOne",
    },
    {
      id: 9,
      img: "/main/blogs/blog-4.jpg",
      name: "Печь буржуйка. Обзор",
      desc: "Печь буржуйка имеет давнюю и интересную историю. Предполагают, что в России она появилась ещё в...",
      href: "/blog/blogOne",
    },
  ]);
  // const { isError, isLoading, data } = useGetUsersQuery("products?page=2");
  // console.log(data);

  const [popularItems, setPopularItems] = useState<IPopularItems[]>([
    {
      id: 1,
      img: "/main/blogs/blog-1.jpg",
      name: "Рецепты паштета из печени",
      href: "/blog/blogOne",
    },
    {
      id: 2,
      img: "/main/blogs/blog-2.jpg",
      name: "Совмещайте работу и творчество",
      href: "/blog/blogOne",
    },
    {
      id: 3,
      img: "/main/blogs/blog-3.jpg",
      name: "Рецепты российского сыра",
      href: "/blog/blogOne",
    },
  ]);

  const windowWidth = useWindowWidth(767);

  const blogsFiltered = useMemo(() => {
    if (!windowWidth) {
      return blogItems;
    } else {
      return blogItems.filter((el, idx) => idx < 3);
    }
  }, [windowWidth]);

  return (
    <section className={cl.main}>
      <div className={cl.sideBar}>
        <BlogTabs />
      </div>
      <div className={cl.popular}>
        <p className={cl.popularTitle}>Популярные статьи</p>
        {popularItems.map((el) => (
          <Link className={cl.popularItem} href={el.href} key={el.id}>
            <div className={cl.imgWrap}>
              <Image
                src={el.img}
                alt={el.name}
                width={204}
                height={139}
                loading="lazy"
              />
            </div>
            <p>{el.name}</p>
          </Link>
        ))}
      </div>
      <div className={cl.cards}>
        {blogsFiltered.map((item) => (
          <Blog
            href={item.href}
            key={item.id}
            mobilBig={true}
            blog={item}
            classItem={cl.blogItem}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogPanel;
