"use client";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
import { Collapse } from "react-collapse";
import useWindowWidth from "@/hooks/useWindowWidth";
import styles from "@/styles/components/Header/header.module.scss";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { FC, useEffect, useRef, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";
import Loader from "../Loader";
const Header: FC<any> = ({ topMenu }): JSX.Element => {
  const windowWidth = useWindowWidth(991);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [paddingTop, setPaddingTop] = useState<any>(0);
  const [transformTop, setTransforTop] = useState<any>(0);
  const [scrollTop, setScrollTop] = useState<any>(0);
  const searchActive = useSelector(
    (state: RootState) => state.header.searchActive
  );
  const blockRef = useRef(null);
  const transformRef = useRef(null);
  const scrollRef = useRef(null);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { height } = entry.contentRect;
        setPaddingTop(height);
      }
    });

    const transformObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { height } = entry.contentRect;
        setTransforTop(height);
      }
    });
    const scrollObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { height } = entry.contentRect;
        setScrollTop(height);
      }
    });

    if (blockRef.current) {
      resizeObserver.observe(blockRef.current);
    }

    if (transformRef.current) {
      transformObserver.observe(transformRef.current);
    }

    if (scrollRef.current) {
      scrollObserver.observe(scrollRef.current);
    }

    return () => {
      if (blockRef.current) {
        resizeObserver.unobserve(blockRef.current);
      }
      if (transformRef.current) {
        transformObserver.unobserve(transformRef.current);
      }
      if (scrollRef.current) {
        scrollObserver.unobserve(scrollRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Loader />
      <header style={{ paddingTop: paddingTop }} className={styles.main}>
        <div
          ref={blockRef}
          className={`${styles.fixed} ${
            scrollPosition >= scrollTop + transformTop && !windowWidth
              ? styles.scroll
              : ""
          }`}
          style={
            scrollPosition >= scrollTop + transformTop && !windowWidth
              ? {
                  transform: `translateY(-${transformTop}px)`,
                }
              : {}
          }
        >
          {/* <Collapse
            theme={{ collapse: styles.collapse }}
            isOpened={scrollPosition > 0 && !windowWidth ? false : true}
          ></Collapse> */}
          <div ref={transformRef}>
            <HeaderTop topMenu={topMenu} />
          </div>

          <Collapse
            isOpened={windowWidth ? searchActive : true}
            theme={{ collapse: styles.collapse }}
          >
            <HeaderMiddle />
          </Collapse>
        </div>
        <div ref={scrollRef}>
          <HeaderBottom />
        </div>
      </header>
    </>
  );
};

export default Header;
