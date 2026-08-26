import type { Movie } from "@/app/data/movies";

// Zapowiedzi - filmy, które jeszcze nie miały premiery w kinie.
// Osobno od premier (movies.ts), bo to inny etap życia filmu.
// TODO: docelowo ma czytać z zewnętrznego storage zamiast tablicy w kodzie.
export const upcomingMovies: Movie[] = [];
