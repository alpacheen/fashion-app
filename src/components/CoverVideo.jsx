import React from "react";
import MainVideo from "../assets/Walking Girl.mp4";
import { DarkOverlay, VideoContainer, Title } from "../styles/Themes";
import { Parallax } from "react-scroll-parallax";

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
        <div className="flex flex-row">
          {titleLetters.map(({ char, speed }, index) => (
            <Parallax key={index} speed={speed}>
              <h1 className="vibeTitle">{char}</h1>
            </Parallax>
          ))}
        </div>
        <Parallax speed={-1}>
          <h2
            className="text-2xl"
            style={{ textShadow: "3px 3px 3px rgba(0,0,0,0.4)" }}
          >
            Create. Embrace. Awaken
          </h2>
        </Parallax>
      </Title>
    </VideoContainer>
  );
};

export default CoverVideo;
