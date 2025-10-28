/**
 * Footer Component
 * A modern, responsive footer with beautiful gradients and animations
 * 
 * @class Footer
 * @param {Object} options - Configuration options
 * @param {string} options.brandName - Brand name to display
 * @param {number} options.year - Copyright year
 * @param {string} options.tagline - Footer tagline
 * @param {string} options.description - Brand description
 * @param {Array} options.socialLinks - Social media links array
 * @param {Array} options.quickLinks - Quick navigation links
 * @param {Array} options.services - Services or features list
 */
class Footer {
  constructor(options = {}) {
    this.brandName = options.brandName || 'Safal Oli';
    this.brandIcon = options.brandIcon || '🚀';
    this.year = options.year || new Date().getFullYear();
    this.tagline = options.tagline || 'Crafting Digital Experiences';
    this.description = options.description || 'Full-stack developer passionate about creating beautiful, functional web applications that make a difference.';
    
    this.socialLinks = options.socialLinks || [
      { 
        name: 'GitHub',
        icon: 'github',
        href: 'https://github.com/yourusername', 
        ariaLabel: 'Visit my GitHub profile',
        color: 'hover:text-purple-400'
      },
      { 
        name: 'LinkedIn',
        icon: 'linkedin',
        href: 'https://linkedin.com/in/yourprofile', 
        ariaLabel: 'Connect on LinkedIn',
        color: 'hover:text-blue-400'
      },
      { 
        name: 'Twitter',
        icon: 'twitter',
        href: 'https://twitter.com/yourusername', 
        ariaLabel: 'Follow on Twitter',
        color: 'hover:text-sky-400'
      },
      { 
        name: 'Email',
        icon: 'email',
        href: 'mailto:your.email@example.com', 
        ariaLabel: 'Send me an email',
        color: 'hover:text-red-400'
      }
    ];
    
    this.quickLinks = options.quickLinks || [
      { text: 'Home', href: 'index.html' },
      { text: 'About Me', href: 'aboutMe.html' },
      { text: 'Projects', href: 'projects.html' },
      { text: 'Services', href: 'services.html' },
      { text: 'Contact', href: 'contact.html' }
    ];
    
    this.services = options.services || [
      { text: 'Web Development', href: 'services.html#web-dev' },
      { text: 'UI/UX Design', href: 'services.html#design' },
      { text: 'Consulting', href: 'services.html#consulting' },
      { text: 'Maintenance', href: 'services.html#maintenance' }
    ];
    
    this.showNewsletter = options.showNewsletter !== false;
  }

  /**
   * Get SVG icon for social media
   * @param {string} iconName - Name of the icon
   * @returns {string} SVG markup
   */
  getSocialIcon(iconName) {
    const icons = {
      github: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
      linkedin: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
      twitter: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
      email: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
      instagram: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>'
    };
    return icons[iconName] || icons.email;
  }

  /**
   * Render social media links
   * @returns {string} HTML for social links
   */
  renderSocialLinks() {
    return this.socialLinks.map(link => `
      <a href="${link.href}" 
         target="${link.href.startsWith('http') ? '_blank' : '_self'}"
         rel="${link.href.startsWith('http') ? 'noopener noreferrer' : ''}"
         class="group relative w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${link.color} hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-primary/20"
         aria-label="${link.ariaLabel}"
         title="${link.name}">
        <span class="relative z-10 text-gray-400 group-hover:text-current transition-colors duration-300">
          ${this.getSocialIcon(link.icon)}
        </span>
        <div class="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary-dark/0 group-hover:from-primary/10 group-hover:to-primary-dark/10 rounded-xl transition-all duration-300"></div>
      </a>
    `).join('');
  }

  /**
   * Render quick links section
   * @returns {string} HTML for quick links
   */
  renderQuickLinks() {
    return `
      <div>
        <h3 class="text-lg font-bold text-white mb-6 relative inline-block">
          Quick Links
          <div class="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>
        </h3>
        <ul class="space-y-3">
          ${this.quickLinks.map(link => `
            <li>
              <a href="${link.href}" 
                 class="group flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                 data-footer-link>
                <svg class="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                <span>${link.text}</span>
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  /**
   * Render services section
   * @returns {string} HTML for services
   */
  renderServices() {
    return `
      <div>
        <h3 class="text-lg font-bold text-white mb-6 relative inline-block">
          Services
          <div class="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>
        </h3>
        <ul class="space-y-3">
          ${this.services.map(service => `
            <li>
              <a href="${service.href}" 
                 class="group flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                 data-footer-link>
                <svg class="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                <span>${service.text}</span>
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  /**
   * Render newsletter section
   * @returns {string} HTML for newsletter signup
   */
  renderNewsletter() {
    if (!this.showNewsletter) return '';
    
    return `
      <div>
        <h3 class="text-lg font-bold text-white mb-6 relative inline-block">
          Stay Updated
          <div class="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>
        </h3>
        <p class="text-gray-400 mb-4 text-sm">Subscribe to get the latest updates and news.</p>
        <form class="space-y-3" id="newsletter-form">
          <div class="relative">
            <input type="email" 
                   placeholder="Enter your email" 
                   required
                   class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                   aria-label="Email address for newsletter">
          </div>
          <button type="submit" 
                  class="w-full px-4 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group">
            <span>Subscribe</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>
        </form>
      </div>
    `;
  }

  /**
   * Generate the footer HTML
   * @returns {string} Complete footer HTML
   */
  render() {
    return `
      <footer class="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white overflow-hidden">
        <!-- Animated Background Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
        </div>
        
        <!-- Gradient Overlay -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-dark to-primary"></div>
        
        <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <!-- Main Footer Content -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <!-- Brand Section -->
            <div class="lg:col-span-1">
              <div class="flex items-center space-x-3 mb-6 group">
                <div class="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <span class="transform group-hover:scale-110 transition-transform duration-300">${this.brandIcon}</span>
                </div>
                <h3 class="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">${this.brandName}</h3>
              </div>
              <p class="text-gray-400 mb-4 text-sm leading-relaxed">${this.description}</p>
              <p class="text-primary font-semibold text-sm">${this.tagline}</p>
            </div>

            <!-- Quick Links -->
            <div class="lg:col-span-1">
              ${this.renderQuickLinks()}
            </div>

            <!-- Services -->
            <div class="lg:col-span-1">
              ${this.renderServices()}
            </div>

            <!-- Newsletter / Connect -->
            <div class="lg:col-span-1">
              ${this.renderNewsletter()}
            </div>
          </div>

          <!-- Divider -->
          <div class="border-t border-white/10 mb-8"></div>

          <!-- Bottom Section -->
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <!-- Social Links -->
            <div class="flex items-center gap-4">
              <span class="text-gray-400 text-sm mr-2">Connect:</span>
              <div class="flex gap-3">
                ${this.renderSocialLinks()}
              </div>
            </div>

            <!-- Copyright -->
            <div class="text-center md:text-right">
              <p class="text-gray-400 text-sm">
                © ${this.year} <span class="text-white font-semibold">${this.brandName}</span>. All rights reserved.
              </p>
              <p class="text-gray-500 text-xs mt-1">
                Made with <span class="text-red-500 animate-pulse">♥</span> using modern web technologies
              </p>
            </div>
          </div>
        </div>

        <!-- Scroll to Top Button -->
        <button id="scroll-to-top" 
                class="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white opacity-0 invisible transition-all duration-300 hover:scale-110 active:scale-95 z-40 group"
                aria-label="Scroll to top"
                title="Back to top">
          <svg class="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
        </button>
      </footer>
    `;
  }

  /**
   * Initialize the footer component
   * @param {string} containerId - ID of the container element
   * @returns {boolean} True if initialization was successful
   */
  init(containerId = 'footer-container') {
    try {
      const container = document.getElementById(containerId);
      if (!container) {
        console.error(`[Footer] Container with id "${containerId}" not found`);
        return false;
      }

      // Render footer
      container.innerHTML = this.render();

      // Setup event listeners
      this.setupEventListeners();

      console.log('[Footer] Initialized successfully');
      return true;
    } catch (error) {
      console.error('[Footer] Initialization failed:', error);
      return false;
    }
  }

  /**
   * Setup all event listeners
   */
  setupEventListeners() {
    // Smooth scrolling for footer links
    this.setupFooterLinks();
    
    // Scroll to top button
    this.setupScrollToTop();
    
    // Newsletter form
    this.setupNewsletterForm();
  }

  /**
   * Setup smooth scrolling for footer links
   */
  setupFooterLinks() {
    const footerLinks = document.querySelectorAll('[data-footer-link]');
    footerLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Handle hash links for smooth scrolling
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetSection = document.querySelector(href);
          
          if (targetSection) {
            const headerHeight = document.getElementById('main-header')?.offsetHeight || 0;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
        // For page links, add loading state
        else if (href && !href.startsWith('http')) {
          link.style.opacity = '0.7';
        }
      });
    });
  }

  /**
   * Setup scroll to top button functionality
   */
  setupScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');
    if (!scrollBtn) return;

    // Show/hide button based on scroll position
    const toggleScrollButton = () => {
      if (window.pageYOffset > 300) {
        scrollBtn.classList.remove('opacity-0', 'invisible');
        scrollBtn.classList.add('opacity-100', 'visible');
      } else {
        scrollBtn.classList.add('opacity-0', 'invisible');
        scrollBtn.classList.remove('opacity-100', 'visible');
      }
    };

    // Throttle scroll event
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(toggleScrollButton, 100);
    });

    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Initial check
    toggleScrollButton();
  }

  /**
   * Setup newsletter form submission
   */
  setupNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = form.querySelector('input[type="email"]').value;
      const button = form.querySelector('button[type="submit"]');
      const originalText = button.innerHTML;

      // Show loading state
      button.disabled = true;
      button.innerHTML = `
        <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
        <span>Subscribing...</span>
      `;

      try {
        // Simulate API call (replace with your actual API endpoint)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success state
        button.innerHTML = `
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <span>Subscribed!</span>
        `;
        button.classList.add('bg-green-500');
        
        // Clear form
        form.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
          button.innerHTML = originalText;
          button.classList.remove('bg-green-500');
          button.disabled = false;
        }, 3000);
        
        console.log('[Footer] Newsletter subscription:', email);
      } catch (error) {
        // Error state
        button.innerHTML = `
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
          <span>Try Again</span>
        `;
        button.classList.add('bg-red-500');
        
        setTimeout(() => {
          button.innerHTML = originalText;
          button.classList.remove('bg-red-500');
          button.disabled = false;
        }, 3000);
        
        console.error('[Footer] Newsletter subscription failed:', error);
      }
    });
  }

  /**
   * Update year dynamically (useful for long-running SPAs)
   */
  updateYear() {
    this.year = new Date().getFullYear();
    const container = document.getElementById('footer-container');
    if (container) {
      container.innerHTML = this.render();
      this.setupEventListeners();
    }
  }

  /**
   * Cleanup event listeners (useful for SPAs)
   */
  destroy() {
    const scrollBtn = document.getElementById('scroll-to-top');
    if (scrollBtn) {
      scrollBtn.remove();
    }
    console.log('[Footer] Destroyed successfully');
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Footer;
}

