import React, { useEffect, useState } from "react";
import "../styles/task.css";
import { FcEmptyTrash } from "react-icons/fc";
import { FcFullTrash } from "react-icons/fc";

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
        : task
    );

    setTasks(updatedTasks);
  };

  useEffect(() => {
    console.log("Tasks : ", tasks);
  }, [tasks]);

  return (
    <>
      <h1>Tasks</h1>
      <div className="task-container">
        <input
          type="text"
          onChange={handleTaskInputChange}
          placeholder="Enter your task"
          value={inputTask}
          className="task-input"
        />
        <button className="simple-button add-task-btn" onClick={handleTask}>
          Add task
        </button>

        {tasks.length === 0 && <p>No tasks found</p>}

        <>
          <div className="d-flex gap-1">
            <ul>
              {tasks.map((task, index) => (
                <div className="d-flex my-3 align-items-center" key={task.id}>
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
                    {index + 1}. {task.title}
                  </li>
                  <div
                    className="delete-icon"
                    onClick={() => handleDelete(task.id)}
                  >
                    <FcEmptyTrash className="trash-icon empty" />
                    <FcFullTrash className="trash-icon full" />
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </>
      </div>
    </>
  );
};

export default Tasks;
