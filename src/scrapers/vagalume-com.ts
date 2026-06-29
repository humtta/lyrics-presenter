import type { Song } from "@/types";
import type { SongScraper } from "./scrapers";

export const vagalumeCom: SongScraper = {
  matches: ["*://*.vagalume.com/*", "*://*.vagalume.com.br/*"],

  scrape(doc: Document): Song | null {
    return null;
  },
};
