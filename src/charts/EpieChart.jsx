import React from "react";
import ReactECharts from "echarts-for-react";

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
        name: "Access From",
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
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  return (
    <div>
      <ReactECharts option={option} />
    </div>
  );
};

export default EpieChart;
