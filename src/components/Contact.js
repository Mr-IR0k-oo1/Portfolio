import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'mrirok.0001@gmail.com',
      link: 'mailto:mrirok.0001@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91 63744 61408',
      link: 'tel:+916374461408'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Coimbatore, TN, IND',
      link: null
    }
  ];

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (value.length < 2) {
          error = 'Please enter your name (minimum 2 characters)';
        }
        break;
      case 'email':
        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailRegex.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'subject':
        if (value.length < 3) {
          error = 'Please enter a subject (minimum 3 characters)';
        }
        break;
      case 'message':
        if (value.length < 10) {
          error = 'Please enter your message (minimum 10 characters)';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="contact section-fade-in">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <motion.div 
            ref={ref}
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Let's Build Something Amazing</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method">
                  <div className="contact-icon">
                    <i className={method.icon}></i>
                  </div>
                  <div className="contact-details">
                    <h4>{method.title}</h4>
                    {method.link ? (
                      <a href={method.link} className="contact-link">
                        {method.value}
                      </a>
                    ) : (
                      <span>{method.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="floating-label-group">
              <input
                type="text"
                id="name"
                name="name"
                className="pro-input"
                placeholder=" "
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="name" className="floating-label">Your Name</label>
              {errors.name && <div className="form-error">{errors.name}</div>}
            </div>

            <div className="floating-label-group">
              <input
                type="email"
                id="email"
                name="email"
                className="pro-input"
                placeholder=" "
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="email" className="floating-label">Email Address</label>
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>

            <div className="floating-label-group">
              <input
                type="text"
                id="subject"
                name="subject"
                className="pro-input"
                placeholder=" "
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="subject" className="floating-label">Subject</label>
              {errors.subject && <div className="form-error">{errors.subject}</div>}
            </div>

            <div className="floating-label-group">
              <textarea
                id="message"
                name="message"
                className="pro-input"
                rows="5"
                placeholder=" "
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="message" className="floating-label">Your Message</label>
              {errors.message && <div className="form-error">{errors.message}</div>}
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary magnetic-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-paper-plane"></i>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {showSuccess && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <p>Thank you for your message! I'll get back to you soon.</p>
              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact {
          padding: 5rem 0;
          background: var(--bg-primary);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info h3 {
          font-size: 2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-family: 'Bebas Neue', Impact, sans-serif;
        }

        .contact-info > p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
          font-size: 1.05rem;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--bg-card);
          border-radius: 16px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .contact-method:hover {
          transform: translateY(-5px);
          border-color: var(--accent-neon-orange);
          box-shadow: 0 15px 35px rgba(255, 107, 53, 0.15);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: var(--accent-neon-orange);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
        }

        .contact-details h4 {
          color: var(--text-primary);
          font-weight: 600;
          margin-bottom: 0.25rem;
          font-size: 1.1rem;
        }

        .contact-link {
          color: var(--accent-neon-orange);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: var(--text-primary);
        }

        .contact-form {
          background: var(--bg-card);
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid var(--border-color);
        }

        .floating-label-group {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .pro-input {
          width: 100%;
          padding: 1rem 1.25rem;
          background: var(--bg-primary);
          border: 2px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-primary);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .pro-input:focus {
          outline: none;
          border-color: var(--accent-neon-orange);
          box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.1);
          transform: translateY(-2px);
        }

        .pro-input.error {
          border-color: #ff4757;
          box-shadow: 0 0 0 4px rgba(255, 71, 87, 0.1);
        }

        .floating-label {
          position: absolute;
          left: 1.25rem;
          top: 1.25rem;
          color: var(--text-secondary);
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          pointer-events: none;
          background: var(--bg-card);
          padding: 0 0.5rem;
        }

        .pro-input:focus ~ .floating-label,
        .pro-input:not(:placeholder-shown) ~ .floating-label {
          top: -0.75rem;
          left: 0.75rem;
          font-size: 0.85rem;
          color: var(--accent-neon-orange);
          background: var(--bg-primary);
        }

        .form-error {
          color: #ff4757;
          font-size: 0.85rem;
          margin-top: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
        }

        .success-message {
          background: rgba(0, 210, 211, 0.1);
          border: 1px solid #00d2d3;
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #00d2d3;
          margin-top: 1rem;
        }

        .success-message i {
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .contact-form {
            padding: 2rem 1.5rem;
          }

          .contact-method {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;