import { Instagram, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioHeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const PortfolioHeader = ({ activeCategory, onCategoryChange }: PortfolioHeaderProps) => {
  const categories = ["ALL", "PEOPLE", "ACCOMMODATION", "ADVENTURE"];

  return (
    <header className="w-full py-8 px-6 md:px-12">
      {/* Top section with logo and contact */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-6">
          {/* Logo/Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-wider">
            ANDY!
          </h1>
          
          {/* Social icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Instagram size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Facebook size={20} />
            </Button>
          </div>
        </div>
        
        {/* Contact button */}
        <Button 
          variant="outline" 
          className="border-border text-primary hover:bg-gallery-hover transition-colors"
        >
          <Mail size={16} className="mr-2" />
          Get in touch
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`text-sm md:text-base tracking-widest font-medium transition-colors duration-300 ${
              activeCategory === category
                ? "text-nav-active border-b-2 border-primary pb-1"
                : "text-nav-inactive hover:text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </nav>
    </header>
  );
};