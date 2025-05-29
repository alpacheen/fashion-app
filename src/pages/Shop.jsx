import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import {
  ShopSection,
  ShopTitle,
  ShopLeft,
  ShopRight,
} from '../styles/shop';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { LazyImage } from '../components/LazyImage';
import { Product } from '../components/Product';

// Import images with explicit width and height
import img4 from "../assets/images/4.webp";
import img5 from "../assets/images/5.webp";
import img7 from "../assets/images/7.webp";
import img8 from "../assets/images/8.webp";
import img9 from "../assets/images/9.webp";
import img10 from "../assets/images/10.webp";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation variants
const fadeLeftRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } },
};
const fadeRightLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } },
};

// Predefined products to prevent recreation on render
const products = [
  { img: img4, title: "Ethnic Wear", alt: "Model wearing ethnic clothing" },
  { img: img5, title: "Blazers", alt: "Model wearing a blazer" },
  { img: img7, title: "Antiques", alt: "Antique fashion items" },
  { img: img8, title: "Jewellery", alt: "Model wearing jewelry" },
  { img: img9, title: "Watches", alt: "Luxury watches" },
  { img: img10, title: "Special Edition", alt: "Special edition fashion item" },
];

const Shop = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // GSAP horizontal scroll setup only for desktop
  useLayoutEffect(() => {
    if (!isDesktop) return;
    
    const container = containerRef.current;
    const horizontal = horizontalRef.current;
    
    if (!container || !horizontal) return;
    
    const totalWidth = horizontal.scrollWidth;
    const shopLeftWidth = window.innerWidth * 0.35; // 35% of viewport
    
    let ctx;
    // Only create horizontal scroll for desktop
    if (isDesktop) {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${totalWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          }
        });
  
        tl.to(horizontal, {
          x: () => -1 * (totalWidth - window.innerWidth + shopLeftWidth),
          ease: 'none',
        });
  
        return () => tl.kill();
      }, containerRef);
    }
    
    return () => ctx && ctx.revert();
  }, [isDesktop]);

  return (
    <ErrorBoundary>
      <ShopSection 
        ref={containerRef} 
        id="shop"
        className={isDesktop ? "" : "flex-col"}
        aria-labelledby="shop-title"
      >
        <ShopTitle id="shop-title">New Arrivals</ShopTitle>

        <ShopLeft className={isDesktop ? "" : "w-full min-h-0 py-20"}>
          <motion.p
            className="text-base sm:text-lg md:text-xl font-mono p-4 md:p-5"
            initial="hidden"
            whileInView="visible"
            variants={fadeLeftRight}
          >
            The brand new collection is currently being developed in the USA. We create our products using the best quality material, including the use of some of the purest fabrics to make our products.
          </motion.p>
          <motion.p 
            className="text-base sm:text-lg md:text-xl font-mono p-4 md:p-5"
            initial="hidden"
            whileInView="visible"
            variants={fadeRightLeft}
          >
            We have many different clothing options, like shoes, jackets, and dresses. Not only clothes, but we also provide unique Jewellery as well. It is great for us to carry our new clothes all around the country and look different.
          </motion.p>
        </ShopLeft>

        {isDesktop ? (
          // Desktop horizontal scroll
          <ShopRight ref={horizontalRef}>
            {products.map((product, index) => (
              <Product 
                key={index}
                img={product.img} 
                title={product.title}
                alt={product.alt}
                width="400"
                height="600"
                className="will-change-transform"
              />
            ))}
          </ShopRight>
        ) : (
          // Mobile grid layout
          <div className="w-full bg-[#bebebe] py-12 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {products.map((product, index) => (
                <Product 
                  key={index}
                  img={product.img} 
                  title={product.title}
                  alt={product.alt}
                  width="400"
                  height="600"
                  className="mx-auto"
                />
              ))}
            </div>
          </div>
        )}
      </ShopSection>
    </ErrorBoundary>
  );
};

export default React.memo(Shop);
