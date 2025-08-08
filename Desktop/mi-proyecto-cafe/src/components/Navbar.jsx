import './Navbar.css';
import logo from '../assets/coctel-navbar.jpg';

function Navbar() {
  return (
    <header className="navbar">
      <img src={logo} alt="Logo Brinda" className="navbar__full" />
      <div className="navbar__overlay">
        <div className="navbar__content">
          <h1 className="navbar__title">Brinda</h1>
          <nav className="navbar__menu">
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#cocteles">Cócteles</a></li>
              <li><a href="#favoritos">Favoritos</a></li>
              <li><a href="#contacto">Mi bar</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
