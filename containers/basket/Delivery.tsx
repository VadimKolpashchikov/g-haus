"use client";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import styles from "@basket/delivery.module.scss";
import Image from "next/image";
const Delivery = (): JSX.Element => {
  return (
    <section className={styles.main}>
      <div className={`container-small ${styles.container}`}>
        <div className={styles.number}>
          <span>4</span>
        </div>
        <TitleBox>Выберите способ получения</TitleBox>
        <div className={styles.box}>
          <div className={styles.block_checkbox}>
            <label className={styles.checkbox}>
              <input className={styles.checkbox_disabled} type="checkbox" />
              <div className={styles.checkbox_active}>
                <h3 className={styles.checkbox_title}>Доставка курьером</h3>
                <span className={styles.checkbox_info}>До двери</span>
              </div>
            </label>
          </div>
          <div className={styles.block_checkbox}>
            <label className={styles.checkbox}>
              <input className={styles.checkbox_disabled} type="checkbox" />
              <div className={styles.checkbox_active}>
                <h3 className={styles.checkbox_title}>
                  Доставка в пункт выдачи
                </h3>
                <span className={styles.checkbox_info}>
                  В отделение почты или офис транспортной компании
                </span>
              </div>
            </label>
          </div>
          <div className={styles.block_checkbox}>
            <label className={styles.checkbox}>
              <input className={styles.checkbox_disabled} type="checkbox" />
              <div className={styles.checkbox_active}>
                <h3 className={styles.checkbox_title}>Самовывоз</h3>
                <span className={styles.checkbox_info}>Киров</span>
              </div>
            </label>
          </div>
        </div>
        <div className={styles.city}>
          <input
            type="text"
            className={styles.input}
            placeholder="Ваш адрес (город, улица, дом, квартира)"
          />
        </div>
      </div>
    </section>
  );
};

export default Delivery;
