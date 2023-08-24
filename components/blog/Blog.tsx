import styles from "./blog.module.scss";
import Image from "next/image";
import Link from "next/link";
const Blog: React.FC<any> = ({
  blog,
  classItem,
  mobilBig = false,
  href = "/",
}): JSX.Element => {
  return (
    <Link
      href={"/blog/1"}
      className={`${mobilBig ? styles.mainMobilBig : styles.main} ${classItem}`}
    >
      <div className={styles.img}>
        <Image src={blog.img} alt="blog" width={408} height={278} />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h3 className={styles.heading}>{blog.name}</h3>
          <p className={styles.desc}>{blog.desc}</p>
        </div>
        <div className={styles.row}>
          <span className={styles.views}>
            <Image
              src={"/global/views-icon.svg"}
              alt="views"
              width={22}
              height={13}
            />
            18474
          </span>
          <span className={styles.date}>
            <Image
              src={"/global/date-icon.svg"}
              alt="date"
              width={19}
              height={19}
            />
            16 декабря 2021
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
