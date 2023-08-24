import { FC } from "react";
import cl from "@/styles/components/contacts/contacts.module.scss";

interface IShop {
  address: string;
  coords: number[];
  hours: string[];
  name: string;
  phones: string[];
  zoom?: number;
}

const ShopCard: FC<IShop | any> = ({ shop }): JSX.Element => {
  function getPhoneLink(str: string) {
    return str.replace(/[^+\d]/g, "");
  }

  return (
    <div className={cl.shopCard}>
      <p className={cl.shopCardName}>{shop.name}</p>
      <p className={cl.shopCardText + " " + cl.shopCardText_shop}>
        Магазин: <span>«ТУТ МОГЛО БЫТЬ НАЗВАНИЕ»</span>
      </p>
      <p className={cl.shopCardText + " " + cl.shopCardText_adrress}>
        Адрес: <span>{shop.address}</span>
      </p>
      <div className={cl.shopCardPhones}>
        {shop.phones.map((ph: string) => (
          <a key={ph} href={`tel:${getPhoneLink(ph)}`}>
            {ph}
          </a>
        ))}
      </div>
      <div className={cl.shopCardTimes}>
        {shop.hours.map((tm: string) => (
          <p key={tm}>{tm}</p>
        ))}
      </div>
    </div>
  );
};

export default ShopCard;
