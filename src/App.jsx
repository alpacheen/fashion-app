import React from "react";
import {
  ParallaxProvider,
  ParallaxBanner,
  Parallax,
} from "react-scroll-parallax";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <ParallaxProvider>
      <main>
        <Home />
        <About />
      </main>
    </ParallaxProvider>
  );
};

export default App;
