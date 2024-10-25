/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Reloj from "../../components/reloj/Reloj";
import RelojChile from "../../components/relojChile/RelojChile";
import RelojColombia from "../../components/relojColombia/RelojColombia";
import RelojEspaña from "../../components/relojEspaña/RelojEspaña";
import RelojMejico from "../../components/relojMejico/RelojMejico";

const Contable = ({ vpn }) => {
  const paises = [
    {
      nombre: "Argentina",
      area: "Contable",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9,
      horaIngreso: 8,
      horaSalida: 17,
    },

    {
      nombre: "España",
      area: "Contable",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 8.15,
      horaIngreso: 10,
      horaSalida: 18.75,
    },
  ];
  const chile = [
    {
      nombre: "Chile",
      area: "Contable",
      zonaHoraria: "Chile/Continental",
      jornadaLaboral: 9,
      horaIngreso: 8,
      horaSalida: 17,
    },
    {
      nombre: "Argentina",
      area: "Contable",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9,
      horaIngreso: 8,
      horaSalida: 17,
    },

    {
      nombre: "España",
      area: "Contable",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 8.15,
      horaIngreso: 10,
      horaSalida: 18.75,
    },
  ];
  const españa = [
    {
      nombre: "España",
      area: "Contable",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 8.5,
      horaIngreso: 10,
      horaSalida: 18.75,
    },
    {
      nombre: "Argentina",
      area: "Contable",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9.2,
      horaIngreso: 8,
      horaSalida: 17,
    },
  ];
  const mexico = [
    {
      nombre: "México",
      area: "Contable",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 9,
      horaIngreso: 8,
      horaSalida: 17,
    },
    {
      nombre: "Argentina",
      area: "Contable",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9.7,
      horaIngreso: 8,
      horaSalida: 17,
    },

    {
      nombre: "España",
      area: "Contable",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 8.5,
      horaIngreso: 10,
      horaSalida: 18.75,
    },
  ];
  const colombia = [
    {
      nombre: "Colombia",
      area: "Contable",
      zonaHoraria: "America/Bogota",
      jornadaLaboral: 9.5,
      horaIngreso: 6,
      horaSalida: 15,
    },
    {
      nombre: "Argentina",
      area: "Contable",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9.5,
      horaIngreso: 8,
      horaSalida: 17,
    },

    {
      nombre: "España",
      area: "Contable",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 8.7,
      horaIngreso: 10,
      horaSalida: 18.75,
    },
  ];
  return (
    <>
      <div className="titular">
        <h2 className="titulo">Administración</h2>
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
          {mexico.map((pais) => (
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
      ) : null}
    </>
  );
};

export default Contable;
