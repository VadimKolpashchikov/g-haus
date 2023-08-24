"use client";
import Products from "@/components/product/Product";
import styles from "@brand/products-popular.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SlideBtns from "@/components/UI/slideBtns/SlideBtns";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import { FC } from "react";

const ProductsPopular: FC<any> = ({ products }): JSX.Element => {
  return (
    <section className={styles.main}>
      <div className="container">
        <TitleBox icon={"/main/products-popular/products-popular-icon.svg"}>
          У нас в ассортименте
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
                  spaceBetween: 10,
                },
              }}
            >
              {products.map((item: any) => (
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

export default ProductsPopular;
