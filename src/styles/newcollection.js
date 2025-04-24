import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
export const CollectionsSection = tw.section`
min-h-screen
w-full
mx-0

flex
justify-center
items-center

relative

`;

export const OverLay = tw.div`
w-[40vw]
h-[90vh]
z-10
shadow-[0_0_0_5vw_#faebd7]
border-solid
border-[3px]
border-[#202020]
flex
justify-center
items-center
`;

export const CollectionTitle = tw(motion.h1)`
text-8xl
[text-shadow:3px_3px_3px_#faebd7]
font-['Kaushan_Script']
font-light
left-[5%] 
z-50
text-[#202020]
absolute
top-[0.5rem]
`;

export const CollectionRight = tw.div`
h-[90vh]
w-[30vw]
ml-10
bg-[#202020]
text-[#faebd7]
font-mono
p-6
text-xl
overflow-y-auto
z-10
flex
flex-col
justify-center
items-center
`

export const  ImageContainer = tw.div`
h-full
w-full
flex
flex-col
items-center
gap-8
overflow-y-auto
p-4
`;

  export const CollectionItem = tw(motion.div)`
 w-72

 [&>img]:w-full
  [&>img]:h-auto
  [&>img]:cursor-pointer
  
  [&>h1]:font-light
  [&>h1]:items-center
  [&>h1]:cursor-pointer
 `;