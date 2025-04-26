import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const NavContainer = tw(motion.div)`
w-screen
z-10
absolute

${(p) => (p.$click ? "top-0" : "-top-20")}
duration-200
transition-all
ease-in-out

flex
justify-center
items-center
`;

//---Menu---

export const MenuItems = tw(motion.ul)`
relative
h-20
bg-[#202020]
opacity-70
text-[#faebd7]
list-none
flex
md:flex-row
justify-around
items-center
w-full
px-4
md:px-10
lg:px-16
py-0
`;

export const MenuBtn = tw.button`
bg-[#faebd7]
opacity-70
list-none
text-[#202020]
w-32
sm:w-40
md:w-56
h-10
text-base
md:text-xl
font-semibold
uppercase
flex
justify-center
items-center
border-none
outline-none
cursor-pointer
absolute
top-full
left-1/2
-translate-x-1/2
`;

export const MenuItem = tw(motion.li)`
uppercase
text-[#faebd7]
cursor-pointer
font-mono
text-base
sm:text-lg
md:text-xl
`;
export const MobileMenu = tw(motion.div)`
  absolute
  top-20
  left-0
  w-full
  bg-[#202020]
  opacity-90
  flex
  flex-col
  items-center
  overflow-hidden
  z-50
`;