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

    document.addEventListener("keydown", (event) => {
      if (!event.altKey || event.code !== "KeyS") return;

      const target = event.target as HTMLElement;
      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target.isContentEditable;

      if (isTyping) return;

      event.preventDefault();
      startPresentation(song);
    });

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
