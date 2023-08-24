"use client";
import cl from "@product/product-detals.module.scss";
import { getSumFormat } from "@/util/getSumFormat";
import { HandySvg } from "handy-svg";
import Image from "next/image";
import { useState } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/getModals";

const ProductDetails = (): JSX.Element => {
  const dispatch = useDispatch();
  const [addFavorit, setAddFavorit] = useState(false);
  return (
    <div className={cl.main}>
      <div className={cl.priceBox}>
        <p className={cl.price}>
          <span>{getSumFormat(7990)}</span>&nbsp;₽
        </p>
        <p className={cl.oldPrice}>
          <span>{getSumFormat(15990)}</span>&nbsp;₽
        </p>
      </div>
      <div className={cl.btnsBox}>
        <button className={cl.btnBasket}>
          <HandySvg
            className={"icon"}
            src={"/global/basket-icon.svg"}
            width="42"
            height="32"
          />
          <span>В корзину</span>
        </button>
        <button
          className={cl.btnRassroch}
          onClick={(e) => {
            dispatch(openModal("rassrochka"));
            NativeFancybox.show([{ src: "#modal" }]);
          }}
        >
          <Image
            src={"/global/tinkoff.png"}
            alt="Тинькофф"
            width={46}
            height={42}
          />
          <span>В рассрочку</span>
        </button>
        <div className={cl.linksBox}>
          <a
            href="#"
            className={
              cl.linkOneSelected +
              " " +
              (addFavorit ? cl.linkOneSelected_add : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setAddFavorit(!addFavorit);
            }}
          >
            <HandySvg
              className={"icon"}
              src={"/global/heart-icon.svg"}
              width="25"
              height="21"
            />
            <span>В избранное</span>
          </a>
          <a href="#" className={cl.linkOneClick}>
            <HandySvg
              className={"icon"}
              src={"/global/click-icon.svg"}
              width="21"
              height="21"
            />
            <span>Купить в 1 клик</span>
          </a>
        </div>
      </div>

      <div className={cl.rassrochkaBox}>
        <div className={cl.rassrochkaWrap}>
          <div className={cl.rassrochkaTitle}>
            <Image
              src={"/global/rassrochka-round.svg"}
              alt="Возьми в рассрочку!"
              width={25}
              height={24}
            />
            <span>Возьми в рассрочку!</span>
          </div>

          <ul className={cl.rassrochkaList}>
            <li>Первоначальный взнос - 0%</li>
            <li>Переплата - 0 рублей!</li>
            <li>Сроком на 4 месяца</li>
          </ul>
        </div>

        <a className={cl.rassrochkaLink} href="#">
          Подробнее
        </a>
      </div>
    </div>
  );
};

export default ProductDetails;
