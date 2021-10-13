import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <GithubOutlined className={styles.logo} />
      <span className={styles.title}>CompanyName</span>
    </div>
  );
};

export default Logo;
