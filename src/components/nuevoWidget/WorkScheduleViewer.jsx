/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { ClockIcon } from "@radix-ui/react-icons";
import data from "./schedulData";

const WorkScheduleViewer = () => {
  const [selectedArea, setSelectedArea] = useState("all");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userTimeZone, setUserTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const scheduleData = data;

  const timeZones = {
    Córdoba: "America/Argentina/Cordoba",
    Colombia: "America/Bogota",
    España: "Europe/Madrid",
    Ushuaia: "America/Argentina/Ushuaia",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Cambiado de 60000 a 1000 para actualización por segundo

    // Asegurarse de que el tiempo inicial esté sincronizado
    setCurrentTime(new Date());

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setCurrentTime(new Date());
  }, [userTimeZone]);

  const uniqueAreas = [
    "all",
    ...new Set(scheduleData.map((item) => item.area)),
  ];

  const convertTime = (timeStr, fromZone, toZone) => {
    try {
      const [hours, minutes] = timeStr.split(":").map(Number);
      const date = new Date();
      date.setHours(hours, minutes, 0);

      const fromDateTime = new Date(
        date.toLocaleString("en-US", { timeZone: fromZone })
      );
      const toDateTime = new Date(
        date.toLocaleString("en-US", { timeZone: toZone })
      );

      const diffMinutes = (toDateTime - fromDateTime) / (1000 * 60);
      const adjustedHours = hours + Math.floor(diffMinutes / 60);
      const adjustedMinutes = minutes + (diffMinutes % 60);

      const resultDate = new Date();
      resultDate.setHours(adjustedHours, adjustedMinutes, 0);

      return resultDate.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    } catch (error) {
      console.error("Error converting time:", error);
      return timeStr; // Retornar el tiempo original si hay error
    }
  };

  const getCurrentTimeInZone = React.useCallback(
    (timezone) => {
      return currentTime.toLocaleTimeString("es-ES", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    },
    [currentTime]
  );

  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return (hours * 60 + minutes + 24 * 60) % (24 * 60); // Manejo de horas pasadas de medianoche
  };

  const minutesToPosition = (minutes) => {
    const startOfDay = 7 * 60; // 7:00
    const endOfDay = 21 * 60; // 21:00
    const totalMinutes = endOfDay - startOfDay;
    const position = ((minutes - startOfDay) / totalMinutes) * 100;
    return Math.max(0, Math.min(100, position));
  };

  const isTimeInRange = (currentTime, start, end) => {
    const current = timeToMinutes(currentTime);
    const startMin = timeToMinutes(start);
    const endMin = timeToMinutes(end);

    // Manejar casos donde el rango cruza la medianoche
    if (startMin > endMin) {
      return current >= startMin || current <= endMin;
    }
    return current >= startMin && current <= endMin;
  };

  const getProgressWidth = (currentPos, startPos, endPos) => {
    if (currentPos < startPos) return 0;
    if (currentPos > endPos) return 100;
    return ((currentPos - startPos) / (endPos - startPos)) * 100;
  };

  const filteredData = scheduleData.filter(
    (item) => selectedArea === "all" || item.area === selectedArea
  );

  const getLocalTime = (timezone) => {
    return new Date().toLocaleTimeString("es-ES", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className="w-[100vw]  mx-auto bg-gray-900 py-4 px-24 shadow-xl ">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-white">
            Horarios de Trabajo por Área y Oficina
          </h2>
          <div className=" flex flex-wrap gap-6 justify-end  border-gray-700 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500/70 rounded-full" />
              <span className="text-xs text-gray-400">Horario laboral</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500/70 rounded-full" />
              <span className="text-xs text-gray-400">Break</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white/50 rounded-full" />
              <span className="text-xs text-gray-400">Tiempo actual</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={userTimeZone}
              onChange={(e) => setUserTimeZone(e.target.value)}
              className="px-4 py-2 border border-gray-600 rounded-lg text-sm bg-gray-800 text-white hover:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            >
              {Object.entries(timeZones).map(([city, tz]) => (
                <option key={tz} value={tz}>
                  Horario de {city}
                </option>
              ))}
            </select>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="px-4 py-2 border border-gray-600 rounded-lg text-sm bg-gray-800 text-white hover:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            >
              {uniqueAreas.map((area) => (
                <option key={area} value={area}>
                  {area === "all" ? "Todas las áreas" : area}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="relative  mt-8  overflow-x-hidden">
        {/* Time labels */}
        <div className="flex justify-between mb-6 text-xs text-gray-400 ml-48 border-b border-gray-700 pb-2">
          {Array.from({ length: 15 }, (_, i) => i + 7).map((hour) => (
            <div key={hour} style={{ width: "6.67%" }} className="text-center">
              {`${hour}:00`}
            </div>
          ))}
        </div>

        {/* Schedule rows */}
        <div className="space-y-6">
          {filteredData.map((schedule, index) => {
            const sourceTimeZone = timeZones[schedule.oficina];
            const localTime = getLocalTime(sourceTimeZone);
            const convertedInicio = convertTime(
              schedule.inicio,
              sourceTimeZone,
              userTimeZone
            );
            const convertedFin = convertTime(
              schedule.fin,
              sourceTimeZone,
              userTimeZone
            );
            const convertedBreakInicio = convertTime(
              schedule.breakInicio,
              sourceTimeZone,
              userTimeZone
            );
            const convertedBreakFin = convertTime(
              schedule.breakFin,
              sourceTimeZone,
              userTimeZone
            );

            const currentLocalTime = getCurrentTimeInZone(userTimeZone);
            const startPos = minutesToPosition(timeToMinutes(convertedInicio));
            const endPos = minutesToPosition(timeToMinutes(convertedFin));
            const breakStartPos = minutesToPosition(
              timeToMinutes(convertedBreakInicio)
            );
            const breakEndPos = minutesToPosition(
              timeToMinutes(convertedBreakFin)
            );
            const currentTimePos = minutesToPosition(
              timeToMinutes(currentLocalTime)
            );

            const width = endPos - startPos;
            const breakWidth = breakEndPos - breakStartPos;

            const isWorkTime = isTimeInRange(
              currentLocalTime,
              convertedInicio,
              convertedFin
            );
            const isBreakTime = isTimeInRange(
              currentLocalTime,
              convertedBreakInicio,
              convertedBreakFin
            );

            const progressWidth = getProgressWidth(
              timeToMinutes(currentLocalTime),
              timeToMinutes(convertedInicio),
              timeToMinutes(convertedFin)
            );

            const breakProgressWidth = getProgressWidth(
              timeToMinutes(currentLocalTime),
              timeToMinutes(convertedBreakInicio),
              timeToMinutes(convertedBreakFin)
            );

            return (
              <div
                key={index}
                className="relative h-12 flex items-center group hover:bg-gray-800/30 rounded-lg px-2"
              >
                <div className="w-48 flex items-center gap-3">
                  <ClockIcon className="w-4 h-4 text-gray-400" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white truncate">
                      {schedule.area}
                    </span>
                    <span className="text-xs text-gray-400">
                      {schedule.oficina}
                    </span>
                  </div>
                </div>

                <div className="flex-1 relative">
                  {/* Work schedule bar */}
                  <div
                    className="absolute h-3 rounded-full bg-purple-200/20 transition-all group-hover:h-4"
                    style={{
                      left: `${startPos}%`,
                      width: `${width}%`,
                    }}
                    title={`${convertedInicio} - ${convertedFin}`}
                  >
                    <div
                      className="absolute h-full bg-purple-500/70 rounded-l-full transition-colors group-hover:bg-purple-400"
                      style={{
                        width: `${progressWidth}%`,
                      }}
                    />
                  </div>

                  {/* Break bar */}
                  <div
                    className="absolute h-3 rounded-full bg-emerald-200/20 transition-all group-hover:h-4"
                    style={{
                      left: `${breakStartPos}%`,
                      width: `${breakWidth}%`,
                    }}
                    title={`Break: ${convertedBreakInicio} - ${convertedBreakFin}`}
                  >
                    <div
                      className="absolute h-full bg-emerald-500/70 rounded-full transition-colors group-hover:bg-emerald-400"
                      style={{
                        width: `${breakProgressWidth}%`,
                      }}
                    />
                  </div>

                  {/* Current time indicator */}
                  {isWorkTime && (
                    <div
                      className="absolute h-12 w-0.5 bg-white/50 z-10"
                      style={{
                        left: `${currentTimePos}%`,
                      }}
                    >
                      <div className="absolute -top-6 -translate-x-1/2 text-xs bg-white/10 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                        {currentLocalTime}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-6 justify-end border-t border-gray-700 pt-4"></div>
      </div>
    </div>
  );
};

export default WorkScheduleViewer;
