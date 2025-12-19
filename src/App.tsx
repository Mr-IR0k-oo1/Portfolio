import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolios from './components/Portfolios';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolios />
        <Testimonials />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
