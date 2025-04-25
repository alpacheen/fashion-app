import React, {useState, useEffect} from "react";
import {
  ParallaxProvider,
} from "react-scroll-parallax";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Banner from "./pages/Banner"
import NewCollections from "./pages/NewCollections";
import Loader from "./components/Loader";
import Footer from "./pages/Footer";


const App = () => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <ParallaxProvider>
        <AnimatePresence>{!loaded && <Loader />}
        </AnimatePresence>
        <main>
          <Home />
          <About />
          <Shop />
          <Banner/>
          <NewCollections/>
          <Footer />
        </main>
      </ParallaxProvider>
  );
};

export default App;
