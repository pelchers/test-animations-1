document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.boxShadow = 'none';
        } else {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // Scroll fade animations
    const scrollElements = document.querySelectorAll('.scroll-fade');

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 90)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Initial check for elements in view
    handleScrollAnimation();

    // Auto-scrolling gallery
    const gallery = document.querySelector('.gallery-track');
    const slides = document.querySelectorAll('.gallery-slide');
    let currentIndex = 0;

    const scrollGallery = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        gallery.style.transform = `translateX(-${currentIndex * (800 + 32)}px)`;
    };

    setInterval(scrollGallery, 3000);

    // Profile Card Interaction
    const profileCard = document.querySelector('.profile-card-detailed');
    
    profileCard.addEventListener('click', () => {
        profileCard.classList.toggle('expanded');
    });

    // Feature List Interaction
    const featureList = document.querySelectorAll('.feature-list li');
    const profileContainer = document.querySelector('.profile-card-container');
    
    // Create feature cards
    const featureCards = {
        'AI-Powered Brand Matching': {
            title: 'Smart Matching System',
            stats: { matches: '95%', accuracy: '98%' },
            details: ['Algorithm-based matching', 'Interest alignment', 'Audience compatibility']
        },
        'Automated Payment System': {
            title: 'Secure Payments',
            stats: { processed: '$2M+', average: '$5K' },
            details: ['Instant transfers', 'Multiple currencies', 'Payment protection']
        },
        'Performance Analytics': {
            title: 'Deep Analytics',
            stats: { metrics: '50+', accuracy: '99.9%' },
            details: ['Real-time tracking', 'Custom reports', 'Trend analysis']
        },
        'Content Planning Tools': {
            title: 'Content Suite',
            stats: { tools: '25+', templates: '100+' },
            details: ['Calendar planning', 'Asset management', 'Team collaboration']
        }
    };

    // Create and append feature cards
    Object.entries(featureCards).forEach(([key, data]) => {
        const card = document.createElement('div');
        card.className = 'feature-card-detailed';
        card.innerHTML = `
            <div class="card-header">
                <h3>${data.title}</h3>
            </div>
            <div class="card-stats">
                ${Object.entries(data.stats).map(([label, value]) => `
                    <div class="stat-item">
                        <span class="stat-value">${value}</span>
                        <span class="stat-label">${label}</span>
                    </div>
                `).join('')}
            </div>
            <div class="card-details">
                <h4>Features</h4>
                <ul>
                    ${data.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `;
        profileContainer.appendChild(card);
    });

    // Handle feature clicks
    featureList.forEach((feature, index) => {
        feature.addEventListener('click', () => {
            // Hide all cards
            document.querySelectorAll('.feature-card-detailed').forEach(card => {
                card.classList.remove('active');
            });
            // Show selected card
            document.querySelectorAll('.feature-card-detailed')[index].classList.add('active');
        });
    });

    // Animated metrics
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const metrics = entry.target.querySelectorAll('.metric-value');
                metrics.forEach(metric => {
                    const value = parseInt(metric.dataset.value);
                    animateValue(metric, 0, value, 2000);
                });
                observer.unobserve(entry.target);
            }
        });
    };

    const metricsObserver = new IntersectionObserver(observerCallback, {
        threshold: 0.5
    });

    document.querySelectorAll('.metrics-section').forEach(section => {
        metricsObserver.observe(section);
    });

    // Testimonials Carousel
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;
    
    const showTestimonial = (index) => {
        testimonialCards.forEach(card => {
            card.classList.remove('active');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        testimonialCards[index].classList.add('active');
        dots[index].classList.add('active');
    };
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
        });
    });
    
    // Auto advance testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Add hover pause for workflow steps
    const workflowSteps = document.querySelectorAll('.step-card');
    workflowSteps.forEach(step => {
        step.addEventListener('mouseenter', () => {
            step.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        step.addEventListener('mouseleave', () => {
            step.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Brand Feature List Interaction
    const brandFeatureList = document.querySelectorAll('#brands .feature-list li');
    const brandProfileContainer = document.querySelector('#brands .profile-card-container');
    
    // Create brand feature cards
    const brandFeatureCards = {
        'Creator Discovery Engine': {
            title: 'Smart Discovery',
            stats: { reach: '10M+', creators: '2.5K+' },
            details: ['AI-powered matching', 'Audience analysis', 'Brand fit scoring']
        },
        'Campaign Management': {
            title: 'Campaign Suite',
            stats: { active: '500+', completed: '2K+' },
            details: ['Timeline planning', 'Content approval', 'Performance tracking']
        },
        'ROI Analytics': {
            title: 'Analytics Dashboard',
            stats: { metrics: '100+', insights: '24/7' },
            details: ['Real-time tracking', 'Conversion analysis', 'Engagement metrics']
        },
        'Brand Safety Tools': {
            title: 'Brand Protection',
            stats: { safety: '99.9%', verified: '100%' },
            details: ['Content screening', 'Reputation monitoring', 'Risk assessment']
        }
    };

    // Create and append brand feature cards
    Object.entries(brandFeatureCards).forEach(([key, data]) => {
        const card = document.createElement('div');
        card.className = 'feature-card-detailed';
        card.innerHTML = `
            <div class="card-header">
                <h3>${data.title}</h3>
            </div>
            <div class="card-stats">
                ${Object.entries(data.stats).map(([label, value]) => `
                    <div class="stat-item">
                        <span class="stat-value">${value}</span>
                        <span class="stat-label">${label}</span>
                    </div>
                `).join('')}
            </div>
            <div class="card-details">
                <h4>Features</h4>
                <ul>
                    ${data.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `;
        brandProfileContainer.appendChild(card);
    });

    // Handle brand feature clicks
    brandFeatureList.forEach((feature, index) => {
        feature.addEventListener('click', () => {
            document.querySelectorAll('#brands .feature-card-detailed').forEach(card => {
                card.classList.remove('active');
            });
            document.querySelectorAll('#brands .feature-card-detailed')[index].classList.add('active');
        });
    });
}); 