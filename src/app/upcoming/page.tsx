"use client";

import { monoton } from "@/app/ui/fonts";
import { useState } from "react";
import { upcomingMovies } from "@/app/data/upcoming";

export default function UpcomingPage() {
  const [filter, setFilter] = useState<string>("all");

  const genres = [
    "all",
    ...Array.from(
      new Set(
        upcomingMovies.flatMap((movie) =>
          movie.genre.split(",").map((g) => g.trim())
        )
      )
    ),
  ];

  const filteredMovies =
    filter === "all"
      ? upcomingMovies
      : upcomingMovies.filter((movie) => movie.genre.includes(filter));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1
            className={`${monoton.className} uppercase text-4xl md:text-6xl mb-6 text-newa-green`}
          >
            Zapowiedzi
          </h1>
          <div className="w-32 h-1 bg-newa-green mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Nadchodzące premiery
          </p>
        </div>

        {/* Filter Section */}
        {upcomingMovies.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">
              Filtruj po gatunku:
            </h3>
            <div className="flex flex-wrap gap-3">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setFilter(genre)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    filter === genre
                      ? "bg-newa-green text-white font-semibold"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {genre === "all" ? "Wszystkie" : genre}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Movies Timeline */}
        {filteredMovies.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl mb-4">
              Brak zapowiedzi w tej chwili
            </p>
            <p className="text-gray-500">
              Sprawdź ponownie wkrótce lub śledź nas na Facebooku
            </p>
          </div>
        ) : (
        <div className="space-y-8">
          {filteredMovies.map((movie, index) => (
            <div
              key={movie.id}
              className={`flex flex-col md:flex-row gap-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-700 hover:border-newa-green transition-all duration-300 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Movie Poster Side */}
              <div className="md:w-1/3 bg-gray-800 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎬</div>
                  <p className="text-gray-500">Coming Soon</p>
                </div>
              </div>

              {/* Movie Info Side */}
              <div className="md:w-2/3 p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-bold text-newa-green">
                    {movie.title}
                  </h2>
                  <span className="px-4 py-2 bg-newa-green/20 text-newa-green rounded-lg font-semibold whitespace-nowrap ml-4">
                    {new Date(movie.releaseDate).toLocaleDateString("pl-PL", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    {movie.genre}
                  </span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    {movie.duration}
                  </span>
                  <span className="px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-sm">
                    {movie.rating}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {movie.description}
                </p>

                <div className="space-y-2 text-sm mb-6">
                  {movie.director && (
                    <p className="text-gray-400">
                      <strong className="text-newa-green">Reżyseria:</strong>{" "}
                      {movie.director}
                    </p>
                  )}
                  {movie.cast && (
                    <p className="text-gray-400">
                      <strong className="text-newa-green">Obsada:</strong>{" "}
                      {movie.cast}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
}
