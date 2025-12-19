import React from 'react';
import { Canvas } from '@react-three/fiber';
import HeroScene from '../scenes/HeroScene';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div className="hero-background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <HeroScene />
            </Canvas>
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
