import React from "react";
import NavBar from "@/components/NabBar";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>{children}</div>
      </div>
      <NavBar />
    </>
  );
};

export default MainLayout;
