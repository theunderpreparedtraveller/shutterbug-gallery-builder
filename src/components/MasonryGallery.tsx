import { PhotoItem } from "./PhotoItem";

interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
  aspectRatio: "landscape" | "portrait" | "square";
}

interface MasonryGalleryProps {
  photos: Photo[];
  activeCategory: string;
}

export const MasonryGallery = ({ photos, activeCategory }: MasonryGalleryProps) => {
  const filteredPhotos = activeCategory === "ALL" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <div className="px-6 md:px-12 pb-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredPhotos.map((photo, index) => {
          // Create varied sizes for masonry effect
          let className = "";
          
          if (index % 7 === 0) {
            className = "md:col-span-2 md:row-span-2"; // Large
          } else if (index % 5 === 0) {
            className = "col-span-2 md:col-span-1"; // Wide on mobile, normal on desktop
          } else if (index % 3 === 0) {
            className = "md:row-span-2"; // Tall
          }
          
          return (
            <PhotoItem
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              className={className}
            />
          );
        })}
      </div>
    </div>
  );
};