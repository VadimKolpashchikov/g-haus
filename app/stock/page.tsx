import styles from "@/styles/components/stock/stock-page.module.scss";
import Stock from "@/containers/Stock";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import BreadCrumbs from "@/components/UI/breadCrumbs/BreadCrumbs";
export const metadata = {
  title: "Title",
  description: "Полный список всех акций Градус Хауса",
};

function getBreadCrumbs() {
  return [
    { name: "Главная", href: "/" },
    { name: "Акции", href: "/stock" },
  ];
}

export default async function StockPage() {
  const breadCrumbsItems = getBreadCrumbs();
  return (
    <main className={styles.main}>
      <div className="container">
        <BreadCrumbs breadCrumbsItems={breadCrumbsItems} />
        <TitleBox classItem={styles.title}>Акции</TitleBox>
      </div>
      <Stock />
    </main>
  );
}
