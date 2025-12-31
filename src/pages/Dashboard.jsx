import EpieChart from "../charts/EpieChart";
import "../styles/dashboard.css";
import { FiList } from "react-icons/fi";
import { HiOutlineClock } from "react-icons/hi";
import { MdOutlinePendingActions } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Dashboard = ({ tasks }) => {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  const pendingTasks = tasks.filter((task) => task.status === "pending").length;

  const completionPercentage =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const piedata = [
    {
      name: "Total Tasks",
      value: totalTasks,
    },
    {
      name: "Completed Tasks",
      value: completedTasks,
    },
    { name: "Pending Tasks", value: pendingTasks },
  ];
  console.log("Tasks :", tasks);
  return (
    <>
      <h1>Dashboard😎</h1>

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

      <EpieChart data={piedata} />
    </>
  );
};

export default Dashboard;
