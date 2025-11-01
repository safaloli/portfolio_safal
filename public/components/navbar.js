/**
 * Navbar Component
 * A modern, responsive navigation bar with smooth animations and accessibility features
 * 
 * @class Navbar
 * @param {Object} options - Configuration options
 * @param {string} options.brandName - Brand name to display
 * @param {string} options.brandIcon - Brand icon/emoji
 * @param {Array} options.links - Navigation links array
 * @param {Object} options.ctaButton - Call-to-action button configuration
 */
class Navbar {
  constructor(options = {}) {
    // Configuration
    this.brandName = options.brandName || 'Safal Oli';
    this.brandIcon = options.brandIcon || '🚀';
    this.links = options.links || [
      { text: 'Home', href: 'index.html' },
      { text: 'About', href: 'aboutMe.html' },
      { text: 'Projects', href: 'projects.html' },
      { text: 'Services', href: 'services.html' },
      { text: 'Resources', href: '#resources' },
      { text: 'Contact', href: 'contact.html' }
    ];
    this.ctaButton = options.ctaButton || { text: 'Hire Me', href: 'contact.html' };
    
    // State management
    this.currentPath = window.location.pathname.split('/').pop() || 'index.html';
    this.lastScrollTop = 0;
    this.scrollThreshold = 100;
    this.isMobileMenuOpen = false;
    this.isScrolling = false;
    this.isMegaMenuOpen = false;
    this.isResourcesMegaMenuOpen = false;
    
    // DOM element references (cached for performance)
    this.elements = {
      header: null,
      mobileMenu: null,
      mobileMenuBtn: null,
      navLinks: null,
      megaMenu: null,
      servicesLink: null,
      resourcesMegaMenu: null,
      resourcesBtn: null,
      resourcesDropdown: null
    };
    
    // Bound methods for proper event listener cleanup
    this.boundHandlers = {
      handleScroll: this.throttle(this.handleScroll.bind(this), 100),
      handleClickOutside: this.handleClickOutside.bind(this),
      handleKeydown: this.handleKeydown.bind(this),
      handleMobileMenuToggle: this.handleMobileMenuToggle.bind(this)
    };
  }

  /**
   * Utility: Throttle function to limit execution rate
   * @param {Function} func - Function to throttle
   * @param {number} wait - Wait time in milliseconds
   * @returns {Function} Throttled function
   */
  throttle(func, wait) {
    let timeout = null;
    let lastRan = Date.now();
    
    return function executedFunction(...args) {
      const context = this;
      
      if (timeout) {
        clearTimeout(timeout);
      }
      
      const timeSinceLastRan = Date.now() - lastRan;
      
      if (timeSinceLastRan >= wait) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        timeout = setTimeout(() => {
          func.apply(context, args);
          lastRan = Date.now();
        }, wait - timeSinceLastRan);
      }
    };
  }

  /**
   * Generate the navbar HTML
   * @returns {string} HTML string for the navbar
   */
  render() {
    const navLinksHtml = this.links
      .map(link => this.renderNavLink(link))
      .join('');
    
    const mobileLinksHtml = this.links
      .map(link => this.renderMobileNavLink(link))
      .join('');

    return `
      <header id="main-header" class="bg-white/95 backdrop-blur-lg shadow-md sticky top-0 z-50 transition-all duration-300 ease-in-out border-b border-gray-100/50">
        <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-4" role="navigation" aria-label="Main navigation">
          <div class="flex justify-between items-center">
            <!-- Logo/Brand -->
            <div class="flex items-center space-x-3 cursor-pointer group" id="navbar-brand" role="button" tabindex="0" aria-label="Scroll to top">
              <div class="w-11 h-11 bg-gradient-to-br from-primary via-primary to-primary-dark rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span class="relative z-10 transform group-hover:scale-110 transition-transform duration-300">${this.brandIcon}</span>
              </div>
              <h1 class="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent group-hover:from-primary group-hover:via-primary-dark group-hover:to-primary transition-all duration-300">${this.brandName}</h1>
            </div>

            <!-- Desktop Navigation Links -->
            <ul class="hidden md:flex space-x-1 items-center relative" id="nav-links" role="menubar">
              ${navLinksHtml}
            </ul>

            <!-- CTA Button -->
            <div class="hidden md:block">
              <a href="${this.ctaButton.href}" 
                 class="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden font-bold text-sm text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 group active:scale-95"
                 data-link
                 role="button">
                <span class="relative z-10 flex items-center gap-2">
                ${this.ctaButton.text}
                  <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </a>
            </div>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" 
                    class="md:hidden relative text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-xl p-2.5 hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary-dark/5 transition-all duration-300 active:scale-90 group"
                    aria-label="Toggle mobile menu"
                    aria-expanded="false"
                    aria-controls="mobile-menu">
              <svg class="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="menu-icon">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" id="menu-icon-path"/>
              </svg>
            </button>
          </div>

          <!-- Mobile Menu -->
          <div id="mobile-menu" 
               class="hidden md:hidden mt-6 pb-4 transition-all duration-500 ease-in-out overflow-hidden"
               aria-hidden="true"
               role="menu"
               style="max-height: 0;">
            <div class="bg-gradient-to-br from-gray-50 via-white to-gray-50/50 rounded-2xl shadow-inner p-4 border border-gray-100/50 backdrop-blur-sm">
              <ul class="space-y-2">
                ${mobileLinksHtml}
                <li role="none" class="pt-3 mt-3 border-t border-gray-200/50">
                <a href="${this.ctaButton.href}" 
                     class="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-primary to-primary-dark text-white text-center text-sm font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 group"
                     data-link
                     role="menuitem">
                    <span>${this.ctaButton.text}</span>
                    <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                </a>
              </li>
            </ul>
            </div>
          </div>
        </nav>
      </header>
    `;
  }

  /**
   * Render a single desktop navigation link
   * @param {Object} link - Link configuration
   * @returns {string} HTML string for the link
   */
  renderNavLink(link) {
    const isActive = this.isActive(link.href);
    const activeClasses = isActive 
      ? 'bg-gradient-to-r from-primary/10 to-primary-dark/10 text-primary font-semibold shadow-sm' 
      : 'text-gray-700 hover:text-primary';
    
    // Special handling for Services link with mega menu
    if (link.text === 'Services') {
      return `
        <li role="none" class="relative" id="services-dropdown">
          <button 
             class="nav-link px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50 relative group text-sm ${activeClasses} flex items-center gap-1" 
             id="services-menu-btn"
             role="menuitem"
             aria-haspopup="true"
             aria-expanded="false"
             ${isActive ? 'aria-current="page"' : ''}>
            <span class="relative z-10">${link.text}</span>
            <svg class="w-4 h-4 transition-transform duration-300 mega-menu-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
            ${isActive ? '<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>' : ''}
            <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          ${this.renderMegaMenu()}
        </li>
      `;
    }
    
    // Special handling for Resources link with mega menu
    if (link.text === 'Resources') {
      return `
        <li role="none" id="resources-dropdown">
          <button 
             class="nav-link px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50 relative group text-sm ${activeClasses} flex items-center gap-1" 
             id="resources-menu-btn"
             role="menuitem"
             aria-haspopup="true"
             aria-expanded="false"
             ${isActive ? 'aria-current="page"' : ''}>
            <span class="relative z-10">${link.text}</span>
            <svg class="w-4 h-4 transition-transform duration-300 resources-menu-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
            ${isActive ? '<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>' : ''}
            <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          ${this.renderResourcesMegaMenu()}
        </li>
      `;
    }
    
    return `
      <li role="none">
        <a href="${link.href}" 
           class="nav-link px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50 relative group text-sm ${activeClasses}" 
           data-link
           role="menuitem"
           ${isActive ? 'aria-current="page"' : ''}>
          <span class="relative z-10">${link.text}</span>
          ${isActive ? '<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>' : ''}
          <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </li>
    `;
  }

  /**
   * Render the mega menu for Services
   * @returns {string} HTML string for the mega menu
   */
  renderMegaMenu() {
    // Services data for mega menu with Lucide icon names
    const services = [
      {
        icon: 'code',
        title: 'Software Developer Services',
        description: 'Custom solutions tailored for your needs.',
      },
      {
        icon: 'settings',
        title: 'Automation & Integrations',
        description: 'Connecting services and automating workflows.',
      },
      {
        icon: 'smartphone',
        title: 'Mobile App Development',
        description: 'Building cross-platform apps with Flutter.',
      },
      {
        icon: 'palette',
        title: 'UI/UX Design & Prototyping',
        description: 'Crafting intuitive and beautiful user interfaces.',
      },
      {
        icon: 'cloud',
        title: 'Cloud & Backend Solutions',
        description: 'Scalable backend services and cloud integration.',
      },
      {
        icon: 'bar-chart-3',
        title: 'Data & Analytics',
        description: 'Implementing analytics for data-driven decisions.',
      },
      {
        icon: 'briefcase',
        title: 'Business & Brand Solutions',
        description: 'Digital strategies to elevate your brand.',
      },
      {
        icon: 'wrench',
        title: 'Maintenance & Support',
        description: 'Ongoing support to keep your apps running.',
      },
      {
        icon: 'shield-check',
        title: 'Authentication & Admin Systems',
        description: 'Secure auth and powerful admin panels.',
      },
      {
        icon: 'rocket',
        title: 'Consulting & MVP Development',
        description: 'Strategic guidance for startups and MVPs.',
      }
    ];

    const servicesHtml = services.map(service => `
      <div class="group p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer hover:shadow-md">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
            <i data-lucide="${service.icon}" class="w-5 h-5 text-blue-600"></i>
          </div>
          <div class="flex-1">
            <h3 class="font-semibold text-gray-900 mb-1 text-sm group-hover:text-primary transition-colors">${service.title}</h3>
            <p class="text-xs text-gray-600 leading-relaxed">${service.description}</p>
          </div>
        </div>
      </div>
    `).join('');

    return `
      <div id="mega-menu" 
           class="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-200 opacity-0 invisible transition-all duration-300 z-50"
           role="menu"
           style="transform: translateX(-50%) translateY(10px);">
        <div class="p-6">
          <div class="grid grid-cols-2 gap-3">
            ${servicesHtml}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render the mega menu for Resources
   * @returns {string} HTML string for the resources mega menu
   */
  renderResourcesMegaMenu() {
    const resourcesData = {
      'Learn & Insights': {
        description: 'Build authority through useful, real-world content',
        items: [
          { icon: 'book-open', title: 'Blog', subtitle: 'Latest articles and thoughts' },
          { icon: 'briefcase', title: 'Case Studies', subtitle: 'In-depth project analyses' },
          { icon: 'video', title: 'Tutorials', subtitle: 'Step-by-step guides' },
          { icon: 'file-text', title: 'Whitepapers', subtitle: 'Comprehensive reports' }
        ]
      },
      'Free Tools': {
        description: 'Practical tools that keep visitors coming back',
        items: [
          { icon: 'code-2', title: 'Code Snippets', subtitle: 'Reusable Flutter code' },
          { icon: 'layout', title: 'UI Kit', subtitle: 'Design components for projects' },
          { icon: 'calculator', title: 'Project Estimator', subtitle: 'Estimate your project timeline' },
          { icon: 'inspect', title: 'Widget Inspector', subtitle: 'Analyze widget trees' }
        ]
      },
      'Free Resources': {
        description: 'Assets that demonstrate design and development skills',
        items: [
          { icon: 'book', title: 'E-books', subtitle: 'Guides and deep dives' },
          { icon: 'list-checks', title: 'Checklists', subtitle: 'For development and launch' },
          { icon: 'map', title: 'Flutter Roadmap', subtitle: 'A learning path for beginners' },
          { icon: 'mail', title: 'Newsletter', subtitle: 'Stay up to date' }
        ]
      },
      'Community & Connect': {
        description: 'Encourage engagement and stay connected',
        items: [
          { icon: 'github', title: 'GitHub', subtitle: 'See my open-source work' },
          { icon: 'linkedin', title: 'LinkedIn', subtitle: 'Connect professionally' },
          { icon: 'message-circle', title: 'Contact Me', subtitle: 'Send a message' },
          { icon: 'calendar', title: 'Book a Call', subtitle: 'Schedule a meeting' }
        ]
      }
    };

    const categoriesHtml = Object.entries(resourcesData).map(([category, data]) => `
      <div>
        <div class="mb-4">
          <h3 class="text-base font-bold text-gray-900">${category}</h3>
        </div>
        <div class="space-y-2">
          ${data.items.map(item => `
            <div class="group p-2.5 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 cursor-pointer hover:shadow-md">
              <div class="flex items-start gap-2">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                  <i data-lucide="${item.icon}" class="w-4 h-4 text-blue-600"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="font-semibold text-gray-900 text-sm mb-0.5 group-hover:text-primary transition-colors">${item.title}</h4>
                  <p class="text-xs text-gray-600 leading-snug">${item.subtitle}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    return `
      <div id="resources-mega-menu" 
           class="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[1200px] bg-white rounded-2xl shadow-2xl border border-gray-200 opacity-0 invisible transition-all duration-300 z-50"
           role="menu"
           style="transform: translateX(-50%) translateY(10px);">
        <div class="p-6">
          <div class="grid grid-cols-4 gap-6">
            ${categoriesHtml}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render a single mobile navigation link
   * @param {Object} link - Link configuration
   * @returns {string} HTML string for the link
   */
  renderMobileNavLink(link) {
    const isActive = this.isActive(link.href);
    const activeClasses = isActive 
      ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-md font-semibold' 
      : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 hover:text-primary';
    return `
      <li role="none">
        <a href="${link.href}" 
           class="flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300 group ${activeClasses}" 
           data-link
           role="menuitem"
           ${isActive ? 'aria-current="page"' : ''}>
          <span>${link.text}</span>
          ${isActive ? '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' : '<svg class="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>'}
        </a>
      </li>
    `;
  }

  /**
   * Check if a link is active based on current page
   * @param {string} href - Link href to check
   * @returns {boolean} True if link is active
   */
  isActive(href) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    return currentPage === href || (currentPage === '' && href === 'index.html');
  }

  /**
   * Initialize the navbar component
   * @param {string} containerId - ID of the container element
   * @returns {boolean} True if initialization was successful
   */
  init(containerId = 'navbar-container') {
    try {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`[Navbar] Container with id "${containerId}" not found`);
        return false;
    }

    // Render navbar
    container.innerHTML = this.render();

      // Cache DOM elements for better performance
      this.cacheElements();

    // Setup event listeners
    this.setupEventListeners();

      console.log('[Navbar] Initialized successfully');
      return true;
    } catch (error) {
      console.error('[Navbar] Initialization failed:', error);
      return false;
    }
  }

  /**
   * Cache DOM elements for better performance
   */
  cacheElements() {
    this.elements.header = document.getElementById('main-header');
    this.elements.mobileMenu = document.getElementById('mobile-menu');
    this.elements.mobileMenuBtn = document.getElementById('mobile-menu-btn');
    this.elements.navLinks = document.querySelectorAll('[data-link]');
    this.elements.brand = document.getElementById('navbar-brand');
    this.elements.menuIconPath = document.getElementById('menu-icon-path');
    this.elements.megaMenu = document.getElementById('mega-menu');
    this.elements.servicesBtn = document.getElementById('services-menu-btn');
    this.elements.servicesDropdown = document.getElementById('services-dropdown');
    this.elements.resourcesMegaMenu = document.getElementById('resources-mega-menu');
    this.elements.resourcesBtn = document.getElementById('resources-menu-btn');
    this.elements.resourcesDropdown = document.getElementById('resources-dropdown');
  }

  /**
   * Setup all event listeners
   */
  setupEventListeners() {
    // Mobile menu toggle
    if (this.elements.mobileMenuBtn) {
      this.elements.mobileMenuBtn.addEventListener('click', this.boundHandlers.handleMobileMenuToggle);
    }

    // Handle navigation links
    this.elements.navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleNavLinkClick(e, link));
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', this.boundHandlers.handleClickOutside);

    // Handle keyboard navigation
    document.addEventListener('keydown', this.boundHandlers.handleKeydown);

    // Scroll event for navbar show/hide
    window.addEventListener('scroll', this.boundHandlers.handleScroll);

    // Brand/logo click for scroll to top
    if (this.elements.brand) {
      this.elements.brand.addEventListener('click', this.handleBrandClick.bind(this));
      this.elements.brand.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleBrandClick();
        }
      });
    }

    // Mega menu event listeners
    this.setupMegaMenuListeners();
  }

  /**
   * Setup mega menu event listeners
   */
  setupMegaMenuListeners() {
    // Services mega menu
    if (this.elements.servicesBtn && this.elements.servicesDropdown) {
      // Hover events for desktop
      this.elements.servicesDropdown.addEventListener('mouseenter', () => {
        this.closeResourcesMegaMenu(); // Close resources menu if open
        this.openMegaMenu();
      });

      this.elements.servicesDropdown.addEventListener('mouseleave', () => {
        this.closeMegaMenu();
      });

      // Click event for mobile/tablet
      this.elements.servicesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.closeResourcesMegaMenu(); // Close resources menu if open
        this.toggleMegaMenu();
      });

      // Click on mega menu items to navigate to services page
      if (this.elements.megaMenu) {
        this.elements.megaMenu.addEventListener('click', () => {
          window.location.href = 'services.html';
        });
      }
    }

    // Resources mega menu
    if (this.elements.resourcesBtn && this.elements.resourcesDropdown) {
      // Hover events for desktop
      this.elements.resourcesDropdown.addEventListener('mouseenter', () => {
        this.closeMegaMenu(); // Close services menu if open
        this.openResourcesMegaMenu();
      });

      this.elements.resourcesDropdown.addEventListener('mouseleave', () => {
        this.closeResourcesMegaMenu();
      });

      // Click event for mobile/tablet
      this.elements.resourcesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.closeMegaMenu(); // Close services menu if open
        this.toggleResourcesMegaMenu();
      });
    }
  }

  /**
   * Handle mobile menu toggle button click
   * @param {Event} e - Click event
   */
  handleMobileMenuToggle(e) {
    e.stopPropagation();
    this.toggleMobileMenu();
  }

  /**
   * Handle click outside mobile menu and mega menu
   * @param {Event} e - Click event
   */
  handleClickOutside(e) {
    const { mobileMenu, mobileMenuBtn, servicesDropdown, resourcesDropdown } = this.elements;
    
    // Close mobile menu if clicking outside
    if (this.isMobileMenuOpen && mobileMenu && mobileMenuBtn) {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        this.closeMobileMenu();
      }
    }
    
    // Close services mega menu if clicking outside
    if (this.isMegaMenuOpen && servicesDropdown) {
      if (!servicesDropdown.contains(e.target)) {
        this.closeMegaMenu();
      }
    }
    
    // Close resources mega menu if clicking outside
    if (this.isResourcesMegaMenuOpen && resourcesDropdown) {
      if (!resourcesDropdown.contains(e.target)) {
        this.closeResourcesMegaMenu();
      }
    }
  }

  /**
   * Handle keyboard events
   * @param {KeyboardEvent} e - Keyboard event
   */
  handleKeydown(e) {
    if (e.key === 'Escape') {
      if (this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
      if (this.isMegaMenuOpen) {
        this.closeMegaMenu();
      }
      if (this.isResourcesMegaMenuOpen) {
        this.closeResourcesMegaMenu();
      }
    }
  }

  /**
   * Handle brand/logo click
   */
  handleBrandClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /**
   * Handle navigation link click
   * @param {Event} e - Click event
   * @param {HTMLElement} link - Link element
   */
  handleNavLinkClick(e, link) {
        const href = link.getAttribute('href');
        
        // If it's a page link (not a hash), allow default behavior
    if (!href || !href.startsWith('#')) {
          // Close mobile menu if open
          this.closeMobileMenu();
          
      // Add loading state with smooth transition
      link.style.transition = 'opacity 0.2s';
          link.style.opacity = '0.7';
          return; // Let the browser handle page navigation
        }
        
        // Handle hash links (for same-page navigation)
        e.preventDefault();
    this.scrollToSection(href);
    this.updateActiveLink(link);
    this.closeMobileMenu();
  }

  /**
   * Scroll to a specific section
   * @param {string} href - Hash link to section
   */
  scrollToSection(href) {
        const targetSection = document.querySelector(href);
        
    if (targetSection && this.elements.header) {
      const headerHeight = this.elements.header.offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
    }
  }

  /**
   * Toggle mobile menu open/close
   */
  toggleMobileMenu() {
    if (this.isMobileMenuOpen) {
        this.closeMobileMenu();
      } else {
      this.openMobileMenu();
    }
  }

  /**
   * Open mobile menu
   */
  openMobileMenu() {
    const { mobileMenu, mobileMenuBtn, menuIconPath } = this.elements;
    
    if (!mobileMenu) return;

    this.isMobileMenuOpen = true;
    mobileMenu.classList.remove('hidden');
    
    // Animate menu open
    requestAnimationFrame(() => {
          mobileMenu.style.maxHeight = '500px';
    });
    
    // Change to close icon
    if (menuIconPath) {
      menuIconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
      }
      
      // Update ARIA attributes for accessibility
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
      mobileMenuBtn.setAttribute('aria-label', 'Close mobile menu');
    }
    mobileMenu.setAttribute('aria-hidden', 'false');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
  }

  /**
   * Close mobile menu
   */
  closeMobileMenu() {
    const { mobileMenu, mobileMenuBtn, menuIconPath } = this.elements;
    
    if (!mobileMenu || !this.isMobileMenuOpen) return;

    this.isMobileMenuOpen = false;
    
    // Animate menu close
    mobileMenu.style.maxHeight = '0px';
    
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300); // Match transition duration
    
    // Change to hamburger icon
    if (menuIconPath) {
      menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
      }
      
      // Update ARIA attributes
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.setAttribute('aria-label', 'Toggle mobile menu');
    }
      mobileMenu.setAttribute('aria-hidden', 'true');
      
      // Restore body scroll
      document.body.style.overflow = '';
  }

  /**
   * Update active link styling
   * @param {HTMLElement} activeLink - Link element to mark as active
   */
  updateActiveLink(activeLink) {
    if (!activeLink) return;
    
    this.elements.navLinks.forEach(link => {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
      
      // Remove mobile-specific active classes
      if (link.closest('#mobile-menu')) {
        link.classList.remove('bg-gradient-to-r', 'from-primary', 'to-primary-dark', 'text-white', 'shadow-md', 'font-semibold');
        link.classList.add('text-gray-700');
      }
      
      // Remove desktop-specific active classes
      if (!link.closest('#mobile-menu')) {
        link.classList.remove('bg-gradient-to-r', 'from-primary/10', 'to-primary-dark/10', 'text-primary', 'font-semibold', 'shadow-sm');
        link.classList.add('text-gray-700');
      }
    });
    
    activeLink.classList.add('active');
    activeLink.setAttribute('aria-current', 'page');
    
    // Add mobile-specific active classes
    if (activeLink.closest('#mobile-menu')) {
      activeLink.classList.add('bg-gradient-to-r', 'from-primary', 'to-primary-dark', 'text-white', 'shadow-md', 'font-semibold');
      activeLink.classList.remove('text-gray-700');
    } else {
      // Add desktop-specific active classes
      activeLink.classList.add('bg-gradient-to-r', 'from-primary/10', 'to-primary-dark/10', 'text-primary', 'font-semibold', 'shadow-sm');
      activeLink.classList.remove('text-gray-700');
    }
  }

  /**
   * Handle scroll to show/hide navbar
   */
  handleScroll() {
    if (!this.elements.header) return;

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Don't hide navbar if mobile menu is open
    if (this.isMobileMenuOpen) {
      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      return;
    }
    
    // Scrolling down & past threshold
    if (currentScroll > this.lastScrollTop && currentScroll > this.scrollThreshold) {
      // Hide navbar
      this.elements.header.style.transform = 'translateY(-100%)';
    } 
    // Scrolling up or at top
    else if (currentScroll < this.lastScrollTop || currentScroll <= this.scrollThreshold) {
      // Show navbar
      this.elements.header.style.transform = 'translateY(0)';
    }
    
    // Update shadow based on scroll position
    this.updateHeaderShadow(currentScroll);
    
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  /**
   * Update header shadow based on scroll position
   * @param {number} scrollPosition - Current scroll position
   */
  updateHeaderShadow(scrollPosition) {
    if (!this.elements.header) return;
    
    if (scrollPosition > 10) {
      this.elements.header.classList.add('shadow-lg');
      this.elements.header.classList.remove('shadow-md');
      } else {
      this.elements.header.classList.remove('shadow-lg');
      this.elements.header.classList.add('shadow-md');
    }
  }

  /**
   * Open mega menu
   */
  openMegaMenu() {
    if (!this.elements.megaMenu || !this.elements.servicesBtn) return;
    
    this.isMegaMenuOpen = true;
    this.elements.megaMenu.style.opacity = '1';
    this.elements.megaMenu.style.visibility = 'visible';
    this.elements.megaMenu.style.transform = 'translateX(-50%) translateY(0)';
    
    // Rotate arrow
    const arrow = this.elements.servicesBtn.querySelector('.mega-menu-arrow');
    if (arrow) {
      arrow.style.transform = 'rotate(180deg)';
    }
    
    // Update ARIA
    this.elements.servicesBtn.setAttribute('aria-expanded', 'true');
    
    // Initialize Lucide icons in the mega menu
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  /**
   * Close mega menu
   */
  closeMegaMenu() {
    if (!this.elements.megaMenu || !this.elements.servicesBtn) return;
    
    this.isMegaMenuOpen = false;
    this.elements.megaMenu.style.opacity = '0';
    this.elements.megaMenu.style.visibility = 'hidden';
    this.elements.megaMenu.style.transform = 'translateX(-50%) translateY(10px)';
    
    // Reset arrow rotation
    const arrow = this.elements.servicesBtn.querySelector('.mega-menu-arrow');
    if (arrow) {
      arrow.style.transform = 'rotate(0deg)';
    }
    
    // Update ARIA
    this.elements.servicesBtn.setAttribute('aria-expanded', 'false');
  }

  /**
   * Toggle mega menu
   */
  toggleMegaMenu() {
    if (this.isMegaMenuOpen) {
      this.closeMegaMenu();
    } else {
      this.openMegaMenu();
    }
  }

  /**
   * Open resources mega menu
   */
  openResourcesMegaMenu() {
    if (!this.elements.resourcesMegaMenu || !this.elements.resourcesBtn) return;
    
    this.isResourcesMegaMenuOpen = true;
    this.elements.resourcesMegaMenu.style.opacity = '1';
    this.elements.resourcesMegaMenu.style.visibility = 'visible';
    this.elements.resourcesMegaMenu.style.transform = 'translateX(-50%) translateY(0)';
    
    // Rotate arrow
    const arrow = this.elements.resourcesBtn.querySelector('.resources-menu-arrow');
    if (arrow) {
      arrow.style.transform = 'rotate(180deg)';
    }
    
    // Update ARIA
    this.elements.resourcesBtn.setAttribute('aria-expanded', 'true');
    
    // Initialize Lucide icons in the mega menu
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  /**
   * Close resources mega menu
   */
  closeResourcesMegaMenu() {
    if (!this.elements.resourcesMegaMenu || !this.elements.resourcesBtn) return;
    
    this.isResourcesMegaMenuOpen = false;
    this.elements.resourcesMegaMenu.style.opacity = '0';
    this.elements.resourcesMegaMenu.style.visibility = 'hidden';
    this.elements.resourcesMegaMenu.style.transform = 'translateX(-50%) translateY(10px)';
    
    // Reset arrow rotation
    const arrow = this.elements.resourcesBtn.querySelector('.resources-menu-arrow');
    if (arrow) {
      arrow.style.transform = 'rotate(0deg)';
    }
    
    // Update ARIA
    this.elements.resourcesBtn.setAttribute('aria-expanded', 'false');
  }

  /**
   * Toggle resources mega menu
   */
  toggleResourcesMegaMenu() {
    if (this.isResourcesMegaMenuOpen) {
      this.closeResourcesMegaMenu();
    } else {
      this.openResourcesMegaMenu();
    }
  }

  /**
   * Cleanup event listeners (useful for SPA navigation)
   */
  destroy() {
    // Remove event listeners
    if (this.elements.mobileMenuBtn) {
      this.elements.mobileMenuBtn.removeEventListener('click', this.boundHandlers.handleMobileMenuToggle);
    }

    document.removeEventListener('click', this.boundHandlers.handleClickOutside);
    document.removeEventListener('keydown', this.boundHandlers.handleKeydown);
    window.removeEventListener('scroll', this.boundHandlers.handleScroll);

    // Restore body scroll
    document.body.style.overflow = '';

    console.log('[Navbar] Destroyed successfully');
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Navbar;
}

