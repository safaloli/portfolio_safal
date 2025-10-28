// Footer Component
class Footer {
  constructor(options = {}) {
    this.brandName = options.brandName || 'Safal Oli';
    this.year = options.year || new Date().getFullYear();
    this.tagline = options.tagline || 'Built with Node.js & Tailwind CSS';
    this.socialLinks = options.socialLinks || [
      { icon: '📧', href: 'mailto:your.email@example.com', title: 'Email', ariaLabel: 'Email' },
      { icon: '💻', href: 'https://github.com/yourusername', title: 'GitHub', ariaLabel: 'GitHub Profile' },
      { icon: '💼', href: 'https://linkedin.com/in/yourprofile', title: 'LinkedIn', ariaLabel: 'LinkedIn Profile' }
    ];
    this.showQuickLinks = options.showQuickLinks !== false;
    this.quickLinks = options.quickLinks || [
      { text: 'Home', href: '#home' },
      { text: 'About', href: '#about' },
      { text: 'Projects', href: '#projects' },
      { text: 'Contact', href: '#contact' }
    ];
  }

  // Generate social icons HTML
  renderSocialLinks() {
    return this.socialLinks.map(link => `
      <a href="${link.href}" 
         target="${link.href.startsWith('http') ? '_blank' : '_self'}"
         rel="${link.href.startsWith('http') ? 'noopener noreferrer' : ''}"
         class="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-primary rounded-lg transition-all duration-300 hover:scale-110 text-xl"
         title="${link.title}"
         aria-label="${link.ariaLabel}">
        ${link.icon}
      </a>
    `).join('');
  }

  // Generate quick links HTML
  renderQuickLinks() {
    if (!this.showQuickLinks) return '';
    
    return `
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4 text-white">Quick Links</h3>
        <ul class="flex flex-wrap justify-center gap-6">
          ${this.quickLinks.map(link => `
            <li>
              <a href="${link.href}" 
                 class="text-gray-400 hover:text-white transition-colors duration-300">
                ${link.text}
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  // Generate the footer HTML
  render() {
    return `
      <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-6">
          <!-- Quick Links (Optional) -->
          ${this.renderQuickLinks()}
          
          <!-- Social Icons -->
          <div class="flex justify-center space-x-4 mb-6">
            ${this.renderSocialLinks()}
          </div>
          
          <!-- Copyright Text -->
          <div class="text-center">
            <p class="text-gray-300 mb-2">
              © ${this.year} ${this.brandName}. All rights reserved.
            </p>
            ${this.tagline ? `<p class="text-gray-500 text-sm">${this.tagline}</p>` : ''}
          </div>
        </div>
      </footer>
    `;
  }

  // Initialize the footer
  init(containerId = 'footer-container') {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id "${containerId}" not found`);
      return;
    }

    // Render footer
    container.innerHTML = this.render();

    // Setup event listeners if needed
    this.setupEventListeners();
  }

  // Setup event listeners
  setupEventListeners() {
    // Smooth scrolling for internal links
    const footerLinks = document.querySelectorAll('footer a[href^="#"]');
    footerLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // Update year dynamically (useful for long-running single-page apps)
  updateYear() {
    this.year = new Date().getFullYear();
    const container = document.getElementById('footer-container');
    if (container) {
      container.innerHTML = this.render();
      this.setupEventListeners();
    }
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Footer;
}

