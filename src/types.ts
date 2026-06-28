export type Song = {
  meta: SongMeta;
  lyrics: SongLyrics;
};

export type SongMeta = {
  title: string;
  artist: string;
};

export type SongLyrics = {
  stanzas: string[][];
};

export enum Message {
  GetSongMeta = "get-song-meta",
  StartPresentation = "start-presentation",
}
