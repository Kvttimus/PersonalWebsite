// Gallery items for the /fun page.
// Replace these placeholders with my real art, photos, trips, or whatever I want to share.
// Add as many as I like — the grid auto-fills.

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
    title: "A trip I loved",
    caption: "One or two sentences about where and why.",
    category: "travel",
  },
  {
    title: "Something I photographed",
    caption: "What I was doing and why it caught my eye.",
    category: "photo",
  },
  {
    title: "Something else",
    caption: "Books, playlists, hobbies — anything that's me.",
    category: "misc",
  },
];
