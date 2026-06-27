import { Song } from "@/types";
import { SongScraper } from "./scrapers";

export const letras: SongScraper = {
  matches: ["*://*.letras.com/*", "*://*.letras.mus.br/*"],

  scrape(doc: Document): Song | null {
    return null;
  },
};
