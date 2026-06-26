export type Song = SongMeta & SongLyrics;

export type SongMeta = {
  title: string;
  artist: string;
};

export type SongLyrics = {
  lines: string[];
};

export enum Message {
  GetSongMeta = "get-song-meta",
  StartPresentation = "start-presentation",
}
