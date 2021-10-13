import Button from "@/components/Button";
import React from "react";

import styles from "./ChallengeBody.module.css";

const ChallengeBody = ({ challenge }) => {
  return (
    <>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: challenge.description }}
      ></div>

      <div className={styles.actions}>
        <Button>Добавить</Button>
      </div>
    </>
  );
};

export default ChallengeBody;
