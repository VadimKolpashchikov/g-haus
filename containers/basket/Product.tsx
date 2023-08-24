"use client";
import styles from "@basket/product.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { removeToBasket, changeQuantity } from "@/store/basketSlice";
import { addFavorite } from "@/store/favoritesSlice";
import { useState } from "react";

const Product = ({
  product,
  number,
}: {
  product: any;
  number: number;
}): JSX.Element => {
  const dispatch = useDispatch();
  const addedFavorite = Object.keys(
    useSelector((state: RootState) => state.favorites.favorites)
  );
  const [quantity, setQuantity] = useState(product.quantity || 1);
  function increaseQuantity() {
    let quan = quantity + 1;
    setQuantity(quan);
    dispatch(changeQuantity({ id: product.id, q: quan }));
  }
  function reduceQuantity() {
    let quan = quantity - 1;
    if (quan < 1) {
      setQuantity(1);
      dispatch(changeQuantity({ id: product.id, q: 1 }));
    } else {
      setQuantity(quan);
      dispatch(changeQuantity({ id: product.id, q: quan }));
    }
  }
  return (
    <div className={styles.item}>
      <div className={styles.item_block_img}>
        <div className={styles.item_img}>
          <Image
            src={process.env.IMG_URL + product.image}
            alt="#"
            width={193}
            height={280}
          />
        </div>
      </div>
      <div className={styles.item_block_title}>
        <h3 className={styles.item_title}>{product.name}</h3>
        <span className={styles.item_text}>Артикул: 0{number}-00041325</span>
      </div>
      <div className={styles.item_block_controls}>
        <div className={styles.item_controls}>
          <span className={styles.item_minus} onClick={reduceQuantity}>
            <Image
              src={"/basket/products/minus.svg"}
              alt="#"
              width={11}
              height={3}
            />
          </span>
          <span className={styles.item_count}>{quantity}</span>
          <span className={styles.item_plus} onClick={increaseQuantity}>
            <Image
              src={"/basket/products/plus.svg"}
              alt="#"
              width={12}
              height={12}
            />
          </span>
        </div>
        <div className={styles.item_buttons}>
          <button
            className={styles.item_delete}
            onClick={(e) => {
              e.preventDefault();
              dispatch(removeToBasket(product));
            }}
          >
            Удалить
          </button>
          <button
            className={styles.item_favorites}
            onClick={(e) => {
              e.preventDefault();
              dispatch(addFavorite({ ...product, quantity: 1 }));
            }}
          >
            {addedFavorite.includes(`${product.id}`)
              ? "Из избранное"
              : "В избранное"}
          </button>
        </div>
      </div>
      <div className={styles.item_block_prices}>
        <span className={styles.item_new_price}>
          {product.price.toLocaleString()} ₽
        </span>
        <span className={styles.item_old_price}>
          {product.old_price.toLocaleString()} ₽
        </span>
      </div>
    </div>
  );
};

export default Product;
