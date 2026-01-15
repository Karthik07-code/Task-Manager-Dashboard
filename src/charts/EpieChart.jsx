import React from "react";
import ReactECharts from "echarts-for-react";
import { color } from "echarts";

const EpieChart = ({ data }) => {
  const option = {
    title: {
      text: "Tasks Insights",
      subtext: "",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      bottom: "bottom",
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: "50%",
        // data: [
        //   { value: 6, name: "Toatal Tasks" },
        //   { value: 2, name: "Completed Tasks" },
        //   { value: 4, name: "Pending Tasks" },
        // ],
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 7,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  return (
    <div>
      <ReactECharts option={option} style={{ height: 300 }} />
    </div>
  );
};

export default EpieChart;
