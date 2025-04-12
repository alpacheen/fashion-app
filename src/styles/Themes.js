import tw from "tailwind-styled-components";
import CoverVideo from "../components/CoverVideo";
export const dark = {
  body: "#202020",
  text: "#fff",
  bodyRgba: "32,32,32",
  textRgbq: "255,255,255",

  grey: "#bebebe",

  fontxs: "0.75em",
};

// CoverVideo
export const VideoContainer = tw.section`
w-full
min-h-screen
relative`;

export const DarkOverlay = tw.div`
absolute
inset-0
z-10
bg-black
bg-opacity-65
`;

export const Title = tw.div`
absolute
inset-0
z-30
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
