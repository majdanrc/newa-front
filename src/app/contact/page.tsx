"use client";

import { monoton } from "@/app/ui/fonts";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineClockCircle,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("send failed");

      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1
            className={`${monoton.className} uppercase text-4xl md:text-6xl mb-6 text-newa-green`}
          >
            Kontakt
          </h1>
          <div className="w-32 h-1 bg-newa-green mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Masz pytania? Skontaktuj się z nami!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-xl border border-gray-700">
            <h2 className="text-3xl font-bold text-newa-green mb-6">
              Wyślij wiadomość
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-semibold"
                >
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-newa-green transition-colors"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-newa-green transition-colors"
                  placeholder="jan.kowalski@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-300 mb-2 font-semibold"
                >
                  Temat
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-newa-green transition-colors"
                >
                  <option value="">Wybierz temat</option>
                  <option value="tickets">Pytanie o bilety</option>
                  <option value="reservations">Rezerwacje grupowe</option>
                  <option value="technical">Problem techniczny</option>
                  <option value="feedback">Opinia</option>
                  <option value="other">Inne</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-semibold"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-newa-green transition-colors resize-none"
                  placeholder="Opisz swoje pytanie lub problem..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-4 bg-newa-green hover:bg-newa-green/80 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-lg transition-colors font-semibold text-lg"
              >
                {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
              </button>

              {status === "sent" && (
                <p className="text-green-400 text-sm text-center">
                  Dziękujemy za wiadomość! Skontaktujemy się wkrótce.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Nie udało się wysłać wiadomości. Spróbuj ponownie lub
                  zadzwoń pod 605 097 332.
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-xl border border-gray-700">
              <h2 className="text-3xl font-bold text-newa-green mb-6">
                Informacje kontaktowe
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <AiOutlineEnvironment className="text-newa-green text-3xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Adres</h3>
                    <p className="text-gray-300">
                      Kazimierza Wielkiego 21
                      <br />
                      65-001 Zielona Góra
                      <br />
                      Polska
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <AiOutlinePhone className="text-newa-green text-3xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                    <p className="text-gray-300">605 097 332</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <AiOutlineMail className="text-newa-green text-3xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-300">kinonewa@llf.pl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <AiOutlineClockCircle className="text-newa-green text-3xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Godziny otwarcia
                    </h3>
                    <p className="text-gray-300">
                      Kasa kina czynna jest 30 minut przed każdym seansem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-newa-green mb-6">
                Śledź nas w social media
              </h2>
              <div className="flex gap-6">
                <a
                  href="https://www.facebook.com/kkfnewa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-newa-green p-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <AiFillFacebook className="text-4xl text-white" />
                </a>
                <a
                  href="https://www.instagram.com/kinonewa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-newa-green p-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <AiFillInstagram className="text-4xl text-white" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-newa-green mb-4">
                Jak do nas trafić?
              </h2>
              <div className="h-64 rounded-lg overflow-hidden">
                <iframe
                  title="Mapa - Kino Newa"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=15.5093516%2C51.9419229%2C15.5173516%2C51.9469229&layer=mapnik&marker=51.9444229%2C15.5133516"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
              <a
                href="https://www.openstreetmap.org/?mlat=51.9444229&mlon=15.5133516#map=17/51.9444229/15.5133516"
                target="_blank"
                rel="noopener noreferrer"
                className="text-newa-green text-sm hover:underline mt-2 inline-block"
              >
                Zobacz większą mapę
              </a>
              <p className="text-gray-400 text-sm mt-4">
                🚌 Autobus: Centrum miasta, blisko dworca autobusowego
                <br />
                🚶 Pieszo: Centrum Zielonej Góry
                <br />
                🚗 Parking: Parkingi miejskie w okolicy
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-newa-green/20 to-transparent p-8 rounded-lg border-l-4 border-newa-green">
          <h2 className="text-3xl font-bold text-newa-green mb-6">
            Najczęściej zadawane pytania
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Jak kupić bilet?
              </h3>
              <p className="text-gray-300 text-sm">
                Bilety można kupić wyłącznie w kasie kina. Płatność przyjmujemy
                gotówką oraz kartą. Nie prowadzimy rezerwacji ani sprzedaży
                biletów online.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Czy oferujemy zniżki dla grup?
              </h3>
              <p className="text-gray-300 text-sm">
                Oferujemy specjalne ceny dla grup zorganizowanych liczących co
                najmniej 10 osób. W celu uzyskania szczegółowych informacji
                prosimy o kontakt telefoniczny.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                W jakie dni kino jest czynne?
              </h3>
              <p className="text-gray-300 text-sm">
                Kino zaprasza od wtorku do niedzieli. W poniedziałki jest
                nieczynne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

