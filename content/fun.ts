// Gallery items for the /fun page.
// Replace these placeholders with your real art, photos, trips, or whatever you want to share.
// Add as many as you like — the grid auto-fills.

export type FunItem = {
  title: string;
  caption: string;
  cover?: string;          // path to image in /public, e.g. "/images/fun/art-1.jpg"
  category: "art" | "photo" | "travel" | "misc";
  href?: string;           // optional external link
};

export const funItems: FunItem[] = [
  {
    title: "Sample art piece",
    caption: "A short caption describing this piece or moment.",
    category: "art",
  },
  {
    title: "A trip you loved",
    caption: "One or two sentences about where and why.",
    category: "travel",
  },
  {
    title: "Something you photographed",
    caption: "What you were doing and why it caught your eye.",
    category: "photo",
  },
  {
    title: "Something else",
    caption: "Books, playlists, hobbies — anything that's you.",
    category: "misc",
  },
];
