import styles from "./thankSubscription.module.scss";
import Image from "next/image";

const ThankSubscription = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <h3 className={styles.title}>Благодарим за подписку</h3>
      <p className={styles.desc}>
        Каждую неделю мы будем радовать Вас интересными рецептами и
        спецпредложениями
      </p>
      <div className={styles.img}>
        <Image src="/modals/laptop.png" alt="laptop" width={311} height={280} />
      </div>
    </div>
  );
};

export default ThankSubscription;
