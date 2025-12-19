import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Client Testimonials
                </motion.h2>
                <div className="testimonials-grid grid-responsive">
                    {[
                        {
                            text: '"Alex delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and performance optimization was outstanding."',
                            name: 'Sarah Johnson',
                            role: 'CEO, TechStore'
                        },
                        {
                            text: '"Working with Alex was a game-changer for our startup. The mobile app he built increased our user engagement by 300%."',
                            name: 'Michael Chen',
                            role: 'Founder, InnovateApp'
                        },
                        {
                            text: '"Alex\'s expertise in security helped us achieve SOC 2 compliance. His professional approach and technical skills are unmatched."',
                            name: 'Emily Rodriguez',
                            role: 'CTO, SecureFlow'
                        }
                    ].map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="testimonial-card"
                        >
                             <div className="testimonial-content">
                                <p>{item.text}</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    <i className="fas fa-user-circle"></i>
                                </div>
                                <div className="author-info">
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
