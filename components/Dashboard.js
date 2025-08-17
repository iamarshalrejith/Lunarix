import { Fugaz_One } from "next/font/google";
import Calender from "./Calender";

const fugaz = Fugaz_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Dashboard() {
  const statuses = {
    num_days: 14,
    time_remaining: "13:14:26",
    date: new Date().toDateString(),
  };

  const moods = {
    sad: "😢",
    happy: "😊",
    angry: "😡",
    excited: "🤩",
    relaxed: "😌",
  };

  return (
    <div className="flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16 p-4">
      {/* Status section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg p-2 gap-4">
        {Object.keys(statuses).map((status, statusIndex) => (
          <div
            key={statusIndex}
            className="p-4 flex flex-col gap-1 sm:gap-2"
          >
            <p className="font-medium uppercase text-xs sm:text-sm truncate">
              {status.replaceAll("_", " ")}
            </p>
            <p className={"truncate text-base sm:text-lg " + fugaz.className}>
              {statuses[status]}
            </p>
          </div>
        ))}
      </div>

      {/* Heading */}
      <h4
        className={`text-5xl sm:text-6xl md:text-7xl text-center ${fugaz.className}`}
      >
        How do you <span className="textGradient">feel</span> today?
      </h4>

      {/* Moods section */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {Object.entries(moods).map(([mood, emoji], moodIndex) => (
          <button
            type="button"
            key={moodIndex}
            className={`flex flex-col items-center justify-center p-4 rounded-lg bg-indigo-50 hover:bg-indigo-100 purpleShadow ${
              moodIndex === 4 ? "col-span-2 sm:col-span-1" : ""
            }`}
          >
            <p className={`text-3xl ${fugaz.className}`}>{emoji}</p>
            <p className={`text-lg font-medium capitalize ${fugaz.className}`}>
              {mood}
            </p>
          </button>
        ))}
      </div>
      <Calender />
    </div>
  );
}
