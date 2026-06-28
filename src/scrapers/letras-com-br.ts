import type { Song } from "@/types";
import type { SongScraper } from "./scrapers";

export const letrasComBr: SongScraper = {
  matches: [],

  scrape(doc: Document): Song | null {
    return null;
  },
};
