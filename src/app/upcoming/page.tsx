"use client";

import { monoton } from "@/app/ui/fonts";
import { useState } from "react";

// Sample upcoming movies data
const upcomingMovies = [
  {
    id: 1,
    title: "Anora",
    genre: "Dramat, Komedia",
    duration: "139 min",
    rating: "15+",
    description:
      "Złota Palma w Cannes 2024. Historia młodej tancerki z Nowego Jorku, której życie zmienia się po spotkaniu syna rosyjskiego oligarchy.",
    releaseDate: "2025-01-15",
    director: "Sean Baker",
    cast: "Mikey Madison, Mark Eydelshteyn",
    trailer: true,
  },
  {
    id: 2,
    title: "La Chimera",
    genre: "Dramat",
    duration: "133 min",
    rating: "12+",
    description:
      "Toskania, lata 80. Grupa poszukiwaczy skarbów trudni się nielegalnym handlem starożytnymi artefaktami etruskimi.",
    releaseDate: "2025-01-22",
    director: "Alice Rohrwacher",
    cast: "Josh O'Connor, Isabella Rossellini",
    trailer: true,
  },
  {
    id: 3,
    title: "Perfect Days",
    genre: "Dramat",
    duration: "123 min",
    rating: "12+",
    description:
      "Hirayama, sprzątacz toalet w Tokio, wiedzie proste, uporządkowane życie. Nagroda za najlepszego aktora w Cannes.",
    releaseDate: "2025-01-28",
    director: "Wim Wenders",
    cast: "Koji Yakusho, Tokio Emoto",
    trailer: true,
  },
  {
    id: 4,
    title: "Fallen Leaves",
    genre: "Dramat, Romans",
    duration: "81 min",
    rating: "12+",
    description:
      "Melancholijna historia miłosna dwojga samotnych ludzi w współczesnym Helsinkach. Nagroda Jury w Cannes 2023.",
    releaseDate: "2025-02-05",
    director: "Aki Kaurismäki",
    cast: "Alma Pöysti, Jussi Vatanen",
    trailer: false,
  },
  {
    id: 5,
    title: "The Zone of Interest",
    genre: "Dramat, Historyczny",
    duration: "105 min",
    rating: "15+",
    description:
      "Komendant Auschwitz i jego rodzina budują wymarzoneżycie w domu tuż przy obozie. Grand Prix w Cannes 2023.",
    releaseDate: "2025-02-12",
    director: "Jonathan Glazer",
    cast: "Christian Friedel, Sandra Hüller",
    trailer: true,
  },
  {
    id: 6,
    title: "Anatomia upadku",
    genre: "Dramat, Thriller",
    duration: "151 min",
    rating: "15+",
    description:
      "Pisarka staje pod zarzutem zabójstwa męża. Złota Palma w Cannes 2023. Fascynująca psychologiczna układanka.",
    releaseDate: "2025-02-18",
    director: "Justine Triet",
    cast: "Sandra Hüller, Swann Arlaud",
    trailer: true,
  },
  {
    id: 7,
    title: "EO",
    genre: "Dramat",
    duration: "88 min",
    rating: "12+",
    description:
      "Współczesna odyseja przez Europę widziana oczami osiołka. Nagroda Jury w Cannes 2022. Film Jerzego Skolimowskiego.",
    releaseDate: "2025-02-25",
    director: "Jerzy Skolimowski",
    cast: "Sandra Drzymalska, Lorenzo Zurzolo",
    trailer: true,
  },
  {
    id: 8,
    title: "Aftersun",
    genre: "Dramat",
    duration: "101 min",
    rating: "12+",
    description:
      "Sophie wspomina wakacje z ojcem sprzed 20 lat, starając się zrozumieć człowieka, którego znała i nie znała.",
    releaseDate: "2025-03-05",
    director: "Charlotte Wells",
    cast: "Paul Mescal, Frankie Corio",
    trailer: false,
  },
];

export default function UpcomingPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredMovies =
    filter === "all"
      ? upcomingMovies
      : upcomingMovies.filter((movie) => movie.genre.includes(filter));

  const genres = [
    "all",
    "Sci-Fi",
    "Fantasy",
    "Horror",
    "Romans",
    "Akcja",
    "Animacja",
    "Kryminał",
    "Dramat",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1
            className={`${monoton.className} text-4xl md:text-6xl mb-6 text-newa-green`}
          >
            Zapowiedzi
          </h1>
          <div className="w-32 h-1 bg-newa-green mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Nadchodzące premiery - zarezerwuj miejsce już teraz!
          </p>
        </div>

        {/* Filter Section */}
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

        {/* Movies Timeline */}
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
                  {movie.trailer && (
                    <button className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2 mx-auto">
                      <span>▶</span> Zobacz zwiastun
                    </button>
                  )}
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
                  <p className="text-gray-400">
                    <strong className="text-newa-green">Reżyseria:</strong>{" "}
                    {movie.director}
                  </p>
                  <p className="text-gray-400">
                    <strong className="text-newa-green">Obsada:</strong>{" "}
                    {movie.cast}
                  </p>
                </div>

                <button className="px-6 py-3 bg-newa-green hover:bg-newa-green/80 text-white rounded-lg transition-colors font-semibold">
                  Powiadom mnie o premierze
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-newa-green/20 to-transparent p-8 rounded-lg border-l-4 border-newa-green">
          <h2 className="text-2xl font-bold text-newa-green mb-4">
            Bądź na bieżąco!
          </h2>
          <p className="text-gray-300 mb-6">
            Śledź nas na Facebooku, aby otrzymywać powiadomienia o nowych
            zapowiedziach, festiwalach filmowych i specjalnych pokazach.
          </p>
          <div className="flex gap-4 max-w-md">
            <input
              type="email"
              placeholder="Twój adres e-mail"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-newa-green"
            />
            <button className="px-6 py-3 bg-newa-green hover:bg-newa-green/80 text-white rounded-lg transition-colors font-semibold whitespace-nowrap">
              Zapisz się
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

