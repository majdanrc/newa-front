import { monoton } from "@/app/ui/fonts";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1
            className={`${monoton.className} text-4xl md:text-6xl mb-6 text-newa-green`}
          >
            O Kinie Newa
          </h1>
          <div className="w-32 h-1 bg-newa-green mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-newa-green mb-4">
              Nasza Historia
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kino Newa to studyjne kino z wieloletnią tradycją i unikalnym
              charakterem. Od lat jesteśmy miejscem spotkań miłośników
              ambitnego kina, przestrzenią kultury i dyskusji filmowej.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Obecnie kino przechodzi remont, dzięki któremu wkrótce powróci
              w odnowionej formie. Zachowując swój niepowtarzalny klimat,
              oferujemy starannie wyselekcjonowany repertuar - od klasyki
              filmowej po najnowsze produkcje festiwalowe.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-newa-green mb-4">
              Co nas wyróżnia?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-newa-green mr-3 text-xl">•</span>
                <span className="text-gray-300">
                  Kameralna atmosfera jedno salowego kina
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-newa-green mr-3 text-xl">•</span>
                <span className="text-gray-300">
                  Starannie dobrany repertuar - kino artystyczne i ambitne
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-newa-green mr-3 text-xl">•</span>
                <span className="text-gray-300">
                  Wieloletnia tradycja i historia
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-newa-green mr-3 text-xl">•</span>
                <span className="text-gray-300">
                  Specjalne pokazy, festiwale i spotkania z twórcami
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-newa-green mr-3 text-xl">•</span>
                <span className="text-gray-300">
                  Autentyczny klimat prawdziwego kina studyjnego
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-xl border border-newa-green/20 hover:border-newa-green/50 transition-all">
            <h3 className="text-2xl font-bold text-newa-green mb-4">Sala</h3>
            <p className="text-gray-300">
              Jedna kameralna sala kinowa z unikalnym charakterem i atmosferą, 
              idealna do pokazów filmów artystycznych i studyjnych.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-xl border border-newa-green/20 hover:border-newa-green/50 transition-all">
            <h3 className="text-2xl font-bold text-newa-green mb-4">Remont</h3>
            <p className="text-gray-300">
              Kino przechodzi obecnie remont. Wkrótce powrócimy w odnowionej
              formie, zachowując autentyczny klimat i duszę tego miejsca.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-xl border border-newa-green/20 hover:border-newa-green/50 transition-all">
            <h3 className="text-2xl font-bold text-newa-green mb-4">
              Lokalizacja
            </h3>
            <p className="text-gray-300">
              Dogodna lokalizacja w centrum miasta. Łatwy dojazd komunikacją
              miejską i dostęp dla wszystkich widzów.
            </p>
          </div>
        </div>

        {/* Tickets Info */}
        <div className="bg-gradient-to-r from-newa-green/20 to-transparent p-8 rounded-lg border-l-4 border-newa-green">
          <h2 className="text-3xl font-bold text-newa-green mb-4">Bilety</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Cennik standardowy:
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Bilet normalny:</span>
                  <span className="font-bold">20 PLN</span>
                </li>
                <li className="flex justify-between">
                  <span>Bilet ulgowy:</span>
                  <span className="font-bold">15 PLN</span>
                </li>
                <li className="flex justify-between">
                  <span>Bilety grupowe (od 10 osób):</span>
                  <span className="font-bold">12 PLN</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Informacje:
              </h3>
              <ul className="space-y-2">
                <li>
                  • Bilety dostępne w kasie kina przed seansem
                </li>
                <li>
                  • Możliwość rezerwacji telefonicznej
                </li>
                <li>
                  • Specjalne ceny dla grup zorganizowanych
                </li>
                <li>
                  • Ulgowe ceny dla studentów, seniorów i uczniów
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
