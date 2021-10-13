import { CATEGORIES_DATA } from "@/constants/categories";
import React from "react";

import ChartLegend from "../ChartLegend";
import TodayDate from "../TodayDate";
import DoughnutChart from "../DoughnutChart";

import styles from "./Statistic.module.css";

const Statistic = ({ data }) => {
  const { totalDays, detailed } = data;

  const datasets = Object.entries(detailed).map(([key, value]) => ({
    value,
    label: CATEGORIES_DATA[key].name,
    color: CATEGORIES_DATA[key].color,
    icon: CATEGORIES_DATA[key].icon,
  }));

  return (
    <div className={styles.wrapper}>
      <TodayDate />
      <DoughnutChart datasets={datasets} total={totalDays} />
      <ChartLegend datasets={datasets} />
    </div>
  );
};

export default Statistic;
