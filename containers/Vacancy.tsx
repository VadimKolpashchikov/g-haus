import styles from "@/styles/components/vacancy/vacancy.module.scss";
interface VacancyItems {
  id: number;
  url: string;
  title: string;
  price: number;
  city: string;
}
const Vacancy = ({ data }: any): JSX.Element => {
  return (
    <section className={styles.main}>
      <div className={`${styles.container} container`}>
        <ul className={styles.list}>
          {data.map((item: VacancyItems) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.item_block}>
                <a
                  className={styles.item_title}
                  href={item.url}
                  target="_blank"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></a>
                <span className={styles.item_price}>
                  От {item.price.toLocaleString()} ₽
                </span>
              </div>
              <span className={styles.item_city}>{item.city}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Vacancy;
