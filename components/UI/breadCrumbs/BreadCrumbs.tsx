import Link from "next/link";
import React from "react";
import styles from "./bread-crumbs.module.scss";
const BreadCrumbs: React.FC<any> = ({
  classItem = "",
  breadCrumbsItems,
}): JSX.Element => {
  return (
    <div className={`${styles.main} ${classItem}`}>
      {breadCrumbsItems.map((item: any, i: string) => (
        <React.Fragment key={i}>
          <Link href={item.href} className={styles.link}>
            {item.name}
            {i + 1 !== breadCrumbsItems.length ? (
              <span className={styles.line}>—</span>
            ) : (
              ""
            )}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadCrumbs;
