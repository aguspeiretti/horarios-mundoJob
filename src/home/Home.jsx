/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import banner from "../assets/banner-02.png";
import "./home.css";
import WorkScheduleViewer from "../components/nuevoWidget/WorkScheduleViewer";
import ScheduleGridView from "../components/segundaOpcion/ScheduleGridView";
import OtraVariante from "../components/segundaOpcion/OtroVariante";

const Home = () => {
  return (
    <>
      <div className="contenedor-principal ">
        <div className="contenedor-banner">
          <img src={banner} alt="banner" />
        </div>

        <div className="contenedor-paise bg-gray-900">
          {/* <WorkScheduleViewer /> */}
          {/* <OtraVariante /> */}
          <ScheduleGridView />
        </div>
      </div>
    </>
  );
};

export default Home;
