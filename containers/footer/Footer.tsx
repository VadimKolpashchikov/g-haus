import cl from "@/styles/components/Footer/footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ data }: { data: any }) => {
  // console.log(data);

  return (
    <footer className={cl.footer}>
      <div className="container">
        <div className={`row ${cl.row}`}>
          <div className={cl.row__item}>
            <div className={cl.imgWrap}>
              <Link href="/">
                <Image
                  src={"/footer/logo.png"}
                  alt="logo"
                  width={185}
                  height={221}
                  loading="lazy"
                />
              </Link>
            </div>

            <div className={cl.listsBox}>
              {data.items[0].items.map((el: any, idx: number) =>
                idx < 2 ? (
                  <div className={cl.listWrap} key={el.id}>
                    <p className={cl.listTitle}>{el.text}</p>
                    <ul className={cl.list}>
                      {el.items.map((link: any, i: number) => (
                        <li className={cl.listItem} key={link.id}>
                          <Link href={link.href} className={cl.listLink}>
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )
              )}

              <div className={cl.listsBox__column}>
                {data.items[0].items.map((el: any, idx: number) =>
                  idx >= 2 ? (
                    <div className={cl.listWrap} key={el.id}>
                      <p className={cl.listTitle}>{el.text}</p>
                      <ul className={cl.list}>
                        {el.items.map((link: any, i: number) => (
                          <li className={cl.listItem} key={link.id}>
                            <Link href={link.href} className={cl.listLink}>
                              {link.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>

            <div className={cl.infoBox}>
              {data.items[1].items.map((el: any, idx: number) => (
                <div className={cl.infoItem} key={el.id}>
                  <p className={cl.infoTitle}>{el.text}</p>
                  <div className={cl.infoLinks}>
                    {el.items.map((link: any, i: number) => (
                      <a
                        href={link.href}
                        target="_blank"
                        className={cl.infoLink}
                        key={link.id}
                      >
                        <Image
                          src={`/footer/${link.name}.svg`}
                          alt={link.title}
                          width={66}
                          height={66}
                          loading="lazy"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              <div className={cl.infoItem}>
                <p className={cl.infoTitle}>Способы оплаты:</p>
                <div className={cl.infoPay}>
                  {[...Array(3)].map((img, i) => (
                    <Image
                      key={i}
                      src={`/footer/pay-${i + 1}.png`}
                      alt="Способ оплаты"
                      width={96}
                      height={60}
                      loading="lazy"
                      quality={80}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={cl.row__item_copyright}>
            <p className={cl.copyright}>
              © {new Date().getFullYear()} gradushaus.ru Все права защищены.
              <br />
              Использование материалов разрешено только с согласия
              правообладателей. Полное или частичное копирование сайта запрещено
              и преследуется по закону. ИНН 432500888349 ОГРНИП 314744919000039
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
