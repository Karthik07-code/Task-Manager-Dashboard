import EpieChart from "../charts/EpieChart";

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
  return (
    <>
      <h1>Dashboard😎</h1>
      <p> Total Tasks : {totalTasks}</p>
      <p> Completed Tasks : {completedTasks}</p>
      <p> Pending Tasks : {pendingTasks}</p>
      <p> Completed Tasks Percentage: {completionPercentage}%</p>
      {console.log(tasks)}
      <EpieChart data={piedata} />
    </>
  );
};

export default Dashboard;
