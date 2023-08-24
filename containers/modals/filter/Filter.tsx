import React, { useState } from "react";
import styles from "./filter.module.scss";
interface chechboxes {
  name: string;
  active: boolean;
}
type Props = {
  classItem?: string;
};
const Filter: React.FC<Props> = ({ classItem }) => {
  const [subcategoryItems, setSubcategoryItems] = useState<chechboxes[]>([
    { name: "Самогонные аппараты", active: false },
    { name: "Комплектующие для аппаратов", active: false },
    { name: "Перегонные кубы и баки", active: false },
    { name: "Емкости для брожения", active: false },
  ]);

  const [stampsItems, setstampsItems] = useState<chechboxes[]>([
    { name: "Finlandia", active: false },
    { name: "Kanzler", active: false },
    { name: "Славянка", active: false },
    { name: "Германия ", active: false },
  ]);

  const [typesItems, setTypesItems] = useState<chechboxes[]>([
    { name: "Дистилятор", active: false },
    { name: "Без куба", active: false },
    { name: "Колонна", active: false },
  ]);
  return (
    <div className={`${styles.main} ${classItem}`}>
      <div className={styles.prices}>
        <h3 className={styles.title}>Цена</h3>
        <div className={styles.prices_inputs}>
          <div className={styles.prices_input}>
            <input type="text" className={styles.input} />
          </div>
          <span className={styles.prices_border}></span>
          <div className={styles.prices_input}>
            <input type="text" className={styles.input} />
          </div>
        </div>
      </div>

      <div className={styles.subcategory}>
        <h3 className={styles.title}>Подкатегория</h3>
        <div className={styles.wrapper}>
          {subcategoryItems.map((item, i) => (
            <label key={i} className={styles.chechbox}>
              <input type="checkbox" className={styles.chechbox_disabled} />
              <span className={styles.chechbox_active}></span>
              <span className={styles.chechbox_name}>{item.name}</span>
            </label>
          ))}
        </div>
        <button className={styles.watch}>Показать еще</button>
      </div>

      <div className={styles.stamps}>
        <h3 className={styles.title}>Марка</h3>
        <div className={styles.wrapper}>
          {stampsItems.map((item, i) => (
            <label key={i} className={styles.chechbox}>
              <input type="checkbox" className={styles.chechbox_disabled} />
              <span className={styles.chechbox_active}></span>
              <span className={styles.chechbox_name}>{item.name}</span>
            </label>
          ))}
        </div>
        <button className={styles.watch}>Показать еще</button>
      </div>

      <div className={styles.type}>
        <h3 className={styles.title}>Тип</h3>
        <div className={styles.wrapper}>
          {typesItems.map((item, i) => (
            <label key={i} className={styles.chechbox}>
              <input type="checkbox" className={styles.chechbox_disabled} />
              <span className={styles.chechbox_active}></span>
              <span className={styles.chechbox_name}>{item.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
