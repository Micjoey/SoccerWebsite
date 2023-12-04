// types.ts
export interface Game {
  id: string;
  date: string;
  time: string; // Added game time
  opponent: string;
  location: string;
  locationLink?: string;
  homeTeamColor: string; // Added home team color
  awayTeamColor: string; // Added away team color
}
