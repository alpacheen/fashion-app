import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const AboutSection = tw.section`
min-h-screen
w-[90vw]
mx-auto
relative
overflow-hidden
py-12
`;

export const AboutTitle = tw.h1`
text-9xl
font-['Kaushan_Script']
left-[5%] 
z-80
text-black
relative
mt-5
`;

export const Left = tw.div`
w-full
text-2xl
font-mono
relative
z-30
text-black
p-4
bg-white/20
backdrop-blur-sm
rounded-lg
mb-12
`;

export const Right = tw.div`
w-full
md:w-[50%]
relative
mt-8
md:mt-0
flex
`;