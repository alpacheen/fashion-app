import React, {useState, useEffect} from "react";
import MainVideo from "../assets/Walking Girl.mp4";
import { DarkOverlay, VideoContainer, Title } from "../styles/covervideo";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import {ErrorBoundary} from "./ErrorBoundary";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 5,
      staggerChildren: 0.5,
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
  const [videoError, setVideoError] = useState(false);

  const titleLetters = [
    { char: "V", speed: 7 },
    { char: "i", speed: 5 },
    { char: "b", speed: 3 },
    { char: "e", speed: 1 },
  ];
  return (
    <ErrorBoundary fallback={<div className="h-screen w-full bg-gray-900 flex items-center justify-center text-white">Unable to load video content</div>}>
    <VideoContainer>
      <video
        src={MainVideo}
        autoPlay
        muted
        loop
        className="h-[100vh] w-full object-cover"
        aria-label="Fashion model walking video background"
        onError={() => setVideoError(true)}
          {...(videoError ? { hidden: true } : {})}
      ></video>
      {videoError && (
          <div className="h-[100vh] w-full bg-gray-900" aria-hidden="true"></div>
        )}
      <DarkOverlay aria-hidden='true' />
      <Title role="heading" aria-level="1">
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
            className="text-2xl font-mono"
            style={{ textShadow: "3px 3px 3px rgba(0,0,0,0.4)" }}
          >
            Create. Embrace. Awaken.
          </motion.h2>
        </Parallax>
      </Title>
    </VideoContainer>
    </ErrorBoundary>
  );
};

export default React.memo(CoverVideo);
