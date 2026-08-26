export type Movie = {
  id: string;
  title: string;
  genre: string;
  duration: string;
  rating: string;
  description: string;
  releaseDate: string;
  poster: string;
  director?: string;
  cast?: string;
  country?: string;
  year?: number;
  polishPremiere?: boolean;
};

// Katalog filmów - jedno źródło używane na stronie głównej, na /new-releases
// i jako odnośniki (po id) z repertuaru (src/app/data/repertoire.ts).
// Źródło danych: https://www.festiwalgorski.pl/festiwal-w-kinach-2026/
export const currentMovies: Movie[] = [
  {
    id: "excalibur",
    title: "Excalibur. A Pursuit in Process",
    genre: "Dokument górski",
    duration: "18 min",
    rating: "b/d",
    description:
      "Dokument o wspinaczce Brooke Raboutou na Excalibur (5.15c/9b+) w okolicach Arco we Włoszech - 18-ruchowej drodze na brzytwo-ostrych chwytach. Jej przejście było historycznym osiągnięciem: pierwszej kobiety wspinającej się w tej kategorii trudności.",
    releaseDate: "2026-08-31",
    poster: "/posters/excalibur.jpg",
    director: "Brooke Raboutou, Ben Neilson",
    country: "USA",
    year: 2026,
  },
  {
    id: "a-home-for-free-spirits",
    title: "A Home for Free Spirits",
    genre: "Dokument górski",
    duration: "25 min",
    rating: "b/d",
    description:
      "Historia Petera i Anati, którzy prowadzą Le Moulin des Artistes - XVI-wieczny młyn w dolinie Chamonix będący warsztatem nart, przestrzenią sztuki i miejscem spotkań wolnych duchów gór.",
    releaseDate: "2026-08-31",
    poster: "/posters/a-home-for-free-spirits.jpg",
    director: "Pierre Cadot",
    country: "Francja",
    year: 2025,
  },
  {
    id: "kronoshock",
    title: "Kronoshock",
    genre: "Dokument górski",
    duration: "10 min",
    rating: "b/d",
    description:
      "W sercu dzikiej doliny wznosi się potężny, oblodzony masyw skalny. Żądny przygód Lord Cliffrider marzy, by jako pierwszy stanąć na tym dziewiczym szczycie - lecz z każdym dniem to marzenie rozwiewa się jak dym z jego fajki.",
    releaseDate: "2026-08-31",
    poster: "/posters/kronoshock.jpg",
    director: "Ignasi López Fàbregas",
    country: "Hiszpania",
    year: 2026,
    polishPremiere: true,
  },
  {
    id: "k2-chasing-shadows",
    title: "K2 - Chasing Shadows",
    genre: "Dokument górski",
    duration: "67 min",
    rating: "b/d",
    description:
      "Alpinista Benjamin Védrines mierzy się ze swoim najbardziej ambitnym wyzwaniem: szybkim wejściem na K2 bez tlenu. Poza fizycznym szczytem czeka na niego góra znacznie trudniejsza - ta wewnętrzna.",
    releaseDate: "2026-08-31",
    poster: "/posters/k2-chasing-shadows.jpg",
    director: "David Arnaud, Hugo Clouzeau",
    country: "Francja, USA",
    year: 2025,
  },
  {
    id: "just-climber",
    title: "Just Climber",
    genre: "Dokument górski",
    duration: "23 min",
    rating: "b/d",
    description:
      "Solenne Piret, urodzona bez prawej dłoni, czterokrotna mistrzyni świata w parawspinaczce, mierzy się z prowadzeniem iglicy Grand Capucin w masywie Mont Blanc tradycyjną techniką, z samodzielnie zakładaną asekuracją. Tytuł oryginalny: Cap ou pas Cap?",
    releaseDate: "2026-09-01",
    poster: "/posters/just-climber.jpg",
    director: "Jérôme Tanon",
    country: "Francja",
    year: 2025,
  },
  {
    id: "better-up-there",
    title: "Better Up There",
    genre: "Dokument górski",
    duration: "45 min",
    rating: "b/d",
    description:
      "Portret narciarza freeride Léo Slemetta, który mierzy się z przeciwnościami losu i stratą bliskich na tle Freeride World Tour. Film o tym, jak góry potrafią jednocześnie dawać wszystko i wszystko zabierać.",
    releaseDate: "2026-09-01",
    poster: "/posters/better-up-there.jpg",
    director: "Mathis Dumas",
    country: "Francja",
    year: 2025,
  },
  {
    id: "fifty-fifty",
    title: "Fifty-Fifty",
    genre: "Dokument górski",
    duration: "11 min",
    rating: "b/d",
    description:
      "Wybitne alpinistki Ines Papert i Sarah Hueniken wkraczają w pięćdziesiątkę z jeszcze większymi ambicjami, pogłębiając przy tym zrozumienie siebie nawzajem i samych siebie jako partnerek wspinaczkowych.",
    releaseDate: "2026-09-01",
    poster: "/posters/fifty-fifty.jpg",
    director: "Angela Perceival",
    country: "Kanada",
    year: 2024,
    polishPremiere: true,
  },
  {
    id: "immersion-nothing-to-hide",
    title: "Immersion - Nothing to Hide",
    genre: "Dokument górski",
    duration: "41 min",
    rating: "b/d",
    description:
      "Nieupiększony portret zawodowego kolarza Kiliana Brona, dla którego kolarstwo to od ponad dwóch dekad coś więcej niż sport - styl życia i twórczy sposób wyrazu, pokazany bez kompromisów.",
    releaseDate: "2026-09-01",
    poster: "/posters/immersion-nothing-to-hide.jpg",
    director: "Julien Raison",
    country: "Francja",
    year: 2025,
    polishPremiere: true,
  },
  {
    id: "dissidence",
    title: "Dissidence Two Shadows on the Wall",
    genre: "Dokument górski",
    duration: "34 min",
    rating: "b/d",
    description:
      "Bracia bliźniacy Ravianto i Raviandi Ramadhan z Indonezji, uzbrojeni jedynie we własną determinację, przemierzają świat w drodze na Mistrzostwa Świata we wspinaczce - od ścianek treningowych w Dżakarcie po drogę wspinaczkową we Francji.",
    releaseDate: "2026-09-02",
    poster: "/posters/dissidence.jpg",
    director: "Rama Dio Syahputra",
    country: "Indonezja",
    year: 2025,
    polishPremiere: true,
  },
  {
    id: "the-bride-of-mont-blanc",
    title: "The Bride of Mont Blanc",
    genre: "Dokument górski",
    duration: "29 min",
    rating: "b/d",
    description:
      "Elise Wortley w XIX-wiecznym sprzęcie odtwarza pierwsze samodzielne wejście kobiety na Mont Blanc z 1838 roku, konfrontując się z nieobecnością kobiet w historii alpinizmu oraz z własnym zmaganiem z lękiem. Film zrealizowany w całości przez kobiecą ekipę.",
    releaseDate: "2026-09-02",
    poster: "/posters/the-bride-of-mont-blanc.jpg",
    director: "Grace Taylorson Smith",
    country: "Wielka Brytania",
    year: 2025,
    polishPremiere: true,
  },
  {
    id: "into-altai",
    title: "Into Altai",
    genre: "Dokument górski",
    duration: "37 min",
    rating: "b/d",
    description:
      "Camille Armand, Pierre Hourticq i Victor Daviet spędzają dwa tygodnie w masywie Tavan Bogd w Mongolii, eksplorując na nartach i snowboardzie odległe alpejskie tereny wśród Pięciu Świętych Szczytów, z jurtą jako bazą wypadową.",
    releaseDate: "2026-09-02",
    poster: "/posters/into-altai.jpg",
    director: "Yannick Boissenot",
    country: "Francja",
    year: 2025,
    polishPremiere: true,
  },
  {
    id: "ice",
    title: "Ice",
    genre: "Dokument górski",
    duration: "20 min",
    rating: "b/d",
    description:
      "Po 15 latach startów na najwyższym poziomie wspinacze Tristan i Louna Ladevant odchodzą od rywalizacji, by odkrywać artystyczny wymiar wspinaczki lodowej. Zamarznięty wodospad, oświetlony nocą jak teatralna scena, staje się tłem ich lodowego tańca.",
    releaseDate: "2026-09-02",
    poster: "/posters/ice.jpg",
    director: "Thibault Gachet",
    country: "Francja",
    year: 2025,
    polishPremiere: true,
  },
];
