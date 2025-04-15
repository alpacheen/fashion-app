import React from "react";
import { AboutSection, AboutTitle, Left, Right } from "../styles/Themes";
import {
  Parallax,
} from "react-scroll-parallax";
import img1 from "../assets/images/1.webp";
import img2 from "../assets/images/2.webp";
import img3 from "../assets/images/3.webp";

const About = () => {
  return (
    <AboutSection id="about">
        <Parallax speed={-2} translateX={[-20, 20]}>
          <AboutTitle><span className="inline-block">About Us</span></AboutTitle>
        </Parallax>
        <Left>
          <p className="mb-4">
            We are a fashion studio based in California. We create unique
            designs that will blow your mind. We also design unique jewellary
            pieces. Fashion is an ART that can not be grasped by everyone.
          </p>
          <p className="mb-4">
            We are very dedicated to making our products. We offer unique and
            creative products to a wide range of people. We have a variety of
            styles, but for most people, all of the options are in the box. We
            specialize in making things that make you happy.
          </p>
          <p>
            We strive to build on our vision. As a fashion label, we do our best
            to create amazing experiences for all people. We are always looking
            to make something that is easy for everyone.
          </p>
        </Left>
        <Right>
 <img src={img1} alt="About us" width="400" height="600"/>
 <img src={img2} alt="About us" />
 <img src={img3} alt="About us" />
        </Right>
    </AboutSection>
  );
};

export default About;
