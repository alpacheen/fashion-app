import tw from "tailwind-styled-components";
import {motion} from "framer-motion";

export const FooterSection = tw(motion.section)`
min-h-3/4
w-screen
mx-auto
pt-8

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
`;

export const FooterComponent = tw(motion.footer)`
w-[80vw]
`
export const FooterList = tw.ul`
list-none flex justify-between items-center flex-wrap m-8 mt-16
            py-0
            px-4
            border-t-2
            border-[#faebd7]
            border-b-2
            border-[#faebd7]
  [&>li]:p-8
  [&>li]:text-xl
  [&>li]:uppercase
  [&>li]:font-mono
  [&>li]:cursor-pointer
  [&>li]:transition-all
  [&>li]:duration-300
    [&>li]:ease-in-out
  [&>li:hover]:scale-110
  `;