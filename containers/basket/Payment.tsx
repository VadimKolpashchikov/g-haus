"use client";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import styles from "@basket/payment.module.scss";
import Image from "next/image";
const Payment = (): JSX.Element => {
  return (
    <section className={styles.main}>
      <div className={`container-small ${styles.container}`}>
        <div className={styles.number}>
          <span>3</span>
        </div>
        <TitleBox>Выберите способ оплаты</TitleBox>
        <div className={styles.wrapper}>
          <label className={styles.checkbox}>
            <div className={styles.checkbox_wrapper}>
              <input className={styles.checkbox_disabled} type="checkbox" />
              <span className={styles.checkbox_active}></span>
              <span className={styles.checkbox_name}>
                При получении наличными или картой
              </span>
            </div>
            <div className={styles.checkbox_img}></div>
          </label>

          <label className={styles.checkbox}>
            <div className={styles.checkbox_wrapper}>
              <input className={styles.checkbox_disabled} type="checkbox" />
              <span className={styles.checkbox_active}></span>
              <span className={styles.checkbox_name}>Оплата&nbsp;онлайн</span>
            </div>
            <div className={styles.checkbox_img}>
              <Image
                src="/basket/payment/payment.png"
                alt="payment"
                width={246}
                height={28}
              />
            </div>
          </label>

          <label className={styles.checkbox}>
            <div className={styles.checkbox_wrapper}>
              <input className={styles.checkbox_disabled} type="checkbox" />
              <span className={styles.checkbox_active}></span>
              <span className={styles.checkbox_name}>В рассрочку</span>
            </div>
            <div className={styles.checkbox_img}>
              <Image
                src="/basket/payment/tinkoff.svg"
                alt="tinkoff"
                width={88}
                height={28}
              />
            </div>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Payment;
