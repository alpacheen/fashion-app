import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const Container = tw(motion.div)`
absolute
top-0
left-0
right-0
bottom-0
touch-none
overflow-hidden

w-screen
h-screen

z-20

flex
flex-col
justify-center
items-center

bg-[#202020]
text-[#faebd7]

`