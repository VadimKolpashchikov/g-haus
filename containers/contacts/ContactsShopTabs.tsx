import { FC } from "react";
import cl from "@/styles/components/contacts/contacts.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import SlideBtns from "@/components/UI/slideBtns/SlideBtns";
import useWindowWidth from "@/hooks/useWindowWidth";
const ContactsShopTabs: FC<any> = ({
  shops,
  active,
  changeShop,
}): JSX.Element => {
  const windowWidth = useWindowWidth(991);

  return (
    <>
      {windowWidth ? (
        <Swiper
          modules={[FreeMode, Navigation]}
          loop={false}
          slidesPerView={"auto"}
          slidesPerGroupAuto={true}
          freeMode={{
            enabled: true,
            sticky: false,
            momentumVelocityRatio: 0.6,
          }}
          wrapperClass={cl.swiperWrapper}
        >
          <SwiperSlide className={cl.slide}>
            <div className={cl.shopsTabs}>
              {shops.map((sh: any, i: any) => (
                <div
                  key={sh.city}
                  className={
                    cl.shopsTab +
                    " " +
                    (active === sh.city ? cl.shopsTabActive : "")
                  }
                  onClick={() => changeShop(sh.city)}
                >
                  <p>{sh.city}</p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <div className={cl.deskSlider}>
          <div className={cl.visible}>
            <Swiper
              modules={[Navigation]}
              wrapperClass={`${cl.swiper_wrapper}`}
              loop={false}
              slidesPerView={"auto"}
              spaceBetween={30}
              navigation={{
                prevEl: `.${cl.slider_btn} .prev`,
                nextEl: `.${cl.slider_btn} .next`,
              }}
            >
              {shops.map((sh: any, i: any) => (
                <SwiperSlide className={cl.slider_item} key={sh.city}>
                  <div
                    key={sh.city}
                    className={
                      cl.shopsTab +
                      " " +
                      (active === sh.city ? cl.shopsTabActive : "")
                    }
                    onClick={() => changeShop(sh.city)}
                  >
                    <p>{sh.city}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <SlideBtns classItem={cl.slider_btn} />
        </div>
      )}
    </>
  );
};

export default ContactsShopTabs;
