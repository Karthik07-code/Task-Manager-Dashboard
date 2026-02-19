import React, { useEffect, useState } from "react";
import "../styles/task.css";
import { FcEmptyTrash } from "react-icons/fc";

const Tasks = ({ tasks, setTasks }) => {
  const [inputTask, setInputTask] = useState("");

  const handleTaskInputChange = (e) => setInputTask(e.target.value);

  const handleTask = () => {
    if (!inputTask.trim()) return;

    const newTask = {
      id: Date.now(),
      title: inputTask,
      status: "pending",
    };

    setTasks([...tasks, newTask]);
    setInputTask("");
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleToggleStatus = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: task.status === "pending" ? "completed" : "pending",
          }
        : task,
    );

    setTasks(updatedTasks);
  };

  useEffect(() => {
    console.log("Tasks : ", tasks);
  }, [tasks]);

  return (
    <>
      <div className="task-page-wrapper">
        <div className="task-header">
          <h1>Tasks</h1>
          <p className="text-muted">Manage your daily goals</p>
        </div>

        <div className="task-container">
          <input
            type="text"
            onChange={handleTaskInputChange}
            placeholder="What needs to be done?"
            value={inputTask}
            className="task-input"
          />
          <button className="add-task-btn" onClick={handleTask}>
            Add New Task
          </button>

          {tasks.length === 0 && (
            <div className="text-center text-muted mt-5">
              <p>No tasks yet. Add one above!</p>
            </div>
          )}

          <>
            <div className="d-flex flex-column gap-1">
              <ul style={{ padding: 0 }}>
                {tasks.map((task) => (
                  <div className="d-flex my-3" key={task.id}>
                    <button
                      className={`task-circle ${
                        task.status === "completed" ? "completed" : ""
                      }`}
                      onClick={() => handleToggleStatus(task.id)}
                      aria-label="Mark task as completed"
                    ></button>

                    <li
                      className={`tasks-list ${
                        task.status === "completed" ? "completed-task" : ""
                      }`}
                    >
                      {task.title}
                    </li>
                    <div
                      className="delete-icon"
                      onClick={() => handleDelete(task.id)}
                    >
                      <FcEmptyTrash className="trash-icon empty" />
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Tasks;
