/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Clock, Globe, Users, ChevronUp, ChevronDown } from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableArea } from "./SorteableArea";
import scheduleData from "../nuevoWidget/schedulData";

const ScheduleGridView = () => {
  const [selectedArea, setSelectedArea] = useState("all");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeId, setActiveId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [areaOrder, setAreaOrder] = useState(() => {
    const savedOrder = localStorage.getItem("areaOrders");
    return savedOrder
      ? JSON.parse(savedOrder)
      : Object.keys(groupSchedulesByArea(scheduleData));
  });

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
        // Desactivar en móviles
        delay: isMobile ? Infinity : 0,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const timeZones = {
    Córdoba: "America/Argentina/Cordoba",
    Colombia: "America/Bogota",
    España: "Europe/Madrid",
    Ushuaia: "America/Argentina/Ushuaia",
    Ecuador: "America/Guayaquil",
    Chile: "America/Santiago",
    Mejico: "America/Mexico_City",
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

  useEffect(() => {
    localStorage.setItem("areaOrder", JSON.stringify(areaOrder));
  }, [areaOrder]);

  const getCurrentTimeInZone = (timezone) => {
    return currentTime.toLocaleTimeString("es-ES", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const isCurrentlyWorking = (schedule) => {
    const localTime = getCurrentTimeInZone(timeZones[schedule.oficina]);
    const [hours, minutes] = localTime.split(":").map(Number);
    const currentMinutes = hours * 60 + minutes;

    const [startHours, startMinutes] = schedule.inicio.split(":").map(Number);
    const [endHours, endMinutes] = schedule.fin.split(":").map(Number);
    const [breakStartHours, breakStartMinutes] = schedule.breakInicio
      .split(":")
      .map(Number);
    const [breakEndHours, breakEndMinutes] = schedule.breakFin
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

  function groupSchedulesByArea(data) {
    return data.reduce((acc, item) => {
      if (!acc[item.area]) acc[item.area] = [];
      acc[item.area].push(item);
      return acc;
    }, {});
  }

  const groupedByArea = groupSchedulesByArea(filteredData);

  const handleDragStart = (event) => {
    if (!isMobile) {
      setActiveId(event.active.id);
      document.body.style.cursor = "grabbing";
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setAreaOrder((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setActiveId(null);
    document.body.style.cursor = "";
  };

  const handleDragCancel = () => {
    setActiveId(null);
    document.body.style.cursor = "";
  };

  const moveArea = (areaId, direction) => {
    const currentIndex = areaOrder.indexOf(areaId);
    const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;

    if (newIndex >= 0 && newIndex < areaOrder.length) {
      setAreaOrder((items) => arrayMove(items, currentIndex, newIndex));
    }
  };

  const content = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {areaOrder
        .filter((area) => groupedByArea[area])
        .map((area, index) => (
          <SortableArea
            key={area}
            id={area}
            area={area}
            schedules={groupedByArea[area]}
            getCurrentTimeInZone={getCurrentTimeInZone}
            isCurrentlyWorking={isCurrentlyWorking}
            timeZones={timeZones}
            isDragging={activeId === area}
            isMobile={isMobile}
            isFirst={index === 0}
            isLast={index === areaOrder.length - 1}
            onMoveUp={() => moveArea(area, "up")}
            onMoveDown={() => moveArea(area, "down")}
          />
        ))}
    </div>
  );

  return (
    <div className="w-full bg-black p-6">
      <div className="mb-6 flex flex-col md:flex-row justify-end items-end md:items-center gap-4">
        <div className="flex gap-4">
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="px-6 py-2 bg-[#6B606F] text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-purple-900 focus:outline-none"
          >
            {uniqueAreas.map((area) => (
              <option key={area} value={area}>
                {area === "all" ? "Todas las áreas" : area}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isMobile ? (
        content
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <SortableContext items={areaOrder} strategy={rectSortingStrategy}>
            {content}
          </SortableContext>
          <DragOverlay adjustScale={true}>
            {activeId ? (
              <SortableArea
                id={activeId}
                area={activeId}
                schedules={groupedByArea[activeId]}
                getCurrentTimeInZone={getCurrentTimeInZone}
                isCurrentlyWorking={isCurrentlyWorking}
                timeZones={timeZones}
                isDragging={true}
                overlay
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      )}
    </div>
  );
};

export default ScheduleGridView;
