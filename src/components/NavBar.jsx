import React from "react";
import { NavContainer, MenuBtn, MenuItems } from "../styles/Themes";

const NavBar = () => {
  return (
    <NavContainer>
      <MenuItems>
        <MenuBtn className="btnShape">Menu</MenuBtn>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
