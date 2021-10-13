import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavItem.module.css";

const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={styles.item}
      activeClassName={styles.itemActive}
    >
      <span className={styles.icon}>{children}</span>
    </NavLink>
  );
};

export default NavItem;
