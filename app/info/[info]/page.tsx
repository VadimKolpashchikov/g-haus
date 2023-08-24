import Info from "@/containers/info/Info";
import { getInfoDate } from "@/containers/info/date";
import BreadCrumbs from "@/components/UI/breadCrumbs/BreadCrumbs";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import cl from "@/styles/components/info/info-page.module.scss";
import NotFound from "@/containers/NotFound";
type Props = {
  params: {
    info: string;
  };
};

function getBreadCrumbs(item: string, slug: string) {
  return [
    { name: "Главная", href: "/" },
    { name: item, href: `/${slug}` },
  ];
}

export default function InfoPage({ params: { info } }: Props) {
  const infoItem = getInfoDate(info);

  if (!infoItem.name) {
    return <NotFound />;
  }

  const breadCrumbsItems = getBreadCrumbs(infoItem.name, info);
  return (
    <main className={cl.main}>
      <div className="container">
        <BreadCrumbs breadCrumbsItems={breadCrumbsItems} />
        <TitleBox classItem={cl.title}>{infoItem.name}</TitleBox>
      </div>
      <Info content={infoItem.jsx} />
    </main>
  );
}
