// Professional Portfolio Website - Advanced Animations and Interactions

// Global state management
const AppState = {
    isLoading: true,
    currentTheme: localStorage.getItem('theme') || 'dark',
    scrollY: 0,
    mousePosition: { x: 0, y: 0 },
    isMobile: window.innerWidth <= 768,
    animationsEnabled: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    performanceMode: 'high'
};

// Performance monitoring
const PerformanceMonitor = {
    startTime: performance.now(),
    metrics: {},
    
    mark(name) {
        this.metrics[name] = performance.now() - this.startTime;
    },
    
    log() {
        console.table(this.metrics);
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    try {
        console.log('DOMContentLoaded event fired');
        
        // Initialize loading overlay
        await initLoadingOverlay();
        
        // Initialize enhanced modules
        await Promise.all([
            initEnhancedCursor(),
            initAdvancedAnimations(),
            initNavigation(),
            initScrollEffects(),
            initTypingAnimation(),
            initCounterAnimations(),
            initProjectFilter(),
            initContactForm(),
            initParticleEffect(),
            initGeometricShapes(),
            initParallaxEffects(),
            initAdvancedFeatures(),
            initPerformanceOptimizations(),
            initAccessibilityFeatures(),
            initMicroInteractions(),
            initSmoothReveal(),
            init3DEffects(),
            initModal(),
            initLazyLoading(),
            initEnhancedThemeToggle(),
            initMagneticButtonsEnhanced(),
            initGlassMorphismEffects()
        ]);
        
    } catch (error) {
        console.error('Initialization error:', error);
    }
});

// Loading Overlay Initialization
async function initLoadingOverlay() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    const loadingProgress = document.getElementById('loadingProgress');
    
    if (loadingOverlay && loadingProgress) {
        // Simulate loading progress
        let progress = 0;
        const loadingInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(loadingInterval);
                
                // Hide loading overlay
                setTimeout(() => {
                    loadingOverlay.classList.add('hidden');
                    setTimeout(() => {
                        loadingOverlay.style.display = 'none';
                    }, 500);
                }, 500);
            }
            
            loadingProgress.style.width = progress + '%';
        }, 200);
    }
}



// Animation Observer for scroll-triggered animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                // Trigger counter animations for stats
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animations
    document.querySelectorAll('.stagger-item, .section-fade-in, .stat-number').forEach(el => {
        observer.observe(el);
    });
}

// Navigation functionality
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });

    // Active navigation highlighting
    function updateActiveNav() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Throttled scroll handler for navigation
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                updateActiveNav();
                scrollTimeout = null;
            }, 100);
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Handle escape key to close menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            const isLight = body.classList.contains('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            
            // Add rotation animation
            themeToggle.style.transform = 'scale(1.1) rotate(360deg)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 300);
        });
    }
}

// Scroll effects
function initScrollEffects() {
    const progressBar = document.querySelector('.scroll-progress');
    const backToTop = document.querySelector('.back-to-top');
    const header = document.querySelector('.header');

    // Update scroll progress bar
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }

        // Show/hide back to top button
        if (backToTop) {
            if (scrollTop > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }

        // Header background on scroll
        if (header) {
            if (scrollTop > 50) {
                header.style.background = 'rgba(10, 10, 10, 0.95)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = 'rgba(10, 10, 10, 0.85)';
            }
        }
    });

    // Back to top functionality
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Typing animation for hero subtitle
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    const cursor = document.querySelector('.cursor');
    
    if (typingElement && cursor) {
        const phrases = [
            'Senior Full Stack Developer',
            'Security Architect',
            'Creative Problem Solver',
            'Enterprise Solutions Expert'
        ];
        
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        }

        type();
    }
}
function initCounterAnimations() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(statNumber => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statNumber);
    });
}
// Counter animation for statistics
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}

// Project filter functionality
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Initialize project modal functionality
    initProjectModal();
}

// Project modal functionality
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalCodepen = document.getElementById('modalCodepen');
    const closeBtn = document.querySelector('.close-btn');
    const viewBtns = document.querySelectorAll('.project-view-btn');

    // Project data
    const projectData = {
        'E-Commerce Platform': {
            title: 'E-Commerce Platform',
            description: `
                <h4>Project Overview</h4>
                <p>A full-featured e-commerce platform built with modern web technologies. This project showcases advanced frontend and backend development skills with real-time inventory management, secure payment processing, and comprehensive analytics.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li>Real-time inventory management with WebSocket connections</li>
                    <li>Secure payment processing with Stripe API integration</li>
                    <li>Advanced analytics dashboard with data visualization</li>
                    <li>User authentication and authorization system</li>
                    <li>Responsive design optimized for all devices</li>
                    <li>Search functionality with filtering and sorting</li>
                </ul>
                
                <h4>Technical Implementation</h4>
                <p>Built using React for the frontend with Redux for state management, Node.js and Express for the backend API, MongoDB for data storage, and Stripe for payment processing. The application features real-time updates using WebSockets and implements JWT-based authentication.</p>
            `,
            codepenId: 'abOEgJ'
        },
        'Enterprise Dashboard': {
            title: 'Enterprise Dashboard',
            description: `
                <h4>Project Overview</h4>
                <p>A comprehensive enterprise analytics platform designed for data visualization and team collaboration. This dashboard provides real-time insights into business metrics and facilitates data-driven decision making.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li>Real-time data visualization with interactive charts</li>
                    <li>Customizable dashboard widgets</li>
                    <li>Team collaboration tools with messaging</li>
                    <li>Advanced reporting and export functionality</li>
                    <li>Role-based access control</li>
                    <li>Integration with multiple data sources</li>
                </ul>
                
                <h4>Technical Implementation</h4>
                <p>Developed using Vue.js with Composition API for the frontend, Python with Django REST Framework for the backend, PostgreSQL for the database, and Docker for containerization. The platform uses D3.js for data visualization and implements WebSocket connections for real-time updates.</p>
            `,
            codepenId: 'example'
        },
        'Task Management App': {
            title: 'Task Management App',
            description: `
                <h4>Project Overview</h4>
                <p>A cross-platform mobile application for team collaboration and task management. This app enables teams to organize, track, and collaborate on projects with real-time synchronization and offline capabilities.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li>Real-time task synchronization across devices</li>
                    <li>Offline mode with data persistence</li>
                    <li>Team collaboration with comments and attachments</li>
                    <li>Push notifications for task updates</li>
                    <li>Kanban board and calendar views</li>
                    <li>Time tracking and productivity analytics</li>
                </ul>
                
                <h4>Technical Implementation</h4>
                <p>Built with React Native for cross-platform compatibility, Firebase for real-time database and authentication, Redux for state management, and TypeScript for type safety. The app implements sophisticated offline caching strategies and uses background sync for data synchronization.</p>
            `,
            codepenId: 'example'
        },
        'Social Media Analytics': {
            title: 'Social Media Analytics',
            description: `
                <h4>Project Overview</h4>
                <p>A powerful social media monitoring and analytics platform that provides real-time insights into social media performance, sentiment analysis, and engagement tracking across multiple platforms.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li>Real-time social media monitoring and tracking</li>
                    <li>Advanced sentiment analysis using machine learning</li>
                    <li>Engagement metrics and performance analytics</li>
                    <li>Multi-platform integration (Twitter, Instagram, Facebook)</li>
                    <li>Automated reporting and data visualization</li>
                    <li>Competitor analysis and trend tracking</li>
                </ul>
                
                <h4>Technical Implementation</h4>
                <p>Built with Next.js for server-side rendering and optimal performance, GraphQL for efficient data fetching, Redis for caching social media data, and AWS for scalable cloud infrastructure. The platform uses natural language processing for sentiment analysis and implements real-time data streaming with WebSockets.</p>
            `,
            codepenId: 'example'
        },
        'Fitness Tracker': {
            title: 'Fitness Tracker',
            description: `
                <h4>Project Overview</h4>
                <p>A comprehensive health and fitness tracking application that helps users monitor their workouts, nutrition, and overall wellness progress with personalized insights and recommendations.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li>Personalized workout plans and exercise library</li>
                    <li>Nutrition tracking with calorie counting</li>
                    <li>Progress visualization with charts and graphs</li>
                    <li>Integration with wearable devices and HealthKit</li>
                    <li>Social features for community motivation</li>
                    <li>AI-powered fitness recommendations</li>
                </ul>
                
                <h4>Technical Implementation</h4>
                <p>Developed using Flutter for cross-platform mobile development, Node.js for the backend API, MongoDB for storing user data and workout history, and native HealthKit integration for iOS devices. The app uses machine learning algorithms for personalized recommendations and implements real-time sync across devices.</p>
            `,
            codepenId: 'example'
        },
        'HR Management System': {
            title: 'HR Management System',
            description: `
                <h4>Project Overview</h4>
                <p>An enterprise-grade HR management platform that streamlines employee management, payroll processing, performance tracking, and HR operations for organizations of all sizes.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li>Comprehensive employee database and profiles</li>
                    <li>Automated payroll processing and tax calculations</li>
                    <li>Performance review and goal tracking</li>
                    <li>Leave management and approval workflows</li>
                    <li>Recruitment and onboarding processes</li>
                    <li>Advanced reporting and compliance tools</li>
                </ul>
                
                <h4>Technical Implementation</h4>
                <p>Built with Angular for the frontend with enterprise-grade architecture, .NET Core for the backend API with microservices architecture, SQL Server for relational data management, and Azure cloud services for scalability and security. The system implements OAuth 2.0 for authentication and uses advanced encryption for sensitive data.</p>
            `,
            codepenId: 'example'
        },
        'Video Streaming Platform': {
            title: 'Video Streaming Platform',
            description: `
                <h4>Project Overview</h4>
                <p>A modern video streaming and live broadcasting platform that supports adaptive bitrate streaming, real-time chat, and interactive features for content creators and viewers.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li>Live streaming with low latency broadcasting</li>
                    <li>Video-on-demand with adaptive bitrate streaming</li>
                    <li>Real-time chat and audience interaction</li>
                    <li>Content management and monetization tools</li>
                    <li>Analytics dashboard for creators</li>
                    <li>Multi-platform streaming support</li>
                </ul>
                
                <h4>Technical Implementation</h4>
                <p>Developed using React for the frontend interface, WebRTC for real-time video streaming, FFmpeg for video processing and transcoding, and CDN integration for global content delivery. The platform uses HLS and DASH protocols for adaptive streaming and implements WebSockets for real-time chat functionality.</p>
            `,
            codepenId: 'example'
        },
        'Food Delivery App': {
            title: 'Food Delivery App',
            description: `
                <h4>Project Overview</h4>
                <p>An on-demand food delivery platform that connects customers with local restaurants, featuring real-time order tracking, delivery management, and restaurant operations tools.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li>Real-time order tracking and delivery updates</li>
                    <li>Restaurant management dashboard</li>
                    <li>GPS-based delivery routing and optimization</li>
                    <li>Payment processing and digital wallets</li>
                    <li>Customer reviews and rating system</li>
                    <li>Push notifications and order alerts</li>
                </ul>
                
                <h4>Technical Implementation</h4>
                <p>Built with React Native for cross-platform mobile apps, Express.js for the backend API, PostgreSQL for order and restaurant data, and Maps API integration for location services. The platform uses geospatial queries for restaurant discovery and implements real-time tracking with WebSocket connections.</p>
            `,
            codepenId: 'example'
        },
        'Learning Management System': {
            title: 'Learning Management System',
            description: `
                <h4>Project Overview</h4>
                <p>A comprehensive learning management system designed for educational institutions and corporate training, featuring course creation, progress tracking, and interactive learning tools.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li>Interactive course creation and management</li>
                    <li>Progress tracking and analytics dashboard</li>
                    <li>Video streaming and multimedia content support</li>
                    <li>Assessment tools and automated grading</li>
                    <li>Discussion forums and collaboration features</li>
                    <li>Certificate generation and compliance tracking</li>
                </ul>
                
                <h4>Technical Implementation</h4>
                <p>Developed using Django for the robust backend with built-in admin features, React for the frontend with component-based architecture, Elasticsearch for fast course search and content discovery, and Docker for containerized deployment. The system implements SCORM compliance for e-learning standards and uses WebRTC for virtual classroom functionality.</p>
            `,
            codepenId: 'example'
        }
    };

    // Add click event to view buttons
    viewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.project-card');
            const projectTitle = card.querySelector('h3').textContent;
            const project = projectData[projectTitle];
            
            if (project && modal) {
                modalTitle.textContent = project.title;
                modalDescription.innerHTML = project.description;
                
                // Clear and set CodePen embed
                modalCodepen.innerHTML = '';
                if (project.codepenId && project.codepenId !== 'example') {
                    modalCodepen.innerHTML = `
                        <iframe 
                            height="300" 
                            style="width: 100%; border: none; border-radius: 8px;" 
                            scrolling="no" 
                            frameborder="no" 
                            allowtransparency="true" 
                            allowfullscreen="true"
                            src="https://codepen.io/team/codepen/embed/${project.codepenId}?default-tab=result&theme-id=dark">
                        </iframe>
                    `;
                } else {
                    modalCodepen.innerHTML = '<p><em>Live demo not available for this project</em></p>';
                }
                
                // Show modal
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal functionality
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formSuccess = document.getElementById('formSuccess');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Reset previous errors
            clearFormErrors();
            
            // Validate form
            if (!validateForm()) {
                return;
            }

            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual endpoint)
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                
                // Show success message
                formSuccess.classList.add('show');
                form.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.remove('show');
                }, 5000);
            }, 2000);
        });

        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    validateField(input);
                }
            });
        });
    }
}

function validateForm() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

function validateField(field) {
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    const errorElement = document.getElementById(fieldName + 'Error');

    // Reset field state
    field.classList.remove('error', 'success');
    if (errorElement) {
        errorElement.classList.remove('show');
    }

    // Validation rules
    let isValid = true;
    let errorMessage = '';

    switch (fieldName) {
        case 'name':
            if (fieldValue.length < 2) {
                isValid = false;
                errorMessage = 'Please enter your name (minimum 2 characters)';
            }
            break;
        case 'email':
            const emailRegex = /^[^ -- -ÿ-�]+@[^ -- -ÿ-�]+\.[^ -- -ÿ-�]+$/;
            if (!emailRegex.test(fieldValue)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
            break;
        case 'subject':
            if (fieldValue.length < 3) {
                isValid = false;
                errorMessage = 'Please enter a subject (minimum 3 characters)';
            }
            break;
        case 'message':
            if (fieldValue.length < 10) {
                isValid = false;
                errorMessage = 'Please enter your message (minimum 10 characters)';
            }
            break;
    }

    // Update field state
    if (!isValid) {
        field.classList.add('error');
        if (errorElement) {
            errorElement.textContent = errorMessage;
            errorElement.classList.add('show');
        }
    } else {
        field.classList.add('success');
    }

    return isValid;
}

function clearFormErrors() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, textarea');
    const errors = form.querySelectorAll('.form-error');

    inputs.forEach(input => {
        input.classList.remove('error', 'success');
    });

    errors.forEach(error => {
        error.classList.remove('show');
    });
}

// Enhanced cursor effects
function initEnhancedCursor() {
    if (AppState.isMobile) return; 
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.appendChild(follower);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth cursor animation
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .btn, .card-3d');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
    
    // Click effects
    document.addEventListener('mousedown', () => cursor.classList.add('click'));
    document.addEventListener('mouseup', () => cursor.classList.remove('click'));
}

// Advanced animations
function initAdvancedAnimations() {
    initAnimations();
    // Enhanced scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
            }
        });
    }, observerOptions);
    
    // Observe reveal elements
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
        observer.observe(el);
    });
}

// Micro-interactions
function initMicroInteractions() {
    // Enhanced button ripple effects
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Smooth reveal animations
function initSmoothReveal() {
    const sections = document.querySelectorAll('section');
    const revealElements = [];
    
    sections.forEach(section => {
        const elements = section.querySelectorAll('.stagger-item, .skill-category, .timeline-item, .portfolio-link-card, .testimonial-card');
        elements.forEach((el, index) => {
            el.classList.add('reveal-up');
            el.style.transitionDelay = `${index * 0.1}s`;
            revealElements.push(el);
        });
    });
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => revealObserver.observe(el));
}

// 3D effects
function init3DEffects() {
    const cards = document.querySelectorAll('.card-3d');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (AppState.isMobile) return; 
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Enhanced particle effect for hero section
function initParticleEffect() {
    const heroParticles = document.querySelector('.hero-particles');
    
    if (heroParticles) {
        const particleCount = AppState.performanceMode === 'low' ? 30 : 80;
        const particles = [];
        const particleTypes = ['circle', 'square', 'triangle', 'star', 'hexagon'];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
            const size = Math.random() * 6 + 2;
            const color = Math.random() > 0.5 ? '255, 107, 53' : (Math.random() > 0.5 ? '74, 158, 255' : '157, 78, 221');
            
            particle.className = `particle particle-${type}`;
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(${color}, ${Math.random() * 0.6 + 0.2});
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                pointer-events: none;
                animation: particleFloat ${Math.random() * 15 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                will-change: transform, opacity;
            `;
            
            if (type === 'triangle') {
                particle.style.width = '0';
                particle.style.height = '0';
                particle.style.borderLeft = `${size/2}px solid transparent`;
                particle.style.borderRight = `${size/2}px solid transparent`;
                particle.style.borderBottom = `${size}px solid rgba(${color}, ${Math.random() * 0.6 + 0.2})`;
                particle.style.background = 'transparent';
            } else if (type === 'star') {
                particle.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
            } else if (type === 'hexagon') {
                particle.style.clipPath = 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)';
            } else {
                particle.style.borderRadius = '50%';
            }
            
            heroParticles.appendChild(particle);
            particles.push(particle);
        }

        // Add enhanced floating animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleFloat {
                0% {
                    transform: translateY(0px) translateX(0px) rotate(0deg) scale(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                    transform: translateY(-10px) translateX(5px) rotate(45deg) scale(1);
                }
                50% {
                    transform: translateY(-50vh) translateX(${Math.random() * 100 - 50}px) rotate(180deg) scale(1.1);
                }
                90% {
                    opacity: 1;
                    transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(270deg) scale(0.9);
                }
                100% {
                    transform: translateY(-120vh) translateX(${Math.random() * 300 - 150}px) rotate(360deg) scale(0);
                    opacity: 0;
                }
            }
            
            .particle {
                filter: blur(0.5px);
            }
            
            .particle:hover {
                filter: blur(0px);
                transform: scale(1.5);
            }
        `;
        document.head.appendChild(style);
        
        // Interactive particle effects on mouse movement
        if (!AppState.isMobile) {
            heroParticles.addEventListener('mousemove', (e) => {
                const rect = heroParticles.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                particles.forEach((particle, index) => {
                    if (index % 3 === 0) { // Only affect every 3rd particle for performance
                        const particleRect = particle.getBoundingClientRect();
                        const particleX = particleRect.left + particleRect.width / 2 - rect.left;
                        const particleY = particleRect.top + particleRect.height / 2 - rect.top;
                        
                        const distance = Math.sqrt(Math.pow(x - particleX, 2) + Math.pow(y - particleY, 2));
                        
                        if (distance < 100) {
                            const force = (100 - distance) / 100;
                            const angle = Math.atan2(particleY - y, particleX - x);
                            const moveX = Math.cos(angle) * force * 20;
                            const moveY = Math.sin(angle) * force * 20;
                            
                            particle.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.5})`;
                        }
                    }
                });
            });
        }
    }
}

// Initialize geometric shapes
function initGeometricShapes() {
    const geometricContainer = document.querySelector('.geometric-shapes');
    
    if (geometricContainer) {
        const shapes = ['triangle', 'circle', 'square', 'hexagon'];
        const shapeCount = 12;
        
        for (let i = 0; i < shapeCount; i++) {
            const shape = document.createElement('div');
            const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
            
            shape.className = `geometric-shape ${shapeType}`;
            shape.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 10}s;
                animation-duration: ${Math.random() * 10 + 15}s;
            `;
            
            geometricContainer.appendChild(shape);
        }
    }
}

// Initialize cursor glow effect
function initCursorGlow() {
    const cursorGlow = document.querySelector('.cursor-glow');
    
    if (cursorGlow && !AppState.isMobile) {
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorGlow.classList.add('active');
        });
        
        document.addEventListener('mouseleave', () => {
            cursorGlow.classList.remove('active');
        });
        
        // Smooth cursor following
        function animateCursor() {
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;
            
            cursorGlow.style.left = currentX + 'px';
            cursorGlow.style.top = currentY + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        
        animateCursor();
    }
}

// Parallax effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-parallax') || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// Advanced features initialization
async function initAdvancedFeatures() {
    initMagneticButtons();
    initSmoothReveal();
    initAdvancedHoverEffects();
    initAdvancedKeyboardShortcuts();
    initMouseTracking();
    initProfessionalTransitions();
}

// Magnetic button effect
function initMagneticButtons() {
    const magneticElements = document.querySelectorAll('.btn, .nav-link');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            if (AppState.isMobile) return; 
            
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const distance = Math.sqrt(x * x + y * y);
            const maxDistance = 100;
            
            if (distance < maxDistance) {
                const strength = (maxDistance - distance) / maxDistance;
                const moveX = x * strength * 0.3;
                const moveY = y * strength * 0.3;
                
                element.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
            }
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
    });
}

// Smooth reveal animations
function initSmoothReveal() {
    const revealElements = document.querySelectorAll('.section-fade-in, .stagger-item');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => revealObserver.observe(el));
}

// Advanced hover effects
function initAdvancedHoverEffects() {
    const cards = document.querySelectorAll('.portfolio-card, .skill-category, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (AppState.isMobile) return; 
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Enhanced keyboard shortcuts
function initAdvancedKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return; 
        
        switch(e.key.toLowerCase()) {
            case 'h': scrollToSection('hero'); break;
            case 'a': scrollToSection('about'); break;
            case 's': scrollToSection('skills'); break;
            case 'p': scrollToSection('projects'); break;
            case 'c': scrollToSection('contact'); break;
            case 't': 
                const themeToggle = document.querySelector('.theme-toggle');
                if (themeToggle) themeToggle.click();
                break;
        }
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mouse tracking for parallax effects
function initMouseTracking() {
    if (AppState.isMobile) return; 
    
    document.addEventListener('mousemove', (e) => {
        const parallaxElements = document.querySelectorAll('[data-mouse-parallax]');
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.mouseParallax) || 0.05;
            const x = (e.clientX - window.innerWidth / 2) * speed;
            const y = (e.clientY - window.innerHeight / 2) * speed;
            
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Professional transitions
function initProfessionalTransitions() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                document.body.style.opacity = '0.9';
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth' });
                    document.body.style.opacity = '';
                }, 200);
            }
        });
    });
}

// Performance optimizations
async function initPerformanceOptimizations() {
    // Detect performance capabilities
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
            AppState.performanceMode = 'low';
        } else if (connection.effectiveType === '3g') {
            AppState.performanceMode = 'medium';
        }
    }
    
    // Optimize animations based on performance
    if (AppState.performanceMode === 'low') {
        document.body.classList.add('reduced-motion');
    }
    
    // Lazy load images
    initLazyLoading();
    
    // Optimize scroll events
    initOptimizedScroll();
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Optimized scroll handling
function initOptimizedScroll() {
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                // Throttled scroll operations
                updateScrollPosition();
                scrollTimeout = null;
            }, 16); // ~60fps
        }
    });
}

function updateScrollPosition() {
    AppState.scrollY = window.pageYOffset;
    
    // Update header state
    const header = document.querySelector('.header');
    if (header) {
        if (AppState.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

// Accessibility features
async function initAccessibilityFeatures() {
    // Focus management
    initFocusManagement();
    
    // Screen reader announcements
    initScreenReaderAnnouncements();
    
    // Keyboard navigation
    initKeyboardNavigation();
    
    // ARIA live regions
    initAriaLiveRegions();
}

function initFocusManagement() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Focus trap for modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            const modal = document.querySelector('.modal.active');
            if (modal) {
                trapFocus(e, modal);
            }
        }
    });
}
function trapFocus(event, element) {
    const focusableElements = element.querySelectorAll('a[href], button, textarea, input, select');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.key === 'Tab') {
        if (event.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                event.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                event.preventDefault();
            }
        }
    }
}
function initScreenReaderAnnouncements() {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.id = 'screen-reader-announcer';
    document.body.appendChild(announcer);
    
    // Global announcement function
    window.announceToScreenReader = (message) => {
        announcer.textContent = message;
        setTimeout(() => {
            announcer.textContent = '';
        }, 1000);
    };
}

function initKeyboardNavigation() {
    // Enhanced keyboard navigation for interactive elements
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const target = e.target;
            if (target.classList.contains('keyboard-clickable')) {
                e.preventDefault();
                target.click();
            }
        }
    });
}

function initAriaLiveRegions() {
    // Create live regions for dynamic content
    const regions = ['status', 'alerts', 'notifications'];
    
    regions.forEach(region => {
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = `aria-live-${region}`;
        document.body.appendChild(liveRegion);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// Console Easter egg
console.log('%c🚀 Welcome to Alex Chen\'s Professional Portfolio!', 'font-size: 20px; font-weight: bold; color: #ff6b35;');
console.log('%cBuilt with enterprise-grade security, performance, and accessibility.', 'font-size: 14px; color: #4a9eff;');
console.log('%cInterested in code? Check out repository!', 'font-size: 12px; color: #9d4edd;');
console.log('%cPerformance metrics loaded in ' + (performance.now() - PerformanceMonitor.startTime).toFixed(2) + 'ms', 'font-size: 11px; color: #666;');

function initModal() {
    const modal = document.getElementById("projectModal");
    const closeBtn = document.querySelector(".close-btn");
    const viewBtns = document.querySelectorAll(".project-view-btn");

    viewBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const card = this.closest(".project-card");
            const title = card.querySelector("h3").textContent;
            const description = card.querySelector("p").textContent;
            const codepenId = card.dataset.codepenId;

            document.getElementById("modalTitle").textContent = title;
            document.getElementById("modalDescription").textContent = description;

            const codepenContainer = document.getElementById("modalCodepen");
            codepenContainer.innerHTML = ''; // Clear previous embed

            if (codepenId) {
                const iframe = document.createElement("iframe");
                iframe.height = "300";
                iframe.style.width = "100%";
                iframe.scrolling = "no";
                iframe.title = title;
                iframe.src = `https://codepen.io/anon/embed/${codepenId}?height=300&theme-id=dark&default-tab=result`;
                iframe.frameBorder = "no";
                iframe.loading = "lazy";
                iframe.allowTransparency = "true";
                iframe.allowFullscreen = "true";
                codepenContainer.appendChild(iframe);
            }

            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

// Enhanced Lazy Loading
function initLazyLoading() {
    const lazyElements = document.querySelectorAll('.lazy-load');
    
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add loaded class with staggered delay
                setTimeout(() => {
                    element.classList.add('loaded');
                }, Math.random() * 200);
                
                lazyObserver.unobserve(element);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
    });
    
    lazyElements.forEach(element => {
        lazyObserver.observe(element);
    });
}

// Enhanced Theme Toggle
function initEnhancedThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            const isLight = body.classList.contains('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            
            // Add rotation animation
            themeToggle.style.transform = 'scale(1.1) rotate(360deg)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 400);
            
            // Announce theme change to screen readers
            if (window.announceToScreenReader) {
                window.announceToScreenReader(`Switched to ${isLight ? 'light' : 'dark'} theme`);
            }
        });
    }
}

// Enhanced Magnetic Buttons
function initMagneticButtonsEnhanced() {
    const magneticElements = document.querySelectorAll('.btn, .magnetic-btn-enhanced, .nav-link');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            if (AppState.isMobile) return; 
            
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const distance = Math.sqrt(x * x + y * y);
            const maxDistance = 100;
            
            if (distance < maxDistance) {
                const strength = (maxDistance - distance) / maxDistance;
                const moveX = x * strength * 0.3;
                const moveY = y * strength * 0.3;
                
                element.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
            }
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
        
        // Add ripple effect
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
                z-index: 1;
            `;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Glass Morphism Effects
function initGlassMorphismEffects() {
    const glassElements = document.querySelectorAll('.glass-card, .project-card, .portfolio-link-card');
    
    glassElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            if (AppState.isMobile) return;
            
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
    });
}
