import { Metadata } from "next";
import MediaPageClient from "./MediaPageClient";

export const metadata: Metadata = {
  title: "Media & Editorial | Fashion Photography Showcase",
  description: "Explore the Mediaalent Photography collection. A curated showcase of editorial fashion photography, precision styling, and visual storytelling by Alent Clothing.",
  keywords: ["Fashion Photography Sri Lanka", "Editorial Collection", "Alent Media", "Visual Storytelling", "Fashion Styling"],
  openGraph: {
    title: "Mediaalent | The Art of Fashion Photography",
    description: "Classic captures and editorial excellence. Discover the visual identity of Alent Clothing through our media showcase.",
  },
};

export default function Page() {
  return <MediaPageClient />;
}