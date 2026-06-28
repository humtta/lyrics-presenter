import type { Song } from "@/types";
import type { SongScraper } from "./scrapers";

enum Selector {
  Title = "#js-lyric-content h1",
  Artist = "#js-lyric-content h2",
  Lyrics = "#js-lyric-content .lyric-original",
}

export const letrasCom: SongScraper = {
  matches: ["*://*.letras.com/*", "*://*.letras.mus.br/*"],

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
