"use client";
import BtnAddBasket from "@/components/UI/btnAddBasket/BtnAddBasket";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import styles from "@/styles/components/favorites/favorites.module.scss";
import Image from "next/image";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "@/store/favoritesSlice";
import { RootState } from "@/store";
import { Daum } from "@/models/productsNew";

const Favorites = (): JSX.Element => {
  const dispatch = useDispatch();
  const addedFavorite = Object.values(
    useSelector((state: RootState) => state.favorites.favorites)
  );

  return (
    <section className={styles.main}>
      <div className={`container ${styles.container}`}>
        {addedFavorite.length ? (
          <>
            <TitleBox>Избранное</TitleBox>
            <div className={styles.wrapper}>
              <TransitionGroup>
                {addedFavorite.map((item: any, i: number) => (
                  <CSSTransition
                    key={item.id}
                    timeout={500}
                    classNames="added-card"
                  >
                    <div className={styles.item}>
                      <div className={styles.item_block_img}>
                        <div className={styles.item_img}>
                          <Image
                            src={process.env.IMG_URL + item.image}
                            alt="product"
                            width={193}
                            height={280}
                          />
                        </div>
                      </div>
                      <div className={styles.item_block_title}>
                        <h3 className={styles.item_title}>{item.name}</h3>
                        <span className={styles.item_info}>
                          Артикул: 0{i}-00041325
                        </span>
                      </div>
                      <div className={styles.item_block_delete}>
                        <button
                          className={styles.item_delete}
                          onClick={() => {
                            dispatch(removeFavorite(item));
                          }}
                        >
                          Удалить
                        </button>
                      </div>
                      <div className={styles.item_block_prices}>
                        <span className={styles.item_new_price}>
                          {item.price.toLocaleString()} ₽
                        </span>
                        <span className={styles.item_old_price}>
                          {item.old_price.toLocaleString()} ₽
                        </span>
                      </div>
                      <div className={styles.item_block_btn}>
                        <BtnAddBasket
                          classItem={styles.item_btn}
                          product={item}
                        />
                      </div>
                    </div>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </div>
          </>
        ) : (
          <TitleBox>
            <>
              Добавляйте товары в избранное,
              <br /> чтобы посмотреть их позже
            </>
          </TitleBox>
        )}
      </div>
    </section>
  );
};

export default Favorites;
