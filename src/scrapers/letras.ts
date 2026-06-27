import { Song } from "@/types";
import { SongScraper } from "./scrapers";

enum Selector {
  Title = "#js-lyric-content h1",
  Artist = "#js-lyric-content h2",
  Lyrics = "#js-lyric-content .lyric-original",
}

export const letras: SongScraper = {
  matches: ["*://*.letras.com/*", "*://*.letras.mus.br/*"],

  scrape(doc: Document): Song | null {
    return null;
  },
};
