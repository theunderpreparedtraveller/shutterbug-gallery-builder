import { useState } from "react";
import { PortfolioHeader } from "@/components/PortfolioHeader";
import { MasonryGallery } from "@/components/MasonryGallery";
import { PortfolioFooter } from "@/components/PortfolioFooter";

// Import all photos
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";
import photo7 from "@/assets/photo-7.jpg";
import photo8 from "@/assets/photo-8.jpg";
import photo9 from "@/assets/photo-9.jpg";
import photo10 from "@/assets/photo-10.jpg";

const photos = [
  { id: "1", src: photo1, alt: "Mountain adventure photography", category: "ADVENTURE", aspectRatio: "landscape" as const },
  { id: "2", src: photo2, alt: "Portrait with binoculars", category: "PEOPLE", aspectRatio: "portrait" as const },
  { id: "3", src: photo3, alt: "Rock climbing adventure", category: "ADVENTURE", aspectRatio: "portrait" as const },
  { id: "4", src: photo4, alt: "European street scene", category: "ACCOMMODATION", aspectRatio: "landscape" as const },
  { id: "5", src: photo5, alt: "Misty forest photography", category: "ADVENTURE", aspectRatio: "landscape" as const },
  { id: "6", src: photo6, alt: "Campfire portrait", category: "PEOPLE", aspectRatio: "portrait" as const },
  { id: "7", src: photo7, alt: "Kayaking adventure", category: "ADVENTURE", aspectRatio: "landscape" as const },
  { id: "8", src: photo8, alt: "Ancient ruins", category: "ACCOMMODATION", aspectRatio: "portrait" as const },
  { id: "9", src: photo9, alt: "Winter mountain hiking", category: "ADVENTURE", aspectRatio: "landscape" as const },
  { id: "10", src: photo10, alt: "Lake swimming", category: "PEOPLE", aspectRatio: "portrait" as const },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortfolioHeader 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      <MasonryGallery 
        photos={photos} 
        activeCategory={activeCategory} 
      />
      <PortfolioFooter />
    </div>
  );
};

export default Index;
