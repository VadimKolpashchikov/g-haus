import ProductsPopular from "@/containers/brand/ProductsPopular";
import styles from "@brand/brand.module.scss";
import TitleBox from "@/components/UI/titleBox/TitleBox";
import BreadCrumbs from "@/components/UI/breadCrumbs/BreadCrumbs";
import BrandItem from "@/containers/brand/BrandItem";
import { getApiData } from "@/api/getData";
import { Metadata } from "next";
import NotFound from "@/containers/NotFound";

export async function generateMetadata({
  params: { brand },
}: Props): Promise<Metadata> {
  const brandOne = await getApiData(`brands/${brand}`);

  return {
    title: brandOne.brand ? `${brandOne.brand.name}` : "404",
    description: brandOne.brand
      ? `${brandOne.brand.name}, подробная информация о бренде`
      : "Страница не найдена",
  };
}

type Props = {
  params: {
    brand: string;
  };
};

function getBreadCrumbs(brand: string, slug: string) {
  return [
    { name: "Главная", href: "/" },
    { name: "Бренды", href: `#main-brands` },
    { name: brand, href: `/brands/${slug}` },
  ];
}

export default async function BrandPage({ params: { brand } }: Props) {
  const brandOne = await getApiData(`brands/${brand}`);

  if (!brandOne.brand) {
    return <NotFound />;
  }
  const breadCrumbsItems = getBreadCrumbs(
    brandOne.brand.name,
    brandOne.brand.slug
  );

  return (
    <main className={styles.brand}>
      <div className="container">
        <BreadCrumbs breadCrumbsItems={breadCrumbsItems} />
        <TitleBox>{brandOne.brand.name}</TitleBox>
      </div>
      <BrandItem brandOne={brandOne.brand} />
      <ProductsPopular products={brandOne.products} />
    </main>
  );
}
