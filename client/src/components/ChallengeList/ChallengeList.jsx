import ChallengeCard from "@/components/ChallengeCard";
import { ROUTE_NAMES } from "@/router/routes";
import { Spin } from "antd";
import React from "react";
import { useHistory } from "react-router";

import styles from "./ChallengeList.module.css";

const ChallengeList = ({ items, loading }) => {
  const history = useHistory();
  const openChallenge = (id) => {
    history.push(ROUTE_NAMES.CHALLENGE + `/${id}`);
  };

  if (loading) {
    return (
      <div className={styles.wrapper}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {!items.length && <div className={styles.empty}>Список пуст</div>}
      {items.map((item) => (
        <ChallengeCard
          {...item}
          key={item.id}
          onClick={() => openChallenge(item.id)}
        />
      ))}
    </div>
  );
};

export default ChallengeList;
