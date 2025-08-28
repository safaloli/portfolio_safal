// ===== GLOBAL VARIABLES =====
let allProjects = [];
let allBlogPosts = [];

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// ===== INITIALIZE APPLICATION =====
function initializeApp() {
    loadProjects();
    loadBlogPosts();
    setupEventListeners();
    setupSmoothScrolling();
    setupNavbarScroll();
    setupAnimations();
    setupInteractiveFeatures();
    setupTypingEffect();
    setupParallaxEffect();
    setupSkillAnimation();
    setupParticleEffect();
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
        setupFormInteractions(contactForm);
    }

    // Project filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', handleProjectFilter);
    });

    // Mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarCollapse.classList.remove('show');
            });
        });
    }
}

// ===== FORM INTERACTIONS =====
function setupFormInteractions(form) {
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        // Add focus effects
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.style.borderColor = 'var(--accent-color)';
            this.style.boxShadow = '0 0 0 3px rgba(52, 152, 219, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
            this.style.borderColor = '';
            this.style.boxShadow = '';
        });
        
        // Add character counter for textarea
        if (input.tagName === 'TEXTAREA') {
            const counter = document.createElement('div');
            counter.className = 'char-counter';
            counter.style.cssText = `
                font-size: 0.8rem;
                color: var(--text-light);
                text-align: right;
                margin-top: 0.5rem;
            `;
            input.parentElement.appendChild(counter);
            
            input.addEventListener('input', function() {
                const remaining = 500 - this.value.length;
                counter.textContent = `${remaining} characters remaining`;
                counter.style.color = remaining < 50 ? '#e74c3c' : 'var(--text-light)';
            });
        }
    });
}

// ===== SMOOTH SCROLLING =====
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== NAVBAR SCROLL EFFECT =====
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    // Add scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // Update scroll indicator
        scrollIndicator.style.width = scrollPercent + '%';
        
        // Add/remove background opacity based on scroll
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }

        // Hide/show navbar on scroll (optional)
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// ===== ANIMATIONS =====
function setupAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.section, .project-card, .blog-card, .timeline-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// ===== PROJECTS API =====
async function loadProjects() {
    try {
        showLoading('recent-projects');
        showLoading('ongoing-projects');
        showLoading('all-projects');

        // Load recent projects
        const recentResponse = await fetch('/api/projects/recent');
        const recentProjects = await recentResponse.json();
        displayProjects(recentProjects, 'recent-projects');

        // Load ongoing projects
        const ongoingResponse = await fetch('/api/projects/ongoing');
        const ongoingProjects = await ongoingResponse.json();
        displayProjects(ongoingProjects, 'ongoing-projects');

        // Load all projects
        const allResponse = await fetch('/api/projects');
        allProjects = await allResponse.json();
        displayProjects(allProjects, 'all-projects');

    } catch (error) {
        console.error('Error loading projects:', error);
        showError('Failed to load projects. Please try again later.');
    }
}

function displayProjects(projects, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (projects.length === 0) {
        container.innerHTML = '<div class="col-12 text-center"><p>No projects found.</p></div>';
        return;
    }

    const projectsHTML = projects.map(project => createProjectCard(project)).join('');
    container.innerHTML = projectsHTML;
}

function createProjectCard(project) {
    const progressBar = project.isOngoing ? `
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${project.progress}%"></div>
        </div>
        <p class="text-muted">Progress: ${project.progress}%</p>
    ` : '';

    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="project-card" data-category="${project.category.toLowerCase()}">
                <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='/images/placeholder.jpg'">
                <div class="project-content">
                    <h4 class="project-title">${project.title}</h4>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    ${progressBar}
                    <div class="project-links">
                        <a href="${project.githubUrl}" target="_blank" class="project-link github">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        <a href="${project.liveUrl}" target="_blank" class="project-link demo">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function handleProjectFilter(e) {
    const filter = e.target.getAttribute('data-filter');
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    // Filter projects
    const projectCards = document.querySelectorAll('#all-projects .project-card');
    projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}

// ===== BLOG API =====
async function loadBlogPosts() {
    try {
        showLoading('blog-posts');

        const response = await fetch('/api/blog/recent');
        allBlogPosts = await response.json();
        displayBlogPosts(allBlogPosts);

    } catch (error) {
        console.error('Error loading blog posts:', error);
        showError('Failed to load blog posts. Please try again later.');
    }
}

function displayBlogPosts(posts) {
    const container = document.getElementById('blog-posts');
    if (!container) return;

    if (posts.length === 0) {
        container.innerHTML = '<div class="col-12 text-center"><p>No blog posts found.</p></div>';
        return;
    }

    const postsHTML = posts.map(post => createBlogCard(post)).join('');
    container.innerHTML = postsHTML;
}

function createBlogCard(post) {
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="blog-card">
                <img src="${post.image}" alt="${post.title}" class="blog-image" onerror="this.src='/images/blog-placeholder.jpg'">
                <div class="blog-content">
                    <h4 class="blog-title">${post.title}</h4>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <div class="blog-meta">
                        <span>${post.readTime}</span>
                        <span>${formatDate(post.date)}</span>
                    </div>
                    <div class="blog-tags">
                        ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ===== CONTACT FORM =====
async function handleContactSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Get form data
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    // Validation
    if (!data.name || !data.email || !data.message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }

    if (!isValidEmail(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }

    try {
        // Show loading state with animation
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending<span class="loading-dots"></span>';
        submitBtn.disabled = true;
        submitBtn.style.transform = 'scale(0.95)';

        // Send form data
        const response = await fetch('/api/contact/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            // Success animation
            submitBtn.style.background = '#27ae60';
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form with animation
            setTimeout(() => {
                form.reset();
                submitBtn.style.background = '';
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.transform = '';
            }, 2000);
        } else {
            showNotification(result.error || 'Failed to send message. Please try again.', 'error');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.transform = '';
        }

    } catch (error) {
        console.error('Contact form error:', error);
        showNotification('Failed to send message. Please try again later.', 'error');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.transform = '';
    }
}

// ===== UTILITY FUNCTIONS =====
function showLoading(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '<div class="col-12 text-center"><div class="spinner"></div><p>Loading...</p></div>';
    }
}

function showError(message) {
    showNotification(message, 'error');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'info'} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// ===== SCROLL TO TOP FUNCTION =====
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== ADD SCROLL TO TOP BUTTON =====
function addScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'btn btn-primary position-fixed';
    button.style.cssText = 'bottom: 20px; right: 20px; z-index: 999; width: 50px; height: 50px; border-radius: 50%; display: none;';
    button.onclick = scrollToTop;

    document.body.appendChild(button);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}

// ===== INITIALIZE SCROLL TO TOP BUTTON =====
addScrollToTopButton();

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
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

// Optimize scroll events
const optimizedScrollHandler = debounce(() => {
    // Any scroll-based functionality can be added here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// ===== LAZY LOADING FOR IMAGES =====
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
setupLazyLoading();

// ===== INTERACTIVE FEATURES =====
function setupInteractiveFeatures() {
    // Add click effects to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn, .filter-btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRippleEffect);
    });

    // Add hover sound effect (optional)
    const interactiveElements = document.querySelectorAll('.project-card, .blog-card, .skill-tag');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform + ' scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace(' scale(1.02)', '');
        });
    });
}

function createRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ===== TYPING EFFECT =====
function setupTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '2px solid #f39c12';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Blinking cursor effect
            setInterval(() => {
                heroTitle.style.borderRight = heroTitle.style.borderRight === '2px solid #f39c12' ? 
                    '2px solid transparent' : '2px solid #f39c12';
            }, 500);
        }
    };
    
    setTimeout(typeWriter, 1000);
}

// ===== PARALLAX EFFECT =====
function setupParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background, .profile-image');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ===== SKILL ANIMATION =====
function setupSkillAnimation() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    });
    
    skillTags.forEach(tag => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(tag);
    });
}

// ===== PARTICLE EFFECT =====
function setupParticleEffect() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 1;
    `;
    
    heroSection.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 20; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        pointer-events: none;
        animation: float 6s ease-in-out infinite;
    `;
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    
    container.appendChild(particle);
}

// Add particle animation CSS
const particleCSS = `
@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
    50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
}
`;

const style = document.createElement('style');
style.textContent = particleCSS;
document.head.appendChild(style);
