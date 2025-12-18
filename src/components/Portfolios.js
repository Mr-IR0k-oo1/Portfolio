import React from 'react';

const Portfolios = () => {

  const portfolios = [
    {
      title: 'Cybersecurity',
      icon: 'fas fa-shield-alt',
      description: 'Explore my cybersecurity portfolio featuring penetration testing, security audits, vulnerability assessments, and ethical hacking projects.',
      tags: ['Penetration Testing', 'Security Audits', 'Ethical Hacking'],
      url: 'https://cybersecurity.example.com'
    },
    {
      title: 'Video Editing & Motion Graphics',
      icon: 'fas fa-video',
      description: 'Discover my creative work in video editing, motion graphics, visual effects, and multimedia production projects.',
      tags: ['Video Editing', 'Motion Graphics', 'Visual Effects'],
      url: 'https://video-editing.example.com'
    },
    {
      title: 'Web Development',
      icon: 'fas fa-code',
      description: 'Browse my comprehensive web development projects including full-stack applications, frontend designs, and backend architectures.',
      tags: ['Full Stack', 'Frontend', 'Backend'],
      url: 'https://webdev.example.com'
    }
  ];

  return (
    <section id="portfolios" className="portfolios section-fade-in">
      <div className="container">
        <h2 className="section-title">Other Portfolios</h2>

        <div className="portfolios-grid grid-responsive">
          {portfolios.map((portfolio, index) => (
            <a
              key={index}
              href={portfolio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link-card lazy-load stagger-item"
            >
              <div className="portfolio-card-content">
                <div className="portfolio-icon">
                  <i className={portfolio.icon}></i>
                </div>
                <h3>{portfolio.title}</h3>
                <p>{portfolio.description}</p>
                <div className="portfolio-tags">
                  {portfolio.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="portfolio-action">
                  <span>View Portfolio</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .portfolios {
          padding: 5rem 0;
          background: var(--bg-secondary);
        }

        .portfolios-grid {
          gap: 2rem;
        }

        .portfolio-link-card {
          background: var(--bg-card);
          border-radius: 20px;
          border: 1px solid var(--border-color);
          text-decoration: none;
          color: inherit;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          display: block;
        }

        .portfolio-link-card::before {
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

        .portfolio-link-card:hover::before {
          transform: scaleX(1);
        }

        .portfolio-link-card:hover {
          border-color: var(--accent-neon-orange);
          box-shadow: 0 25px 50px rgba(255, 107, 53, 0.2);
        }

        .portfolio-card-content {
          padding: 2.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .portfolio-icon {
          font-size: 3rem;
          color: var(--accent-neon-orange);
          margin-bottom: 1.5rem;
        }

        .portfolio-card-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-family: 'Bebas Neue', Impact, sans-serif;
        }

        .portfolio-card-content p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .portfolio-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .tag {
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

        .portfolio-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--accent-neon-orange);
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .portfolio-link-card:hover .portfolio-action {
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .portfolio-card-content {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolios;