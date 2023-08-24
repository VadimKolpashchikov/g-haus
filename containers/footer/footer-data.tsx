import { useState } from "react";

function getFootLink() {
  const [footLink, setFootLink] = useState([
    {
      title: "Компания",
      links: [
        {
          text: "О нас",
          href: "/info/about",
        },
        {
          text: "Бренды",
          href: "/brands/BRAVO",
        },
        {
          text: "Реквизиты",
          href: "/info/requisites",
        },
        {
          text: "Правовая информация",
          href: "/information",
        },
        {
          text: "Контакты",
          href: "/contacts",
        },
        {
          text: "Вакансии",
          href: "/vacancy",
        },
      ],
    },
    {
      title: "Блог",
      links: [
        {
          text: "Все статьи",
          href: "/blog",
        },
        {
          text: "Рецепты",
          href: "/blog",
        },
        {
          text: "О товарах",
          href: "/blog",
        },
        {
          text: "Новости",
          href: "/blog",
        },
      ],
    },
    {
      title: "Покупатель ",
      links: [
        {
          text: "Личный кабинет",
          href: "/account",
        },
        {
          text: "Корзина",
          href: "/basket",
        },
        {
          text: "Избранное",
          href: "/favorites",
        },
        {
          text: "Доставка",
          href: "/info/delivery",
        },
        {
          text: "Оплата",
          href: "/info/payment",
        },
        {
          text: "Возврат товара",
          href: "/info/reversion",
        },
        {
          text: "Сервисный центр",
          href: "/service",
        },
        {
          text: "Как заказать",
          href: "/info/howToOrder",
        },
        {
          text: "Акции",
          href: "/stock",
        },
        {
          text: "Вопрос-ответ",
          href: "/info/faq",
        },
      ],
    },
    {
      title: "Сотрудничество",
      links: [
        {
          text: "Оптовым покупателям",
          href: "/",
        },
        {
          text: "Поставщикам",
          href: "/info/provider",
        },
        {
          text: "Арендодателям",
          href: "/info/lessor",
        },
      ],
    },
  ]);

  return footLink;
}

function getFootInfo() {
  const [footInfo, setFootInfo] = useState([
    {
      title: "Мы на маркетплейсах:",
      links: [
        {
          img: "ozon",
          href: "https://www.ozon.ru/seller/gelikon-183899/products/?miniapp=seller_183899",
          w: 66,
          h: 66,
        },
        {
          img: "wb",
          href: "https://www.wildberries.ru/seller/47223",
          w: 90,
          h: 66,
        },
        {
          img: "yan",
          href: "https://market.yandex.ru/search?businessId=1194048&allowCollapsing=1&local-offers-first=0",
          w: 66,
          h: 66,
        },
      ],
    },
    {
      title: "Наши соц сети:",
      links: [
        {
          img: "vk",
          href: "https://vk.com/gradus_haus",
        },
        {
          img: "ok",
          href: "https://ok.ru/gradushauss",
        },
        {
          img: "youtube",
          href: "https://youtube.com/c/ГрадусХаус",
        },
        {
          img: "telegram",
          href: "https://t.me/gradus_haus",
        },
        {
          img: "dzen",
          href: "https://zen.yandex.ru/gradus_haus",
        },
      ],
    },
  ]);

  return footInfo;
}

export { getFootLink, getFootInfo };
