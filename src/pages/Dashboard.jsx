const Dashboard = ({ tasks }) => {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  const pendingTasks = tasks.filter((task) => task.status === "pending").length;

  const completionPercentage =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <>
      <h1>Dashboard changed Bro...🤞😎</h1>
      <p> Total Tasks : {tasks.length}</p>
      <p> Completed Tasks : {completedTasks}</p>
      <p> Pending Tasks : {pendingTasks}</p>
      <p> Completed Tasks Percentage: {completionPercentage}%</p>
      {console.log(tasks)}
    </>
  );
};

export default Dashboard;
