/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import banner from "../assets/banner-02.png";
import lava from "../assets/lava.png";
import "./home.css";
import WorkScheduleViewer from "../components/nuevoWidget/WorkScheduleViewer";
import ScheduleGridView from "../components/segundaOpcion/ScheduleGridView";
import OtraVariante from "../components/segundaOpcion/OtroVariante";
import videoFondo from "../assets/fondo.mp4";
import logo from "../assets/logo.png";
import { Clock } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className="contenedor-principal ">
        <div className="bg-container relative">
          <video src={videoFondo} autoPlay loop muted className="z-0"></video>
          <div className="w-full h-full bg-transparet flex justify-center items-center flex-col absolute top-0">
            <img src={logo} alt="" />
            <p className="text-white text-[50px]">
              ¡Descubre el horario de los equipos!
            </p>
          </div>
          <div className="bg-gradient-to-b from-transparent via-black/50 to-black h-[323px] w-full z-10 absolute bottom-0">
            <div className="svg3 w-[99%] h-[80px] absolute bottom-0 flex ">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Horarios Globales
              </h2>
            </div>
          </div>
        </div>
        <div className="contenedor-paise bg-black">
          {/* <WorkScheduleViewer /> */}
          {/* <OtraVariante /> */}
          <ScheduleGridView />
        </div>
      </div>
    </>
  );
};

export default Home;
