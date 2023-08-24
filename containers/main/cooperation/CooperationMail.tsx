"use client";
import cl from "@main/Cooperation/cooperation-mail.module.scss";
import { openModal } from "@/store/getModals";
import Image from "next/image";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { useDispatch } from "react-redux";
const CooperationMail = (): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <div className={cl.cooperationItem_mail}>
      <div className={cl.wrap}>
        <div className={cl.img}>
          <Image
            src={`/main/cooperation/mailbox.png`}
            alt="Почтовый ящик"
            width={395}
            height={268}
            loading="lazy"
          />
        </div>
        <div className={cl.content}>
          <p className={cl.title}>Подпишитесь на рассылку!</p>
          <p className={cl.text}>
            Подпишитесь и получайте наши выгодные предложения, новости и полезные материалы
          </p>

          <form action="#" className={cl.form}>
            <div className={cl.inputs}>
              <input type="email" name="name" placeholder="Email" />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(openModal("thankSubscription"));
                  NativeFancybox.show([{ src: "#modal" }]);
                }}
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                >
                  <path
                    d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CooperationMail;
