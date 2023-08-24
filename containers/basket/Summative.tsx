"use client";

import { getSumFormat } from "@/util/getSumFormat";
import cl from "@basket/summative.module.scss";
import { useMemo } from "react";
const Summative = ({ addedBasket }: { addedBasket: any }): JSX.Element => {
  const priceAll = useMemo(() => {
    const sumObj = {
      price: 0,
      oldPrice: 0,
    };
    addedBasket.forEach((p: any) => {
      sumObj.price += p.price;
      sumObj.oldPrice += p.old_price;
    });
    return sumObj;
  }, [addedBasket]);

  return (
    <div className={cl.summative}>
      <div className="container-small">
        <div className="row">
          <p className={cl.sumTotal}>
            Итого: {getSumFormat(priceAll.price)} ₽{" "}
            <span>{getSumFormat(priceAll.oldPrice)} ₽</span>
          </p>
          <div className={cl.btnBox}>
            <div className={cl.number}>
              <span>5</span>
            </div>
            <button className={cl.btnSubmit} type="submit">
              Подтвердить заказ
            </button>
          </div>
          <p className={cl.comment}>
            После оформления заказа наш менеджер свяжется с Вами и уточнит все
            параметры заказа и доставки. Нажимая «Подтвердить заказ», вы
            соглашаетесь c условиями использования{" "}
            <a href="#">магазина Градус Хаус</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summative;
