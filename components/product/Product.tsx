import styles from "./product.module.scss";
import Image from "next/image";
import Link from "next/link";
import { getSumFormat } from "@/util/getSumFormat";
import ProductBtnBottom from "./ProductBtnBottom";

interface IProducts {
  product: any;
  classItem: string;
  video?: string;
}

const Products: React.FC<IProducts> = ({
  product,
  classItem,
  video = "https://youtu.be/Syw7psvN1vE",
}): JSX.Element => {
  return (
    <Link href={product.url} className={`${styles.main} ${classItem}`}>
      <div className={styles.img}>
        <Image
          src={process.env.IMG_URL + product.image}
          alt={product.slug || "Товар"}
          width={193}
          height={280}
        />
      </div>
      <h3
        className={styles.heading}
        dangerouslySetInnerHTML={{ __html: product.name }}
      ></h3>

      <div className={styles.row_rating}>
        <span className={styles.rating}>
          <span>
            <Image src={"/global/star.svg"} alt="star" width={20} height={20} />
          </span>
          5.0
        </span>
        <span className={styles.reviews}>53 отзыва</span>
      </div>
      <div className={styles.prices}>
        <span className={styles.new_price}>
          {getSumFormat(product.price)} ₽
        </span>
        <span className={styles.old_price}>
          {getSumFormat(product.old_price)}
        </span>
      </div>
      <ProductBtnBottom
        product={product}
        video={"https://youtu.be/Syw7psvN1vE"}
      />
      <span className={styles.hit}>
        <Image src={"/global/hit.svg"} alt="hit" width={85} height={30} />
      </span>
      <span className={styles.sale}>
        <Image
          src={"/global/sale-40.svg"}
          alt="sale-40"
          width={70}
          height={30}
        />
      </span>
    </Link>
  );
};

export default Products;
