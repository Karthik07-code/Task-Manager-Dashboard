import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "../styles/sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`sidebar-wrapper ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Task Manager</h2>
          <button className="close-btn" onClick={toggleSidebar}>
            <IoClose size={24} />
          </button>
        </div>
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
