"use client";
import cl from "@product/product-description.module.scss";
import { useState } from "react";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { useDispatch } from "react-redux";
import { productAbout } from "@/store/productAboutSlice";
interface ICharacteristic {
  name: string;
  value: number | string;
}

const ProductDescription = (): JSX.Element => {
  const dispatch = useDispatch();
  const [characteristic, setCharacteristic] = useState<ICharacteristic[]>([
    {
      name: "Диаметр штуцеров для шлангов, мм",
      value: 8,
    },
    {
      name: "Объем",
      value: "15 л",
    },
    {
      name: "Толщина днища, мм",
      value: 1,
    },
    {
      name: "Клапан сброса давления, атм",
      value: 1.5,
    },
  ]);
  const [description, setDescription] = useState<string>(
    "На поверхность тарелок можно выложить фрукты, ароматные травы и очищающие насадки. Пар пройдёт через них, и уже с первой перегонкой вы получите вкусный и чистый домашний напиток."
  );

  return (
    <div className={cl.main}>
      <div className={cl.characteristic}>
        {characteristic.map((el) => (
          <div key={el.name} className={cl.characteristicItem}>
            <p className={cl.name}>{el.name}</p>
            <div></div>
            <p className={cl.value}>{el.value}</p>
          </div>
        ))}
      </div>
      <div className={cl.description}>
        <p>{description}</p>
        <LinkScroll
          to={"product-about"}
          smooth={"easeInOutQuad"}
          offset={-200}
          onClick={() => dispatch(productAbout(0))}
        >
          Читать далее
        </LinkScroll>
      </div>
    </div>
  );
};

export default ProductDescription;
