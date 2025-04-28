import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const ShopSection = tw.section`
 min-h-screen
 w-full
 mx-auto
 overflow-hidden
 flex
 flex-start
 items-start
 relative
 `;

export const ShopTitle = tw.h1`
text-5xl
sm:text-6xl
md:text-7xl
lg:text-8xl
[text-shadow:3px_3px_3px_rgba(0_0_0_/_0.8)]
font-['Kaushan_Script']
font-light
left-[5%] 
z-50
text-[#faebd7]
absolute
top-[1.5rem]
 `;

export const ShopLeft = tw.div`
 w-[35%]
 bg-[#202020]
 text-[#faebd7]
 min-h-screen
 z-40
 left-0
 flex
 flex-col
 justify-center
 items-center
 font-mono
 `;

export const ShopRight = tw.div`
 absolute
  left-[35%]
  top-0
  min-h-screen
  w-max
  flex
  flex-row
  items-center
  whitespace-nowrap
  bg-[#bebebe]
  will-change-transform

  
 `;
export const Item = tw(motion.div)`
 inline-block
 w-80
 mr-24

 [&>img]:w-full
  [&>img]:h-auto
  [&>img]:cursor-pointer
  
  [&>h1]:font-light
  [&>h1]:items-center
  [&>h1]:cursor-pointer
 `;
