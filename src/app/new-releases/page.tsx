"use client";

import { monoton } from "@/app/ui/fonts";
import Image from "next/image";
import { useState } from "react";

// Sample movie data
const newReleases = [
  {
    id: 1,
    title: "Parasite",
    genre: "Dramat, Thriller",
    duration: "132 min",
    rating: "15+",
    description:
      "Zwycięzca Oscara 2020. Pełna czarnego humoru opowieść o klasie i nierównościach społecznych. Reżyseria: Bong Joon-ho.",
    releaseDate: "2024-12-06",
    poster: "/next.svg",
  },
  {
    id: 2,
    title: "The Lighthouse",
    genre: "Dramat, Horror",
    duration: "109 min",
    rating: "15+",
    description:
      "Dwóch latarników morskich powoli pogrąża się w szaleństwie na odludnej wyspie. Hipnotyzujący thriller psychologiczny.",
    releaseDate: "2024-12-07",
    poster: "/next.svg",
  },
  {
    id: 3,
    title: "Portrait de la jeune fille en feu",
    genre: "Dramat, Romans",
    duration: "122 min",
    rating: "12+",
    description:
      "Malarka zostaje wynajęta do namalowania portretu młodej kobiety, która ma wyjść za mąż. Piękna opowieść o miłości i sztuce.",
    releaseDate: "2024-12-08",
    poster: "/next.svg",
  },
  {
    id: 4,
    title: "The Square",
    genre: "Komedia, Dramat",
    duration: "151 min",
    rating: "15+",
    description:
      "Satyryczna komedia o współczesnej sztuce i hipokryzji społeczeństwa. Złota Palma w Cannes 2017.",
    releaseDate: "2024-12-10",
    poster: "/next.svg",
  },
  {
    id: 5,
    title: "Ida",
    genre: "Dramat",
    duration: "82 min",
    rating: "12+",
    description:
      "Młoda zakonnica odkrywa mroczną tajemnicę swojej rodziny. Oscarowy film Pawła Pawlikowskiego.",
    releaseDate: "2024-12-12",
    poster: "/next.svg",
  },
  {
    id: 6,
    title: "Moonlight",
    genre: "Dramat",
    duration: "111 min",
    rating: "15+",
    description:
      "Poruszająca opowieść o dorastaniu młodego czarnoskórego mężczyzny w Miami. Zwycięzca Oscara za najlepszy film.",
    releaseDate: "2024-12-14",
    poster: "/next.svg",
  },
];

export default function NewReleasesPage() {
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1
            className={`${monoton.className} text-4xl md:text-6xl mb-6 text-newa-green`}
          >
            Premiery
          </h1>
          <div className="w-32 h-1 bg-newa-green mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Najnowsze filmy, które właśnie trafiły do naszego kina
          </p>
        </div>

        {/* Movies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newReleases.map((movie) => (
            <div
              key={movie.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-700 hover:border-newa-green transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() =>
                setSelectedMovie(selectedMovie === movie.id ? null : movie.id)
              }
            >
              {/* Movie Poster */}
              <div className="relative h-64 bg-gray-800 flex items-center justify-center">
                <div className="text-gray-600 text-center">
                  <p className="text-4xl mb-2">🎬</p>
                  <p className="text-sm">Movie Poster</p>
                </div>
              </div>

              {/* Movie Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-newa-green mb-2">
                  {movie.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-newa-green/20 text-newa-green rounded-full text-sm">
                    {movie.genre}
                  </span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    {movie.duration}
                  </span>
                  <span className="px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-sm">
                    {movie.rating}
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {movie.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">
                    Premiera:{" "}
                    {new Date(movie.releaseDate).toLocaleDateString("pl-PL")}
                  </span>
                  <button className="px-4 py-2 bg-newa-green hover:bg-newa-green/80 text-white rounded-lg transition-colors font-semibold">
                    Kup bilet
                  </button>
                </div>

                {/* Expanded details */}
                {selectedMovie === movie.id && (
                  <div className="mt-4 pt-4 border-t border-gray-700 animate-fadeIn">
                    <p className="text-gray-300 text-sm">
                      {movie.description}
                    </p>
                    <div className="mt-4 space-y-2 text-sm text-gray-400">
                      <p>
                        <strong className="text-newa-green">Gatunek:</strong>{" "}
                        {movie.genre}
                      </p>
                      <p>
                        <strong className="text-newa-green">Czas trwania:</strong>{" "}
                        {movie.duration}
                      </p>
                      <p>
                        <strong className="text-newa-green">Kategoria wiekowa:</strong>{" "}
                        {movie.rating}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-newa-green/20 to-transparent p-8 rounded-lg border-l-4 border-newa-green">
          <h2 className="text-2xl font-bold text-newa-green mb-4">
            Informacje o biletach
          </h2>
          <p className="text-gray-300 mb-4">
            Bilety dostępne w kasie kina oraz poprzez rezerwację telefoniczną.
            Zalecamy wcześniejszą rezerwację, szczególnie na seanse weekendowe
            i specjalne projekcje.
          </p>
          <p className="text-gray-400 text-sm">
            💡 Tip: Śledź nas na Facebooku, aby być na bieżąco z repertuarem
            i specjalnymi pokazami filmowymi!
          </p>
        </div>
      </div>
    </div>
  );
}

