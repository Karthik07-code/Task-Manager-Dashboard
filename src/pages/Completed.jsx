import "../styles/completed-tasks.css";

const Completed = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.status === "completed");
  return (
    <div className="task-page-wrapper">
      <div className="task-header">
        <h1>Completed Tasks</h1>
        <p className="text-muted">Great job on finishing these!</p>
      </div>

      <div className="task-container">
        {completedTasks.length === 0 ? (
          <div className="text-center text-muted mt-5">
            <p>No completed tasks yet. Keep going! 🥲</p>
          </div>
        ) : (
          <ul style={{ padding: 0 }}>
            {completedTasks.map((task) => (
              <div className="d-flex my-3" key={task.id}>
                <button
                  className="task-circle completed"
                  aria-label="Task completed"
                  disabled
                ></button>
                <li className="tasks-list completed-task">{task.title}</li>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Completed;
