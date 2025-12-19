import React from 'react';
import { motion } from 'framer-motion';

const Portfolios: React.FC = () => {
    return (
        <section id="portfolios" className="portfolios">
            <div className="container">
                 <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Other Portfolios
                </motion.h2>
                <div className="portfolios-grid grid-responsive">
                    {[
                        {
                            url: 'https://cybersecurity.example.com',
                            icon: 'fa-shield-alt',
                            title: 'Cybersecurity',
                            desc: 'Explore my cybersecurity portfolio featuring penetration testing, security audits, vulnerability assessments, and ethical hacking projects.',
                            tags: ['Penetration Testing', 'Security Audits', 'Ethical Hacking']
                        },
                         {
                            url: 'https://video-editing.example.com',
                            icon: 'fa-video',
                            title: 'Video Editing & Motion Graphics',
                            desc: 'Discover my creative work in video editing, motion graphics, visual effects, and multimedia production projects.',
                            tags: ['Video Editing', 'Motion Graphics', 'Visual Effects']
                        },
                         {
                            url: 'https://webdev.example.com',
                            icon: 'fa-code',
                            title: 'Web Development',
                            desc: 'Browse my comprehensive web development projects including full-stack applications, frontend designs, and backend architectures.',
                            tags: ['Full Stack', 'Frontend', 'Backend']
                        }
                    ].map((item, index) => (
                        <motion.a 
                            key={index}
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="portfolio-link-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="portfolio-card-content">
                                <div className="portfolio-icon">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div className="portfolio-tags">
                                    {item.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                </div>
                                <div className="portfolio-action">
                                    <span>View Portfolio</span>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolios;
