import { startPresentation } from "@/presentation/presentation";
import { findScraper, getMatches } from "@/scrapers/scrapers";
import { Message, type Song } from "@/types";

export default defineContentScript({
  matches: getMatches(),

  main() {
    let song: Song | null = null;

    const scraper = findScraper(window.location.href);
    if (scraper) {
      song = scraper.scrape(document);
    }

    browser.runtime.onMessage.addListener((message, _, sendResponse) => {
      switch (message.type) {
        case Message.GetSongMeta:
          sendResponse(song?.meta);
          break;

        case Message.StartPresentation:
          startPresentation(song);
          break;
      }
    });
  },
});
