import styles from "@product/about-reviews.module.scss";
import ReviewItem from "./ReviewItem";
import { useState } from "react";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { HandySvg } from "handy-svg";
const AboutReviews = (): JSX.Element => {
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
    <div className={styles.main}>
      {reviewsItem.map((item, i) => (
        <ReviewItem key={i} reviewInfo={item} classItem={styles.item} />
      ))}
      <div className={styles.btnWrap}>
        <LinkScroll
          to={"product-reviews-all"}
          smooth={"easeInOutQuad"}
          offset={-200}
        >
          <span>Смотреть все отзывы</span>
          <div>
            <HandySvg
              className={"icon"}
              src={"/global/link-arrow-icon.svg"}
              width="6"
              height="9"
            />
          </div>
        </LinkScroll>
      </div>
    </div>
  );
};

export default AboutReviews;
