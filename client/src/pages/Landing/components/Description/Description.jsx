import { Carousel } from "antd";
import React from "react";
import logo from "@/assets/images/logo.png";

import styles from "./Description.module.css";

const Description = () => {
  return (
    <div className={styles.wrapper}>
      <Carousel effect="scrollx" autoplay draggable className={styles.slider}>
        <div className={styles.slide}>
          <h3 className={styles.text}>
            Учись <span className={styles.textWhite}>нон-стоп</span>
            <br />
            вместе с
          </h3>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.slide}>
          <h3 className={styles.text}>
            Вырабатывай
            <br />
            <span className={styles.textWhite}>
              полезные
              <br />
              привычки
            </span>{" "}
            с
          </h3>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.slide}>
          <h3 className={styles.text}>
            <span className={styles.textWhite}>Саморазвивайся</span>
            <br /> каждый день с
          </h3>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
      </Carousel>
    </div>
  );
};

export default Description;
