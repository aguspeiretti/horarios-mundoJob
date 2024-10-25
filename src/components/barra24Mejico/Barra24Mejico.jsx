/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import moment from "moment-timezone";
import "../barra24Argentina/Barra24Arg";
import "./barra24mejico.css"

const Barra24Mejico = () => {
  const [progresoDia, setProgresoDia] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
   const horaActual =  moment().tz("America/Mexico_City"); 

      // Obtener la hora de inicio del día en la zona horaria local
      const inicioDia = horaActual.clone().startOf("day");

      // Obtener la duración en minutos desde el inicio del día hasta la hora actual
      const duracionTranscurrida = horaActual.diff(inicioDia, "minutes");

      // Obtener la duración total del día (24 horas)
      const duracionTotalDia = 24 * 60;

      // Calcular el progreso del día en base a la duración transcurrida y total del día
      let nuevoProgreso = (duracionTranscurrida / duracionTotalDia) * 100;

      // Asegurarse de que el progreso esté dentro del rango de 0 a 100
      nuevoProgreso = Math.max(0, Math.min(nuevoProgreso, 100));

      setProgresoDia(nuevoProgreso);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const barraStyle = {
    width: `${progresoDia}%`,
    backgroundColor: progresoDia > 30 ? "#00FF0000" : "#00FF0000",
  };

  return (
    <div className="contenedor-total">
      <div className="barra-progreso-diam" style={barraStyle}></div>
    </div>
  );
};

export default Barra24Mejico;
