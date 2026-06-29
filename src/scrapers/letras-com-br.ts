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
    const titleEl = $(Selector.Title, doc);
    const artistEl = $(Selector.Artist, doc);
    const lyricsEl = $(Selector.Lyrics, doc);

    if (!titleEl || !artistEl || !lyricsEl) return null;

    const title = textOf(titleEl);
    const artist = textOf(artistEl);

    if (!titleEl || !artistEl) return null;

    const lyrics = scrapeParagraphLines(lyricsEl);

    return {
      meta: {
        title: title,
        artist: artist,
      },
      lyrics: {
        stanzas: lyrics,
      },
    };
  },
};
