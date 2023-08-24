import "@/styles/globals.scss";
import "@/styles/fonts/Gilroy.scss";
import "@/styles/fonts/Inter.scss";
import "@/styles/fonts/Montserrat.scss";
import Header from "@/containers/header/Header";
import Footer from "@/containers/footer/Footer";
import "swiper/scss";
import "swiper/scss/free-mode";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Main from "@/containers/Main";
import Modal from "@/containers/modals/Modal";
import { getApiData } from "@/api/getData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
    noarchive: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = await getApiData("static");
  return (
    <html lang="en">
      <body>
        <Main>
          <Header topMenu={menuItems["top menu"]} />
          {children}
          <Footer data={menuItems["footer menu"]} />
          <Modal />
        </Main>
      </body>
    </html>
  );
}
