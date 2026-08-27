"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Movie } from "@/app/data/movies";

type MovieModalProps = {
  movie: Movie | null;
  onClose: () => void;
};

const TRANSITION_MS = 220;

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  // Keep rendering the last movie while the close animation plays out,
  // so the modal fades/scales away instead of vanishing instantly.
  const [renderedMovie, setRenderedMovie] = useState<Movie | null>(movie);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (movie) {
      setRenderedMovie(movie);
      const frame = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    setIsVisible(false);
    const timeout = setTimeout(() => setRenderedMovie(null), TRANSITION_MS);
    return () => clearTimeout(timeout);
  }, [movie]);

  useEffect(() => {
    if (!renderedMovie) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [renderedMovie, onClose]);

  if (!renderedMovie) return null;
  const movieData = renderedMovie;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/80 p-0 sm:p-4 transition-opacity duration-200 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative bg-gradient-to-br from-gray-800 to-gray-900 sm:rounded-lg rounded-t-2xl shadow-2xl border border-gray-700 w-full sm:max-w-3xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto transition-all duration-200 ease-out ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-[0.97] translate-y-1"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Zamknij"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-900/80 text-white hover:bg-newa-green transition-colors text-xl"
        >
          ×
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative h-80 sm:h-96 md:h-auto md:min-h-[550px] bg-gray-800">
            <Image
              src={movieData.poster}
              alt={movieData.title}
              fill
              className="object-contain"
            />
            {movieData.polishPremiere && (
              <span className="absolute top-3 left-3 px-3 py-1 bg-red-600 text-white rounded-full text-xs font-semibold">
                Polska premiera
              </span>
            )}
          </div>

          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-bold text-newa-green">
              {movieData.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-newa-green/20 text-newa-green rounded-full text-sm">
                {movieData.genre}
              </span>
              <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                {movieData.duration}
              </span>
              {movieData.rating && movieData.rating !== "b/d" && (
                <span className="px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-sm">
                  {movieData.rating}
                </span>
              )}
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {movieData.description}
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              {movieData.director && (
                <p>
                  <strong className="text-newa-green">Reżyseria:</strong>{" "}
                  {movieData.director}
                </p>
              )}
              {movieData.country && (
                <p>
                  <strong className="text-newa-green">Kraj:</strong>{" "}
                  {movieData.country}
                  {movieData.year ? `, ${movieData.year}` : ""}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
