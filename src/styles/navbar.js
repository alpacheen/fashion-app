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
justify-around
items-center
w-full
px-[10rem]
py-0
`;

export const MenuBtn = tw.li`
bg-[#faebd7]
opacity-70
list-none
text-[#202020]
w-[15rem]
h-[2.5rem]
text-xl
font-semibold
uppercase
flex
justify-center
items-center
border-none
outline-none
cursor-pointer
absolute
top-[100%]
left-[50%]
-translate-x-1/2
`;

export const MenuItem = tw(motion.li)`
uppercase
text-[#faebd7]
cursor-pointer
font-mono
text-xl
`;