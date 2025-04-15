import React from "react";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
import { Section } from "../styles/Themes";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <Section>
        <CoverVideo />
        <Logo />
        <NavBar />
      </Section>
    </>
  );
};

export default Home;
