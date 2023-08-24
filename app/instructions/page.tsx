import Instructions from "@/containers/instructions/Instructions";
import BreadCrumbs from "@/components/UI/breadCrumbs/BreadCrumbs";
import styles from "@/styles/components/instructions.module.scss";
export const metadata = {
  title: "Инструкции",
  description: "Инструкции к товарам магазина Градус Хауса",
};

function getBreadCrumbs() {
  return [
    { name: "Главная", href: "/" },
    { name: "Инструкции", href: "/instructions" },
  ];
}
export default function InstructionsPage() {
  const breadCrumbsItems = getBreadCrumbs();
  return (
    <main className={styles.main}>
      <div className={`container ${styles.container}`}>
        <BreadCrumbs breadCrumbsItems={breadCrumbsItems} />
        <Instructions />
      </div>
    </main>
  );
}
