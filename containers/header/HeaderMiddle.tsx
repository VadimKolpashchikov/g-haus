"use client";
import styles from "@/styles/components/Header/header-middle.module.scss";
import Image from "next/image";
import useWindowWidth from "@/hooks/useWindowWidth";
import Link from "next/link";
import { HandySvg } from "handy-svg";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const HeaderMiddle = (): JSX.Element => {
  const windowWidth = useWindowWidth(1300);
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
          <div className={styles.logo}>
            <Link href="/">
              {windowWidth ? (
                <Image
                  src="/header/logo-tablet.png"
                  width={197}
                  height={98}
                  alt="logo"
                />
              ) : (
                <Image
                  src="/header/logo.svg"
                  width={170}
                  height={63}
                  alt="logo"
                />
              )}
            </Link>
          </div>
          <button className={styles.catalog}>
            <span>
              <Image
                src="/header/middle-catalog.svg"
                width={15}
                height={14}
                alt="catalog"
              />
            </span>
            Каталог
          </button>

          <form className={styles.form}>
            <input
              className={styles.input}
              placeholder="Поиск..."
              type="text"
            />
            <span className={styles.form_icon}>
              <HandySvg
                className={"icon"}
                src={"/header/search-icon.svg"}
                width="31"
                height="30"
              />
            </span>
          </form>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.item_link} href={"/account"}>
                <span className={styles.item_icon}>
                  <HandySvg
                    className="icon"
                    src={"/header/avatar.svg"}
                    width="26"
                    height="26"
                  />
                </span>
                <p className={styles.item_name}>Профиль</p>
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.item_link} href={"/favorites"}>
                <span className={styles.item_icon}>
                  <HandySvg
                    className="icon"
                    src={"/header/favorites.svg"}
                    width="26"
                    height="26"
                  />
                </span>
                <p className={styles.item_name}>
                  Избранное{" "}
                  {addedFavorite.length ? (
                    <span className={styles.item_number}>
                      <span>{addedFavorite.length}</span>
                    </span>
                  ) : (
                    ""
                  )}
                </p>
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.item_link} href={"/basket"}>
                <span className={styles.item_icon}>
                  <HandySvg src={"/header/basket.svg"} width="31" height="26" />
                </span>
                <p className={styles.item_name}>
                  Корзина{" "}
                  {addedBasket.length ? (
                    <span className={styles.item_number}>
                      <span>{addedBasket.length}</span>
                    </span>
                  ) : (
                    ""
                  )}
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
