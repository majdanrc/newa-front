"use client";

import { monoton } from "@/app/ui/fonts";
import Image from "next/image";
import { useState } from "react";
import { repertoire } from "@/app/data/repertoire";
import { currentMovies } from "@/app/data/movies";

const movieById = new Map(currentMovies.map((movie) => [movie.id, movie]));

export default function RepertoirePage() {
  const days = Array.from(
    new Set(repertoire.map((block) => block.date)),
  ).sort();
  const [selectedDate, setSelectedDate] = useState(days[0]);
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);

  const blocksForDay = repertoire.filter(
    (block) => block.date === selectedDate,
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1
            className={`${monoton.className} uppercase text-4xl md:text-6xl mb-6 text-newa-green`}
          >
            Repertuar
          </h1>
          <div className="w-32 h-1 bg-newa-green mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Sprawdź aktualny repertuar</p>
        </div>

        {/* Day Selector */}
        {days.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {days.map((date) => {
                const d = new Date(date);
                return (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`px-6 py-4 rounded-lg transition-all min-w-[120px] ${
                      selectedDate === date
                        ? "bg-newa-green text-white font-semibold scale-105 shadow-lg"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    <div className="text-sm">
                      {d.toLocaleDateString("pl-PL", { weekday: "short" })}
                    </div>
                    <div className="text-lg font-bold">
                      {d.toLocaleDateString("pl-PL", {
                        day: "numeric",
                        month: "short",
                      })}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Schedule */}
        {blocksForDay.length > 0 ? (
          <div className="space-y-8">
            {blocksForDay.map((block) => {
              const movies = block.movieIds
                .map((id) => movieById.get(id))
                .filter((m): m is NonNullable<typeof m> => Boolean(m));

              return (
                <div
                  key={block.id}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-newa-green transition-all shadow-lg"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="bg-newa-green text-white px-4 py-3 rounded-lg font-bold text-xl min-w-[100px] text-center">
                      {block.time}
                    </div>
                    <div>
                      {block.label && (
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {block.label}
                        </h3>
                      )}
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                        {block.hall}
                      </span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {movies.map((movie) => {
                      const isOpen = selectedMovie === movie.id;
                      return (
                        <div
                          key={movie.id}
                          onClick={() =>
                            setSelectedMovie(isOpen ? null : movie.id)
                          }
                          className="bg-gray-900/60 rounded-lg overflow-hidden border border-gray-700 cursor-pointer hover:border-newa-green transition-all"
                        >
                          <div
                            className={`relative bg-gray-800 transition-all duration-300 ${
                              isOpen ? "h-[420px]" : "h-48"
                            }`}
                          >
                            <Image
                              src={movie.poster}
                              alt={movie.title}
                              fill
                              className={
                                isOpen ? "object-contain" : "object-cover"
                              }
                            />
                            {movie.polishPremiere && (
                              <span className="absolute top-2 right-2 px-2 py-1 bg-red-600 text-white rounded-full text-xs font-semibold">
                                Polska premiera
                              </span>
                            )}
                          </div>
                          <div className="p-4">
                            <h4 className="font-bold text-white mb-1">
                              {movie.title}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {movie.duration}
                              {movie.director ? ` · ${movie.director}` : ""}
                            </p>

                            {isOpen && (
                              <div className="mt-3 pt-3 border-t border-gray-700 animate-fadeIn space-y-2 text-sm text-gray-400">
                                <p>{movie.description}</p>
                                {movie.country && (
                                  <p>
                                    <strong className="text-newa-green">
                                      Kraj:
                                    </strong>{" "}
                                    {movie.country}
                                    {movie.year ? `, ${movie.year}` : ""}
                                  </p>
                                )}
                                {movie.rating && movie.rating !== "b/d" && (
                                  <p>
                                    <strong className="text-newa-green">
                                      Kategoria wiekowa:
                                    </strong>{" "}
                                    {movie.rating}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
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
                <span>Dowolny wybór miejsc na sali</span>
              </li>
              <li className="flex items-start">
                <span className="text-newa-green mr-3 font-bold">3.</span>
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
              <li>• Nie prowadzimy rezerwacji ani sprzedaży biletów online</li>
              <li>• Zniżki dla studentów i seniorów przy okazaniu dokumentu</li>
              <li>• Kino studyjne - kameralna atmosfera, jedna sala</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
