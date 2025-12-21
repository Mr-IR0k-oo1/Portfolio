import { motion } from 'framer-motion';
import Beams from './Beam';
import Magnetic from './Magnetic';

const Hero: React.FC = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const charVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

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

      <motion.div 
        className="hero-content" 
        style={{ zIndex: 1, position: 'relative', textAlign: 'center' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-intro">
          <div className="greeting" style={{ letterSpacing: '0.5em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem', opacity: 0.8 }}>Hello, I'm</div>
        </motion.div>
        
        <motion.h1 
          className="hero-title font-display" 
          variants={charVariants}
          style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden' }}
        >
          Kishanth
        </motion.h1>
        
        <motion.div variants={itemVariants} className="hero-subtitle font-body">
          <span className="typing-text">Versatile Digital Creator</span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="hero-description font-body"
          style={{ maxWidth: '750px', margin: '0 auto', marginTop: '2rem', color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.8', letterSpacing: '0.02em' }}
        >
          A web developer blending <span style={{ color: 'white', fontWeight: 500 }}>technical precision</span> with <span style={{ color: 'white', fontWeight: 500 }}>creative storytelling</span> to build secure applications and compelling digital experiences.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
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
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="scroll-indicator" 
        style={{ mixBlendMode: 'difference' }}
      >
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
