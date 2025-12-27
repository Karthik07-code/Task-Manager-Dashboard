import "../styles/completed-tasks.css";

const Completed = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.status === "completed");
  return (
    <div>
      <h1>Completed Tasks</h1>

      {completedTasks.length === 0 && <p> No Tasks Completed yet 🥲</p>}

      <ul>
        {completedTasks.map((task, index) => (
          <li key={task.id} className="finished-task ">
            {index + 1}. {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Completed;
