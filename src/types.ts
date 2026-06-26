export type Lyrics = {
  title: string;
  artist: string;
  lines: string[];
};

export enum Message {
  GetLyrics = "get-lyrics",
  StartPresentation = "start-presentation",
}
