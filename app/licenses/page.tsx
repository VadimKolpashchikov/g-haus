import TitleBox from "@/components/UI/titleBox/TitleBox";
import BreadCrumbs from "@/components/UI/breadCrumbs/BreadCrumbs";
import cl from "@licenses/licenses-page.module.scss";
import Licenses from "@/containers/licenses/Licenses";

export const metadata = {
  title: "Лицензии на продукцию",
  description: "Лицензии на продукцию в ассортименте магазина Градус Хауса",
};

function getBreadCrumbs() {
  return [
    { name: "Главная", href: "/" },
    { name: "Лицензии на продукцию в ассортименте", href: "/licenses" },
  ];
}

export default async function LicensesPage() {
  const breadCrumbsItems = getBreadCrumbs();
  return (
    <main className={cl.main}>
      <div className="container">
        <BreadCrumbs breadCrumbsItems={breadCrumbsItems} />
        <TitleBox>Лицензии на продукцию в ассортименте</TitleBox>
        <Licenses />
      </div>
    </main>
  );
}
