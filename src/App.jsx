import React, { useState } from "react";
import Sidebar from "./layouts/Sidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [tasks, setTasks] = useState([]);

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
