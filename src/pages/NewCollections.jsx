import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  CollectionsSection,
  CollectionTitle,
  OverLay,
  CollectionRight,
  ImageContainer,
} from "../styles/newcollection";
import gsap from "gsap";
import { motion, useInView } from "framer-motion";
import img11 from "../assets/images/11.webp";
import img12 from "../assets/images/12.webp";
import img13 from "../assets/images/13.webp";
import img14 from "../assets/images/14.webp";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { Product } from "../components/Product";

gsap.registerPlugin(ScrollTrigger);

const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

// Define products outside component to prevent recreation on each render
const collectionProducts = [
  { img: img11, title: "Denim Jackets", alt: "Man in Jeans", width: "700", height: "700" },
  { img: img12, title: "Dresses", alt: "Girl in yellow dress", width: "700", height: "700" },
  { img: img13, title: "Jackets", alt: "Man in jacket", width: "700", height: "700" },
  { img: img14, title: "Ethnic Wear", alt: "Man wearing fashion accessories", width: "700", height: "700" },
];

const NewCollections = () => {
  const containerRef = useRef(null);
  const verticalRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  
  // Handle responsive layout changes
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Setup GSAP scroll animation for desktop only
  useLayoutEffect(() => {
    if (!isDesktop) return;
    
    const container = containerRef.current;
    const vertical = verticalRef.current;

    if (!container || !vertical) return;

    const contentHeight = vertical.scrollHeight;
    const visibleHeight = vertical.clientHeight;
    const scrollDistance = contentHeight - visibleHeight;

    if (scrollDistance <= 0) return;

    const ctx = gsap.context(() => {
      gsap.set(vertical, { overflow: "hidden", height: visibleHeight });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollDistance + 10}`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          onEnter: () => gsap.set(vertical, { overflow: "hidden" }),
          onLeave: () => gsap.set(vertical, { overflow: "hidden" }),
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        vertical.children,
        { y: 0 },
        {
          y: -scrollDistance,
          ease: "none",
        }
      );

      return () => tl.kill();
    }, containerRef);

    return () => {
      ctx.revert();
      gsap.set(vertical, { clearProps: "all" });
    };
  }, [isDesktop]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <ErrorBoundary>
      <CollectionsSection 
        ref={containerRef} 
        id="collections"
        aria-labelledby="collections-title"
        className={isDesktop ? "" : "flex-col py-20"}
      >
        <CollectionTitle
          id="collections-title"
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          New Collection
        </CollectionTitle>
        
        {isDesktop ? (
          // Desktop layout with vertical scroll
          <>
            <OverLay>
              <ImageContainer 
                ref={verticalRef} 
                style={{ overflow: "visible" }}
                aria-label="Collection showcase"
              >
                {collectionProducts.map((product, index) => (
                  <Product 
                    key={index}
                    img={product.img} 
                    alt={product.alt} 
                    title={product.title}
                    width="700"
                    height="700"
                    priority={index === 0} // Prioritize first image loading
                  />
                ))}
              </ImageContainer>
            </OverLay>

            <CollectionRight>
              <motion.p
                className="mb-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeDown}
              >
                There is new collection available for cool clothes in all sizes. This
                collection is a great way to find a new look for you. It offers a
                variety of cool apparel styles to fit your taste, while you can also
                find some cool clothes that you can wear everyday.
              </motion.p>
              <motion.p
                className="mb-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeDown}
              >
                The first line of clothing you will see on this collection is for men.
                The collection also includes three new styles for women.
              </motion.p>
              <motion.p initial="hidden" whileInView="visible" variants={fadeDown}>
                Give it a try and experience a new look.
              </motion.p>
            </CollectionRight>
          </>
        ) : (
          // Mobile responsive layout
          <div className="w-full py-12 px-4 flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {collectionProducts.map((product, index) => (
                <Product 
                  key={index}
                  img={product.img} 
                  alt={product.alt} 
                  title={product.title}
                  width="350"
                  height="350"
                  className="mx-auto"
                />
              ))}
            </div>
            
            <div className="bg-[#202020] text-[#faebd7] font-mono p-6 max-w-4xl w-full rounded">
              <motion.p
                className="mb-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeDown}
              >
                There is new collection available for cool clothes in all sizes. This
                collection is a great way to find a new look for you. It offers a
                variety of cool apparel styles to fit your taste, while you can also
                find some cool clothes that you can wear everyday.
              </motion.p>
              <motion.p
                className="mb-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeDown}
              >
                The first line of clothing you will see on this collection is for men.
                The collection also includes three new styles for women.
              </motion.p>
              <motion.p initial="hidden" whileInView="visible" variants={fadeDown}>
                Give it a try and experience a new look.
              </motion.p>
            </div>
          </div>
        )}
      </CollectionsSection>
    </ErrorBoundary>
  );
};

export default React.memo(NewCollections);
