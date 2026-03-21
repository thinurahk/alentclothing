import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Alent Clothing | Fashioning Possibilities, Crafting Heritage",
  description: "Alent Clothing is Sri Lanka's premier integrated textile and apparel manufacturer. We deliver high-quality polos, denim, and performance activewear to leading global retailers.",
  openGraph: {
    title: "Alent Clothing | Home of Premium Apparel Manufacturing",
    description: "From possibilities on paper to fabrics of the future. Explore Alent's integrated textile business covering garment manufacturing, retail, and IT solutions.",
    images: [
      {
        url: "/og-home.jpg", // Ensure this exists or use a representative image
        width: 1200,
        height: 630,
        alt: "Alent Clothing - Premium Apparel Manufacturing"
      }
    ],
  },
};

export default function Page() {
  return <HomeClient />;
}
