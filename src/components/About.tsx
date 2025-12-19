import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Counter = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = target;
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / end));
            
            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, stepTime);
            
            return () => clearInterval(timer);
        }
    }, [target, isInView]);

    return <span ref={ref}>{count}{target > 1000 ? '+' : ''}</span>;
};

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    About Me
                </motion.h2>
                <div className="about-content">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="about-intro"
                    >
                        <h3>Building Digital Excellence</h3>
                        <div className="about-text">
                            <p>
                                I'm a passionate Senior Full Stack Developer with over 8 years of experience 
                                crafting robust, scalable web applications. My expertise spans from frontend 
                                frameworks to backend architectures, with a keen focus on security and performance.
                            </p>
                            <p>
                                I specialize in transforming complex business requirements into elegant, 
                                user-friendly solutions that drive measurable results. My approach combines 
                                technical excellence with creative problem-solving to deliver exceptional digital experiences.
                            </p>
                        </div>
                        <div className="about-highlights">
                            <div className="highlight-item">
                                <i className="fas fa-code"></i>
                                <span>Clean, maintainable code</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-shield-alt"></i>
                                <span>Security-first approach</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-rocket"></i>
                                <span>Performance optimization</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-users"></i>
                                <span>Team collaboration</span>
                            </div>
                        </div>
                    </motion.div>
                    <div className="about-stats">
                        {[
                            { label: 'Projects Delivered', value: 50 },
                            { label: 'Years Experience', value: 8 },
                            { label: 'Happy Clients', value: 30 },
                            { label: 'Technologies', value: 15 }
                        ].map((stat, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="stat"
                            >
                                <span className="stat-number">
                                    <Counter target={stat.value} />
                                </span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
