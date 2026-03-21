import { Metadata } from "next";
import TextilePageClient from "./TextilePageClient";

export const metadata: Metadata = {
  title: "Textile & Apparel | Integrated Fabric to Fashion Solutions",
  description: "Alent's Textile and Apparel division is a leading integrated fabric-to-fashion business in Sri Lanka. We specialize in denim, performance activewear, and world-class garment manufacturing.",
  keywords: ["Integrated Textile Solutions", "Denim Manufacturing", "Performance Wear Sri Lanka", "Sustainable Garment Production", "Alent Textile"],
  openGraph: {
    title: "Textile & Apparel Excellence at Alent Clothing",
    description: "From innovation in fibre to sustainability in fashion. Explore our state-of-the-art manufacturing facilities and industry-leading design studio.",
  },
};

export default function Page() {
  return <TextilePageClient />;
}
