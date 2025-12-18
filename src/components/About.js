import React from 'react';

const About = () => {
  const stats = [50, 8, 30, 15];
  const statLabels = ['Projects Delivered', 'Years Experience', 'Happy Clients', 'Technologies'];

  const highlights = [
    { icon: 'fas fa-code', text: 'Clean, maintainable code' },
    { icon: 'fas fa-shield-alt', text: 'Security-first approach' },
    { icon: 'fas fa-rocket', text: 'Performance optimization' },
    { icon: 'fas fa-users', text: 'Team collaboration' }
  ];

  

  return (
    <section id="about" className="about section-fade-in">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-intro">
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
                technical excellence with creative problem-solving to deliver exceptional digital
                experiences.
              </p>
            </div>
            
            <div className="about-highlights">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <i className={highlight.icon}></i>
                  <span>{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat stagger-item">
                <span className="stat-number">{stat}+</span>
                <span className="stat-label">{statLabels[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: 5rem 0;
          background: var(--bg-primary);
        }

        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-intro h3 {
          font-size: 2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-family: 'Bebas Neue', Impact, sans-serif;
        }

        .about-text {
          margin-bottom: 2rem;
        }

        .about-text p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1rem;
          font-size: 1.05rem;
        }

        .about-highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: var(--bg-card);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .highlight-item:hover {
          transform: translateY(-2px);
          border-color: var(--accent-neon-orange);
          box-shadow: 0 10px 25px rgba(255, 107, 53, 0.1);
        }

        .highlight-item i {
          color: var(--accent-neon-orange);
          font-size: 1.2rem;
        }

        .highlight-item span {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .about-stats {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .stat {
          text-align: center;
          padding: 1.5rem;
          background: var(--bg-card);
          border-radius: 16px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .stat:hover {
          transform: translateY(-5px);
          border-color: var(--accent-neon-orange);
          box-shadow: 0 15px 35px rgba(255, 107, 53, 0.15);
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent-neon-orange);
          font-family: 'Bebas Neue', Impact, sans-serif;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          font-family: 'Space Grotesk', sans-serif;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-highlights {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;