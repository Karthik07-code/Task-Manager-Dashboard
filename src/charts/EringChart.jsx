import React from "react";
import ReactECharts from "echarts-for-react";

const EringChart = ({ data, percentage }) => {
  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}",
    },

    series: [
      {
        name: "",
        type: "pie",
        radius: ["65%", "85%"], // 🔥 ring effect
        avoidLabelOverlap: true,
        label: {
          show: false,
        },
        emphasis: {
          scale: false,
        },
        data: data,
        color: ["#5dd39e", "#e0e0e0"], // completed / pending
      },
    ],

    graphic: {
      elements: [
        {
          type: "text",
          left: "center",
          top: "center",
          style: {
            text: `${percentage}%`,
            fontSize: 26,
            fontWeight: 600,
            fill: "#333",
          },
        },
        {
          type: "text",
          left: "center",
          top: "58%",
          style: {
            text: "Completed",
            fontSize: 12,
            fill: "#777",
          },
        },
      ],
    },
  };

  return (
    <ReactECharts option={option} style={{ height: 240, width: "100%" }} />
  );
};

export default EringChart;
