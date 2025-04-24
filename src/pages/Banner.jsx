import React from 'react'
import { BannerSection, BannerComponent, BannerContainer } from '../styles/banner';
import { motion} from "framer-motion";


const Banner = () => {

  const bannerConfigs = [
    { text: "Fashion is the armour", duration: 17,direction: 1 },
    { text: "to survive everyday life.", duration: 10, direction: -1 },
    { text: "Fashions fade", duration: 13, direction: 1 },
    { text: "style is eternal", duration: 20, direction: -1 },
  ];
  

  const bannerVariants = {
    animate: ({index , direction , duration}) => ({
      x:[0, direction * 1000],
      transition:{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
          delay: index * 1.5,
        },
      },
    }),
  };

return (
  <BannerSection>
    <BannerContainer>
      {bannerConfigs.map(({text, duration, direction}, index) => (
        <BannerComponent
          key={index}
          custom={{index, direction, duration}}
          variants={bannerVariants}
          initial="initial"
          animate="animate"
        >
          {Array(4).fill(text).map((line, j) => (
            <span key={j} className='bg-[#202020] px-8 py-4'>{line}</span>
          ))}
        </BannerComponent>
      ))}
    </BannerContainer>
  </BannerSection>
);
};

export default Banner;

