"use client";
import styles from "@subcatalog/productsBlock.module.scss";
import { useState } from "react";
import Products from "@/components/product/Product";
import Filter from "@/containers/modals/filter/Filter";
import Image from "next/image";
import useWindowWidth from "@/hooks/useWindowWidth";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/getModals";
interface productItems {
  id: number;
  image: string;
  name: string;
  url: string;
  price: number;
  oldPrice: number;
}
const ProductsBlock = (): JSX.Element => {
  const dispatch = useDispatch();
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
  const windowWidth = useWindowWidth(1549);
  return (
    <section className={styles.main}>
      <div className="container">
        {windowWidth ? (
          <div className={styles.sort}>
            <button className={styles.popular_btn}>
              Сначала популярные
              <Image
                src="/subcatalog/popular-icon.svg"
                alt="sort"
                width={22}
                height={20}
              />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(openModal("filter"));
                NativeFancybox.show([{ src: "#modal" }]);
              }}
              className={styles.filter_btn}
            >
              <Image
                src="/subcatalog/sort-icon.svg"
                alt="sort"
                width={26}
                height={22}
              />
            </button>
          </div>
        ) : (
          ""
        )}

        <div className={styles.row}>
          <Filter classItem={styles.filter} />
          <div className={styles.column}>
            <div className={styles.wrapper_products}>
              {productItems.map((item) => (
                <Products
                  key={item.id}
                  classItem={styles.product}
                  product={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsBlock;
