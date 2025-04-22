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
`;

//--About--

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

//--Shop--

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
text-8xl
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

//  Banner

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

//New Collections

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