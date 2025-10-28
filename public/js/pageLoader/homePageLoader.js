// Home Page Dynamic Content Loader
class HomePageLoader {
  constructor(data = null) {
    this.loadDelay = 800; // Simulated loading delay
    this.data = data || (typeof portfolioData !== 'undefined' ? portfolioData : null);
  }

  // Simulate API call delay
  async simulateLoading(delay = this.loadDelay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  // Load all content
  async loadContent() {
    await this.simulateLoading(500);
    
    // Load sections in sequence for smooth appearance
    await this.loadHeroSection();
    await this.simulateLoading(200);
    
    await this.loadStatsSection();
    await this.simulateLoading(200);
    
    await this.loadProjectsSection();
    await this.simulateLoading(200);
    
    await this.loadServicesSection();
    await this.simulateLoading(200);
    
    await this.loadCTASection();
  }

  // Load Hero Section
  async loadHeroSection() {
    const heroContent = document.getElementById('hero-content');
    const heroImage = document.getElementById('hero-image');
    const hero = this.data?.hero || {};

    if (heroContent) {
      heroContent.innerHTML = `
        <div class="fade-in">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            ${hero.name || 'Safal Oli'}: <span class="text-primary">${hero.title || 'Flutter Developer'}</span>
          </h1>
          <h2 class="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            ${hero.subtitle || 'Crafting High-Performance Mobile Experiences'}
          </h2>
          <p class="text-gray-600 text-lg mb-8 leading-relaxed">
            ${hero.description || 'Expertise in building high-performance mobile apps.'}
          </p>
          <div class="flex gap-4">
            ${hero.buttons?.map(btn => `
              <a href="${btn.href}" class="${btn.style === 'primary' ? 'bg-primary hover:bg-primary-dark text-white' : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300'} font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
                ${btn.text}
              </a>
            `).join('') || ''}
          </div>
        </div>
      `;
    }

    if (heroImage) {
      const imgSrc = hero.profileImage || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop';
      heroImage.innerHTML = `
        <div class="fade-in">
          <div class="w-80 h-80 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-gray-300 to-gray-400">
            <img src="${imgSrc}" 
                 alt="${hero.name || 'Profile'}" 
                 class="w-full h-full object-cover"
                 onerror="this.src='https://via.placeholder.com/400x400/3b82f6/ffffff?text=SO'">
          </div>
        </div>
      `;
    }
  }

  // Load Stats Section
  async loadStatsSection() {
    const statsSection = document.getElementById('stats-section');

    if (statsSection) {
      const stats = this.data?.stats || [
        { label: 'Years of Experience', value: '5+' },
        { label: 'Completed Projects', value: '30+' },
        { label: 'Availability', value: 'Available' },
        { label: 'Location', value: 'Remote' }
      ];

      statsSection.innerHTML = stats.map((stat, index) => `
        <div class="bg-gray-100 p-6 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 fade-in" style="animation-delay: ${index * 100}ms">
          <p class="text-gray-600 text-sm mb-2">${stat.label}</p>
          <p class="text-2xl font-bold text-gray-900">${stat.value}</p>
        </div>
      `).join('');
    }
  }

  // Load Projects Section
  async loadProjectsSection() {
    const projectsTitle = document.getElementById('projects-title');
    const projectsGrid = document.getElementById('projects-grid');

    if (projectsTitle) {
      projectsTitle.innerHTML = '<span class="fade-in">Featured Projects</span>';
    }

    if (projectsGrid) {
      const projects = this.data?.projects || [];

      projectsGrid.innerHTML = projects.map((project, index) => `
        <div class="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden fade-in group" style="animation-delay: ${index * 150}ms">
          <a href="projectDetail.html?id=${index}" class="block">
            <div class="bg-gradient-to-br ${project.color || 'from-gray-100 to-gray-200'} h-48 flex items-center justify-center p-6">
              <img src="${project.image}" 
                   alt="${project.title}" 
                   class="max-h-full max-w-full object-contain rounded-lg shadow-md"
                   onerror="this.src='https://via.placeholder.com/400x300/3b82f6/ffffff?text=${encodeURIComponent(project.title)}'">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">${project.title}</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">${project.description}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                ${project.tags.map(tag => `
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">${tag}</span>
                `).join('')}
              </div>
              <span class="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                View Details 
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </a>
        </div>
      `).join('');
    }
  }

  // Load Services Section
  async loadServicesSection() {
    const servicesTitle = document.getElementById('services-title');
    const servicesGrid = document.getElementById('services-grid');

    if (servicesTitle) {
      servicesTitle.innerHTML = '<span class="fade-in">Services</span>';
    }

    if (servicesGrid) {
      const services = this.data?.services || [];

      servicesGrid.innerHTML = services.map((service, index) => `
        <div class="bg-gray-50 p-8 rounded-xl text-center hover:bg-white hover:shadow-lg transition-all duration-300 fade-in" style="animation-delay: ${index * 150}ms">
          <div class="text-6xl mb-4">${service.icon}</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">${service.title}</h3>
          <p class="text-gray-600 leading-relaxed">${service.description}</p>
        </div>
      `).join('');
    }
  }

  // Load CTA Section
  async loadCTASection() {
    const ctaSection = document.getElementById('cta-section');
    const cta = this.data?.cta || {};

    if (ctaSection) {
      ctaSection.innerHTML = `
        <div class="max-w-4xl mx-auto text-center fade-in">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ${cta.title || "Let's build something amazing together."}
          </h2>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            ${cta.description || "Ready to bring your idea to life? I'm here to help."}
          </p>
          <a href="${cta.buttonLink || '#contact'}" class="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-lg text-lg">
            ${cta.buttonText || 'Contact Me'}
          </a>
        </div>
      `;
    }
  }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HomePageLoader;
}

