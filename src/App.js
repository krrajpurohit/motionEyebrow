import "./App.css";
import logo from "./assets/icons/Logo.svg";
import menu from "./assets/icons/menu_black.svg";

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <img src={logo} />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <img src={menu} />
            </a>
          </li>
        </ul>
      </nav>
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
