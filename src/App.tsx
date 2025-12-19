import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import LogoLoop from './components/LogoLoop';
import Experience from './components/Experience';
import Portfolios from './components/Portfolios';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer } from 'react-icons/si';
import './index.css';

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiFramer />, title: "Framer Motion" },
];

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
        <LogoLoop 
          logos={techLogos} 
          speed={100} 
          logoHeight={64} 
          gap={120}
          fadeOut
          fadeOutColor="var(--background)"
        />
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
