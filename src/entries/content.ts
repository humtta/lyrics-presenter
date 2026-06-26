import { getMatches } from "@/scrapers/scrapers";

export default defineContentScript({
  matches: getMatches(),

  main() {},
});
