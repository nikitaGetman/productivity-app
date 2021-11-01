import React from "react";
import { CATEGORIES_DATA } from "@/constants/categories";
import {
  ThunderboltOutlined,
  ThunderboltFilled,
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons";

import styles from "./ChallengeCard.module.css";

const ChallengeCard = ({
  title,
  category,
  isLiked,
  isActive,
  isFinished,
  onClick,
}) => {
  const { icon, color } = CATEGORIES_DATA[category];

  return (
    <div
      className={styles.item}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <div className={styles.header}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.actions}>
          <div className={styles.started}>
            {isActive && <ThunderboltOutlined />}
            {isFinished && <ThunderboltFilled />}
          </div>
          <div className={styles.heart}>
            {isLiked ? <HeartFilled /> : <HeartOutlined />}
          </div>
        </div>
      </div>

      <div
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}
      ></div>
    </div>
  );
};

export default ChallengeCard;
