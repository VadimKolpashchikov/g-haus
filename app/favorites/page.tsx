import Favorites from "@/containers/Favorites";
import BreadCrumbs from "@/components/UI/breadCrumbs/BreadCrumbs";
import styles from "@/styles/components/favorites/favorites-page.module.scss";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function getBreadCrumbs() {
  return [
    { name: "Главная", href: "/" },
    { name: "Избранное", href: "/favorites" },
  ];
}

export default function FavoritesPage() {
  const breadCrumbsItems = getBreadCrumbs();
  return (
    <main className={styles.main}>
      <div className="container">
        <BreadCrumbs breadCrumbsItems={breadCrumbsItems} />
      </div>
      <Favorites />
    </main>
  );
}