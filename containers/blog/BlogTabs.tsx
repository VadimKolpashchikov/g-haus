"use client";
import { useState } from "react";
import cl from "@blog/blog-tabs.module.scss";
import { Collapse } from "react-collapse";
interface ITabs {
  name: string;
  items?: string[] | any;
}

const BlogTabs = (): JSX.Element => {
  const [tabs, setTabs] = useState<ITabs[]>([
    {
      name: "Все статьи",
    },
    {
      name: "Рецепты",
      items: ["Самогоноварение", "Копчение", "Консервирование", "Сыроварение"],
    },
    {
      name: "О товарах",
    },
    {
      name: "Новости",
    },
  ]);

  const [activeTab, setActiveTab] = useState<string>("Все статьи");
  const [activeSubTab, setActiveSubTab] = useState<string>("");
  const clickTab = (el: ITabs) => {
    setActiveTab(el.name);
    if (el.items) {
      setActiveSubTab(el.items[0]);
    } else {
      setActiveSubTab("");
    }
  };
  return (
    <div className={cl.tabs}>
      {tabs.map((el) =>
        el.items ? (
          <>
            <div
              onClick={() => {
                clickTab(el);
              }}
              key={el.name}
              className={
                cl.tab + " " + (activeTab === el.name ? cl.tabActive : "")
              }
            >
              {el.name}
            </div>
            <Collapse isOpened={activeTab === el.name}>
              <div className={cl.subtabs}>
                {el.items.map((item: string, idx: number) => (
                  <p
                    onClick={() => setActiveSubTab(item)}
                    className={
                      cl.subtab +
                      " " +
                      (item === activeSubTab ? cl.subtab_active : "")
                    }
                  >
                    {item}
                  </p>
                ))}
              </div>
            </Collapse>
          </>
        ) : (
          <div
            onClick={() => clickTab(el)}
            key={el.name}
            className={
              cl.tab + " " + (activeTab === el.name ? cl.tabActive : "")
            }
          >
            {el.name}
          </div>
        )
      )}
    </div>
  );
};

export default BlogTabs;
