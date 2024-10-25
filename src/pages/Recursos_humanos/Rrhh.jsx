/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Reloj from "../../components/reloj/Reloj";
import RelojChile from "../../components/relojChile/RelojChile";
import RelojColombia from "../../components/relojColombia/RelojColombia";
import RelojEspaña from "../../components/relojEspaña/RelojEspaña";
import RelojMejico from "../../components/relojMejico/RelojMejico";

const Rrhh = ({ vpn }) => {
  const paises = [
    {
      nombre: "Argentina",
      area: "Rrhh",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9,
      horaIngreso: 8,
      horaSalida: 17,
    },

    // {
    //   nombre: "España",
    //   area: "Rrhh",
    //   zonaHoraria: "Europe/Madrid",
    //   jornadaLaboral: 8.15,
    //   horaIngreso: 10,
    //   horaSalida: 18.75,
    // },
  ];
  const españa = [
    {
      nombre: "España",
      area: "Rrhh",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 9.2,
      horaIngreso: 12,
      horaSalida: 21,
    },
    {
      nombre: "Argentina",
      area: "Rrhh",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9.2,
      horaIngreso: 8,
      horaSalida: 17,
    },
  ];
  const chile = [
    {
      nombre: "Chile",
      area: "Rrhh",
      zonaHoraria: "Chile/Continental",
      jornadaLaboral: 9,
      horaIngreso: 8,
      horaSalida: 17,
    },
    {
      nombre: "Argentina",
      area: "Rrhh",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9,
      horaIngreso: 8,
      horaSalida: 17,
    },
  ];
  const mexico = [
    {
      nombre: "México",
      area: "Rrhh",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 9,
      horaIngreso: 8,
      horaSalida: 17,
    },
    {
      nombre: "Argentina",
      area: "Rrhh",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9.5,
      horaIngreso: 8,
      horaSalida: 17,
    },
  ];
  const colombia = [
    {
      nombre: "Colombia",
      area: "Rrhh",
      zonaHoraria: "America/Bogota",
      jornadaLaboral: 9.8,
      horaIngreso: 6,
      horaSalida: 15,
    },
    {
      nombre: "Argentina",
      area: "Rrhh",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9.8,
      horaIngreso: 8,
      horaSalida: 17,
    },
  ];

  return (
    <>
      <div>
        <h2 className="titulo">Recursos Humanos </h2>
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

export default Rrhh;
