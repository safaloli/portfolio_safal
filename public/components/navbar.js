// Navbar Component
class Navbar {
  constructor(options = {}) {
    this.brandName = options.brandName || 'Safal Oli';
    this.brandIcon = options.brandIcon || '🚀';
    this.links = options.links || [
      { text: 'Home', href: 'index.html' },
      { text: 'About', href: 'aboutMe.html' },
      { text: 'Projects', href: 'projects.html' },
      { text: 'Services', href: 'services.html' },
      { text: 'Contact', href: 'contact.html' }
    ];
    this.ctaButton = options.ctaButton || { text: 'Hire Me', href: 'contact.html' };
    this.currentPath = window.location.pathname.split('/').pop() || 'index.html';
    this.lastScrollTop = 0;
    this.scrollThreshold = 100;
  }

  // Generate the navbar HTML
  render() {
    return `
      <header id="main-header" class="bg-white shadow-md sticky top-0 z-50 transition-transform duration-300 ease-in-out">
        <nav class="container mx-auto px-6 py-4">
          <div class="flex justify-between items-center">
            <!-- Logo/Brand -->
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white text-xl">
                ${this.brandIcon}
              </div>
              <h1 class="text-2xl font-bold text-gray-900">${this.brandName}</h1>
            </div>

            <!-- Desktop Navigation Links -->
            <ul class="hidden md:flex space-x-8" id="nav-links">
              ${this.links.map(link => `
                <li>
                  <a href="${link.href}" 
                     class="nav-link ${this.isActive(link.href) ? 'active' : ''}" 
                     data-link>
                    ${link.text}
                  </a>
                </li>
              `).join('')}
            </ul>

            <!-- CTA Button -->
            <div class="hidden md:block">
              <a href="${this.ctaButton.href}" 
                 class="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg"
                 data-link>
                ${this.ctaButton.text}
              </a>
            </div>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" 
                    class="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-2 hover:bg-gray-100 transition-colors"
                    aria-label="Toggle mobile menu"
                    aria-expanded="false"
                    aria-controls="mobile-menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

          <!-- Mobile Menu -->
          <div id="mobile-menu" 
               class="hidden md:hidden mt-4 pb-4 transition-all duration-300 ease-in-out overflow-hidden"
               aria-hidden="true"
               role="menu">
            <ul class="space-y-3">
              ${this.links.map(link => `
                <li>
                  <a href="${link.href}" 
                     class="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded transition-colors ${this.isActive(link.href) ? 'bg-primary text-white hover:bg-primary-dark' : ''}" 
                     data-link>
                    ${link.text}
                  </a>
                </li>
              `).join('')}
              <li>
                <a href="${this.ctaButton.href}" 
                   class="block py-2 px-4 bg-primary text-white text-center rounded-lg hover:bg-primary-dark transition-colors"
                   data-link>
                  ${this.ctaButton.text}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    `;
  }

  // Check if link is active
  isActive(href) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    return currentPage === href || (currentPage === '' && href === 'index.html');
  }

  // Initialize the navbar
  init(containerId = 'navbar-container') {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id "${containerId}" not found`);
      return;
    }

    // Render navbar
    container.innerHTML = this.render();

    // Setup event listeners
    this.setupEventListeners();
  }

  // Setup event listeners
  setupEventListeners() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('main-header');
    
    // Mobile menu toggle with animation
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleMobileMenu();
      });
      
      // Change hamburger icon when menu is open
      mobileMenuBtn.addEventListener('click', () => {
        const svg = mobileMenuBtn.querySelector('svg path');
        if (mobileMenu.classList.contains('hidden')) {
          svg.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        } else {
          svg.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        }
      });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          this.closeMobileMenu();
        }
      }
    });

    // Handle navigation links
    const navLinks = document.querySelectorAll('[data-link]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // If it's a page link (not a hash), allow default behavior
        if (!href.startsWith('#')) {
          // Close mobile menu if open
          this.closeMobileMenu();
          
          // Add loading state
          link.style.opacity = '0.7';
          return; // Let the browser handle page navigation
        }
        
        // Handle hash links (for same-page navigation)
        e.preventDefault();
        const targetSection = document.querySelector(href);
        
        if (targetSection) {
          // Smooth scroll with offset for fixed header
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = targetSection.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }

        // Update active state
        this.updateActiveLink(link);

        // Close mobile menu if open
        this.closeMobileMenu();
      });
    });

    // Scroll event for navbar show/hide
    this.setupScrollBehavior();

    // Handle keyboard navigation (Escape key to close mobile menu)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        this.closeMobileMenu();
      }
    });

    // Prevent body scroll when mobile menu is open
    const preventScroll = () => {
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    // Add scroll-to-top functionality on logo click
    const logo = document.querySelector('.flex.items-center.space-x-3');
    if (logo) {
      logo.style.cursor = 'pointer';
      logo.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // Toggle mobile menu
  toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
      
      // Add animation classes
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.style.maxHeight = '0px';
        setTimeout(() => {
          mobileMenu.style.maxHeight = '500px';
        }, 10);
      }
      
      // Update ARIA attributes for accessibility
      const isExpanded = !mobileMenu.classList.contains('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
      mobileMenu.setAttribute('aria-hidden', !isExpanded);
    }
  }

  // Close mobile menu
  closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      
      // Reset hamburger icon
      const svg = mobileMenuBtn.querySelector('svg path');
      if (svg) {
        svg.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
      }
      
      // Update ARIA attributes
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      
      // Restore body scroll
      document.body.style.overflow = '';
    }
  }

  // Update active link styling
  updateActiveLink(activeLink) {
    const navLinks = document.querySelectorAll('[data-link]');
    navLinks.forEach(link => {
      link.classList.remove('active');
      
      // Remove mobile-specific active classes
      if (link.closest('#mobile-menu')) {
        link.classList.remove('bg-primary', 'text-white');
      }
    });
    
    activeLink.classList.add('active');
    
    // Add mobile-specific active classes
    if (activeLink.closest('#mobile-menu')) {
      activeLink.classList.add('bg-primary', 'text-white');
    }
  }

  // Setup scroll behavior for navbar hide/show
  setupScrollBehavior() {
    const header = document.getElementById('main-header');
    if (!header) return;

    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Handle scroll to show/hide navbar
  handleScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Scrolling down & past threshold
    if (currentScroll > this.lastScrollTop && currentScroll > this.scrollThreshold) {
      // Hide navbar
      header.style.transform = 'translateY(-100%)';
    } 
    // Scrolling up or at top
    else if (currentScroll < this.lastScrollTop || currentScroll <= this.scrollThreshold) {
      // Show navbar
      header.style.transform = 'translateY(0)';
      
      // Add shadow when scrolled
      if (currentScroll > 10) {
        header.classList.add('shadow-lg');
      } else {
        header.classList.remove('shadow-lg');
        header.classList.add('shadow-md');
      }
    }
    
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Navbar;
}

