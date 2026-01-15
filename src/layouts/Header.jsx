import { RxHamburgerMenu } from "react-icons/rx";
import "../styles/header.css";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="header-container">
      <button className="mobile-menu-btn" onClick={toggleSidebar}>
        <RxHamburgerMenu size={24} />
      </button>
      <h2>Dashboard</h2>
    </div>
  )
}

export default Header