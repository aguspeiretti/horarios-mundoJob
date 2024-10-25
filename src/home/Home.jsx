/* eslint-disable react/prop-types */
import Comercial from "../pages/Comercial/Comercial";
import Contable from "../pages/Contable/Contable";
import Coordinacion from "../pages/Coordinacion/Coordinacion";
import Marketing from "../pages/Marketing/Marketing";
import { Routes, Route } from "react-router-dom";
import Rrhh from "../pages/Recursos_humanos/Rrhh";
import banner from "../assets/banner-02.png";
import Nav from "../components/nav/Nav";
import "./home.css";
import Gestion from "../pages/Gestion/Gestion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Comunicacion from "../pages/Comunicacion/Comunicacion";
import WorkScheduleViewer from "../components/nuevoWidget/WorkScheduleViewer";

const Home = ({ vpn }) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="contenedor-principal ">
        <div onClick={handleMenu} className="navMobile">
          {menu ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
          )}
        </div>
        <div className="contenedor-banner">
          <img src={banner} alt="banner" />
        </div>

        <div className="contenedor-paise bg-gray-900">
          {/* <div className={menu ? "contenedor-nav-abierto" : "contenedor-nav"}>
            <Nav handleMenu={handleMenu} />
          </div>{" "}
          <Routes>
            <Route path="/" element={<Marketing vpn={vpn} />} />
            <Route path="/administracion" element={<Contable vpn={vpn} />} />
            <Route path="/recursos-humanos" element={<Rrhh vpn={vpn} />} />
            <Route path="/ventas" element={<Comercial vpn={vpn} />} />
            <Route path="/gestion" element={<Gestion vpn={vpn} />} />
            <Route path="/coordinacion" element={<Coordinacion vpn={vpn} />} />
            <Route path="/comunicacion" element={<Comunicacion vpn={vpn} />} />
          </Routes> */}
          <WorkScheduleViewer />
        </div>
      </div>
    </>
  );
};

export default Home;
