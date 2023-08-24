import styles from "@product/sendBlock.module.scss";
import Image from "next/image";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/getModals";
const SendBlock = (): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <span className={styles.top_rating}>
          <Image src={"/global/star.svg"} alt="rating" width={24} height={24} />
          <Image src={"/global/star.svg"} alt="rating" width={24} height={24} />
          <Image src={"/global/star.svg"} alt="rating" width={24} height={24} />
          <Image src={"/global/star.svg"} alt="rating" width={24} height={24} />
          <Image src={"/global/star.svg"} alt="rating" width={24} height={24} />
        </span>
        <span className={styles.top_count}>4.91 / 5</span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottom_item}>
          <span className={styles.bottom_stars}>5 звезд</span>
          <span className={styles.bottom_border}></span>
          <span className={styles.bottom_count}>35</span>
        </div>
        <div className={styles.bottom_item}>
          <span className={styles.bottom_stars}>4 звезды</span>
          <span className={styles.bottom_border}></span>
          <span className={styles.bottom_count}>12</span>
        </div>
        <div className={styles.bottom_item}>
          <span className={styles.bottom_stars}>3 звезды</span>
          <span className={styles.bottom_border}></span>
          <span className={styles.bottom_count}>0</span>
        </div>
        <div className={styles.bottom_item}>
          <span className={styles.bottom_stars}>2 звезды</span>
          <span className={styles.bottom_border}></span>
          <span className={styles.bottom_count}>0</span>
        </div>
        <div className={styles.bottom_item}>
          <span className={styles.bottom_stars}>1 звезда</span>
          <span className={styles.bottom_border}></span>
          <span className={styles.bottom_count}>0</span>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(openModal("review"));
          NativeFancybox.show([{ src: "#modal" }]);
        }} 
        className={styles.btn}
      >
        Оставить отзыв
      </button>
    </div>
  );
};

export default SendBlock;
