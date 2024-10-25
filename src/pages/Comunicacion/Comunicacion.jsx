/* eslint-disable react/prop-types */
import Reloj from "../../components/reloj/Reloj";
import RelojChile from "../../components/relojChile/RelojChile";
import RelojColombia from "../../components/relojColombia/RelojColombia";
import RelojEspaña from "../../components/relojEspaña/RelojEspaña";
import RelojMejico from "../../components/relojMejico/RelojMejico";

const Comunicacion = ({ vpn }) => {
  const paises = [
    {
      nombre: "Argentina",
      area: "Comunicacion",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9,
      horaIngreso: 9,
      horaSalida: 18,
    },

    // {
    //   nombre: "España",
    //   area: "Comunicacion",
    //   zonaHoraria: "Europe/Madrid",
    //   jornadaLaboral: 8.15,
    //   horaIngreso: 10,
    //   horaSalida: 18.75,
    // },
  ];
  const españa = [
    {
      nombre: "España",
      area: "Comunicacion",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 9.2,
      horaIngreso: 13,
      horaSalida: 22,
    },
    {
      nombre: "Argentina",
      area: "Comunicacion",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9.2,
      horaIngreso: 9,
      horaSalida: 18,
    },
  ];
  const chile = [
    {
      nombre: "Chile",
      area: "Comunicacion",
      zonaHoraria: "Chile/Continental",
      jornadaLaboral: 9,
      horaIngreso: 9,
      horaSalida: 18,
    },
    {
      nombre: "Argentina",
      area: "Comunicacion",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9,
      horaIngreso: 9,
      horaSalida: 18,
    },
  ];
  const mexico = [
    {
      nombre: "México",
      area: "Comunicacion",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 9.3,
      horaIngreso: 6,
      horaSalida: 15,
    },
    {
      nombre: "Argentina",
      area: "Comunicacion",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9.5,
      horaIngreso: 9,
      horaSalida: 18,
    },
  ];
  const colombia = [
    {
      nombre: "Colombia",
      area: "Comunicacion",
      zonaHoraria: "America/Bogota",
      jornadaLaboral: 9.8,
      horaIngreso: 7,
      horaSalida: 16,
    },
    {
      nombre: "Argentina",
      area: "Comunicacion",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9.8,
      horaIngreso: 9,
      horaSalida: 18,
    },
  ];

  return (
    <>
      <div className="titular">
        <h2 className="titulo">Comunicación</h2>
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

export default Comunicacion;
