import { motion } from 'framer-motion';
import Beams from './Beam';
import Magnetic from './Magnetic';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#000' }}>

      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.6 }}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ff5722"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      <div className="hero-content" style={{ zIndex: 1, position: 'relative', textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="hero-intro"
        >
          <div className="greeting" style={{ letterSpacing: '0.5em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem', opacity: 0.8 }}>Hello, I'm</div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hero-title font-display"
        >
          Kishanth
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hero-subtitle font-body"
        >
          <span className="typing-text">Versatile Digital Creator</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }} 
          className="hero-description font-body"
          style={{ maxWidth: '750px', margin: '0 auto', marginTop: '2rem', color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '1.8', letterSpacing: '0.02em' }}
        >
          A web developer blending <span style={{ color: 'white' }}>technical precision</span> with <span style={{ color: 'white' }}>creative storytelling</span> to build secure applications and compelling digital experiences.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-buttons"
          style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}
        >
          <Magnetic>
            <a href="#contact" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', borderRadius: '0', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem' }}>
              Get in touch
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#projects" className="btn btn-secondary" style={{ padding: '1.2rem 2.5rem', borderRadius: '0', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.3)' }}>
              View projects
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <div className="scroll-indicator" style={{ mixBlendMode: 'difference' }}>
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};
export default Hero;
