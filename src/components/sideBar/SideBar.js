import "./SideBar.css";
import logo from '../../assets/icons/Logo.svg';
import menu from '../../assets/icons/menu_black.svg';

const SideBar = () => {
    let url="";
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href={url} className="nav-link">
            <img src={logo} alt="logo"/>
          </a>
        </li>
        <li className="nav-item">
          <a href={url} className="nav-link">
            <img src={menu} alt="menu"/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
