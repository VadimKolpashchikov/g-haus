"use client";
import styles from "@catalog/tagsBlock.module.scss";
import { useState } from "react";
import Tags from "@/components/UI/tags/Tags";

const TagsBlock = (): JSX.Element => {
  const [tagsItems, setTagsItems] = useState<string[]>([
    "Самогонные аппараты",
    "Аппараты для самогоноварения",
    "Аппараты для самогона",
    "Автоклавы",
    "Аппараты для консервирования",
    "Для самогона",
    "Самогон",
    "Самогонные аппараты",
    "Аппараты для самогона",
    "Аппараты для самогоноварения",
    "Автоклавы",
    "Аппараты для консервирования",
  ]);

  return (
    <section className={styles.main}>
      <div className="container">
        <Tags tagsItems={tagsItems} />
      </div>
    </section>
  );
};

export default TagsBlock;
