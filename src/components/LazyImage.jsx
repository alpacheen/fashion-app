import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Reusable image component with lazy loading, error handling, and animations
export const LazyImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  containerClassName = "",
  initial = { filter: "grayscale(100%)" },
  animate = { filter: "grayscale(0%)" },
  transition = { duration: 0.8,
   }
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  return (
    <motion.div 
      className={`${containerClassName} relative`}
      initial={initial}
      whileInView={animate}
      transition={transition}
      viewport={{ once: false, amount: 0.3 }}
    >
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse" 
          style={{ width, height }}
          aria-hidden="true"
        />
      )}
      
      {hasError ? (
        <div 
          className="flex items-center justify-center bg-gray-100 text-gray-500"
          style={{ width, height: height || 'auto' }}
        >
          Image not available
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </motion.div>
  );
};