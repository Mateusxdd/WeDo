import logo from "../assets/WeDo.jpg"
import "../CSS/nav-bar.css";
import Button from 'react-bootstrap/Button';
import user from "../assets/user.png"
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#">
        <img src={logo} alt="img" />
        </a>
        <div>
          <a href="#" className="logo">
            <span>WeDo</span>
             <p>Comunique. Colabore. Crie</p>
          </a>
        </div>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/inicio">Inicio</a>
          </li>
          <li>
            <a href="/produtos">Produtos</a>
          </li>
          <li>
            <a href="/sobre-nos">Planos</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
          <li>
            <div id="user">
                <img src={user} alt="User" />
             <a href="/login">Login</a>
            </div>
          </li>
        <Button variant="warning">Começar</Button>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
