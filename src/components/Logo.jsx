import React from "react";
import { LogoContainer } from "../styles/Themes";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <svg
          className="w-[4rem] h-auto overflow-visible"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g stroke="#faebd7">
            <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
          </g>
        </svg>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
