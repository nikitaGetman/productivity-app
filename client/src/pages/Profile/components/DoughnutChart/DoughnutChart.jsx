import React from "react";
import { Doughnut } from "react-chartjs-2";

import styles from "./DoughnutChart.module.css";

const DoughnutChart = ({ datasets, total }) => {
  const chartData = {
    labels: datasets.map((d) => d.label),
    datasets: [
      {
        data: datasets.map((d) => d.value),
        backgroundColor: datasets.map((d) => d.color),
      },
    ],
  };
  const options = {
    offset: 3,
    cutout: "80%",
    hoverBorderWidth: 0,
    borderColor: "#fff",

    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className={styles.chart}>
      <Doughnut data={chartData} options={options} />
      <div className={styles.info}>
        <div className={styles.total}>{total}</div>
        дней
        <br />
        развития
      </div>
    </div>
  );
};

export default DoughnutChart;
