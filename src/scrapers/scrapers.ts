import type { Song } from "@/types";
import { letras } from "./letras";

export interface SongScraper {
  matches: string[];
  scrape(doc: Document): Song | null;
}

const scrapers: SongScraper[] = [letras];

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
