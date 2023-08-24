"use client";
import { openModal } from "@/store/getModals";
import cl from "@main/Cooperation/cooperation-phone.module.scss";
import Image from "next/image";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { useDispatch } from "react-redux";
const CooperationPhone = (): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <div className={cl.cooperationItem_phone}>
      <div className={cl.wrap}>
        <div className={cl.img}>
          <Image
            src={`/main/cooperation/phone.png`}
            alt="Тeлефонная трубка"
            width={159}
            height={315}
            loading="lazy"
          />
        </div>
        <div className={cl.content}>
          <p className={cl.title}>ОСТАЛИСЬ ВОПРОСЫ?</p>
          <p className={cl.text}>
            Звоните прямо сейчас, и мы ответим или оставьте свои данные, и мы
            свяжемся с вами в ближайшее время
          </p>
          <a href="tel:88002505932" className={cl.phone}>
            8 800 250 59 32
          </a>
          <form action="#" className={cl.form}>
            <div className={cl.inputs}>
              <input type="text" name="name" placeholder="Имя" />
              <input type="phone" name="phone" placeholder="+7" />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault(); 
                dispatch(openModal("thankApplication"));
                NativeFancybox.show([{ src: "#modal" }]);
              }}
              type="submit"
            >
              Позвоните мне
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CooperationPhone;
