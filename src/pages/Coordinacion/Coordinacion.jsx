/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Reloj from "../../components/reloj/Reloj";
import RelojChile from "../../components/relojChile/RelojChile";
import RelojColombia from "../../components/relojColombia/RelojColombia";
import RelojEspaña from "../../components/relojEspaña/RelojEspaña";
import RelojMejico from "../../components/relojMejico/RelojMejico";

const Coordinacion = ({ vpn }) => {
  const paises = [
    {
      nombre: "Argentina",
      area: "Coordinacion",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 8.8,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "España",
      area: "Coordinacion",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.12,
      horaIngreso: 10,
      horaSalida: 20,
    },
  ];
  const españa = [
    {
      nombre: "España",
      area: "Coordinacion",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.7,
      horaIngreso: 10,
      horaSalida: 20,
    },
    {
      nombre: "Argentina",
      area: "Coordinacion",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
  ];
  const colombia = [
    {
      nombre: "Colombia",
      area: "Coordinacion",
      zonaHoraria: "America/Bogota",
      jornadaLaboral: 9.2,
      horaIngreso: 8,
      horaSalida: 17,
    },
    {
      nombre: "Argentina",
      area: "Coordinacion",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9.2,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "España",
      area: "Coordinacion",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.4,
      horaIngreso: 10,
      horaSalida: 20,
    },
  ];
  const mejico = [
    {
      nombre: "México",
      area: "Coordinacion",
      zonaHoraria: "America/Bogota",
      jornadaLaboral: 9.2,
      horaIngreso: 8,
      horaSalida: 17,
    },
    {
      nombre: "Argentina",
      area: "Coordinacion",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9.2,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "España",
      area: "Coordinacion",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.7,
      horaIngreso: 10,
      horaSalida: 20,
    },
  ];
  const chile = [
    {
      nombre: "Chile",
      area: "Coordinacion",
      zonaHoraria: "Chile/Continental",
      jornadaLaboral: 9.2,
      horaIngreso: 10,
      horaSalida: 18,
    },
    {
      nombre: "Argentina",
      area: "Coordinacion",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9.2,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "España",
      area: "Coordinacion",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.12,
      horaIngreso: 10,
      horaSalida: 20,
    },
  ];

  return (
    <>
      <div className="titular">
        <h2 className="titulo">Coordinación</h2>
        <div className="indicacion">
          <div className="seña"></div>
          <p>Horario de break</p>
        </div>
      </div>
      {vpn === "Argentina" ? (
        <div>
          {paises.map((pais) => (
            <Reloj
              key={pais.nombre}
              pais={pais.nombre}
              zonaHoraria={pais.zonaHoraria}
              jornadaLaboral={pais.jornadaLaboral}
              horaIngreso={pais.horaIngreso}
              horaSalida={pais.horaSalida}
              area={pais.area}
            />
          ))}
        </div>
      ) : vpn === "Colombia" ? (
        <div>
          {colombia.map((pais) => (
            <RelojColombia
              key={pais.nombre}
              pais={pais.nombre}
              zonaHoraria={pais.zonaHoraria}
              jornadaLaboral={pais.jornadaLaboral}
              horaIngreso={pais.horaIngreso}
              horaSalida={pais.horaSalida}
              area={pais.area}
            />
          ))}
        </div>
      ) : vpn === "Spain" ? (
        <div>
          {españa.map((pais) => (
            <RelojEspaña
              key={pais.nombre}
              pais={pais.nombre}
              zonaHoraria={pais.zonaHoraria}
              jornadaLaboral={pais.jornadaLaboral}
              horaIngreso={pais.horaIngreso}
              horaSalida={pais.horaSalida}
              area={pais.area}
            />
          ))}
        </div>
      ) : vpn === "Mexico" ? (
        <div>
          {mejico.map((pais) => (
            <RelojMejico
              key={pais.nombre}
              pais={pais.nombre}
              zonaHoraria={pais.zonaHoraria}
              jornadaLaboral={pais.jornadaLaboral}
              horaIngreso={pais.horaIngreso}
              horaSalida={pais.horaSalida}
              area={pais.area}
            />
          ))}
        </div>
      ) : vpn === "Chile" ? (
        <div>
          {chile.map((pais) => (
            <RelojChile
              key={pais.nombre}
              pais={pais.nombre}
              zonaHoraria={pais.zonaHoraria}
              jornadaLaboral={pais.jornadaLaboral}
              horaIngreso={pais.horaIngreso}
              horaSalida={pais.horaSalida}
              area={pais.area}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Coordinacion;
