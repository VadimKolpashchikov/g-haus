"use client";
import styles from "@product/reviewItem.module.scss";
import Image from "next/image";
import Fancybox from "@/components/fancy/Fancybox";
import useWindowWidth from "@/hooks/useWindowWidth";
const ReviewItem: React.FC<any> = ({ classItem, reviewInfo }): JSX.Element => {
  const windowWidth = useWindowWidth(575);
  return (
    <div className={`${styles.main} ${classItem}`}>
      <div className={styles.avatar}>{reviewInfo.avatar}</div>
      <div className={styles.row}>
        <h3 className={styles.title}>{reviewInfo.name}</h3>
        <div className={styles.info}>
          <span className={styles.date}>{reviewInfo.date}</span>
          {windowWidth ? (
            <span className={styles.rating}>
              <Image
                src={"/global/star.svg"}
                alt="rating"
                width={13}
                height={13}
              />
              5,0
            </span>
          ) : (
            <span className={styles.rating}>
              <Image
                src={"/global/star.svg"}
                alt="rating"
                width={20}
                height={20}
              />
              <Image
                src={"/global/star.svg"}
                alt="rating"
                width={20}
                height={20}
              />
              <Image
                src={"/global/star.svg"}
                alt="rating"
                width={20}
                height={20}
              />
              <Image
                src={"/global/star.svg"}
                alt="rating"
                width={20}
                height={20}
              />
              <Image
                src={"/global/star.svg"}
                alt="rating"
                width={20}
                height={20}
              />
            </span>
          )}
        </div>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.item_heading}>Достоинства</h3>
          <p className={styles.item_desc}>{reviewInfo.advantages}</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.item_heading}>Недостатки</h3>
          <p className={styles.item_desc}>{reviewInfo.disadvantages}</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.item_heading}>Комментарий</h3>
          <p className={styles.item_desc}>{reviewInfo.comment}</p>
          <Fancybox
            options={{
              Carousel: {
                infinite: true,
              },
            }}
          >
            <div className={styles.item_gallery}>
              {reviewInfo.gallery.map((itemImg: any, i: number) => (
                <a
                  href={itemImg.src}
                  data-fancybox="gallery-review"
                  className={styles.item_link}
                  key={i}
                >
                  <Image
                    src={itemImg.src}
                    alt="фото покупателей"
                    width={itemImg.width}
                    height={itemImg.heigth}
                  />
                </a>
              ))}
            </div>
          </Fancybox>
        </li>
      </ul>
    </div>
  );
};

export default ReviewItem;
