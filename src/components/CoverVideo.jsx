import React from "react";
import MainVideo from "../assets/Walking Girl.mp4";
import { DarkOverlay, VideoContainer, Title } from "../styles/Themes";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.3,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const CoverVideo = () => {
  const titleLetters = [
    { char: "V", speed: 7 },
    { char: "i", speed: 5 },
    { char: "b", speed: 3 },
    { char: "e", speed: 1 },
  ];
  return (
    <VideoContainer>
      <video
        src={MainVideo}
        autoPlay
        muted
        loop
        className="h-[100vh] w-full object-cover"
      ></video>
      <DarkOverlay />
      <Title>
        <motion.div
          className="flex flex-row"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleLetters.map(({ char, speed }, index) => (
            <Parallax key={index} speed={speed}>
              <motion.h1 variants={letterVariants} className="vibeTitle">
                {char}
              </motion.h1>
            </Parallax>
          ))}
        </motion.div>
        <Parallax speed={-1}>
          <motion.h2
            variants={letterVariants}
            className="text-2xl"
            style={{ textShadow: "3px 3px 3px rgba(0,0,0,0.4)" }}
          >
            Create. Embrace. Awaken
          </motion.h2>
        </Parallax>
      </Title>
    </VideoContainer>
  );
};

export default CoverVideo;
