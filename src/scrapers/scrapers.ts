import type { Lyrics } from "@/types";

export interface LyricsScraper {
  matches: string[];
  scrape(doc: Document): Lyrics | null;
}

const scrapers: LyricsScraper[] = [];

export function findScraper(url: string): LyricsScraper | null {
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
