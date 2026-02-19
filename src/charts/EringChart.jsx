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
        // Premium colors: Success (Green) and Muted (Light Grey) for the ring
        color: ["#00b894", "#dfe6e9"],
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
