import React from "react";
import { AboutSection, AboutTitle, Left, Right } from "../styles/about";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import img1 from "../assets/images/1.webp";
import img2 from "../assets/images/2.webp";
import img3 from "../assets/images/3.webp";
import { LazyImage } from "../components/LazyImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};

const About = () => {
  return (
    <AboutSection id="about">
      <Parallax speed={-2} translateX={[-20, 20]}>
        <AboutTitle>
          <span className="inline-block">About Us</span>
        </AboutTitle>
      </Parallax>
      <div className="relative flex flex-col justify-center items-center">
        <Left>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <p className="mb-4">
              We are a fashion studio based in California. We create unique
              designs that will blow your mind. We also design unique jewellery
              pieces. Fashion is an ART that can not be grasped by everyone.
            </p>
            <p className="mb-4">
              We are very dedicated to making our products. We offer unique and
              creative products to a wide range of people. We have a variety of
              styles, but for most people, all of the options are in the box. We
              specialize in making things that make you happy.
            </p>
            <p>
              We strive to build on our vision. As a fashion label, we do our
              best to create amazing experiences for all people. We are always
              looking to make something that is easy for everyone.
            </p>
          </motion.div>
        </Left>
        <div className="absolute inset-0 opacity-50 pointer-events-none z-20">
          <Parallax speed={-10} translateY={[-50, 50]}>
            <LazyImage
              src={img1}
              alt="About us"
              className="my-16 max-w-full"
              width="500"
              height="500"
            />
          </Parallax>
        </div>
        <Right className="flex flex-col lg:flex-row">
          <Parallax speed={3} translateY={[-10, -20]} translateX={[-30, 30]}>
            <LazyImage
              src={img2}
              alt="About us fashion model"
              className="max-w-full lg:max-w-md"
              width="500"
              height="auto"
            />
          </Parallax>
          <Parallax speed={2} translateY={[-120, 20]} translateX={[200, -20]}>
            <LazyImage
              src={img3}
              alt="About us fashion collection"
              className="max-w-full lg:max-w-lg mb-10"
              width="700"
              height="auto"
            />
          </Parallax>
        </Right>
      </div>
      <Parallax speed={1} translateX={[75, 0]} translateY={[0, 20]}>
        <h1 className="text-6xl md:text-9xl lg:text-[300px] font-['Kaushan_Script'] opacity-50 pb-30">
          Vibe
        </h1>
      </Parallax>
    </AboutSection>
  );
};

export default About;
