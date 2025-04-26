import tw from "tailwind-styled-components";
import {motion} from "framer-motion";

export const FooterSection = tw(motion.section)`
min-h-3/4
w-screen
mx-auto
pt-8
pb-8

flex
flex-col
justify-center
items-center
relative

bg-[#202020]
text-[#faebd7]
`;

export const LogoContainer = tw.div`
flex
flex-col
justify-center
items-center
mb-8
`;

export const FooterComponent = tw(motion.footer)`
w-[90vw]
sm:w-[85vw]
md:w-[80vw]
`
export const FooterList = tw.ul`
list-none
flex
flex-wrap
justify-center
sm:jsustify-between
items-center
gap-2
sm:gap-4
m-4
sm:m-8
mt-8
sm:mt-16
py-4
px-2
sm:px-4
border-t-2
border-[#faebd7]
border-b-2
border-[#faebd7]
  [&>li]:p-2
  sm:[&>li]:p-4
  md:[&>li]:p-8
  [&>li]:text-sm
  sm:[&>li]:text-base
  md:[&>li]:text-xl
  [&>li]:uppercase
  [&>li]:font-mono
  [&>li]:cursor-pointer
  [&>li]:transition-all
  [&>li]:duration-300
  [&>li]:ease-in-out
  [&>li:hover]:scale-110
  `;