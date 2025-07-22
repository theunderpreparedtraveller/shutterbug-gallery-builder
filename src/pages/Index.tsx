import { useState } from "react";
import { PortfolioHeader } from "@/components/PortfolioHeader";
import { MasonryGallery } from "@/components/MasonryGallery";
import { PortfolioFooter } from "@/components/PortfolioFooter";

// Dynamically import all images in the assets folder at build-time.
// Vite replaces import.meta.glob with an object containing the matched modules.
// We eagerly import them so that we immediately get the URL strings.
const photoModules = import.meta.glob("@/assets/*.{jpg,jpeg,png,webp,gif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// Helper to derive the category from the file name. Adjust this logic to suit your naming convention.
const getCategoryFromFileName = (filePath: string) => {
  const fileName = filePath.split("/").pop() ?? "";
  const [categoryRaw] = fileName.split("-");
  return categoryRaw ? categoryRaw.toUpperCase() : "UNCATEGORIZED";
};

// Build the photos array expected by the MasonryGallery component.
const photos = Object.entries(photoModules).map(([path, src], index) => ({
  id: String(index + 1),
  src,
  alt: path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? `Photo ${index + 1}`,
  category: getCategoryFromFileName(path),
  // Default all to landscape; you can enhance this later by reading EXIF data or hard-coding specific files.
  aspectRatio: "landscape" as const,
}));

// Derive unique categories and ensure "ALL" is always present as the first item.
const categories = [
  "ALL",
  ...Array.from(new Set(photos.map((p) => p.category))).filter((c) => c !== "ALL"),
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortfolioHeader 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
        categories={categories}
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
