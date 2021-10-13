import React from "react";

import styles from "./TodayDate.module.css";

const MONTHS = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

const TodayDate = () => {
  const day = new Date().getDate().toString().padStart(2, "0");
  const month = MONTHS[new Date().getMonth()];
  const date = `${day}. ${month}`;

  return <div className={styles.date}>{date}</div>;
};

export default TodayDate;
