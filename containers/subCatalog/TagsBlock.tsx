"use client";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import styles from "@subcatalog/tagsBlock.module.scss";
import { useState } from "react";
import Tags from "@/components/UI/tags/Tags";
import BreadCrumbs from "@/components/UI/breadCrumbs/BreadCrumbs";
import Image from "next/image";
import useWindowWidth from "@/hooks/useWindowWidth";
interface breadCrumbsItems {
  name: string;
  href: string;
}
const TagsBlock = (): JSX.Element => {
  const [tagsItems, setTagsItems] = useState<string[]>([
    "Недорогие",
    "Профессиональные",
    "Германия",
    "С узлом отбора",
    "С ТЭНом",
    "С сухопарником",
    "От производителя",
    "Колонны",
    "На 2 дюйма",
    "На 20 литров",
  ]);
  const [breadCrumbsItems, setBreadCrumbsItems] = useState<breadCrumbsItems[]>([
    { name: "Главная", href: "/" },
    { name: "Каталог", href: "#main-catalog" },
    { name: "Самогоноварение", href: "/samogonovarenie" },
    {
      name: "Самогоннные аппараты",
      href: "/samogonovarenie/samogonovarenie-apparaty",
    },
  ]);
  const windowWidth = useWindowWidth(1549);
  return (
    <section className={styles.main}>
      <div className={`container ${styles.container}`}>
        <div className={styles.row}>
          <BreadCrumbs
            classItem={styles.bread}
            breadCrumbsItems={breadCrumbsItems}
          />
          {windowWidth ? (
            ""
          ) : (
            <button className={styles.popular_btn}>
              Сначала популярные
              <Image
                src="/subcatalog/popular-icon.svg"
                alt="sort"
                width={22}
                height={20}
              />
            </button>
          )}
        </div>

        <TitleBox>Самогонные аппараты</TitleBox>
        <Tags classItem={styles.tags} tagsItems={tagsItems} />
      </div>
    </section>
  );
};

export default TagsBlock;
