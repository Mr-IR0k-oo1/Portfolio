import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and analytics dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      category: 'web',
      demoUrl: 'https://example-ecommerce-demo.com',
      codeUrl: 'https://github.com/alexchen/ecommerce-platform'
    },
    {
      title: 'Enterprise Dashboard',
      description: 'Comprehensive analytics platform with real-time data visualization, reporting, and team collaboration tools.',
      tech: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      category: 'enterprise',
      demoUrl: 'https://example-dashboard-demo.com',
      codeUrl: 'https://github.com/alexchen/enterprise-dashboard'
    },
    {
      title: 'Task Management App',
      description: 'Cross-platform mobile application for team collaboration with real-time sync and offline capabilities.',
      tech: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      category: 'mobile',
      demoUrl: 'https://example-taskapp-demo.com',
      codeUrl: 'https://github.com/alexchen/task-management-app'
    },
    {
      title: 'Social Media Analytics',
      description: 'Real-time social media monitoring and analytics platform with sentiment analysis and engagement tracking.',
      tech: ['Next.js', 'GraphQL', 'Redis', 'AWS'],
      category: 'web',
      demoUrl: 'https://social-analytics-demo.com',
      codeUrl: 'https://github.com/alexchen/social-analytics'
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'enterprise', label: 'Enterprise' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="projects section-fade-in">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-filter">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid grid-responsive">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card lazy-load stagger-item"
            >
              <div className="project-image">
                <div className="placeholder-img"></div>
                <div className="project-overlay">
                  <button className="project-view-btn">
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="fab fa-github"></i>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects {
          padding: 5rem 0;
          background: var(--bg-secondary);
        }

        .projects-filter {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: var(--bg-card);
          color: var(--text-secondary);
          border: 2px solid var(--border-color);
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .filter-btn:hover {
          border-color: var(--accent-neon-orange);
          color: var(--text-primary);
        }

        .filter-btn.active {
          background: var(--gradient-orange);
          color: white;
          border-color: var(--accent-neon-orange);
        }

        .project-card {
          background: var(--bg-card);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-neon-orange);
          box-shadow: 0 25px 50px rgba(255, 107, 53, 0.2);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .placeholder-img {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--accent-glow), var(--orange-glow));
          position: relative;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-view-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--accent-neon-orange);
          border: none;
          color: white;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .project-view-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px var(--orange-glow);
        }

        .project-content {
          padding: 2rem;
        }

        .project-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-family: 'Bebas Neue', Impact, sans-serif;
        }

        .project-content p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .project-tech span {
          background: rgba(255, 107, 53, 0.1);
          color: var(--accent-neon-orange);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
          font-family: 'JetBrains Mono', monospace;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-neon-orange);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .projects-filter {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .project-content {
            padding: 1.5rem;
          }

          .project-links {
            flex-direction: column;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;