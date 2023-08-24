"use client";
import cl from "@licenses/licenses.module.scss";
import Image from "next/image";
import { useState } from "react";
import useLicensesData from "./LicensesData";
import Fancybox from "@/components/fancy/Fancybox";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
const Licenses = (): JSX.Element => {
  const [data, setData] = useLicensesData();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={cl.main}>
      <Swiper
        modules={[FreeMode]}
        loop={false}
        slidesPerView={"auto"}
        slidesPerGroupAuto={true}
        wrapperClass={cl.swiper_wrapper}
        freeMode={{
          enabled: true,
          sticky: false,
          momentumVelocityRatio: 0.6,
        }}
      >
        <SwiperSlide className={cl.slide}>
          <ul className={cl.list}>
            {data.map((item, i: number) => (
              <li
                onClick={() => setActiveTab(i)}
                key={item.name}
                className={`${cl.item} ${i === activeTab ? cl.active : ""}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </SwiperSlide>
      </Swiper>

      <div className={cl.contentWrap}>
        {data.map(
          (item, i: number) =>
            i === activeTab && (
              <div className={cl.licensesBox} key={item.name}>
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: true,
                    },
                  }}
                >
                  {item.list.map((el, idx) => (
                    <a
                      href={`/licenses/${el}_big.png`}
                      data-fancybox={`gallery-licenses-${i + 1}`}
                      key={el}
                    >
                      <Image
                        src={`/licenses/${el}.png`}
                        alt={item.name || "Лицензия на продукцию"}
                        width={262}
                        height={370}
                        loading="lazy"
                      />
                    </a>
                  ))}
                </Fancybox>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Licenses;
