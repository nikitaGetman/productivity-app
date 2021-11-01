import ButtonIcon from "@/components/ButtonIcon";
import PageHeader from "@/components/PageHeader";
import React from "react";
import {
  ArrowLeftOutlined,
  ThunderboltOutlined,
  ThunderboltFilled,
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons";

import styles from "./ChallengeHeader.module.css";
import { useHistory } from "react-router";
import { CATEGORIES_DATA } from "@/constants/categories";

const ChallengeHeader = ({ challenge }) => {
  const history = useHistory();

  const category = CATEGORIES_DATA[challenge.category];

  return (
    <PageHeader>
      <ButtonIcon className={styles.back} onClick={() => history.goBack()}>
        <ArrowLeftOutlined />
      </ButtonIcon>
      <div className={styles.actions}>
        <ButtonIcon className={styles.isActive}>
          {challenge.isActive && <ThunderboltOutlined />}
          {challenge.isFinished && <ThunderboltFilled />}
        </ButtonIcon>
        <ButtonIcon>
          {challenge.isLiked ? <HeartFilled /> : <HeartOutlined />}
        </ButtonIcon>
      </div>
      <h2
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: challenge.title }}
      ></h2>
      <h4
        className={styles.category}
        style={{ backgroundColor: category.color }}
      >
        {`${category.icon} - ${category.name}`}
      </h4>
    </PageHeader>
  );
};

export default ChallengeHeader;
