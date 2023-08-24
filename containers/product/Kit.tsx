import styles from "@product/kit.module.scss";
import Image from "next/image";
type Props = {
  classItem?: string;
};
const Kit: React.FC<Props> = ({ classItem }): JSX.Element => {
  return (
    <div className={`${styles.main} ${classItem}`}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Выгодный комплект!</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.item_img}>
              <Image
                src={"/product/about/kit-1.jpg"}
                alt="arrow"
                width={104}
                height={93}
              />
            </div>
            <div className={styles.item_content}>
              <h4 className={styles.item_name}>Самогонный аппарат Organic 2</h4>
              <div className={styles.item_prices}>
                <span className={styles.item_new_price}>8 490 ₽</span>
                <span className={styles.item_old_price}>16 990 ₽</span>
              </div>
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.item_img}>
              <Image
                src={"/product/about/kit-2.jpg"}
                alt="arrow"
                width={104}
                height={93}
              />
            </div>
            <div className={styles.item_content}>
              <h4 className={styles.item_name}>
                Увеличитель куба для Organic 2 на 10, 20 л
              </h4>
              <div className={styles.item_prices}>
                <span className={styles.item_new_price}>1 500 ₽</span>
                <span className={styles.item_old_price}>2 650 ₽</span>
              </div>
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.item_img}>
              <Image
                src={"/product/about/kit-3.jpg"}
                alt="arrow"
                width={104}
                height={93}
              />
            </div>
            <div className={styles.item_content}>
              <h4 className={styles.item_name}>
                Набор прокладок для Organic 2
              </h4>
              <div className={styles.item_prices}>
                <span className={styles.item_new_price}>1 590 ₽</span>
                <span className={styles.item_old_price}>2 250 ₽</span>
              </div>
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.item_img}>
              <Image
                src={"/product/about/kit-4.jpg"}
                alt="arrow"
                width={104}
                height={93}
              />
            </div>
            <div className={styles.item_content}>
              <h4 className={styles.item_name}>Дефлегматор Organic&nbsp;2</h4>
              <div className={styles.item_prices}>
                <span className={styles.item_new_price}>2 490 ₽</span>
                <span className={styles.item_old_price}>4 000 ₽</span>
              </div>
            </div>
          </li>
        </ul>
        <button className={styles.btn_other}>Добавить другие товары</button>
        <div className={styles.total}>
          <span className={styles.sum}>Сумма:&nbsp;25&nbsp;890&nbsp;₽</span>
          <span className={styles.sale}>Сумма:&nbsp;11&nbsp;820&nbsp;₽</span>
          <span className={styles.price}>Итого:&nbsp;14&nbsp;070&nbsp;₽</span>
        </div>
        <button className={styles.btn_add}>Добавить комплект в корзину</button>
      </div>
    </div>
  );
};

export default Kit;
