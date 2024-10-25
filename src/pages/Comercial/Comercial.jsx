/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Reloj from "../../components/reloj/Reloj";
import RelojChile from "../../components/relojChile/RelojChile";
import RelojColombia from "../../components/relojColombia/RelojColombia";
import RelojEspaña from "../../components/relojEspaña/RelojEspaña";
import RelojMejico from "../../components/relojMejico/RelojMejico";
import "./Comercial.css";

const Comercial = ({ vpn }) => {
  const paises = [
    {
      nombre: "Argentina",
      area: "Comercial",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 10.4,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "España",
      area: "Comercial",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.65,
      horaIngreso: 10,
      horaSalida: 21.45,
    },

    {
      nombre: "Chile",
      area: "Comercial",
      zonaHoraria: "Chile/Continental",
      jornadaLaboral: 10.4,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "México",
      area: "Comercial",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 10,
      horaIngreso: 10,
      horaSalida: 17,
    },
    {
      nombre: "Colombia",
      area: "Comercial",
      zonaHoraria: "America/Bogota",
      jornadaLaboral: 10.6,
      horaIngreso: 12,
      horaSalida: 22,
    },
  ];
  const españa = [
    {
      nombre: "España",
      area: "Comercial",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.65,
      horaIngreso: 10,
      horaSalida: 21.45,
    },
    {
      nombre: "Argentina",
      area: "Comercial",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 12,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "Chile",
      area: "Comercial",
      zonaHoraria: "Chile/Continental",
      jornadaLaboral: 12,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "México",
      area: "Comercial",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 11,
      horaIngreso: 10,
      horaSalida: 17,
    },
    {
      nombre: "Colombia",
      area: "Comercial",
      zonaHoraria: "America/Bogota",
      jornadaLaboral: 10.6,
      horaIngreso: 12,
      horaSalida: 22,
    },
  ];
  const chile = [
    {
      nombre: "Chile",
      area: "Comercial",
      zonaHoraria: "Chile/Continental",
      jornadaLaboral: 10.4,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "Argentina",
      area: "Comercial",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 10.4,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "España",
      area: "Comercial",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.65,
      horaIngreso: 10,
      horaSalida: 21.45,
    },

    {
      nombre: "México",
      area: "Comercial",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 10,
      horaIngreso: 10,
      horaSalida: 17,
    },
    {
      nombre: "Colombia",
      area: "Comercial",
      zonaHoraria: "America/Bogota",
      jornadaLaboral: 10.6,
      horaIngreso: 12,
      horaSalida: 22,
    },
  ];
  const mexico = [
    {
      nombre: "México",
      area: "Comercial",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 10.8,
      horaIngreso: 10,
      horaSalida: 17,
    },
    {
      nombre: "Argentina",
      area: "Comercial",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 10.6,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "España",
      area: "Comercial",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.65,
      horaIngreso: 10,
      horaSalida: 21.45,
    },
    {
      nombre: "Chile",
      area: "Comercial",
      zonaHoraria: "Chile/Continental",
      jornadaLaboral: 10.6,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "Colombia",
      area: "Comercial",
      zonaHoraria: "America/Bogota",
      jornadaLaboral: 8.8,
      horaIngreso: 7,
      horaSalida: 16,
    },
  ];
  const colombia = [
    {
      nombre: "Colombia",
      area: "Comercial",
      zonaHoraria: "America/Bogota",
      jornadaLaboral: 10.6,
      horaIngreso: 10,
      horaSalida: 22,
    },
    {
      nombre: "Argentina",
      area: "Comercial",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 10.6,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "España",
      area: "Comercial",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.9,
      horaIngreso: 10,
      horaSalida: 21.45,
    },
    {
      nombre: "México",
      area: "Comercial",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 10.8,
      horaIngreso: 10,
      horaSalida: 17,
    },

    {
      nombre: "Chile",
      area: "Comercial",
      zonaHoraria: "Chile/Continental",
      jornadaLaboral: 10.6,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
  ];
  return (
    <>
      <div className="titular">
        <h2 className="titulo">Ventas</h2>
        <div className="indicacion">
          <div className="seña"></div>
          <p>Horario de break</p>
        </div>
      </div>
      <div>
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
      </div>
    </>
  );
};

export default Comercial;
