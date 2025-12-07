"use client";

import Image from "next/image";
import Link from "next/link";
import { monoton } from "@/app/ui/fonts";
import { AiFillPlayCircle } from "react-icons/ai";

const featuredMovies = [
  {
    id: 1,
    title: "Parasite",
    genre: "Dramat",
    rating: "15+",
    description: "Zwycięzca Oscara od Bong Joon-ho",
  },
  {
    id: 2,
    title: "The Lighthouse",
    genre: "Dramat/Horror",
    rating: "15+",
    description: "Hipnotyzujący thriller psychologiczny",
  },
  {
    id: 3,
    title: "Portrait de la jeune fille",
    genre: "Dramat",
    rating: "12+",
    description: "Poruszająca opowieść o miłości i sztuce",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 flex items-center justify-center before:absolute before:h-[400px] before:w-full sm:before:w-[600px] before:rounded-full before:bg-gradient-radial before:from-newa-green/30 before:to-transparent before:blur-3xl after:absolute after:h-[300px] after:w-full sm:after:w-[400px] after:bg-gradient-conic after:from-green-950 after:via-newa-green/40 after:to-transparent after:blur-3xl opacity-50 -z-10"></div>

        {/* Logo and Title */}
        <div className="text-center mb-12 animate-fadeIn">
          <div className="relative inline-block mb-8">
            <Image
              className="relative drop-shadow-[0_0_1rem_#3c4f3a70]"
              src="/logo.png"
              alt="Newa Logo"
              width={200}
              height={200}
              priority
            />
          </div>
          <h1
            className={`${monoton.className} text-5xl md:text-7xl lg:text-8xl mb-6 text-gray-100 drop-shadow-[0_0_30px_rgba(60,79,58,0.5)]`}
          >
            kino newa
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Studyjne kino z duszą i charakterem
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/repertoire">
              <button className="px-8 py-4 bg-newa-green hover:bg-newa-green/80 text-white rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-newa-green/50 transform hover:scale-105">
                Zobacz repertuar
              </button>
            </Link>
            <Link href="/new-releases">
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all font-semibold text-lg border border-gray-700 hover:border-newa-green transform hover:scale-105">
                Nowe premiery
              </button>
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl w-full mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg text-center border border-gray-700 hover:border-newa-green transition-colors">
            <div className="text-3xl md:text-4xl font-bold text-newa-green mb-2">
              1
            </div>
            <div className="text-gray-400 text-sm">Sala kinowa</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg text-center border border-gray-700 hover:border-newa-green transition-colors">
            <div className="text-3xl md:text-4xl font-bold text-newa-green mb-2">
              Kino
            </div>
            <div className="text-gray-400 text-sm">Studyjne</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg text-center border border-gray-700 hover:border-newa-green transition-colors">
            <div className="text-3xl md:text-4xl font-bold text-newa-green mb-2">
              Kino
            </div>
            <div className="text-gray-400 text-sm">Artystyczne</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg text-center border border-gray-700 hover:border-newa-green transition-colors">
            <div className="text-3xl md:text-4xl font-bold text-newa-green mb-2">
              W
            </div>
            <div className="text-gray-400 text-sm">Remoncie</div>
          </div>
        </div>
      </section>

      {/* Featured Movies Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2
              className={`${monoton.className} text-3xl md:text-5xl text-newa-green mb-4`}
            >
              Teraz w kinach
            </h2>
            <div className="w-24 h-1 bg-newa-green mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredMovies.map((movie) => (
              <div
                key={movie.id}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-700 hover:border-newa-green transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="relative h-72 bg-gray-800 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                  <AiFillPlayCircle className="text-8xl text-newa-green/50 group-hover:text-newa-green transition-colors z-20" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-newa-green/80 text-white rounded-full text-sm font-semibold">
                      {movie.genre}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {movie.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {movie.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">
                      {movie.rating}
                    </span>
                    <Link href="/repertoire">
                      <button className="px-4 py-2 bg-newa-green/20 hover:bg-newa-green text-newa-green hover:text-white rounded-lg transition-colors text-sm font-semibold">
                        Kup bilet
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/new-releases">
              <button className="px-8 py-3 bg-transparent border-2 border-newa-green text-newa-green hover:bg-newa-green hover:text-white rounded-lg transition-all font-semibold">
                Zobacz wszystkie filmy
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2
              className={`${monoton.className} text-3xl md:text-5xl text-newa-green mb-4`}
            >
              Dlaczego my?
            </h2>
            <div className="w-24 h-1 bg-newa-green mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Kino Newa to miejsce z charakterem i wieloletnią tradycją
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-newa-green transition-colors">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Kino studyjne
              </h3>
              <p className="text-gray-400">
                Kameralna atmosfera i starannie wyselekcjonowany repertuar dla prawdziwych miłośników kina.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-newa-green transition-colors">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Kino artystyczne
              </h3>
              <p className="text-gray-400">
                Filmy ambitne, festiwalowe, autorskie. Kino dla tych, którzy szukają czegoś więcej.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-newa-green transition-colors">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Tradycja i historia
              </h3>
              <p className="text-gray-400">
                Kultowe kino z wieloletnią tradycją, które przetrwało próbę czasu i zachowało swój unikalny charakter.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-newa-green transition-colors">
              <div className="text-5xl mb-4">💚</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Kino z duszą
              </h3>
              <p className="text-gray-400">
                To nie tylko miejsce do oglądania filmów - to przestrzeń spotkań, dyskusji i pasji kinowej.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-newa-green/20 to-transparent p-12 rounded-lg border-l-4 border-newa-green">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Gotowy na niezapomniane wrażenia?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Sprawdź aktualny repertuar i zarezerwuj swoje miejsce już teraz!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/repertoire">
                <button className="px-8 py-4 bg-newa-green hover:bg-newa-green/80 text-white rounded-lg transition-all font-semibold text-lg shadow-lg transform hover:scale-105">
                  Sprawdź repertuar
                </button>
              </Link>
              <Link href="/about">
                <button className="px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 hover:border-newa-green hover:text-newa-green rounded-lg transition-all font-semibold text-lg transform hover:scale-105">
                  Dowiedz się więcej
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
