"use client";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import styles from "@product/reviews.module.scss";
import ReviewItem from "./ReviewItem";
import { useState } from "react";
import SendBlock from "./SendBlock";
const Reviews = (): JSX.Element => {
  const [reviewsItem, setReviewsItems] = useState([
    {
      avatar: "К",
      name: "Капустяк Татьяна Борисовна",
      advantages: "Очень понравился , соответствует ожиданиям",
      date: "19 марта 2022",
      disadvantages:
        "Стеклянная царга хлюпенькая конечно но за эти деньги просто огонь,нужно затягивать сильно что бы было все герметично.",
      comment:
        "Аппарат хороший, уже испытали в деле нареканий нет работает отлично всё плотно закрывается кран не течёт. в комплекте была книга с рецептами купон на 1.000 руб инструкция и набор коньячного виски , было всё что есть в описании продавца. спасибо большое за удачную покупку .всем рекомендую.",
      gallery: [
        { src: "/product/about/review-1.jpg", width: 126, heigth: 174 },
        { src: "/product/about/review-2.jpg", width: 113, heigth: 174 },
        { src: "/product/about/review-3.jpg", width: 234, heigth: 174 },
        { src: "/product/about/review-4.jpg", width: 234, heigth: 174 },
      ],
    },
    {
      avatar: "К",
      name: "Капустяк Татьяна Борисовна",
      advantages: "Очень понравился , соответствует ожиданиям",
      date: "19 марта 2022",
      disadvantages:
        "Стеклянная царга хлюпенькая конечно но за эти деньги просто огонь,нужно затягивать сильно что бы было все герметично.",
      comment:
        "Аппарат хороший, уже испытали в деле нареканий нет работает отлично всё плотно закрывается кран не течёт. в комплекте была книга с рецептами купон на 1.000 руб инструкция и набор коньячного виски , было всё что есть в описании продавца. спасибо большое за удачную покупку .всем рекомендую.",
      gallery: [
        { src: "/product/about/review-1.jpg", width: 126, heigth: 174 },
        { src: "/product/about/review-2.jpg", width: 113, heigth: 174 },
        { src: "/product/about/review-3.jpg", width: 234, heigth: 174 },
        { src: "/product/about/review-4.jpg", width: 234, heigth: 174 },
      ],
    },
    {
      avatar: "К",
      name: "Капустяк Татьяна Борисовна",
      advantages: "Очень понравился , соответствует ожиданиям",
      date: "19 марта 2022",
      disadvantages:
        "Стеклянная царга хлюпенькая конечно но за эти деньги просто огонь,нужно затягивать сильно что бы было все герметично.",
      comment:
        "Аппарат хороший, уже испытали в деле нареканий нет работает отлично всё плотно закрывается кран не течёт. в комплекте была книга с рецептами купон на 1.000 руб инструкция и набор коньячного виски , было всё что есть в описании продавца. спасибо большое за удачную покупку .всем рекомендую.",
      gallery: [
        { src: "/product/about/review-1.jpg", width: 126, heigth: 174 },
        { src: "/product/about/review-2.jpg", width: 113, heigth: 174 },
        { src: "/product/about/review-3.jpg", width: 234, heigth: 174 },
        { src: "/product/about/review-4.jpg", width: 234, heigth: 174 },
      ],
    },
  ]);
  return (
    <section id="product-reviews-all" className={styles.main}>
      <div className="container">
        <TitleBox>Отзывы о товаре</TitleBox>
        <div className={styles.row}>
          <div className={styles.column}>
            {reviewsItem.map((item, i) => (
              <ReviewItem key={i} reviewInfo={item} classItem={styles.item} />
            ))}
          </div>
          <SendBlock />
        </div>
        <button className={styles.btn}>Смотреть все отзывы --{`>`}</button>
      </div>
    </section>
  );
};

export default Reviews;
