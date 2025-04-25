import React, { useState } from "react";
import { NavContainer, MenuBtn, MenuItems, MenuItem } from "../styles/navbar";
import { motion } from "framer-motion";

const NavBar = () => {
  const [click, setClick] = useState(false);
  return (
    <NavContainer id='home'
      $click={click}
      initial={{
        y: "-100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2.5,
        delay: 5,
        ease: "easeIn",
      }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{ top: 0, bottom: 70 }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBtn
          role="button"
          aria-label="Main Menu"
          className="btnShape"
          onClick={() => {
            setClick(!click);
          }}
        >
          Menu
        </MenuBtn>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          <a href="#home">Home</a>
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          <a href="#about">About</a>
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          <a href="#shop">Shop</a>
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          <a href="#collections">New Arrivals</a>
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
