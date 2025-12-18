import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
          
          <style jsx>{`
            .back-to-top {
              position: fixed;
              bottom: 30px;
              right: 30px;
              width: 50px;
              height: 50px;
              background: var(--bg-card);
              border: 1px solid var(--border-color);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              z-index: 1000;
              transition: all 0.3s ease;
              color: var(--text-primary);
              font-size: 1.2rem;
            }

            .back-to-top:hover {
              background: var(--accent-neon-orange);
              color: white;
              transform: translateY(-5px);
              box-shadow: 0 10px 25px var(--orange-glow);
            }
          `}</style>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;