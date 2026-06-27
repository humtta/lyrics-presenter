import type { Song } from "@/types";

export interface SongScraper {
  matches: string[];
  scrape(doc: Document): Song | null;
}

const scrapers: SongScraper[] = [];

export function findScraper(url: string): SongScraper | null {
  return (
    scrapers.find((scraper) =>
      scraper.matches.some((pattern) =>
        new MatchPattern(pattern).includes(url),
      ),
    ) ?? null
  );
}

export function getMatches(): string[] {
  return scrapers.flatMap((scraper) => scraper.matches);
}
