import styles from "@brand/brand-item.module.scss";
import Image from "next/image";
import { FC } from "react";
import Markdown from "markdown-to-jsx";

const BrandItem: FC<any> = ({ brandOne }): JSX.Element => {
  return (
    <section className={styles.main}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.imgCol}>
            <Image
              src={process.env.IMG_URL + brandOne.image}
              alt="bravo"
              width={407}
              height={419}
              loading="lazy"
            />
          </div>
          <div className={styles.textCol}>
            <Markdown>{brandOne.description}</Markdown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandItem;
