import React from "react";

import styles from "./PageHeader.module.css";

const PageHeader = ({ height = 200, children }) => {
  return (
    <div className={styles.wrapper} style={{ height }}>
      <div className={styles.container} style={{ height }}>
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
