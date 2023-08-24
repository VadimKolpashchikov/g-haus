"use client";
import styles from "./basket-modal.module.scss";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { getSumFormat } from "@/util/getSumFormat";
import Link from "next/link";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
const BasketModal = (): JSX.Element => {
  const currentProduct = useSelector(
    (state: RootState) => state.basket.currentProduct
  );

  return (
    <div className={styles.main}>
      <h3 className={styles.title}>Товар добавлен в&nbsp;корзину</h3>
      {currentProduct ? (
        <div className={styles.productWrap}>
          <div className={styles.productImgWrap}>
            <Image
              src={process.env.IMG_URL + currentProduct.image}
              alt={currentProduct.name || "Продукт"}
              width={65}
              height={65}
            />
          </div>
          <p
            className={styles.productName}
            dangerouslySetInnerHTML={{ __html: currentProduct.name }}
          ></p>
          <div className={styles.productPriceWrap}>
            <span className={styles.productPrice}>
              {getSumFormat(currentProduct.price)} ₽
            </span>
            <span className={styles.productOldPrice}>
              {getSumFormat(currentProduct.old_price)} ₽
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className={styles.btnWrap}>
        <Link
          href="/basket"
          onClick={() => {
            NativeFancybox.close();
          }}
          className={styles.btn_toBasket + " " + styles.btn}
        >
          Перейти к&nbsp;оформлению&nbsp;заказа
        </Link>
        <button
          onClick={() => {
            NativeFancybox.close();
          }}
          className={styles.btn_continueShopping + " " + styles.btn}
        >
          Продолжить покупки
        </button>
      </div>
    </div>
  );
};

export default BasketModal;
