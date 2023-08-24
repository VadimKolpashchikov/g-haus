import { FC } from "react";
import cl from "@/styles/components/contacts/contacts.module.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ShopCard from "./ShopCard";

interface IShop {
  address: string;
  coords: number[];
  hours: string[];
  name: string;
  phones: string[];
  zoom?: number;
}

const ContactsShopList: FC<any> = ({ shops }): JSX.Element => {
  return (
    <TransitionGroup className={cl.shopList}>
      {shops.map((el: any) =>
        el.shops.map((sh: IShop) => (
          <CSSTransition key={sh.address} timeout={500} classNames="shop-card">
            <ShopCard shop={sh} />
          </CSSTransition>
        ))
      )}
    </TransitionGroup>
  );
};

export default ContactsShopList;
