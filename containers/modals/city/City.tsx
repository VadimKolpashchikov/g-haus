"use client";
import React, { useMemo, useState } from "react";
import styles from "./city.module.scss";
import { getAlphabet, getCityDate } from "./CityDate";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { userCity } from "@/store/userSlice";
import { RootState } from "@/store";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";

const City: React.FC = () => {
  const dispatch = useDispatch();
  const [cityActive, setCityActive] = useState<boolean>(true);
  const [city, setCity] = useState<string>(
    useSelector((state: RootState) => state.user.city)
  );
  const [cityTags, setCityTags] = useState<string[]>([]);

  const cities = getCityDate();
  const alphabet = getAlphabet();
  useMemo(() => {
    if (city.length >= 3) {
      setCityTags(
        cities.filter((p: string) =>
          p.toLowerCase().includes(city.toLowerCase())
        )
      );
    } else {
      setCityTags([]);
    }
  }, [city]);
  return (
    <div className={styles.main}>
      <h3 className={styles.title}>Выберите город</h3>
      <div className={styles.city}>
        <input
          type="text"
          placeholder="Введите город"
          className={styles.input}
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setCityActive(false);
          }}
        />
        <Image
          className={`${styles.city_icon} ${
            cityActive ? styles.city_active : ""
          }`}
          src="/global/tick.svg"
          alt="tick"
          width={17}
          height={14}
        />
      </div>
      <ul className={styles.tags}>
        {cityActive ? (
          ""
        ) : (
          <>
            {cityTags.map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  setCityActive(true);
                  setCity(item);
                  setCityTags([]);
                  dispatch(userCity(item));
                  NativeFancybox.close();
                }}
              >
                {item}
              </li>
            ))}
          </>
        )}
      </ul>
      <div className={styles.row}>
        <ul className={styles.list}>
          {alphabet.map((item, i) =>
            item == "а" ||
            item == "г" ||
            item == "ж" ||
            item == "й" ||
            item == "м" ||
            item == "п" ||
            item == "т" ||
            item == "ч" ||
            item == "ю" ? (
              <li key={i}>
                <span>{item}</span>
                {cities.map((subItem, subI) =>
                  item.toUpperCase() === subItem[0] ? (
                    <span
                      onClick={() => {
                        setCity(subItem);
                        setCityActive(true);
                        dispatch(userCity(subItem));
                        NativeFancybox.close();
                      }}
                      key={subI}
                    >
                      {subItem}
                    </span>
                  ) : (
                    ""
                  )
                )}
              </li>
            ) : (
              ""
            )
          )}
        </ul>
        <ul className={styles.list}>
          {alphabet.map((item, i) =>
            item == "б" ||
            item == "д" ||
            item == "з" ||
            item == "к" ||
            item == "н" ||
            item == "р" ||
            item == "у" ||
            item == "ш" ||
            item == "я" ? (
              <li key={i}>
                <span>{item}</span>
                {cities.map((subItem, subI) =>
                  item.toUpperCase() === subItem[0] ? (
                    <span
                      onClick={() => {
                        setCity(subItem);
                        setCityActive(true);
                        dispatch(userCity(subItem));
                        NativeFancybox.close();
                      }}
                      key={subI}
                    >
                      {subItem}
                    </span>
                  ) : (
                    ""
                  )
                )}
              </li>
            ) : (
              ""
            )
          )}
        </ul>
        <ul className={styles.list}>
          {alphabet.map((item, i) =>
            item == "в" ||
            item == "е" ||
            item == "и" ||
            item == "л" ||
            item == "о" ||
            item == "с" ||
            item == "х" ||
            item == "э" ? (
              <li key={i}>
                <span>{item}</span>
                {cities.map((subItem, subI) =>
                  item.toUpperCase() === subItem[0] ? (
                    <span
                      onClick={() => {
                        setCity(subItem);
                        setCityActive(true);
                        dispatch(userCity(subItem));
                        NativeFancybox.close();
                      }}
                      key={subI}
                    >
                      {subItem}
                    </span>
                  ) : (
                    ""
                  )
                )}
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default City;
