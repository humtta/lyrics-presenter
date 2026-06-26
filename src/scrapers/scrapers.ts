import type { Lyrics } from "@/types";

export interface LyricsScraper {
  matches: string[];
  scrape(doc: Document): Lyrics | null;
}

const scrapers: LyricsScraper[] = [];

export function getMatches(): string[] {
  return scrapers.flatMap((scraper) => scraper.matches);
}
