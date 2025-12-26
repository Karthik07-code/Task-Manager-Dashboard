import { Route, Routes } from "react-router-dom";
import "../App.css";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Completed from "../pages/Completed";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/completed-tasks" element={<Completed />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
