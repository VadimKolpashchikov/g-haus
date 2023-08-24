"use client";
import styles from "@product/about-answer.module.scss";
import Image from "next/image";
const AboutAnswer = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <button className={styles.btn}>Задать вопрос</button>
      <div className={styles.info}>
        <span>Вопросы: 3</span>
        <span>Ответы: 3</span>
        <span>Вопросы без ответа: 0</span>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.item_title}>
            Хотел узнать про старую цену!? Реально нет приобрести по старой
            цене, доллор упал так то!
          </h3>
          <div className={styles.item_info}>
            <span className={styles.item_name}>
              <Image
                src={"/product/about/avatar.svg"}
                alt="avatar"
                width={14}
                height={16}
              />
              Иван
            </span>
            <span className={styles.item_date}>24 ноября 2022г. 16:35</span>
            <button className={styles.item_btn}>
              Ответить
              <Image
                src={"/product/about/arrow-answer.svg"}
                alt="arrow"
                width={9}
                height={16}
              />
            </button>
          </div>
          <div className={styles.item_answer}>
            <p className={styles.item_text}>
              Здравствуйте, к сожалению цены актуальные указаны на сайте, по
              старой цене приобрести не получится, но мы можем вам сделать
              скидку. Подробно вы можете узнать на почте info@gradus-haus.ru
            </p>
            <div className={styles.item_info}>
              <span className={styles.item_name}>
                <Image
                  src={"/product/about/icon-company.svg"}
                  alt="icon"
                  width={15}
                  height={20}
                />
                Градус Хааус
              </span>
              <span className={styles.item_date}>24 ноября 2022г. 16:35</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AboutAnswer;
