import Information from "@/containers/Information";
import styles from "@/styles/components/information/information-page.module.scss";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import BreadCrumbs from "@/components/UI/breadCrumbs/BreadCrumbs";
export const metadata = {
  title: "Правовая Информация Градус Хаус",
  description: "Generated by create next app",
};

function getBreadCrumbs() {
  return [
    { name: "Главная", href: "/" },
    { name: "Правовая информация", href: "/information" },
  ];
}

export default function InformationPage() {
  const breadCrumbsItems = getBreadCrumbs();
  return (
    <main className={styles.main}>
      <div className="container">
        <BreadCrumbs breadCrumbsItems={breadCrumbsItems} />
        <TitleBox classItem={styles.title}>Правовая информация</TitleBox>
      </div>
      <Information />
    </main>
  );
}
