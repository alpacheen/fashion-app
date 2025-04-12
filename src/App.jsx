import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import Home from "./pages/Home";

const App = () => {
  return (
    <ParallaxProvider>
      <main>
        <Home />
      </main>
    </ParallaxProvider>
  );
};

export default App;
