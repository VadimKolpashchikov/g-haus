import styles from "@product/about-info.module.scss";

const AboutInfo = (): JSX.Element => {
  return (
    <ul className={styles.main}>
      <li className={styles.item}>
        <span className={styles.name}>Диаметр штуцеров для шлангов, мм</span>
        <span className={styles.value}>8</span>
      </li>
      <li className={styles.item}>
        <span className={styles.name}>Объем</span>
        <span className={styles.value}>15 л</span>
      </li>
      <li className={styles.item}>
        <span className={styles.name}>Толщина днища, мм</span>
        <span className={styles.value}>1</span>
      </li>
      <li className={styles.item}>
        <span className={styles.name}>Клапан сброса давления, атм</span>
        <span className={styles.value}>1.5</span>
      </li>
      <li className={styles.item}>
        <span className={styles.name}>Габариты</span>
        <span className={styles.value}>410x310x775 мм</span>
      </li>
      <li className={styles.item}>
        <span className={styles.name}>Толщина стенок, мм</span>
        <span className={styles.value}>1</span>
      </li>
      <li className={styles.item}>
        <span className={styles.name}>Производительность, л/ч</span>
        <span className={styles.value}>6</span>
      </li>
      <li className={styles.item}>
        <span className={styles.name}>Вес</span>
        <span className={styles.value}>5.5 кг</span>
      </li>
    </ul>
  );
};

export default AboutInfo;
