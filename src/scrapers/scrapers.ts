import type { Lyrics } from "@/types";

export interface LyricsScraper {
  matches: string[];
  scrape(doc: Document): Lyrics | null;
}
