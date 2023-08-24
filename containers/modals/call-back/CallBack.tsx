"use client";

import cl from "./call-back.module.scss";
import InputMask from "react-input-mask";
const CallBack = (): JSX.Element => {
  return (
    <div className={cl.wrap}>
      <p className={cl.title}>Заказать обратный&nbsp;звонок</p>
      <form action="#" className={cl.form}>
        <InputMask
          mask="+7 999 999 99 99"
          type="text"
          placeholder="+7 (___)-___-__-__"
          name="phone"
        />
        <input type="text" placeholder="ФИО" name="name" />
        <button type="submit">Отправить</button>
      </form>
      <p className={cl.comment}>
        После отправки контактной информации наш менеджер свяжется с Вами
        и&nbsp;проконсультирует по любому вопросу
      </p>
    </div>
  );
};

export default CallBack;
