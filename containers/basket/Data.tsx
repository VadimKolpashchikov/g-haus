"use client";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import styles from "@basket/data.module.scss";
import Image from "next/image";
const Data = (): JSX.Element => {
  return (
    <section className={styles.main}>
      <div className={`container-small ${styles.container}`}>
        <div className={styles.number}>
          <span>2</span>
        </div>
        <TitleBox>Данные покупателя</TitleBox>
        <div className={styles.wrapper}>
          <div className={styles.input_wrapper}>
            <div className={styles.input_phone}>
              <div className={styles.country}>
                <Image
                  src="/basket/data/country-icon-1.png"
                  alt="country"
                  width={64}
                  height={44}
                />
              </div>
              <input
                type="text"
                className={styles.input}
                placeholder="+7 (___)___-__-__"
              />
            </div>

            <label className={styles.checkbox}>
              <input type="checkbox" className={styles.checkbox_disabled} />
              <span className={styles.checkbox_active}></span>
              <span className={styles.checkbox_text}>
                Отменить формат ввода телефона
              </span>
            </label>
          </div>
          <div className={styles.input_wrapper}>
            <input type="text" className={styles.input} placeholder="ФИО" />
          </div>
          <div className={styles.input_wrapper}>
            <input
              type="text"
              className={styles.input}
              placeholder="E-mail (не обязательно)"
            />
            <label className={styles.checkbox}>
              <input type="checkbox" className={styles.checkbox_disabled} />
              <span className={styles.checkbox_active}></span>
              <span className={styles.checkbox_text}>
                Подписаться на e-mail рассылку
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Data;
