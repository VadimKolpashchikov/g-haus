import styles from "./review.module.scss";
import { HandySvg } from "handy-svg";
import { useState } from "react";

const Review = (): JSX.Element => {
  const [starCount, setStarCount] = useState<number>(0);
  return (
    <div className={styles.main}>
      <h3 className={styles.title}>
        Отзыв о <span>Самогонный аппарат Organic&nbsp;2</span>
      </h3>
      <div className={styles.box}>
        <div className={styles.phone}>
          <input
            type="text"
            className={styles.input}
            placeholder="+7 (___)___-__-__"
          />
        </div>
        <div className={styles.name}>
          <input type="text" className={styles.input} placeholder="ФИО" />
        </div>
        <div className={styles.advantages}>
          <textarea
            className={styles.input}
            placeholder="Достоинства"
          ></textarea>
        </div>
        <div className={styles.disadvantages}>
          <textarea
            className={styles.input}
            placeholder="Недостатки"
          ></textarea>
        </div>
        <div className={styles.comment}>
          <textarea
            className={styles.input}
            placeholder="Комментарий"
          ></textarea>
        </div>
      </div>
      <div className={styles.rating}>
        {[...Array(5)].map((item, i) => (
          <div onClick={() => setStarCount(i + 1)} key={i}>
            <HandySvg
              className={`icon ${styles.star_icon} ${
                starCount > i ? styles.star_active : ""
              }`}
              src={"/global/star-default.svg"}
              width="59"
              height="56"
            />
          </div>
        ))}
      </div>
      <button className={styles.btn}>Отправить</button>
      <p className={styles.info}>
        В течение 24 часов ваш отзыв пройдет модерацию и будет опубликован
      </p>
    </div>
  );
};

export default Review;
