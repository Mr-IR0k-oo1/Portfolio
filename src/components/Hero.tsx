import React from 'react';
import { motion } from 'framer-motion';
import Beams from './Beam';


const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

<div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
  <Beams
    beamWidth={2}
    beamHeight={15}
    beamNumber={12}
    lightColor="#ff0000"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={0}
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
                className="hero-title font-display"
                data-text="Alex Chen"
            >
                Alex Chen
            </motion.h1>
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-subtitle font-body"
            >
                <span className="typing-text"></span>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }} 
                className="hero-description font-body"
                style={{ maxWidth: '700px', margin: '0 auto', marginTop: '1.5rem', color: 'white', fontSize: '1.1rem', lineHeight: '1.8' }}
            >
                <b style={{ color: 'var(--accent-neon-orange)', fontWeight: 700 }}>Versatile Digital Creator</b> A web developer who builds secure applications, creates compelling motion graphics, and conducts cybersecurity research—blending technical precision with creative storytelling to protect and enhance digital experiences.
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
