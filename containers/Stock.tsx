import styles from "@/styles/components/stock/stock.module.scss";
import Image from "next/image";
import Link from "next/link";
// interface stockList {
//   img: string;
//   name: string;
//   desc: string;
//   date: string;
// }

const Stock = (): JSX.Element => {
  const stockList = [
    {
      img: "/stock/stock-item-1.jpg",
      name: "Доставим быстрее, чем сани деда мороза!",
      desc: "Мы позаботимся о том, чтобы все покупки пришли точно в срок!",
      date: "До 27 января",
    },
    {
      img: "/stock/stock-item-1.jpg",
      name: "Доставим быстрее, чем сани деда мороза!",
      desc: "Мы позаботимся о том, чтобы все покупки пришли точно в срок!",
      date: "До 27 января",
    },
    {
      img: "/stock/stock-item-1.jpg",
      name: "Доставим быстрее, чем сани деда мороза!",
      desc: "Мы позаботимся о том, чтобы все покупки пришли точно в срок!",
      date: "До 27 января",
    },
    {
      img: "/stock/stock-item-1.jpg",
      name: "Доставим быстрее, чем сани деда мороза!",
      desc: "Мы позаботимся о том, чтобы все покупки пришли точно в срок!",
      date: "До 27 января",
    },
  ];
  return (
    <section className={styles.main}>
      <div className={`container ${styles.container}`}>
        <div className={styles.row}>
          <div className={styles.subscription}>
            <h3 className={styles.subscription_title}>
              Получайте интересные предложения первыми!
            </h3>
            <form>
              <div className={styles.subscription_email}>
                <input type="text" placeholder="E-mail" />
              </div>

              <button className={styles.subscription_btn}>
                Подписаться на рассылку
              </button>
            </form>
            <div className={styles.subscription_img}>
              <Image
                src={"/stock/subscription.png"}
                alt="subscription"
                width={336}
                height={226}
              />
            </div>
          </div>
          <div className={styles.content}>
            <ul className={styles.list}>
              {stockList.map((item, i) => (
                <li className={styles.item} key={i}>
                  <Link href={"/stock/one"}>
                    <div className={styles.item_img}>
                      <Image
                        src={item.img}
                        alt="stock"
                        width={408}
                        height={408}
                      />
                    </div>
                    <div className={styles.item_content}>
                      <h3 className={styles.item_title}>{item.name}</h3>
                      <p className={styles.item_desc}>{item.desc}</p>
                      <span className={styles.item_date}>
                        <Image
                          src={"/global/stock-icon.png"}
                          alt="subscription"
                          width={20}
                          height={20}
                        />
                        {item.date}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stock;
