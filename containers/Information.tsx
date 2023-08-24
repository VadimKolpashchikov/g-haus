import styles from "@/styles/components/information/information.module.scss";
import Image from "next/image";

// interface informationList {
//   name: string;
//   href: string;
// }
const Information = (): JSX.Element => {
  const informationList = [
    {
      name: "Политика конфиденциальности",
      href: "#",
    },
    { name: "Договор оферты", href: "#" },
  ];

  return (
    <section className={styles.main}>
      <div className="container">
        <ul className={styles.list}>
          {informationList.map((item, i) => (
            <li className={styles.item} key={i}>
              <a className={styles.link} href={item.href}>
                <Image
                  src="/global/pdf-icon.svg"
                  alt="pdf"
                  width={20}
                  height={26}
                />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Information;
