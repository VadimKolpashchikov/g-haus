"use client";
import styles from "@/styles/components/service.module.scss";
import Image from "next/image";

const Sevice = (): JSX.Element => {
  return (
    <section className={styles.main}>
      <div className={`container ${styles.container}`}>
        <div className={styles.row}>
          <div className={styles.content}>
            <h3 className={styles.content_title}>
              Градус Хаус° - Сервисный центр
            </h3>
            <p>Здравствуйте!</p>
            <p>
              Вы попали на страницу Сервисного центра интернет-магазина Градус
              Хаус.
            </p>
            <p>
              Сотрудники сервисного центра решат проблемы с браком и
              некомплектом, оформят возврат и компенсацию, дадут советы по
              использованию оборудования.
            </p>
            <p>Чтобы связаться с Сервисным центром, вы можете:</p>
            <ul>
              <li>заполнить форму ниже;</li>
              <li>
                написать на почту <span>service@gradushaus.ru;</span>
              </li>
              <li>
                написать в Telegram-канал <span>UserServiceBot.</span>
              </li>
            </ul>
            <p className={styles.content_bold}>
              Пожалуйста, подробно опишите свою проблему и прикрепите к заявке
              фото и видео.
            </p>
            <p className={styles.content_margin}>
              Мы ответим в ближайшее время. Будьте на связи!
            </p>
          </div>
          <div className={styles.form}>
            <div className={styles.form_name}>
              <input
                className={styles.input}
                type="text"
                placeholder="Иванов Иван Иванович"
              />
            </div>
            <div className={styles.form_email}>
              <input
                className={styles.input}
                type="text"
                placeholder="E-mail"
              />
            </div>
            <div className={styles.form_phone}>
              <input
                className={styles.input}
                type="text"
                placeholder="+7 999 999 99 99"
              />
            </div>
            <div className={styles.form_comment}>
              <textarea
                className={styles.textarea}
                placeholder="Комментарий..."
              ></textarea>
            </div>
            <div className={styles.form_order}>
              <button className={styles.form_btn} type="submit">
                Отправить
              </button>
              <span className={styles.form_file}>
                <span className={styles.form_file_name}>Прикрепить файл</span>

                <div className={styles.form_tooltip}>
                  <span className={styles.form_icon}>
                    <Image
                      src="/global/file-icon.svg"
                      alt="feature"
                      width={16}
                      height={16}
                    />
                  </span>
                  <Image
                      src="/global/polygon.svg"
                      alt="polygon"
                      className={styles.form_polygon}
                      width={32}
                      height={37}
                    />
                  <p className={styles.form_popup}>
                    Загрузите фото или видео неисправности товара. Подойдут
                    файлы: JPG, JPEG, PNG, AVI, MOV.
                    <br />
                    Прилагаемый файл не более 50 MB
                  </p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sevice;
