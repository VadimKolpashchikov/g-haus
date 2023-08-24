import cl from "@/styles/components/contacts/contacts-item.module.scss";
import Image from "next/image";

function getData() {
  return [
    { img: "vk", href: "https://vk.com/gradus_haus" },
    { img: "ok", href: "https://ok.ru/gradushauss" },
    { img: "youtube", href: "https://youtube.com/c/ГрадусХаус" },
    { img: "telegram", href: "https://t.me/gradus_haus" },
    { img: "dzen", href: "https://zen.yandex.ru/gradus_haus" },
  ];
}

const ContactsItems = (): JSX.Element => {
  const socialList = getData();
  return (
    <div className={cl.contactsItems}>
      <div className={cl.item}>
        <h5 className={cl.subtitle}>Горячая линия</h5>
        <div className={cl.el}>
          <div className={cl.elbox}>
            <p>Телефон:</p>
            <ul className={cl.elList}>
              <li>
                <a href="tel:88002505932">8 (800) 250 59 32</a>
              </li>
              <li>
                <a href="tel:84952553710">8 (495) 255 37 10</a>
              </li>
              <li>
                <a href="tel:84991124256">8 (499) 112 42 56</a>
              </li>
            </ul>
          </div>
          <div className={cl.elbox}>
            <p>E-mail:</p>
            <ul className={cl.elList}>
              <li>
                <a href="mailto:op@gradushaus.ru">op@gradushaus.ru</a>
              </li>
              <li>
                <a href="mailto:info@gradushaus.ru">info@gradushaus.ru</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cl.item}>
        <h5 className={cl.subtitle}>Мы в социальных сетях</h5>
        <div className={cl.elSocial}>
          {socialList.map((item) => (
            <a target="_blank" key={item.img} href={item.href}>
              <Image
                src={`/footer/${item.img}.svg`}
                alt={item.img}
                width={60}
                height={60}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactsItems;
