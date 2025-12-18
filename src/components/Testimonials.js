import React from 'react';

const Testimonials = () => {

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStore',
      content: 'Alex delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and performance optimization was outstanding.',
      avatar: 'fas fa-user-circle'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, InnovateApp',
      content: 'Working with Alex was a game-changer for our startup. The mobile app he built increased our user engagement by 300%.',
      avatar: 'fas fa-user-circle'
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO, SecureFlow',
      content: "Alex's expertise in security helped us achieve SOC 2 compliance. His professional approach and technical skills are unmatched.",
      avatar: 'fas fa-user-circle'
    }
  ];

  return (
    <section id="testimonials" className="testimonials section-fade-in">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>

        <div className="testimonials-grid grid-responsive">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card lazy-load stagger-item"
            >
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className={testimonial.avatar}></i>
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials {
          padding: 5rem 0;
          background: var(--bg-primary);
        }

        .testimonials-grid {
          gap: 2rem;
        }

        .testimonial-card {
          background: var(--bg-card);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid var(--border-color);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: -20px;
          left: 20px;
          font-size: 4rem;
          color: var(--accent-neon-orange);
          opacity: 0.3;
          font-family: 'Playfair Display', Georgia, serif;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-neon-orange);
          box-shadow: 0 25px 50px rgba(255, 107, 53, 0.15);
        }

        .testimonial-content {
          margin-bottom: 2rem;
        }

        .testimonial-content p {
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 1.1rem;
          font-style: italic;
          position: relative;
          z-index: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--accent-neon-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
        }

        .author-info h4 {
          color: var(--text-primary);
          font-weight: 600;
          margin-bottom: 0.25rem;
          font-size: 1.1rem;
        }

        .author-info span {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .testimonial-card {
            padding: 2rem 1.5rem;
          }

          .testimonial-content p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;