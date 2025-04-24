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