// /* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
// import moment from "moment-timezone";
// import "./barra.css";

// const Barra24 = ({ pais, zonaHoraria }) => {
//   // eslint-disable-next-line no-unused-vars
//   const [horaActual, setHoraActual] = useState("");
//   const [progresoDia, setProgresoDia] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const hora = moment().tz(zonaHoraria);
//       const horaFormateada = hora.format("HH:mm:ss");
//       setHoraActual(horaFormateada);

//       const inicioDia = hora.clone().startOf("day");
//       const finDia = inicioDia.clone().endOf("day");

//       const duracionTotalDia = finDia.diff(inicioDia, "minutes");

//       let nuevoProgreso =
//         (hora.diff(inicioDia, "minutes") / duracionTotalDia) * 100;

//       if (nuevoProgreso < 0) {
//         nuevoProgreso = 0;
//       } else if (nuevoProgreso > 100) {
//         nuevoProgreso = 100;
//       }

//       setProgresoDia(nuevoProgreso);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [zonaHoraria]);

//   const barraStyle = {
//     width: `${progresoDia}%`,
//     backgroundColor:
//       progresoDia > 30 ? "#8fcdd8" : progresoDia > 0 ? "#8fcdd8" : "#e74c3c",
//   };

//   return (
//     <>
//       <div id={`contenedor-${pais}`} className="contenedor-total">
//         <div
//           className="barra-progreso"
//           id={`barra-${pais}`}
//           style={barraStyle}
//         ></div>
//       </div>
//     </>
//   );
// };

// export default Barra24;
