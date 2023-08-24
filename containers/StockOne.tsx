import styles from "@/styles/components/stockOne/stockOne.module.scss";
import Image from "next/image";

const StockOne = (): JSX.Element => {
  return (
    <section className={styles.main}>
      <div className={`container ${styles.container}`}>
        <div className={styles.info}>
          <span className={styles.views}>
            <Image
              src={"/global/eye-icon.svg"}
              alt="eye"
              width={22}
              height={13}
            />
            18474
          </span>
          <span className={styles.date}>
            <Image
              src={"/global/stock-icon.png"}
              alt="stock"
              width={20}
              height={20}
            />
            До 27 января
          </span>
        </div>
        <div className={styles.img}>
          <Image
            src={"/stockOne/stock-one-hero.jpg"}
            alt="stock"
            width={991}
            height={237}
          />
        </div>
        <div className={styles.desc_block}>
          <p className={styles.desc}>
            Доставим быстрее, чем сани Деда Мороза!Боитесь заказывать подарки
            через интернет в канун новогодних праздников из-за проблем с
            отправлениями?
          </p>
          <p className={styles.desc}>
            Порадуйте себя и своих близких продукцией Helicon! Мы позаботимся о
            том, чтобы все покупки пришли точно в срок!Создайте зимнее
            настроение — выбирайте подарки уже сейчас. Всё остальное мы возьмём
            на себя!
          </p>
        </div>
      </div>
    </section>
  );
};

export default StockOne;
