import { Song } from "@/types";
import { SongScraper } from "./scrapers";

export const letras: SongScraper = {
  matches: [],

  scrape(doc: Document): Song | null {
    return null;
  },
};
