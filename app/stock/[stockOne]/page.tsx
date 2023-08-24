import styles from "@/styles/components/stockOne/stockOne-page.module.scss";
import StockOne from "@/containers/StockOne";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import BreadCrumbs from "@/components/UI/breadCrumbs/BreadCrumbs";

export const metadata = {
  title: "Title",
  description: "Акция: Доставим быстрее, чем сани деда мороза!",
};

function getBreadCrumbs() {
  return [
    { name: "Главная", href: "/" },
    { name: "Акции", href: "/stock" },
    { name: "Доставим быстрее, чем сани деда мороза!", href: "/stock/one" },
  ];
}

export default function StockPage() {
  const breadCrumbsItems = getBreadCrumbs();
  return (
    <main className={styles.main}>
      <div className="container">
        <BreadCrumbs breadCrumbsItems={breadCrumbsItems} />
        <TitleBox classItem={styles.title}>
          Доставим быстрее, чем сани деда мороза!
        </TitleBox>
      </div>
      <StockOne />
    </main>
  );
}
