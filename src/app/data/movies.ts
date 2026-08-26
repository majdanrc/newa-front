export type Movie = {
  id: number;
  title: string;
  genre: string;
  duration: string;
  rating: string;
  description: string;
  releaseDate: string;
  poster: string;
  director?: string;
  cast?: string;
};

// Filmy aktualnie w repertuarze / premiery - używane na stronie głównej
// i na stronie premier. Zapowiedzi (przyszłe, jeszcze nie wyświetlane
// filmy) mieszkają osobno w src/app/data/upcoming.ts.
export const currentMovies: Movie[] = [
  {
    id: 1,
    title: "Wolność po włosku",
    genre: "Dramat, Biograficzny",
    duration: "117 min",
    rating: "b/d",
    description:
      "Elektryzujący portret Goliardy Sapienzy - wybitnej włoskiej pisarki, złodziejki i kochanki, która po wyjściu z więzienia na nowo odkrywa siebie w trakcie upalnego rzymskiego lata. Reżyseria: Mario Martone. Obsada: Valeria Golino, Matilda De Angelis, Elodie.",
    releaseDate: "2026-05-01",
    poster: "/next.svg",
    director: "Mario Martone",
    cast: "Valeria Golino, Matilda De Angelis, Elodie",
  },
];
