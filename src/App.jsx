import React, { useEffect, useState } from "react";
import Sidebar from "./layouts/Sidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="app-layout">
        <Sidebar />
        <div className="app-content">
          <AppRoutes tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </>
  );
}

export default App;
