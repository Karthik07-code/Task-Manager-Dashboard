import { Route, Routes } from "react-router-dom";
import "../App.css";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Completed from "../pages/Completed";

const AppRoutes = ({ tasks, setTasks }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard tasks={tasks} />} />
        <Route
          path="/tasks"
          element={<Tasks tasks={tasks} setTasks={setTasks} />}
        />
        <Route path="/completed-tasks" element={<Completed tasks={tasks} />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
