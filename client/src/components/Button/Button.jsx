import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "./Button.module.css";

const TYPES = ["success", "danger", "primary", "black", "primaryLight"];

const Button = ({
  type = "primary",
  loading = false,
  block = false,
  children,
  ...rest
}) => {
  const classes = [styles.button];
  classes.push(styles[type]);
  if (block) classes.push(styles.block);
  if (loading) classes.push(styles.buttonLoading);

  return (
    <button {...rest} className={classes.join(" ")} disabled={loading}>
      {loading && <LoadingOutlined className={styles.loader} />}
      {children}
    </button>
  );
};

export default Button;
