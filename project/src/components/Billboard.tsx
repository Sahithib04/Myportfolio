import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface BillboardProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
}

const Billboard = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  ctaText = "Learn More", 
  ctaLink = "#about", 
  onCtaClick 
}: BillboardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/60 to-netflix-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="netflix-title-animation"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
              {subtitle}
            </p>
          )}
          
          <div className="mt-8">
            <a 
              href={ctaLink} 
              onClick={onCtaClick}
              className="netflix-button inline-flex items-center px-8 py-3 bg-netflix-red text-white font-medium rounded hover:bg-red-700 transition-colors duration-300"
            >
              {ctaText}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#content" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 hover:text-white transition-colors"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </div>
  );
};

export default Billboard;