import React from "react";
import {
  ParallaxProvider,
} from "react-scroll-parallax";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";


const App = () => {
  return (
      <ParallaxProvider>
        <main>
          <Home />
          <About />
          <Shop />
        </main>
      </ParallaxProvider>
  );
};

export default App;
