import React from "react";

import styles from "./ChartLegend.module.css";

const ChartLegend = ({ datasets }) => {
  const sortedDatasets = [...datasets].sort((a, b) => b.value - a.value);

  return (
    <div className={styles.legend}>
      {sortedDatasets.map((d, index) => (
        <span
          key={index}
          className={styles.legendItem}
          style={{ backgroundColor: d.color }}
        >{`${d.icon} ${d.label} ${d.value} дн.`}</span>
      ))}
    </div>
  );
};

export default ChartLegend;
