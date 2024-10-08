import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "League of Legends Lore Reader",
    short_name: "LLR",
    description:
      "You can read and more importantly listen to the all the stories of the characters from League of Legends.",
    start_url: "/",
    display: "standalone",
    background_color: "#3070b7",
    theme_color: "#eba272",
    lang: "en",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/logo192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/logo512.png",
        type: "image/png",
        sizes: "512x512",
      },
      {
        src: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        src: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        src: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
      {
        src: "/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  };
}
