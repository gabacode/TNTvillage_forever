export type Record = {
  DATA: string;
  HASH: string;
  TOPIC: number;
  POST: number;
  AUTORE: string;
  TITOLO: string;
  DESCRIZIONE: string;
  DIMENSIONE: string;
  CATEGORIA: number;
};

export enum Categories {
  "Film TV e programmi" = 1,
  "Musica" = 2,
  "E Books" = 3,
  "Film" = 4,
  "Linux" = 6,
  "Anime" = 7,
  "Cartoni" = 8,
  "Macintosh" = 9,
  "Windows Software" = 10,
  "Pc Game" = 11,
  "Playstation" = 12,
  "Students Releases" = 13,
  "Documentari" = 14,
  "Video Musicali" = 21,
  "Sport" = 22,
  "Teatro" = 23,
  "Wrestling" = 24,
  "Varie" = 25,
  "Xbox" = 26,
  "Immagini sfondi" = 27,
  "Altri Giochi" = 28,
  "Serie TV" = 29,
  "Fumetteria" = 30,
  "Trash" = 31,
  "Nintendo" = 32,
  "A Book" = 34,
  "Podcast" = 35,
  "Edicola" = 36,
  "Mobile" = 37,
}

