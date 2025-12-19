import React, { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="scroll-progress scroll-progress-enhanced"></div>
            <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <i className="fas fa-arrow-up"></i>
            </div>
            
            <Header />

            <main>
                {children}
            </main>

            <footer className="footer">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Alex Chen</p>
                </div>
            </footer>
        </>
    );
};

export default Layout;
