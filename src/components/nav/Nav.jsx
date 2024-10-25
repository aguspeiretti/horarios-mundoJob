import "./nav.css";
import { Link } from "react-router-dom";

const Nav = ({ handleMenu }) => {
  return (
    <div className="navbar">
      <div className="links">
        <ul>
          <Link to={"/"}>
            <li onClick={handleMenu}>Marketing</li>{" "}
          </Link>
          <Link to={"/ventas"}>
            <li onClick={handleMenu}>Ventas</li>
          </Link>
          <Link to={"/coordinacion"}>
            <li onClick={handleMenu}>Coordinación</li>
          </Link>
          <Link to={"/gestion"}>
            <li onClick={handleMenu}>Gestión</li>
          </Link>
          <Link to={"/recursos-humanos"}>
            <li onClick={handleMenu}>Recursos humanos</li>
          </Link>
          <Link to={"/administracion"}>
            <li onClick={handleMenu}>Administración</li>
          </Link>
          <Link to={"/Comunicacion"}>
            <li onClick={handleMenu}>Comunicación</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
