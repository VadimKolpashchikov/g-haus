"use client";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import cl from "@product/product-head.module.scss";
import Image from "next/image";
import { HandySvg } from "handy-svg";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

const ProductHead = (): JSX.Element => {
  return (
    <div className={cl.main}>
      <TitleBox classItem={cl.title}>
        Самогонный аппарат Organic 2 (12 литров)
      </TitleBox>
      <div className={cl.infoBox}>
        <div className={cl.rating}>
          {[...Array(5)].map((el, i) => (
            <HandySvg
              key={i}
              className={"icon"}
              src={"/product/head/rating-star.svg"}
              width="17"
              height="17"
            />
          ))}
          <span>4,9</span>
        </div>
        <div className={cl.reviews}>
          <LinkScroll
            to={"product-reviews-all"}
            smooth={"easeInOutQuad"}
            offset={-200}
          >
            <span>12</span>&nbsp;отзывов
          </LinkScroll>
        </div>
        <div className={cl.guarantee}>
          <HandySvg
            className={"icon"}
            src={"/product/head/guarantee.svg"}
            width="15"
            height="18"
          />

          <span>Гарантия 3 года</span>
        </div>
        <a href="#" className={cl.instruction}>
          <Image
            src={"/product/head/instruction.svg"}
            alt="Инструкция"
            width={14}
            height={18}
          />
          <span>Инструкция</span>
        </a>
      </div>
    </div>
  );
};

export default ProductHead;
