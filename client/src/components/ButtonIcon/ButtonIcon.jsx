import React from "react";

import styles from "./ButtonIcon.module.css";

const ButtonIcon = ({ className, children, ...rest }) => {
  return (
    <button {...rest} className={[styles.button, className].join(" ")}>
      {children}
    </button>
  );
};

export default ButtonIcon;
