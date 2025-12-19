import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Professional Experience
                </motion.h2>
                <div className="timeline">
                    {[
                        {
                            date: '2021 - Present',
                            role: 'Senior Full Stack Developer',
                            company: 'Tech Innovations Inc.',
                            desc: 'Lead development of enterprise-scale applications serving 1M+ users. Architected microservices infrastructure and implemented CI/CD pipelines.'
                        },
                        {
                            date: '2019 - 2021',
                            role: 'Full Stack Developer',
                            company: 'Digital Solutions Ltd.',
                            desc: 'Developed and maintained multiple client projects using React and Node.js. Improved application performance by 40% through optimization.'
                        },
                        {
                            date: '2017 - 2019',
                            role: 'Frontend Developer',
                            company: 'Creative Agency',
                            desc: 'Created responsive web interfaces for various clients. Specialized in React-based applications and modern CSS techniques.'
                        }
                    ].map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="timeline-item"
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">{item.date}</div>
                                <h3>{item.role}</h3>
                                <h4>{item.company}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
