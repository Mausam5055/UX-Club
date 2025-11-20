import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Preloader from './components/Preloader';

// Import all components
import Header from './components/Header';
import Hero from './components/Hero';
// import Insight from './components/Insight';
import Benefit from './components/Benefit';
import Footer from './components/Footer';
import Scroller from './components/Scroller';
import Included from './components/Included';
import Pack from './components/Pack';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderFinish = () => {
    setIsLoading(false);
  };

  // Initialize Lenis for smooth scrolling after preloader finishes
  useEffect(() => {
    if (!isLoading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Store lenis instance in window for potential cleanup
      window.lenis = lenis;

      // Cleanup function
      return () => {
        lenis.destroy();
      };
    }
  }, [isLoading]);

  // Disable scrolling when preloader is visible
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <div className='overflow-hidden'>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onFinish={handlePreloaderFinish} />}
      </AnimatePresence>
      
      {!isLoading && (
        <div>
          <Header />
          <Hero />
          {/* <Insight /> */}
          <Benefit />
          <Scroller />
          <Included />
          <Pack />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;