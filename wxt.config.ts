import { defineConfig } from "wxt";

export default defineConfig({
  outDir: "out",
  srcDir: "src",
  entrypointsDir: "entries",

  modules: ["@wxt-dev/auto-icons"],

  autoIcons: {
    baseIconPath: "assets/icon.svg",
  },

  manifest: {
    name: "Lyrics Presenter",
    description: "Presents song lyrics in fullscreen.",
  },
});
