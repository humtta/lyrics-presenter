import type { Song } from "@/types";
import type { SongScraper } from "./scrapers";

enum Selector {
  Title = "#lyricContent h1",
  Artist = "#lyricContent h2",
  Lyrics = "#lyricContent #lyrics",
}

export const vagalumeCom: SongScraper = {
  matches: ["*://*.vagalume.com/*", "*://*.vagalume.com.br/*"],

  scrape(doc: Document): Song | null {
    return null;
  },
};
