import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Reveal from './Reveal';

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
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section id="about" className="about" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Parallax Background Elements */}
            <motion.div 
                style={{ 
                    position: 'absolute', 
                    top: '10%', 
                    right: '5%', 
                    fontSize: '15rem', 
                    fontWeight: 900, 
                    color: 'rgba(255,255,255,0.02)',
                    zIndex: 0,
                    y: y1
                }}
            >
                ABOUT
            </motion.div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <Reveal>
                    <h2 className="section-title">About Me</h2>
                </Reveal>
                <motion.div style={{ opacity }} className="about-content">
                    <motion.div 
                        style={{ y: y2 }}
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
                    <motion.div className="about-stats" style={{ y: y1 }}>
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
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
