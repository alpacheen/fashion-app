import React, { useState } from "react";
import { NavContainer, MenuBtn, MenuItems, MenuItem } from "../styles/Themes";
import { motion } from "framer-motion";

const NavBar = () => {
  const [click, setClick] = useState(false);
  return (
    <NavContainer
      $click={click}
      initial={{
        y: "-100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 2,
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
            console.log("Clicked", !click);
            setClick(!click);
          }}
        >
          Menu
        </MenuBtn>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Home
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          About
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Shop
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          New Arrivals
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
