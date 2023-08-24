import styles from "@/styles/components/vacancy/vacancy-page.module.scss";
import Vacancy from "@/containers/Vacancy";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import BreadCrumbs from "@/components/UI/breadCrumbs/BreadCrumbs";
export const metadata = {
  title: "Title",
  description: "Список актуальных вакансий Градус Хауса",
};

function getBreadCrumbs() {
  return [
    { name: "Главная", href: "/" },
    { name: "Вакансии", href: "/vacancy" },
  ];
}

function getData() {
  return [
    {
      id: 1,
      url: "https://hh.ru/employer/1062868?hhtmFrom=vacancy_search_list",
      title: `Управляющий сети магазинов "Градус&nbsp;Хаус"`,
      price: 50000,
      city: "Киров (Кировская область)",
    },
    {
      id: 2,
      url: "https://hh.ru/employer/1062868?hhtmFrom=vacancy_search_list",
      title: "Слесарь",
      price: 40000,
      city: "Киров (Кировская область)",
    },
    {
      id: 3,
      url: "https://hh.ru/employer/1062868?hhtmFrom=vacancy_search_list",
      title: "Инженер производственно-технического отдела",
      price: 40000,
      city: "Киров (Кировская область)",
    },
    {
      id: 4,
      url: "https://hh.ru/employer/1062868?hhtmFrom=vacancy_search_list",
      title: "Помощник маляра порошковой покраски",
      price: 20000,
      city: "Киров (Кировская область)",
    },
    {
      id: 5,
      url: "https://hh.ru/employer/1062868?hhtmFrom=vacancy_search_list",
      title: "Разнорабочий на склад",
      price: 25000,
      city: "Киров (Кировская область)",
    },
    {
      id: 6,
      url: "https://hh.ru/employer/1062868?hhtmFrom=vacancy_search_list",
      title: "Продавец в розничный магазин",
      price: 35000,
      city: "Киров (Кировская область)",
    },
  ];
}

export default function VacancyPage() {
  const breadCrumbsItems = getBreadCrumbs();
  const getedData = getData();
  return (
    <main className={styles.main}>
      <div className="container">
        <BreadCrumbs
          breadCrumbsItems={breadCrumbsItems}
          classItem={styles.bread}
        />
        <TitleBox classItem={styles.title}>Вакансии</TitleBox>
      </div>
      <Vacancy data={getedData} />
    </main>
  );
}
