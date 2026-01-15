import React, { useEffect, useState } from "react";
import Sidebar from "./layouts/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import Header from "./layouts/Header";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="app-layout">
        {/* Mobile Overlay */}
        <div 
          className={`mobile-overlay ${isSidebarOpen ? "active" : ""}`}
          onClick={closeSidebar}
        />
        
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        
        <div className="app-content">
          <Header toggleSidebar={toggleSidebar} />
          <AppRoutes tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </>
  );
}

export default App;
