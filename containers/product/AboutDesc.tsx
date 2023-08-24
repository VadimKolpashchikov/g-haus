"use client";
import Image from "next/image";
import styles from "@product/about-desc.module.scss";

const AboutDesc = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <div className={styles.content}>
          <h3>Главные преимущества</h3>
          <p>1. Ускоренная на 23% перегонка</p>
          <p>
            2. Благодаря запатентованному холодильнику с 5 спиральными трубками
          </p>
          <p>3. 6 уникальных чешуйчатых тарелок</p>
          <p>4. Они действительно работают, в отличие от аналогов</p>
          <p>5. Целый бар в одном аппарате</p>
          <p>
            6. Готовьте дистиллят, виски, пиво и десятки других напитков прямо
            дома
          </p>
          <p>7. Стеклянная царга, как в дорогом аппарате</p>
          <p>8. Контролируйте процесс с её помощью от и до</p>
        </div>
        <div className={styles.content}>
          <h3>Уникальная стеклянная царга</h3>
          <p>
            <b>Контролируйте процесс</b>
          </p>
          <p>
            <b>Получайте вкусные и чистые напитки с первой перегонки</b>
          </p>
          <p>
            Вместо привычной стальной колонны в Organiс стоит уникальная
            стеклянная царга. С ней перегонка как на ладони.
          </p>
          <p>
            Вы не пропустите захлёб или брызгоунос. А ещё — сможете с
            удовольствием любоваться барботажем.
            <br />
            Прочное боросиликатное стекло легко переносит нагрев до 180 °C.
          </p>
          <p>
            Оно не боится перепадов температуры и не разобъётся при случайном
            падении.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src={"/product/about/product-item-1.jpg"}
            alt="product-item-1"
            width={553}
            height={764}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.content}>
          <p>
            Внутри царги — 6 чешуйчатых тарелок, через которые пар проходит
            волнами — от края нижней к другому краю верхней.
          </p>
          <p>
            Так он задерживается внутри, поэтому на 32% эффективнее орошается
            флегмой, в сравнении с обычными тарелками. Это именно наша
            разработка, которую не встретить в царгах других аппаратов
          </p>
          <p>
            На поверхность тарелок можно выложить фрукты, ароматные травы и
            очищающие насадки. Пар пройдёт через них, и уже с первой перегонкой
            вы получите вкусный и чистый домашний напиток.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src={"/product/about/product-item-2.jpg"}
            alt="product-item-3"
            width={553}
            height={335}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.content}>
          <h3>Мощный спиральный холодильник</h3>
          <p>
            <b>Холодный и чистый продукт — в 5 раз быстрее и эффективнее.</b>
          </p>
          <p>
            Холодильник аппарата использует продвинутую систему охлаждения: в
            нём 5 закрученных спиралью трубок, которые оставляют далеко позади
            аппараты с рубашечной системой и змеевиком.
          </p>
          <p>
            *5 суперэффективных спиральных трубок Из-за подобной формы трубок
            сам узел стал компактнее, а площадь охлаждения — больше, чем в
            холодильниках с прямыми трубками.
          </p>
          <p>
            *На 10,5% больше площадь охлаждения Сталкиваясь со спиралями,
            проточная вода перемешивается внутри узла. От этого улучшается
            охлаждение и повышается общий КПД. А спиртовые пары конденсируются
            почти что моментально.
            <br />
            <br />
            *На 23% выше КПД холодильника
            <br />
            *В 5 раз быстрее перегонка
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src={"/product/about/product-item-3.jpg"}
            alt="product-item-3"
            width={553}
            height={575}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.content}>
          <h3>Объём — не вопрос: выбирайте сразу или добавляйте потом</h3>
          <ul>
            <li>
              Начальный объём куба — 15 литров, но его легко можно увеличить
              дополнительными модулями по 10 литров.
            </li>
            <li>
              Модули крепятся стяжными хомутами с силиконовыми прокладками. Куб
              всегда останется абсолютно герметичным и устойчивым.
            </li>
            <li>
              При необходимости, в зависимости от этапа перегонки, куб легко
              увеличивается и уменьшается.
            </li>
          </ul>
        </div>
        <div className={styles.img}>
          <Image
            src={"/product/about/product-item-4.jpg"}
            alt="product-item-4"
            width={553}
            height={320}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.content}>
          <h3>Проблемы фильтруются, возможности добавляются</h3>
          <p>
            Organiс расширит ваши горизонты, ведь с ним можно варить не только
            классические сахарные, но и густые, зерновые/фруктовые браги или
            даже пиво. Просто поместите в бак специальное сито! Оно заметно
            облегчит фильтрацию солода от дистиллятов. Если консистенция густая,
            сито не даст гуще опуститься на дно и пригореть.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src={"/product/about/product-item-5.jpg"}
            alt="product-item-5"
            width={554}
            height={288}
          />
        </div>
      </div>
      <button className={styles.btn}>Показать ещё</button>
    </div>
  );
};

export default AboutDesc;