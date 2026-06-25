import { defineConfig } from "wxt";

export default defineConfig({
  outDir: "out",
  srcDir: "src",
  entrypointsDir: "entries",

  manifest: {
    name: "Lyrics Presenter",
    description: "Presents song lyrics in fullscreen.",
  },
});
