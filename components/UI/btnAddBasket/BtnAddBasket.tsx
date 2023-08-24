import cl from "./btnAddBasket.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { addToBasket } from "@/store/basketSlice";
import { Daum } from "@/models/productsNew";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { openModal } from "@/store/getModals";
type Props = {
  classItem: string;
  product?: Daum | any;
};
const BtnAddBasket: React.FC<Props> = ({ classItem, product }): JSX.Element => {
  const dispatch = useDispatch();
  const addedBasket = useSelector((state: RootState) => state.basket.basket);
  return (
    <button
      type="button"
      className={`${cl.btnAddBasket} ${classItem} 
      ${`${product.id}` in addedBasket ? cl.btnAddBasket_added : ""}
      `}
      onClick={(e) => {
        e.preventDefault();
        if (`${product.id}` in addedBasket) {
        } else {
          dispatch(openModal("basketModal"));
          NativeFancybox.show([{ src: "#modal" }]);
        }
        dispatch(addToBasket(product));
      }}
    >
      <div className={`${cl.btnAddBasket__icon} icon`}>
        <Image
          src={"/global/basket-icon.svg"}
          width={19}
          height={17}
          alt={"basket"}
        />
      </div>
      <span className={`${cl.btnAddBasket__text} text`}>
        {`${product.id}` in addedBasket ? "Добавлен" : "В корзину"}
      </span>
    </button>
  );
};

export default BtnAddBasket;
