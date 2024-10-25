/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import banner from "../assets/banner-02.png";
import "./home.css";
import WorkScheduleViewer from "../components/nuevoWidget/WorkScheduleViewer";

const Home = () => {
  return (
    <>
      <div className="contenedor-principal ">
        <div className="contenedor-banner">
          <img src={banner} alt="banner" />
        </div>

        <div className="contenedor-paise bg-gray-900">
          <WorkScheduleViewer />
        </div>
      </div>
    </>
  );
};

export default Home;
