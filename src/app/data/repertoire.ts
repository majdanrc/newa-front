export type ScreeningBlock = {
  id: string;
  date: string;
  time: string;
  hall: string;
  label?: string;
  movieIds: string[];
};

// Repertuar - odnośniki (po movie.id) do katalogu filmów w movies.ts,
// zamiast duplikowania danych filmu w każdym seansie. Jeden blok może
// obejmować kilka filmów pokazywanych razem w jednym seansie (np. bloki
// festiwalowe), stąd movieIds to tablica.
export const repertoire: ScreeningBlock[] = [
  {
    id: "festiwal-gorski-2026-08-31",
    date: "2026-08-31",
    time: "20:00",
    hall: "Sala Główna",
    label: "Festiwal Górski w kinach 2026",
    movieIds: ["excalibur", "a-home-for-free-spirits", "kronoshock", "k2-chasing-shadows"],
  },
  {
    id: "festiwal-gorski-2026-09-01",
    date: "2026-09-01",
    time: "20:00",
    hall: "Sala Główna",
    label: "Festiwal Górski w kinach 2026",
    movieIds: ["just-climber", "better-up-there", "fifty-fifty", "immersion-nothing-to-hide"],
  },
  {
    id: "festiwal-gorski-2026-09-02",
    date: "2026-09-02",
    time: "20:00",
    hall: "Sala Główna",
    label: "Festiwal Górski w kinach 2026",
    movieIds: ["dissidence", "the-bride-of-mont-blanc", "into-altai", "ice"],
  },
];
