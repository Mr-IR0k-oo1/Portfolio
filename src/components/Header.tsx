import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') !== 'light';
        }
        return true;
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        if (!newIsDark) {
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        }
    };

    // Initialize theme on mount
    useEffect(() => {
        if (!isDark) {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }, []);

    return (
        <header className="header" style={scrolled ? { background: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(20px)' } : { background: 'rgba(10, 10, 10, 0.85)' }}>
            <nav className="nav">
                <div className="nav-logo">
                    <div className="logo-text">AC.</div>
                </div>
                <div className="nav-actions">
                    <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
                        <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} theme-icon`}></i>
                    </button>
                    <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {['About', 'Skills', 'Experience', 'Portfolios', 'Testimonials', 'Projects', 'Contact'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
