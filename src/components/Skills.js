import React from 'react';

const Skills = () => {

  const skillsData = [
    {
      category: 'Frontend Development',
      icon: 'fas fa-code',
      skills: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend Development',
      icon: 'fas fa-server',
      skills: ['Node.js', 'Python', 'Express.js', 'Django', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'DevOps & Tools',
      icon: 'fas fa-tools',
      skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Kubernetes', 'Linux']
    }
  ];

  return (
    <section id="skills" className="skills section-fade-in">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid grid-responsive">
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category lazy-load stagger-item">
              <div className="skill-icon">
                <i className={category.icon}></i>
              </div>
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills {
          padding: 5rem 0;
          background: var(--bg-secondary);
        }

        .skills-grid {
          gap: 3rem;
        }

        .skill-category {
          background: var(--bg-card);
          border-radius: 20px;
          padding: 2.5rem;
          text-align: center;
          border: 1px solid var(--border-color);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .skill-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-orange);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .skill-category:hover::before {
          transform: scaleX(1);
        }

        .skill-category:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: var(--accent-neon-orange);
          box-shadow: 0 25px 50px rgba(255, 107, 53, 0.2);
        }

        .skill-icon {
          font-size: 3rem;
          color: var(--accent-neon-orange);
          margin-bottom: 1.5rem;
        }

        .skill-category h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-family: 'Bebas Neue', Impact, sans-serif;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }

        .skill-item {
          background: rgba(255, 107, 53, 0.1);
          color: var(--accent-neon-orange);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          font-family: 'JetBrains Mono', monospace;
          border: 1px solid rgba(255, 107, 53, 0.3);
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          background: var(--accent-neon-orange);
          color: white;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .skill-category {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;