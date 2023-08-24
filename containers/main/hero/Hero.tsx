"use client";
import styles from "@/styles/components/main/Hero/hero.module.scss";
import Banner from "./Banner";
import Week from "./Week";
const Hero = (): JSX.Element => {
  return (
    <section className={styles.main}>
      <div className="container">
        <div className={styles.row}>
          <Banner classItem={styles.wrapper_banner} />
          <Week classItem={styles.wrapper_week} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
