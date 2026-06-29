import type { Song } from "@/types";
import type { SongScraper } from "./scrapers";

enum Selector {
  Title = "#page-content .content-title-section h1",
  Artist = "#page-content .content-title-section h2",
  Lyrics = "#page-content .lyrics-section",
}

export const letrasComBr: SongScraper = {
  matches: ["*://*.letras.com.br/*"],

  scrape(doc: Document): Song | null {
    return null;
  },
};
