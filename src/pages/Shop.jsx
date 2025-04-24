import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import {
  ShopSection,
  ShopTitle,
  ShopLeft,
  ShopRight,
  Item
} from '../styles/shop';

import img4 from "../assets/images/4.webp";
import img5 from "../assets/images/5.webp";
import img7 from "../assets/images/7.webp";
import img8 from "../assets/images/8.webp";
import img9 from "../assets/images/9.webp";
import img10 from "../assets/images/10.webp";


gsap.registerPlugin(ScrollTrigger);

const fadeLeftRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } },
};
const fadeRightLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } },
};


const Product = ({ img, title = "" }) => {
  return (
    <Item
      as={motion.div}
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)"}}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 1 }}
      style={{willChange: "filter"}}
    >
      <img src={img} alt={title} width="400" height="600" className='ml-5' />
      <h1 className='text-center font-mono text-lg'>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;
    const totalWidth = horizontal.scrollWidth;
    const shopLeftWidth = window.innerWidth * 1;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });

      tl.to(horizontal, {
        x: () => -1 * (totalWidth - window.innerWidth + shopLeftWidth),
        ease: 'none',
      });

      return () => tl.kill();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ShopSection ref={containerRef} id="shop">
      <ShopTitle>New Arrivals</ShopTitle>

      <ShopLeft>
        <motion.p
         className="text-xl font-mono p-5"
         initial="hidden"
            whileInView="visible"
            variants={fadeLeftRight}
            >
          The brand new collection is currently being developed in the USA. We create our products using the best quality material, including the use of some of the purest fabrics to make our products.
        </motion.p>
        <motion.p className="text-xl font-mono p-5"
        initial="hidden"
        whileInView="visible"
        variants={fadeRightLeft}
        >
          We have many different clothing options, like shoes, jackets, and dresses. Not only clothes, but we also provide unique Jewellery as well. It is great for us to carry our new clothes all around the country and look different.
        </motion.p>
      </ShopLeft>

      <ShopRight ref={horizontalRef}>
        <Product img={img4} title="Ethnic Wear" />
        <Product img={img5} title="Blazers" />
        <Product img={img7} title="Antiques" />
        <Product img={img8} title="Jewellery" />
        <Product img={img9} title="Watches" />
        <Product img={img10} title="Special Edition" />
      </ShopRight>
    </ShopSection>
  );
};

export default Shop;

