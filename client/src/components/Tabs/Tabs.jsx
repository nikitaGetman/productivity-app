import React from "react";

import styles from "./Tabs.module.css";

const Tabs = ({ tabs, current, onChange }) => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => {
        const classes = [styles.tab];
        if (tab.value === current) classes.push(styles.active);
        return (
          <button
            className={classes.join(" ")}
            key={tab.value}
            onClick={() => onChange(tab.value)}
          >
            {tab.text}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
