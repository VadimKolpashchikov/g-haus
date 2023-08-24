"use client";
import useWindowWidth from "@/hooks/useWindowWidth";
import styles from "@/styles/components/Header/header-top.module.scss";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/store/getModals";
import { RootState } from "@/store";
import { headerSearch } from "@/store/headerSlice";

const HeaderTop: FC<any> = ({ topMenu }): JSX.Element => {
  const windowWidth = useWindowWidth(991);
  const dispatch = useDispatch();
  const city = useSelector((state: RootState) => state.user.city);
  const searchActive = useSelector(
    (state: RootState) => state.header.searchActive
  );

  const addedBasket = Object.keys(
    useSelector((state: RootState) => state.basket.basket)
  );
  const addedFavorite = Object.keys(
    useSelector((state: RootState) => state.favorites.favorites)
  );

  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.row}>
          {windowWidth ? (
            <>
              <div className={styles.logo}>
                <Link href={"/"}>
                  <Image
                    src="/header/logo-tablet.png"
                    width={112}
                    height={55}
                    alt="#"
                  />
                </Link>
              </div>
              <button className={styles.catalog_btn}>
                <Image
                  src="/header/catalog.svg"
                  width={16}
                  height={16}
                  alt="#"
                />
                <span>Каталог</span>
              </button>
            </>
          ) : (
            <>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <button
                    className={styles.city_btn}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(openModal("city"));
                      NativeFancybox.show([{ src: "#modal" }]);
                    }}
                  >
                    г. {city}
                  </button>
                </li>
                {topMenu.items.map((item: any) => (
                  <li key={item.id} className={styles.item}>
                    <Link className={styles.link} href={item.href}>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={"/calculator"} className={styles.calculator}>
                <Image
                  src="/header/icon-calc.svg"
                  width={18}
                  height={18}
                  alt="#"
                />
                Калькуляторы самогонщика
              </Link>
            </>
          )}

          <div className={styles.feedback}>
            {windowWidth ? (
              <>
                <Link href={"/basket"} className={styles.feedback_basket}>
                  <Image
                    src="/header/basket-mob.svg"
                    width={48}
                    height={40}
                    alt="#"
                  />
                  {addedBasket.length ? (
                    <span className={styles.item_number}>
                      <span>{addedBasket.length}</span>
                    </span>
                  ) : (
                    ""
                  )}
                </Link>
                <button
                  onClick={() => dispatch(headerSearch(!searchActive))}
                  className={styles.feedback_search}
                >
                  <Image
                    src="/header/search-mob.svg"
                    width={42}
                    height={40}
                    alt="#"
                  />
                </button>
              </>
            ) : (
              <a className={styles.phone} href="tel:88002505932">
                8 800 250 59 32
              </a>
            )}

            {addedFavorite.length && windowWidth ? (
              <Link href={"/favorites"} className={styles.favorites_btn}>
                <span className={styles.icon}>
                  <Image
                    src="/global/favorites-white-icon.svg"
                    width={40}
                    height={40}
                    alt="#"
                  />
                  <span className={styles.item_number}>
                    <span>{addedFavorite.length}</span>
                  </span>
                </span>
              </Link>
            ) : (
              <button
                className={styles.feedback_btn}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(openModal("callback"));
                  NativeFancybox.show([{ src: "#modal" }]);
                }}
              >
                <span className={styles.icon}>
                  <Image
                    src="/header/phone-mob.svg"
                    width={37}
                    height={40}
                    alt="#"
                  />
                </span>
                <span className={styles.text}>Заказать звонок</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
