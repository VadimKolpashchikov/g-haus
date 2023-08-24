import cl from "./titleBox.module.scss";
import Image from "next/image";
import Link from "next/link";
type Props = {
  icon?: string;
  watch?: string;
  youtube?: string;
  w?: number;
  h?: number;
  children: string | JSX.Element | JSX.Element[];
  classItem?: string;
};
const TitleBox: React.FC<Props> = ({
  children,
  icon,
  watch,
  youtube,
  w = 22,
  h = 22,
  classItem = "",
}): JSX.Element => {
  return (
    <div className={cl.titleRow + " " + classItem}>
      <div className={cl.titleBox}>
        {icon?.length ? (
          <div className={cl.titleIcon}>
            <Image src={icon} alt="icon" width={w} height={h} loading="lazy" />
          </div>
        ) : (
          ""
        )}
        <h3 className={cl.title}>{children}</h3>
      </div>
      {watch?.length ? (
        <Link href={watch} className={cl.titleWatch}>
          Смотреть всё
          <Image
            src={"/global/arrow-watch.svg"}
            width={7}
            height={10}
            alt={"#"}
          />
        </Link>
      ) : (
        ""
      )}
      {youtube?.length ? (
        <a href={youtube} className={cl.titleYoutube}>
          <Image
            src={"/global/youtube-icon.svg"}
            width={32}
            height={23}
            alt={"#"}
          />
          Подписаться
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default TitleBox;
