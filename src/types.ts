export type Song = SongMeta & SongLyrics;

export type SongMeta = {
  title: string;
  artist: string;
};

export type SongLyrics = {
  lines: string[];
};

export enum Message {
  GetLyrics = "get-lyrics",
  StartPresentation = "start-presentation",
}
