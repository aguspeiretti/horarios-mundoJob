import { useState, useEffect } from "react";
import { Clock, Globe, Users } from "lucide-react";
import scheduleData from "../nuevoWidget/schedulData";

const OtraVariante = () => {
  const [selectedArea, setSelectedArea] = useState("all");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTimeZone, setSelectedTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const timeZones = {
    Córdoba: "America/Argentina/Cordoba",
    Colombia: "America/Bogota",
    España: "Europe/Madrid",
    Ushuaia: "America/Argentina/Ushuaia",
  };

  const uniqueAreas = [
    "all",
    ...new Set(scheduleData.map((item) => item.area)),
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Convert time from one timezone to another
  const convertTime = (timeStr, fromTimezone, toTimezone) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);

    // Create formatter for source timezone
    const fromFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: fromTimezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    // Create formatter for target timezone
    const toFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: toTimezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    // Get the time strings
    const fromTime = fromFormatter.format(date);
    const toTime = toFormatter.format(date);

    return toTime;
  };

  const getCurrentTimeInZone = (timezone) => {
    return currentTime.toLocaleTimeString("es-ES", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const isCurrentlyWorking = (schedule) => {
    // Get current time in the selected timezone
    const localTime = getCurrentTimeInZone(selectedTimeZone);
    const [hours, minutes] = localTime.split(":").map(Number);
    const currentMinutes = hours * 60 + minutes;

    // Convert schedule times from office timezone to selected timezone
    const convertedStart = convertTime(
      schedule.inicio,
      timeZones[schedule.oficina],
      selectedTimeZone
    );
    const convertedEnd = convertTime(
      schedule.fin,
      timeZones[schedule.oficina],
      selectedTimeZone
    );
    const convertedBreakStart = convertTime(
      schedule.breakInicio,
      timeZones[schedule.oficina],
      selectedTimeZone
    );
    const convertedBreakEnd = convertTime(
      schedule.breakFin,
      timeZones[schedule.oficina],
      selectedTimeZone
    );

    const [startHours, startMinutes] = convertedStart.split(":").map(Number);
    const [endHours, endMinutes] = convertedEnd.split(":").map(Number);
    const [breakStartHours, breakStartMinutes] = convertedBreakStart
      .split(":")
      .map(Number);
    const [breakEndHours, breakEndMinutes] = convertedBreakEnd
      .split(":")
      .map(Number);

    const startTime = startHours * 60 + startMinutes;
    const endTime = endHours * 60 + endMinutes;
    const breakStart = breakStartHours * 60 + breakStartMinutes;
    const breakEnd = breakEndHours * 60 + breakEndMinutes;

    return (
      currentMinutes >= startTime &&
      currentMinutes <= endTime &&
      !(currentMinutes >= breakStart && currentMinutes <= breakEnd)
    );
  };

  const filteredData = scheduleData.filter(
    (item) => selectedArea === "all" || item.area === selectedArea
  );

  const groupedByArea = filteredData.reduce((acc, item) => {
    if (!acc[item.area]) acc[item.area] = [];
    acc[item.area].push(item);
    return acc;
  }, {});

  // Convert schedule times for display
  const getDisplayTimes = (schedule) => {
    const inicio = convertTime(
      schedule.inicio,
      timeZones[schedule.oficina],
      selectedTimeZone
    );
    const fin = convertTime(
      schedule.fin,
      timeZones[schedule.oficina],
      selectedTimeZone
    );
    const breakInicio = convertTime(
      schedule.breakInicio,
      timeZones[schedule.oficina],
      selectedTimeZone
    );
    const breakFin = convertTime(
      schedule.breakFin,
      timeZones[schedule.oficina],
      selectedTimeZone
    );
    return { inicio, fin, breakInicio, breakFin };
  };

  return (
    <div className="w-full bg-gray-900 p-6">
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Clock className="w-6 h-6" />
          Horarios Globales
        </h2>
        <div className="flex gap-4">
          <select
            value={selectedTimeZone}
            onChange={(e) => setSelectedTimeZone(e.target.value)}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            {Object.entries(timeZones).map(([city, tz]) => (
              <option key={tz} value={tz}>
                Ver en hora de {city}
              </option>
            ))}
          </select>
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            {uniqueAreas.map((area) => (
              <option key={area} value={area}>
                {area === "all" ? "Todas las áreas" : area}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(groupedByArea).map(([area, schedules]) => (
          <div
            key={area}
            className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
              <Users className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">{area}</h3>
            </div>
            <div className="space-y-4">
              {schedules.map((schedule, idx) => {
                const isWorking = isCurrentlyWorking(schedule);
                const localTime = getCurrentTimeInZone(selectedTimeZone);
                const displayTimes = getDisplayTimes(schedule);

                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg transition-colors duration-200 ${
                      isWorking
                        ? "bg-green-900/20 border border-green-500/30 hover:bg-green-900/30"
                        : "bg-gray-700/30 hover:bg-gray-700/40"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <span className="text-white font-medium">
                          {schedule.oficina}
                        </span>
                      </div>
                      <div
                        className={`px-2 py-1 rounded-full text-sm ${
                          isWorking
                            ? "bg-green-900/40 text-green-400"
                            : "bg-gray-700 text-gray-400"
                        }`}
                      >
                        {localTime}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                      <div className="text-gray-400">
                        Horario:{" "}
                        <span className="text-white">
                          {displayTimes.inicio} - {displayTimes.fin}
                        </span>
                      </div>
                      <div className="text-gray-400">
                        Break:{" "}
                        <span className="text-white">
                          {displayTimes.breakInicio} - {displayTimes.breakFin}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtraVariante;
