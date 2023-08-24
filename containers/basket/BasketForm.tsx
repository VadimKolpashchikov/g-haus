"use client";
import cl from "@basket/basket-form.module.scss";
import Data from "@/containers/basket/Data";
import Delivery from "@/containers/basket/Delivery";
import Payment from "@/containers/basket/Payment";
import Products from "@/containers/basket/Products";
import Summative from "@/containers/basket/Summative";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const BasketForm = (): JSX.Element => {
  const addedBasket = Object.values(
    useSelector((state: RootState) => state.basket.basket)
  );
  return (
    <>
      {addedBasket.length ? (
        <form action="#" className={cl.basketForm}>
          <Products addedBasket={addedBasket} />
          <Data />
          <Payment />
          <Delivery />
          <Summative addedBasket={addedBasket} />
        </form>
      ) : (
        <div className="container">
          <TitleBox>
            <>
              В настоящее время товары в корзине отсутствуют!
              <br /> Добавте товар в корзину.
            </>
          </TitleBox>
        </div>
      )}
    </>
  );
};

export default BasketForm;
