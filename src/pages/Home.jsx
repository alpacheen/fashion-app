import React from "react";
import { Parallax } from "react-scroll-parallax";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <>
      <section className="relative min-h-[200vh] overflow-hidden">
        <CoverVideo />
        <Logo />
        <h1>NavBar</h1>
      </section>
    </>
  );
};

export default Home;
