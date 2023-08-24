"use client";
import BtnAddBasket from "../UI/btnAddBasket/BtnAddBasket";
import styles from "./product-btn-bottom.module.scss";
import Image from "next/image";
import { HandySvg } from "handy-svg";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { addFavorite } from "@/store/favoritesSlice";

interface IProducts {
  product: any;
  video?: string;
}

const ProductBtnBottom: React.FC<IProducts> = ({
  product,
  video = "https://youtu.be/Syw7psvN1vE",
}): JSX.Element => {
  const dispatch = useDispatch();
  const addedFavorite = Object.keys(
    useSelector((state: RootState) => state.favorites.favorites)
  );

  return (
    <div className={styles.row_bottom}>
      <BtnAddBasket classItem={styles.btn} product={product} />
      <div className={styles.row_icons}>
        <button
          type="button"
          className={styles.video}
          onClick={(e) => {
            e.preventDefault();
            NativeFancybox.show([{ src: video }]);
          }}
        >
          <span className={styles.video_icon}>
            <Image
              src={"/global/video-icon.svg"}
              alt="video"
              width={33}
              height={33}
            />
          </span>
          <span className={styles.video_text}>видео</span>
        </button>
        <button
          type="button"
          className={
            styles.favorites +
            " " +
            (addedFavorite.includes(`${product.id}`)
              ? styles.favorites_add
              : "")
          }
          onClick={(e) => {
            e.preventDefault();
            dispatch(addFavorite(product));
          }}
        >
          <HandySvg
            className={"icon"}
            src={"/global/favorites-icon.svg"}
            width="31"
            height="27"
          />
        </button>
      </div>
    </div>
  );
};

export default ProductBtnBottom;
