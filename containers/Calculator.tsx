import TitleBox from "@/components/UI/titleBox/TitleBox";
import styles from "@account/account.module.scss";
import Image from "next/image";
const Сalculator = (): JSX.Element => {
  return (
    <section className={styles.main}>
      <div className={`container ${styles.container}`}>
        <TitleBox>Калькуляторы самогонщика</TitleBox>
        <div className={styles.row}>
          <div className={styles.img}>
            <Image
              src="/account/account.png"
              alt="account"
              width={169}
              height={169}
            />
          </div>
          <p className={styles.desc}>
            В данном разделе проводятся технические работы. Приносим свои
            извинения!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Сalculator;
