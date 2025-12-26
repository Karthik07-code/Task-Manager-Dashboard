import { Link, NavLink } from "react-router-dom";
import "../styles/sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-wrapper">
        <h2>Task Manager</h2>
        <ul className="sidebar-menu">
          <li>
            <NavLink to="/" end>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks">Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/completed-tasks">Completed Tasks</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
