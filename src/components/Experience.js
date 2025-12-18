import React from 'react';

const Experience = () => {

  const experiences = [
    {
      period: '2021 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Lead development of enterprise-scale applications serving 1M+ users. Architected microservices infrastructure and implemented CI/CD pipelines.'
    },
    {
      period: '2019 - 2021',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained multiple client projects using React and Node.js. Improved application performance by 40% through optimization.'
    },
    {
      period: '2017 - 2019',
      title: 'Frontend Developer',
      company: 'Creative Agency',
      description: 'Created responsive web interfaces for various clients. Specialized in React-based applications and modern CSS techniques.'
    }
  ];

  return (
    <section id="experience" className="experience section-fade-in">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item stagger-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.period}</div>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience {
          padding: 5rem 0;
          background: var(--bg-primary);
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border-color);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          display: flex;
          align-items: center;
        }

        .timeline-item:nth-child(odd) {
          justify-content: flex-end;
        }

        .timeline-item:nth-child(even) {
          justify-content: flex-start;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          background: var(--accent-neon-orange);
          border-radius: 50%;
          border: 4px solid var(--bg-primary);
          z-index: 2;
          box-shadow: 0 0 0 4px var(--border-color);
        }

        .timeline-content {
          background: var(--bg-card);
          border-radius: 16px;
          padding: 2rem;
          width: 45%;
          border: 1px solid var(--border-color);
          position: relative;
          transition: all 0.3s ease;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          margin-right: auto;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: auto;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          border-color: var(--accent-neon-orange);
          box-shadow: 0 20px 40px rgba(255, 107, 53, 0.15);
        }

        .timeline-date {
          color: var(--accent-neon-orange);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .timeline-content h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          font-family: 'Bebas Neue', Impact, sans-serif;
        }

        .timeline-content h4 {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .timeline-content p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 20px;
          }

          .timeline-item {
            justify-content: flex-start !important;
            margin-left: 40px;
          }

          .timeline-dot {
            left: 20px;
          }

          .timeline-content {
            width: 100%;
          }

          .timeline-content::before {
            content: '';
            position: absolute;
            left: -10px;
            top: 20px;
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-right: 10px solid var(--bg-card);
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;