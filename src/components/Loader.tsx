import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="loading-overlay"
            style={{ display: 'flex' }}
        >
            <div className="loading-content">
                <div className="loading-logo">AC.</div>
                <div className="loading-bar">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="loading-progress"
                    ></motion.div>
                </div>
                <div className="loading-text">Loading amazing content...</div>
            </div>
        </motion.div>
    );
};

export default Loader;
