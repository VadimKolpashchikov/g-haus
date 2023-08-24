"use client";

import cl from "./rassrochka.module.scss";
import InputMask from "react-input-mask";
import Image from "next/image";
import { getSumFormat } from "@/util/getSumFormat";

const Rassrochka = (): JSX.Element => {
  return (
    <div className={cl.wrap}>
      <div className={cl.titleWrap}>
        <Image
          src={"/global/tinkoff.png"}
          alt="Тинькофф"
          width={86}
          height={77}
        />
        <p className={cl.title}>Покупка в рассрочку от Тинькофф</p>
      </div>
      <div className={cl.box}>
        <div className={cl.imgBox}>
          <Image
            src={"/main/products-new/product-1.png"}
            alt="Тинькофф"
            width={193}
            height={280}
          />
          <p className={cl.productName}>Автоклав Булат Стандарт</p>
          <div className={cl.priceWrap}>
            <p className={cl.price}>
              <span>{getSumFormat("12 850")}</span> ₽
            </p>
            <p className={cl.oldPrice}>
              <span>{getSumFormat("23 350")}</span> ₽
            </p>
          </div>
        </div>
        <div className={cl.formBox}>
          <form action="#" className={cl.form}>
            <InputMask
              mask="+7 999 999 99 99"
              type="text"
              placeholder="+7 (___)-___-__-__"
              name="phone"
            />
            <input type="text" placeholder="ФИО" name="name" />
            <button type="submit">Заказать</button>
          </form>
          <p className={cl.comment}>
            После отправки контактной информации наш менеджер свяжется с Вами
            и&nbsp;проконсультирует по любому вопросу
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rassrochka;
