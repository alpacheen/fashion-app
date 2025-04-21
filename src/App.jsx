import React from "react";
import {
  ParallaxProvider,
} from "react-scroll-parallax";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Banner from "./pages/Banner"


const App = () => {
  return (
      <ParallaxProvider>
        <main>
          <Home />
          <About />
          <Shop />
          <Banner/>
        </main>
      </ParallaxProvider>
  );
};

export default App;
