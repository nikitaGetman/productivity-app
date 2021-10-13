import React from "react";
import { ROUTE_NAMES } from "@/router/routes";
import {
  AppstoreOutlined,
  PlayCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import NavItem from "./components/NavItem";

import styles from "./NabBar.module.css";

const NabBar = () => {
  return (
    <div className={styles.wrapper}>
      <NavItem to={ROUTE_NAMES.CHALLENGES}>
        <AppstoreOutlined />
      </NavItem>
      <NavItem to={ROUTE_NAMES.MY_CHALLENGES}>
        <PlayCircleOutlined />
      </NavItem>
      <NavItem to={ROUTE_NAMES.PROFILE}>
        <UserOutlined />
      </NavItem>
    </div>
  );
};

export default NabBar;
