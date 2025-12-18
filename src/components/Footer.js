import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2026 Kishanth</p>
      </div>
      
      <style jsx>{`
        .footer {
          background: var(--bg-secondary);
          padding: 2rem 0;
          text-align: center;
          border-top: 1px solid var(--border-color);
        }

        .footer p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;