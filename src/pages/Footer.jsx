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
        <img
          src={Logo}
          alt="Logo"
          className="w-20 h-auto overflow-visible fill-none"
        />
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
