interface PhotoItemProps {
  src: string;
  alt: string;
  className?: string;
}

export const PhotoItem = ({ src, alt, className = "" }: PhotoItemProps) => {
  return (
    <div 
      className={`group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
    </div>
  );
};