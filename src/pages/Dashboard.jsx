import "../styles/dashboard.css";
import "../styles/mini-calendar.css";
import { FiList } from "react-icons/fi";
import { HiOutlineClock } from "react-icons/hi";
import { MdOutlinePendingActions } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import * as echarts from "echarts";
import EringChart from "../charts/EringChart";

const Dashboard = ({ tasks }) => {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "completed",
  ).length;

  const pendingTasks = tasks.filter((task) => task.status === "pending").length;

  const completionPercentage =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const ringPiedata = [
    // {
    //   name: "Total Tasks",
    //   value: totalTasks,F
    //   itemStyle: {
    //     color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
    //       { offset: 0, color: "#7f7cff" },
    //       { offset: 1, color: "#b8b5ff" },
    //     ]),
    //   },
    // },
    {
      name: "Completed Tasks",
      value: completedTasks,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
          { offset: 0, color: "#5dd39e" },
          { offset: 1, color: "#baf3d2" },
        ]),
      },
    },
    {
      name: "Pending Tasks",
      value: pendingTasks,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
          { offset: 0, color: "#ff9a8b" },
          { offset: 1, color: "#ffd1c7" },
        ]),
      },
    },
  ];
  console.log("Tasks :", tasks);

  return (
    <>
      <div className="dashboard-layout">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p className="text-muted">Overview of your productivity</p>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-tiles">
            <div className="dashboard-tile tile-total">
              <div className="tile-icon">
                <FiList />
              </div>
              <div className="tile-content">
                <h3>{totalTasks}</h3>
                <p>Total Tasks</p>
              </div>
            </div>

            <div className="dashboard-tile tile-progress">
              <div className="tile-icon">
                <HiOutlineClock />
              </div>
              <div className="tile-content">
                <h3>{pendingTasks}</h3>
                <p>In Progress</p>
              </div>
            </div>

            <div className="dashboard-tile tile-pending">
              <div className="tile-icon">
                <MdOutlinePendingActions />
              </div>
              <div className="tile-content">
                <h3>{pendingTasks}</h3>
                <p>Pending</p>
              </div>
            </div>

            <div className="dashboard-tile tile-completed">
              <div className="tile-icon">
                <AiOutlineCheckCircle />
              </div>
              <div className="tile-content">
                <h3>{completedTasks}</h3>
                <p>Completed</p>
              </div>
            </div>
          </div>

          <div className="dashboard-charts-section mt-5">
            <div className="chart-container">
              <h3 className="chart-title">Task Overview</h3>
              <EringChart
                data={ringPiedata}
                percentage={completionPercentage}
              />
            </div>
            {/* Placeholder for future charts or stats to visual balance */}
            <div className="stats-summary-card">
              <h3>Productivity Score</h3>
              <div className="score-display">
                <span className="score">
                  {Math.min(completionPercentage, 100)}%
                </span>
                <span className="label">Efficient</span>
              </div>
              <p className="insight-text">You are doing great! Keep it up.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
