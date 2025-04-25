import React from "react";
import {
  FooterSection,
  LogoContainer,
  FooterComponent,
  FooterList,
} from "../styles/footer";
import Logo from "../assets/star_white_48dp.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <FooterSection>
      <LogoContainer>
        <svg
          className="w-[6rem] h-auto overflow-visible"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g stroke="#faebd7">
            <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
          </g>
        </svg>
        {/* <img
          src={Logo}
          alt="Logo"
          className="w-20 h-auto overflow-visible fill-none"
        /> */}
        <h3 className='text-3xl font-["Sirin"]'>Vibe Studios</h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "30px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.3,
        }}
      >
        <FooterList>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#shop">shop</a>
          </li>
          <li>
            <a href="#collections">new collection</a>
          </li>
          <li>
            <a href="http://google.com" target="_blank" rel="noreferrer">
              look book
            </a>
          </li>
          <li>
            <a href="http://google.com" target="_blank" rel="noreferrer">
              reviews
            </a>
          </li>
        </FooterList>
      </FooterComponent>
    </FooterSection>
  );
};

export default Footer;
