import tw from "tailwind-styled-components";

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