import React from 'react';
import { motion } from 'framer-motion';
import Dither from './Dither.tsx';


const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

<div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
  <Dither
    waveColor={[0.5, 0.5, 0.5]}
    disableAnimation={false}
    enableMouseInteraction={true}
    mouseRadius={0.3}
    colorNum={4}
    waveAmplitude={0.3}
    waveFrequency={3}
    waveSpeed={0.05}
  />
</div>
        <div className="hero-content" style={{ zIndex: 1, position: 'relative', textAlign: 'center' }}>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-intro"
            >
                <div className="greeting">Hello, I'm</div>
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="hero-title"
                data-text="Alex Chen"
            >
                Alex Chen
            </motion.h1>
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-subtitle"
            >
                <span className="typing-text">Senior Full Stack Developer</span>
                <span className="cursor">|</span>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }} 
                className="hero-description"
                style={{ maxWidth: '600px', margin: '0 auto', marginTop: '1rem' }}
            >
                Building enterprise-grade web applications with modern technologies, 
                focusing on security, performance, and exceptional user experiences. 
                Specialized in scalable architectures and innovative solutions.
            </motion.p>
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hero-buttons"
                style={{ marginTop: '2rem' }}
            >
                <a href="#contact" className="btn btn-primary magnetic-btn">
                    <i className="fas fa-envelope"></i>
                    Get in touch
                </a>
                <a href="#projects" className="btn btn-secondary magnetic-btn">
                    <i className="fas fa-briefcase"></i>
                    View projects
                </a>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hero-social"
            >
                {/* Social icons would go here */}
            </motion.div>
        </div>

        <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-arrow"></div>
        </div>
    </section>
  );
};
export default Hero;
