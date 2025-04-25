import React from 'react';
import { Item } from "../styles/shop";
import { LazyImage } from './LazyImage';

// Reusable Product component for both Shop and NewCollections pages
export const Product = ({ 
  img, 
  title = "", 
  alt = title,
  className = "",
  width = "400",
  height = "auto"
}) => {
  return (
    <Item
      className={className}
    >
      <LazyImage 
        src={img} 
        alt={alt} 
        width={width} 
        height={height} 
        className="ml-5"
      />
      {title && (
        <h3 className="text-center font-mono text-lg mt-2">
          {title}
        </h3>
      )}
    </Item>
  );
};