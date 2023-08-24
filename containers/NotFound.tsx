import Image from "next/image";
import cl from "@/styles/components/not-found.module.scss";
const NotFound = (): JSX.Element => {
  return (
    <section className={cl.main}>
      <div className={`container ${cl.container}`}>
        <div className={cl.row}>
          <div className={cl.imgWrap}>
            <Image src={"/404/404.svg"} alt="404" width={401} height={334} />
          </div>
          <h2 className={cl.title}>Страница не найдена</h2>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
