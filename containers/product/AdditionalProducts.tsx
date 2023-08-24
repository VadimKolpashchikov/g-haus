"use client";
import Products from "@/components/product/Product";
import styles from "@product/additionalProducts.module.scss";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SlideBtns from "@/components/UI/slideBtns/SlideBtns";
import TitleBox from "@/components/UI/titleBox/TitleBox";
interface productItems {
  id: number;
  image: string;
  name: string;
  url: string;
  price: number;
  oldPrice: number;
}
const AdditionalProducts = (): JSX.Element => {
  const [productItems, setProductItems] = useState<productItems[]>([
    {
      id: 1,
      image: "/catalog/products/product-1.png",
      name: "Самогонный аппарат Союз 37 л",
      url: "/samogonovarenie/perehodniki-i-povoroty/perehodnik",
      price: 23350,
      oldPrice: 24490,
    },
    {
      id: 2,
      image: "/main/products-new/product-2.png",
      name: "Самогонный аппарат Organic",
      url: "/samogonovarenie/perehodniki-i-povoroty/perehodnik",
      price: 7990,
      oldPrice: 15990,
    },
    {
      id: 3,
      image: "/catalog/products/product-3.png",
      name: "Самогонный аппарат Витязь 15 л",
      url: "/samogonovarenie/perehodniki-i-povoroty/perehodnik",
      price: 10990,
      oldPrice: 15990, 
    },
    {
      id: 4,
      image: "/catalog/products/product-4.png",
      name: "Самогонный аппарат Булат",
      url: "/samogonovarenie/perehodniki-i-povoroty/perehodnik",
      price: 23350,
      oldPrice: 25990,
    },
    {
      id: 5,
      image: "/catalog/products/product-3.png",
      name: "Самогонный аппарат Витязь 15 л",
      url: "/samogonovarenie/perehodniki-i-povoroty/perehodnik",
      price: 10990,
      oldPrice: 15990,
    },
    {
      id: 6,
      image: "/catalog/products/product-4.png",
      name: "Самогонный аппарат Булат",
      url: "/samogonovarenie/perehodniki-i-povoroty/perehodnik",
      price: 23350,
      oldPrice: 25990,
    },
  ]);
  return (
    <section className={styles.main}>
      <div className="container">
        <TitleBox>С этим товаром покупают:</TitleBox>

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
                  spaceBetween: 10,
                },
              }}
            >
              {productItems.map((item) => (
                <SwiperSlide key={item.id} className={styles.slide_item}>
                  <Products classItem={styles.product} product={item} />
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

export default AdditionalProducts;
