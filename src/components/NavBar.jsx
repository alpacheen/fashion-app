import React, { useState, useCallback } from "react";
import { NavContainer, MenuBtn, MenuItems, MenuItem } from "../styles/navbar";
import { motion } from "framer-motion";

const navigationItems = [
  {href: "#home", label: "Home"},
  {href: "#about", label: "About"},
  {href: "#shop", label: "Shop"},
  {href: "#collections", label: "New Arrivals"},
]

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);
  return (
    <NavContainer id='home'
      $click={isMenuOpen}
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
      role="navigation"
      aria-label="Main Navigation"
    >
      <MenuItems
        drag="y"
        dragConstraints={{ top: 0, bottom: 70 }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBtn
          role="button"
          aria-expanded={isMenuOpen}
          className="btnShape"
          aria-controls="main-menu"
          onClick={toggleMenu}
        >
          Menu
        </MenuBtn>
        <div id="main-menu" className="flex justify-around items-center w-full">
          {navigationItems.map((item, index) => (
            <MenuItem
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, y: 0 }}
            >
              <a 
                href={item.href}
                aria-label={item.label}
              >
                {item.label}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </NavContainer>
  );
};

export default React.memo(NavBar);
