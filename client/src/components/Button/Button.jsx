import React from "react";

import styles from "./Button.module.css";

const TYPES = ["success", "danger", "primary", "black", "primaryLight"];

const Button = ({ type = "primary", block = false, children, ...rest }) => {
  const classes = [styles.button];
  classes.push(styles[type]);
  if (block) classes.push(styles.block);

  return (
    <button {...rest} className={classes.join(" ")}>
      {children}
    </button>
  );
};

export default Button;
