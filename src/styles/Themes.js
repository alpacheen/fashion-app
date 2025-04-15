import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const dark = {
  body: "#202020",
  text: "#fff",
  bodyRgba: "32,32,32",
  textRgbq: "255,255,255",

  grey: "#bebebe",

  fontxs: "0.75em",
};

export const Section = tw.section`
relative
min-h-[100vh]
overflow-hidden`;

// CoverVideo
export const VideoContainer = tw.section`
w-full
min-h-screen
relative`;

export const DarkOverlay = tw.div`
absolute
inset-0
z-5
bg-black
bg-opacity-65
`;

export const Title = tw.div`
absolute
inset-0
z-10
flex
flex-col
justify-center
items-center
text-neutral-200

`;

//Logo

export const LogoContainer = tw.div`
absolute
top-[2rem]
left-[1rem]
w-full
text-white
z-10

`;

export const NavContainer = tw(motion.div)`
w-screen
z-10
absolute

${(p) => (p.$click ? "top-0" : "-top-20")}
duration-300
transition-all
ease-in-out

flex
justify-center
items-center
`;

//Menu

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
`;

//About

export const AboutSection = tw.section`
min-h-screen
w-[80vw]
mx-auto
relative
`;

export const AboutTitle = tw.h1`
text-9xl
font-['Kaushan_Script']
left-[5%] 
z-30
text-black
opacity-90
mt-5
`;

export const Left = tw.div`
w-[50%]
text-lg
relative
z-5

`;

export const Right = tw.div`
w-full
md:w-[50%]
relative
mt-12
md:mt-0
`;
