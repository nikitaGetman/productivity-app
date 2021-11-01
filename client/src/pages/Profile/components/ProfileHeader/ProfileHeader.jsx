import ButtonIcon from "@/components/ButtonIcon";
import React from "react";
import { SettingOutlined, UserOutlined } from "@ant-design/icons";

import styles from "./ProfileHeader.module.css";
import { useHistory } from "react-router";
import { ROUTE_NAMES } from "@/router/routes";
import PageHeader from "@/components/PageHeader";

const ProfileHeader = ({ user }) => {
  const history = useHistory();

  return (
    <PageHeader>
      <ButtonIcon
        className={styles.settings}
        onClick={() => history.push(ROUTE_NAMES.SETTINGS)}
      >
        <SettingOutlined />
      </ButtonIcon>

      <div className={styles.avatarWrapper}>
        {user.avatar && <img src={user.avatar} alt="Avatar" />}
        {!user.avatar && <UserOutlined />}
      </div>

      <div className={styles.username}>{user.name}</div>
    </PageHeader>
  );
};

export default ProfileHeader;
