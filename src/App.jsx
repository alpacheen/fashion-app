// export default App;
import React, {useState, useEffect, Suspense, lazy} from "react";
import {
  ParallaxProvider,
} from "react-scroll-parallax";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Lazy load page components for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Shop = lazy(() => import("./pages/Shop"));
const Banner = lazy(() => import("./pages/Banner"));
const NewCollections = lazy(() => import("./pages/NewCollections"));
const Footer = lazy(() => import("./pages/Footer"));

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <AnimatePresence>
          {!loaded && <Loader />}
        </AnimatePresence>
        <main>
          <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
            <Home />
            <About />
            <Shop />
            <Banner/>
            <NewCollections/>
            <Footer />
          </Suspense>
        </main>
      </ParallaxProvider>
    </ErrorBoundary>
  );
};

export default App;
