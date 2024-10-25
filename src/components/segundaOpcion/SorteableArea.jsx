import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Globe, Users, ChevronUp, ChevronDown } from "lucide-react";

export function SortableArea({
  id,
  area,
  schedules,
  getCurrentTimeInZone,
  isCurrentlyWorking,
  timeZones,
  isDragging,
  overlay,
  isMobile,
  isFirst,
  isLast,
  onMoveUp,
  onMoveDown,
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? "0.4" : "1",
    scale: overlay ? "1.05" : "1",
  };

  const renderMobileControls = () => {
    if (!isMobile) return null;

    return (
      <div className="flex gap-2 ml-2">
        {!isFirst && (
          <button
            onClick={onMoveUp}
            className="p-1 hover:bg-gray-700 rounded-full transition-colors"
          >
            <ChevronUp className="w-4 h-4 text-gray-400" />
          </button>
        )}
        {!isLast && (
          <button
            onClick={onMoveDown}
            className="p-1 hover:bg-gray-700 rounded-full transition-colors"
          >
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>
    );
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(!isMobile ? { ...attributes, ...listeners } : {})}
      className={`bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 
        ${!overlay ? "hover:border-purple-500/50" : ""}
        ${
          isDragging
            ? "ring-2 ring-purple-500 cursor-grabbing"
            : !isMobile
            ? "cursor-grab active:cursor-grabbing"
            : ""
        }
        ${overlay ? "shadow-2xl" : ""}
      `}
    >
      <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
        <Users
          className={`w-5 h-5 ${
            overlay ? "text-purple-300" : "text-purple-400"
          }`}
        />
        <h3 className="text-lg font-semibold text-white">{area}</h3>
        {renderMobileControls()}
      </div>
      <div className="space-y-4">
        {schedules.map((schedule, idx) => {
          const isWorking = isCurrentlyWorking(schedule);
          const localTime = getCurrentTimeInZone(timeZones[schedule.oficina]);

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
                    {schedule.inicio} - {schedule.fin}
                  </span>
                </div>
                <div className="text-gray-400">
                  Break:{" "}
                  <span className="text-white">
                    {schedule.breakInicio} - {schedule.breakFin}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
