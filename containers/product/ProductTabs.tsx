"use client";
import cl from "@product/product-tabs.module.scss";
import { useState } from "react";

interface ITabs {
  name: string;
  value?: number;
}

const ProductTabs = (): JSX.Element => {
  const [tabs, setTabs] = useState<ITabs[]>([
    { name: "12 литров", value: 12 },
    { name: "22 литров", value: 22 },
    { name: "27 литров", value: 27 },
  ]);
  const [tabActive, setTabActive] = useState(tabs[0].value);

  return (
    <div className={cl.main}>
      <p className={cl.title}>Объем бака</p>
      <div className={cl.tabsBox}>
        {tabs.map((t) => (
          <div
            key={t.name}
            className={
              cl.tab + " " + (t.value === tabActive ? cl.tab_active : "")
            }
            onClick={() => setTabActive(t.value)}
          >
            {t.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;
