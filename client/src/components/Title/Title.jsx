import React from "react";

import styles from "./Title.module.css";

const Title = ({ sticky = false, children }) => {
  const classes = [styles.title];
  if (sticky) {
    classes.push(styles.titleSticky);
  }
  return <h2 className={classes.join(" ")}>{children}</h2>;
};

export default Title;
