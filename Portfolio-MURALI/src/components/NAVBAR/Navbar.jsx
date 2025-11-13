import darkbtn from "../../assets/icons/DARKbtn.png";
import logo_icon from "../../assets/icons/LOGO-ICON.png";
import menu_icon from "../../assets/icons/menu-icon.png";
import "./Navbar.css"


export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="container-nav Navbar-inside">
        <img className="logo-icon" src={logo_icon} alt="logo-icon" />

        <div className="nav-right">
          <img className="dark-btn " src={darkbtn} alt="dark-btn" />
          <img className="menu-icon  " src={menu_icon} alt="menu-icon" />
        </div>
      </div>
    </nav>
  );
}
