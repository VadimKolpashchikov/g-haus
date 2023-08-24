"use client";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import styles from "@basket/products.module.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Product from "./Product";

const Products = ({ addedBasket }: { addedBasket: any }): JSX.Element => {
  return (
    <section className={styles.main}>
      <div className={`container-small ${styles.container}`}>
        <div className={styles.number}>
          <span>1</span>
        </div>
        <TitleBox>Корзина</TitleBox>
        <TransitionGroup className={styles.wrapper}>
          {addedBasket.map((item: any, idx: number) => (
            <CSSTransition key={item.id} timeout={500} classNames="added-card">
              <Product product={item} number={idx} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </section>
  );
};

export default Products;
