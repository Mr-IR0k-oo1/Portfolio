import React, { useState } from 'react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <Reveal>
                    <h2 className="section-title">Get In Touch</h2>
                </Reveal>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Build Something Amazing</h3>
                        <p>
                            I'm always interested in hearing about new projects and opportunities. 
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>
                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                                <div className="contact-details">
                                    <h4>Email</h4>
                                    <a href="mailto:hello@alexchen.dev">hello@alexchen.dev</a>
                                </div>
                            </div>
                            <div className="contact-method">
                                <div className="contact-icon"><i className="fas fa-phone"></i></div>
                                <div className="contact-details">
                                    <h4>Phone</h4>
                                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                                </div>
                            </div>
                            <div className="contact-method">
                                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                                <div className="contact-details">
                                    <h4>Location</h4>
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                        {[
                            { name: 'name', label: 'Your Name', type: 'text' },
                            { name: 'email', label: 'Email Address', type: 'email' },
                            { name: 'subject', label: 'Subject', type: 'text' }
                        ].map((field) => (
                             <div className="floating-label-group" key={field.name}>
                                <input 
                                    type={field.type} 
                                    id={field.name} 
                                    name={field.name} 
                                    className="pro-input" 
                                    placeholder=" " 
                                    required 
                                    value={formData[field.name as keyof typeof formData]}
                                    onChange={handleChange}
                                />
                                <label htmlFor={field.name} className="floating-label">{field.label}</label>
                            </div>
                        ))}
                       
                        <div className="floating-label-group">
                            <textarea 
                                id="message" 
                                name="message" 
                                className="pro-input" 
                                rows={5} 
                                placeholder=" " 
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="message" className="floating-label">Your Message</label>
                        </div>
                        <button type="submit" id="submitBtn" className={`btn btn-primary magnetic-btn ${status === 'submitting' ? 'loading' : ''}`} disabled={status === 'submitting'}>
                            <i className="fas fa-paper-plane"></i>
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && (
                             <div className="form-success show">
                                <i className="fas fa-check-circle"></i>
                                <p>Thank you for your message! I'll get back to you soon.</p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
