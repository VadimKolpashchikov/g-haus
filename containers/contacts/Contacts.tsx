"use client";
import { useEffect, useMemo, useState } from "react";
import cl from "@/styles/components/contacts/contacts.module.scss";
import ContactsItems from "./ContactsItems";
import ContactsShopTabs from "./ContactsShopTabs";
import ContactsShopList from "./ContactsShopList";

interface IShop {
  address: string;
  coords: number[];
  hours: string[];
  name: string;
  phones: string[];
  zoom?: number;
}

interface IShopItem {
  city: string;
  coords: number[];
  shops: IShop[];
  zoom?: number;
}

const Contacts = (): JSX.Element => {
  const [shopData, setShopData] = useState<IShopItem[]>([]);
  const [activeShop, setActiveShop] = useState<string>("Москва");

  useEffect(() => {
    fetch("https://apispn.ru/json/shops/")
      .then((response) => response.json())
      .then((shops) => setShopData(JSON.parse(shops)));
  }, []);

  const filteredShops = useMemo(() => {
    return shopData.filter((shop) => shop.city === activeShop);
  }, [shopData, activeShop]);

  return (
    <section className={cl.contacts}>
      <div className="container">
        <div className="row">
          <div className={cl.shops}>
            <h5 className={cl.subtitle}>
              GRADUS HAUS - сеть фирменных магазинов самогоноварения
            </h5>
            <ContactsShopTabs
              shops={shopData}
              active={activeShop}
              changeShop={setActiveShop}
            />
            <ContactsShopList shops={filteredShops} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
