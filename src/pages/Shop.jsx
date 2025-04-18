import React , {useRef, useLayoutEffect} from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import { ShopSection, ShopTitle,ShopLeft, ShopRight } from '../styles/Themes';
import img4 from "../assets/images/4.webp";
import img5 from "../assets/images/5.webp";
import img7 from "../assets/images/7.webp";
import img3 from "../assets/images/3.webp";
import img8 from "../assets/images/8.webp";
import img9 from "../assets/images/9.webp";
import img10 from "../assets/images/10.webp";


const Shop = () => {

  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    const element = ref.current;
    const scrollingElement = horizontalRef.current;
    
    // Create a function to initialize the animation
    const initialize = () => {
      
      const scrollWidth = scrollingElement.scrollWidth;
      const containerWidth = element.offsetWidth;
      const scrollAmount = scrollWidth - containerWidth;
      
      
      
      // Create the timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `+=${scrollAmount}`, 
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });
      
      tl.to(scrollingElement, {
        x: -scrollAmount, 
        ease: "none"
      });
      
      // Apply grayscale effect using the index
      const images = scrollingElement.querySelectorAll('.image-item');

      const rightSectionCenter = window.innerWidth * 0.35 + (window.innerWidth * 0.65 / 2);


      images.forEach((img) => {
        gsap.fromTo(
          img,
          {
            filter: "grayscale(100%)" },
          {
            filter: "grayscale(0%)",
            scrollTrigger: {
              trigger: img,
              start: `left center+=${rightSectionCenter - window.innerWidth/2}`, 
            end: `center center+=${rightSectionCenter - window.innerWidth/2}`,
              containerAnimation: tl,
              scrub: true,
            }
          }
        );
      });
    };
    
    // Wait for images to load or use a timeout as fallback
    if (document.readyState === "complete") {
      initialize();
    } else {
      window.addEventListener("load", initialize);
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      window.removeEventListener("load", initialize);
    };
  }, []);

  return (
    <ShopSection ref={ref}>
<ShopTitle>New Arrivals</ShopTitle>
<ShopLeft>
<p className='text-xl font-mono p-5'>
          The brand new collection is currently being developed in USA. We
          create our products using best quality material, including the use of
          some of the pure fabrics to make our products. All products are made
          using the best materials, from the finest cotton to the finest
          fabrics.
          </p>
         <p className='text-xl font-mono p-5'>
          We have lots of different clothing options like shoes, jackets and
          dresses. Not only clothes but we also provide unique Jewellery as
          well. It is great for us to carry our new clothes all around the
          country and look different.
        </p>
</ShopLeft>
<ShopRight ref={horizontalRef}>
 <img src={img4} alt="clothes rack" className='image-item' loading='lazy' />
 <img src={img5} alt="man in suit" className='image-item' loading='lazy'/>
 <img src={img7} alt="rings" className='image-item' loading='lazy' />
 <img src={img3} alt="rings" className='image-item' loading='lazy' />
 <img src={img8} alt="rings on hand" className='image-item' loading='lazy'/>
 <img src={img9} alt="watches" className='image-item' loading='lazy'/>
 <img src={img10} alt="watches" className='image-item' loading='lazy'/>
</ShopRight>
    </ShopSection>
  );
};

export default Shop;
