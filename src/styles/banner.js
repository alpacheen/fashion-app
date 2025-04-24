import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const BannerSection = tw.section`
min-h-screen
relative
w-[80%]
mx-0
flex
justify-center
items-center
`

export const BannerContainer = tw.div`
min-h-screen
flex
flex-col
justify-evenly
items-center

`

export const BannerComponent = tw(motion.div)`
text-8xl
font-['Kaushan_Script']
text-[#faebd7]
uppercase
whitespace-nowrap
cursor-pointer
`;
