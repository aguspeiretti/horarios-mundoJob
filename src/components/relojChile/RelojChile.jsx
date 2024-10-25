/* eslint-disable react/prop-types */
// Reloj.js
import { useState, useEffect } from "react";
import moment from "moment-timezone";
import "./relojChile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Barra24chi from "../barra24chile/Barra24chi";

const RelojChile = ({
  pais,
  zonaHoraria,
  jornadaLaboral,
  horaIngreso,
  horaSalida,
  area,
}) => {
  const [horaActual, setHoraActual] = useState("");
  const [progresoJornada, setProgresoJornada] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const horaActual = moment().tz(zonaHoraria);
      const inicioJornada = horaActual
        .clone()
        .startOf("day")
        .set("hours", horaIngreso)
        .set("minutes", 0);
      const finJornada = inicioJornada.clone().add(jornadaLaboral, "hours");

      const duracionTotalJornada = finJornada.diff(
        inicioJornada,
        "milliseconds"
      );
      const tiempoTranscurrido = horaActual.diff(inicioJornada, "milliseconds");

      let nuevoProgreso = (tiempoTranscurrido / duracionTotalJornada) * 100;

      if (nuevoProgreso < 0) {
        nuevoProgreso = 0;
      } else if (nuevoProgreso > 100) {
        nuevoProgreso = 100;
      }

      setHoraActual(horaActual.format("HH:mm:ss"));
      setProgresoJornada(nuevoProgreso);
    }, 100); // Intervalo más corto para una actualización más precisa

    return () => clearInterval(interval);
  }, [zonaHoraria, horaIngreso, horaSalida, jornadaLaboral]);

  const barraStyle = {
    width: `${progresoJornada}%`,
    backgroundColor:
      progresoJornada > 30
        ? "#643B9F"
        : progresoJornada > 0
        ? "#7d20af"
        : "#e74c3c",
  };

  // Generar los números del 0 al 24
  const ordenNumerosPorPais = {
    Argentina: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 0,
    ],
    Chile: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24,
    ],
    España: [
      6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 0,
      1, 2, 3, 4, 5,
    ],
    México: [
      23, 24, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      19, 20, 21, 22,
    ],
    Colombia: [
      24, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20, 21, 22, 23,
    ],
    //
    // Añade más países y sus respectivos órdenes aquí si es necesario
  };

  const horariosPais = {
    Argentina: [
      {
        area: "Marketing",
        inicio: "08.00",
        salida: "17.00",
      },
      {
        area: "Contable",
        inicio: "08.00",
        salida: "17.00",
      },
      {
        area: "Rrhh",
        inicio: "08.00",
        salida: "17.00",
      },
      {
        area: "Coordinacion",
        inicio: "10.00",
        salida: "19.00",
      },
      {
        area: "Comercial",
        inicio: "10.00",
        salida: "20.30",
      },
      {
        area: "Comunicacion",
        inicio: "09.00",
        salida: "18.00",
      },
    ],
    Chile: [
      {
        area: "Comercial",
        inicio: "10.00",
        salida: "20.30",
      },
      {
        area: "Marketing",
        inicio: "10.00",
        salida: "20.30",
      },
    ],
    España: [
      {
        area: "Marketing",
        inicio: "10.00",
        salida: "18.15",
      },
      {
        area: "Contable",
        inicio: "10.00",
        salida: "18.15",
      },
      {
        area: "Coordinacion",
        inicio: "10.00",
        salida: "20.15",
      },
      {
        area: "Comercial",
        inicio: "10.00",
        salida: "20.45",
      },
    ],
    México: [
      {
        area: "Marketing",
        inicio: "07.00",
        salida: "16.00",
      },
      {
        area: "Comercial",
        inicio: "10.00",
        salida: "20.00",
      },
    ],
    Colombia: [
      {
        area: "Marketing",
        inicio: "08.00",
        salida: "17.00",
      },
      {
        area: "Comercial",
        inicio: "12.00",
        salida: "22.00",
      },
    ],
  };

  // Obtener los horarios para el país y área específicos
  const horariosPorPais = horariosPais[pais];
  const horariosPorArea = horariosPorPais.filter(
    (horario) => horario.area === area
  );

  // Mapear los horarios para mostrarlos en el div jornada
  const horarios = horariosPorArea.map((horario, index) => (
    <div className="jornada-item" key={index}>
      <p>Jornada</p>
      <p>{horario.inicio}</p>
      <p>{horario.salida}</p>
    </div>
  ));

  const ordenNumeros = ordenNumerosPorPais[pais];

  // Generar los números en el orden específico del país
  const numerosRegla = ordenNumeros.map((numero) => (
    <div key={numero}>{numero}</div>
  ));

  return (
    <>
      <div className="reloj">
        <div className="infoContainer">
          <div className="nombreyhora">
            <div className="nombrePais">
              <h5>{pais}</h5>
              <div className="contenedor-reloj">
                <div className="svg-reloj">
                  <FontAwesomeIcon icon={faClock} style={{ color: "#fff" }} />
                </div>
              </div>
            </div>
            <div className="contenedor-reloj-superior">
              <div className="contenedor-segundero">{horaActual}</div>
            </div>
          </div>

          <div className="paisInfo">
            <div className="jornada">{horarios}</div>
          </div>
        </div>
        <div className="reductor">
          <div className="contenedorBarra">
            <Barra24chi pais={pais} zonaHoraria={zonaHoraria} />
            <div className={`breackc-${pais}-${area}`}></div>
            <div className="regla">{numerosRegla}</div>
            <div
              id={`contenedor2c-${pais}-${area}`}
              className="contenedor-total"
            >
              <div
                className="barra-progreso"
                id={`barra-${pais}`}
                style={barraStyle}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelojChile;
