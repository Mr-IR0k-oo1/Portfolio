import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Skills: React.FC = () => {
    const skills = [
        {
            category: 'Frontend Development',
            icon: 'fa-code',
            items: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
        },
        {
            category: 'Backend Development',
            icon: 'fa-server',
            items: ['Node.js', 'Python', 'Express.js', 'Django', 'PostgreSQL', 'MongoDB']
        },
        {
            category: 'DevOps & Tools',
            icon: 'fa-tools',
            items: ['Docker', 'AWS', 'Git', 'CI/CD', 'Kubernetes', 'Linux']
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <Reveal>
                    <h2 className="section-title">Technical Skills</h2>
                </Reveal>

                <div className="skills-grid grid-responsive">
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="skill-category"
                        >
                            <div className="skill-icon">
                                <i className={`fas ${skill.icon}`}></i>
                            </div>
                            <h3>{skill.category}</h3>
                            <div className="skill-list">
                                {skill.items.map((item, i) => (
                                    <span key={i} className="skill-item">{item}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;