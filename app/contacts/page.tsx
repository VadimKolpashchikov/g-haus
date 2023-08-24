import Contacts from "@/containers/contacts/Contacts";
import cl from "@/styles/components/contacts/contacts-page.module.scss";
import BreadCrumbs from "@/components/UI/breadCrumbs/BreadCrumbs";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import ContactsItems from "@/containers/contacts/ContactsItems";
export const metadata = {
  title: "Контакты Градус Хаус",
  description: "Контактная информация магазина Градус Хаус",
};

function getBreadCrumbs() {
  return [
    { name: "Главная", href: "/" },
    { name: "Контакты", href: "/contacts" },
  ];
}

export default function ContactsPage() {
  const breadCrumbsItems = getBreadCrumbs();
  return (
    <main className={cl.main}>
      <div className="container">
        <BreadCrumbs breadCrumbsItems={breadCrumbsItems} />
        <TitleBox classItem={cl.title}>Контакты</TitleBox>
        <ContactsItems />
      </div>
      <Contacts />
    </main>
  );
}
