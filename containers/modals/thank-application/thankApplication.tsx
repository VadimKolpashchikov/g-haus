import styles from "./thankApplication.module.scss";
import Image from "next/image";

const ThankApplication = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <h3 className={styles.title}>Благодарим за заявку</h3>
      <p className={styles.desc}>
        Наш менеджер уже получил Ваше обращение, в ближайшее время он свяжется с
        Вами и ответит на все интересующие Вас вопросы
      </p>
      <div className={styles.img}>
        <Image
          src="/modals/phone.png"
          alt="phone"
          width={182}
          height={274}
        />
      </div>
    </div>
  );
};

export default ThankApplication;
