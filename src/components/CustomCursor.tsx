import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [cursorMode, setCursorMode] = useState<'default' | 'pointer' | 'view' | 'text'>('default');
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('.project-card') || target.closest('.project-overlay')) {
        setCursorMode('view');
      } else if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('.magnetic-btn') ||
        target.classList.contains('hover-trigger')
      ) {
        setCursorMode('pointer');
      } else if (
        target.tagName === 'H1' ||
        target.tagName === 'H2' ||
        target.tagName === 'H3' ||
        target.tagName === 'P'
      ) {
        setCursorMode('text');
      } else {
        setCursorMode('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className={`custom-cursor mode-${cursorMode}`}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        <AnimatePresence>
          {cursorMode === 'view' && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="cursor-label"
            >
              VIEW
            </motion.span>
          )}
        </AnimatePresence>
        {cursorMode === 'default' && <div className="cursor-dot" />}
      </motion.div>
      <motion.div
        className={`cursor-ring mode-${cursorMode}`}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
    </>
  );
};

export default CustomCursor;
