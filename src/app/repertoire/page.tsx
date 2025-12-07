"use client";

import { monoton } from "@/app/ui/fonts";
import { useState } from "react";

// Sample schedule data
const getWeekDays = () => {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push(date);
  }
  return days;
};

const schedule = {
  "2024-12-06": [
    {
      id: 1,
      title: "Parasite",
      time: "17:00",
      hall: "Sala Główna",
      duration: "132 min",
      genre: "Dramat",
      language: "Napisy PL",
      price: "20 PLN",
    },
    {
      id: 2,
      title: "The Lighthouse",
      time: "19:30",
      hall: "Sala Główna",
      duration: "109 min",
      genre: "Dramat/Horror",
      language: "Napisy PL",
      price: "20 PLN",
    },
    {
      id: 3,
      title: "Moonlight",
      time: "22:00",
      hall: "Sala Główna",
      duration: "111 min",
      genre: "Dramat",
      language: "Napisy PL",
      price: "20 PLN",
    },
  ],
  "2024-12-07": [
    {
      id: 4,
      title: "Portrait de la jeune fille en feu",
      time: "17:00",
      hall: "Sala Główna",
      duration: "122 min",
      genre: "Dramat/Romans",
      language: "Napisy PL",
      price: "20 PLN",
    },
    {
      id: 5,
      title: "The Square",
      time: "19:30",
      hall: "Sala Główna",
      duration: "151 min",
      genre: "Komedia/Dramat",
      language: "Napisy PL",
      price: "20 PLN",
    },
    {
      id: 6,
      title: "Ida",
      time: "22:15",
      hall: "Sala Główna",
      duration: "82 min",
      genre: "Dramat",
      language: "PL",
      price: "15 PLN",
    },
  ],
};

export default function RepertoirePage() {
  const weekDays = getWeekDays();
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHall, setSelectedHall] = useState<string>("all");

  const selectedDate = weekDays[selectedDay].toISOString().split("T")[0];
  const daySchedule = schedule[selectedDate as keyof typeof schedule] || [];

  const filteredSchedule =
    selectedHall === "all"
      ? daySchedule
      : daySchedule.filter((show) => show.hall === selectedHall);

  const halls = ["all", "Sala Główna"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1
            className={`${monoton.className} text-4xl md:text-6xl mb-6 text-newa-green`}
          >
            Repertuar
          </h1>
          <div className="w-32 h-1 bg-newa-green mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Sprawdź aktualny repertuar i zarezerwuj miejsca
          </p>
        </div>

        {/* Day Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {weekDays.map((day, index) => {
              const isToday = index === 0;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedDay(index)}
                  className={`px-6 py-4 rounded-lg transition-all min-w-[120px] ${
                    selectedDay === index
                      ? "bg-newa-green text-white font-semibold scale-105 shadow-lg"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <div className="text-sm">
                    {isToday
                      ? "Dziś"
                      : day.toLocaleDateString("pl-PL", { weekday: "short" })}
                  </div>
                  <div className="text-lg font-bold">
                    {day.toLocaleDateString("pl-PL", {
                      day: "numeric",
                      month: "short",
                    })}
                  </div>
                </button>
              );
            })}
          </div>
        </div>


        {/* Schedule Grid */}
        {filteredSchedule.length > 0 ? (
          <div className="space-y-4">
            {filteredSchedule.map((show) => (
              <div
                key={show.id}
                className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-newa-green transition-all shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Time and Hall */}
                  <div className="flex items-center gap-4">
                    <div className="bg-newa-green text-white px-4 py-3 rounded-lg font-bold text-xl min-w-[100px] text-center">
                      {show.time}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {show.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                          {show.hall}
                        </span>
                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                          {show.genre}
                        </span>
                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                          {show.duration}
                        </span>
                        <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                          {show.language}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center gap-4 md:flex-col md:items-end">
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">od</p>
                      <p className="text-2xl font-bold text-newa-green">
                        {show.price}
                      </p>
                    </div>
                    <button className="px-6 py-3 bg-newa-green hover:bg-newa-green/80 text-white rounded-lg transition-colors font-semibold whitespace-nowrap">
                      Kup bilet
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl mb-4">
              Brak seansów w wybranym dniu
            </p>
            <p className="text-gray-500">
              Sprawdź repertuar na inne dni lub wróć później
            </p>
          </div>
        )}

        {/* Info Sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gradient-to-r from-newa-green/20 to-transparent p-8 rounded-lg border-l-4 border-newa-green">
            <h2 className="text-2xl font-bold text-newa-green mb-4">
              Jak kupić bilet?
            </h2>
            <ol className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-newa-green mr-3 font-bold">1.</span>
                <span>Przyjdź do kasy przed seansem</span>
              </li>
              <li className="flex items-start">
                <span className="text-newa-green mr-3 font-bold">2.</span>
                <span>Zarezerwuj telefonicznie (zalecane)</span>
              </li>
              <li className="flex items-start">
                <span className="text-newa-green mr-3 font-bold">3.</span>
                <span>Miejsca numerowane - dowolny wybór</span>
              </li>
              <li className="flex items-start">
                <span className="text-newa-green mr-3 font-bold">4.</span>
                <span>Płatność gotówką lub kartą</span>
              </li>
            </ol>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-transparent p-8 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Ważne informacje
            </h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>• Kasa otwiera się 30 minut przed pierwszym seansem</li>
              <li>• Zalecamy przyjście 15 minut przed seansem</li>
              <li>• Możliwość rezerwacji telefonicznej</li>
              <li>• Zniżki dla studentów i seniorów przy okazaniu dokumentu</li>
              <li>
                • Kino studyjne - kameralna atmosfera, jedna sala
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

