// Services Page Dynamic Content Loader
class ServicesPageLoader {
  constructor(data = null) {
    this.loadDelay = 800; // Simulated loading delay
    this.data = data || (typeof servicesData !== 'undefined' ? servicesData : null);
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
    
    await this.loadServicesSection();
    await this.simulateLoading(200);
    
    await this.loadProcessSection();
    await this.simulateLoading(200);
    
    await this.loadTestimonialsSection();
    await this.simulateLoading(200);
    
    await this.loadCTASection();
  }

  // Load Hero Section
  async loadHeroSection() {
    const heroContent = document.getElementById('hero-content');
    const hero = this.data?.hero || {};

    if (heroContent) {
      heroContent.innerHTML = `
        <div class="fade-in">
          <div class="flex items-start justify-between gap-8 flex-wrap">
            <div class="flex-1 min-w-[300px]">
              <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                ${hero.title || 'Building Your Vision into Reality'}
              </h1>
              <p class="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl">
                ${hero.description || 'I help startups and businesses create smooth, modern mobile apps with great UI and backend integration.'}
              </p>
            </div>
            <div>
              <a href="${hero.buttonLink || '#contact'}" 
                 class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg whitespace-nowrap">
                ${hero.buttonText || 'Hire Me Now'}
              </a>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Load Services Section
  async loadServicesSection() {
    const servicesGrid = document.getElementById('services-grid');

    if (servicesGrid) {
      const services = this.data?.services || [];

      servicesGrid.innerHTML = services.map((service, index) => `
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 fade-in" 
             style="animation-delay: ${index * 100}ms">
          <div class="w-16 h-16 ${service.iconBg || 'bg-blue-100'} rounded-lg flex items-center justify-center mb-6">
            <i data-lucide="${service.icon}" class="w-8 h-8 ${service.iconColor || 'text-blue-600'}"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">${service.title}</h3>
          <p class="text-gray-600 leading-relaxed">${service.description}</p>
        </div>
      `).join('');
      
      // Initialize Lucide icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  }

  // Load Work Process Section
  async loadProcessSection() {
    const processTitle = document.getElementById('process-title');
    const processGrid = document.getElementById('process-grid');
    const process = this.data?.process || {};

    if (processTitle) {
      processTitle.innerHTML = `
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 fade-in">
          ${process.title || 'My Work Process'}
        </h2>
      `;
    }

    if (processGrid) {
      const steps = process.steps || [];

      processGrid.innerHTML = steps.map((step, index) => `
        <div class="flex items-start gap-6 fade-in" style="animation-delay: ${index * 150}ms">
          <div class="w-16 h-16 ${step.iconBg || 'bg-blue-500'} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
            <i data-lucide="${step.icon}" class="w-8 h-8 text-white"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">${step.title}</h3>
            <p class="text-gray-600 text-lg leading-relaxed">${step.description}</p>
          </div>
        </div>
      `).join('');
      
      // Initialize Lucide icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  }

  // Load Testimonials Section
  async loadTestimonialsSection() {
    const testimonialsTitle = document.getElementById('testimonials-title');
    const testimonialsGrid = document.getElementById('testimonials-grid');
    const testimonials = this.data?.testimonials || {};

    if (testimonialsTitle) {
      testimonialsTitle.innerHTML = `
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 fade-in">
          ${testimonials.title || 'What My Clients Say'}
        </h2>
      `;
    }

    if (testimonialsGrid) {
      const reviews = testimonials.reviews || [];

      testimonialsGrid.innerHTML = reviews.map((review, index) => `
        <div class="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 fade-in" 
             style="animation-delay: ${index * 150}ms">
          <div class="flex items-center gap-4 mb-6">
            <img src="${review.avatar}" 
                 alt="${review.name}" 
                 class="w-16 h-16 rounded-full object-cover"
                 onerror="this.src='https://via.placeholder.com/100x100/3b82f6/ffffff?text=${encodeURIComponent(review.name.charAt(0))}'">
            <div>
              <h4 class="text-lg font-bold text-gray-900">${review.name}</h4>
              <p class="text-gray-600">${review.role}</p>
            </div>
          </div>
          <div class="flex gap-1 mb-4">
            ${Array(review.rating).fill('').map(() => `
              <svg class="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            `).join('')}
          </div>
          <p class="text-gray-700 italic leading-relaxed">${review.text}</p>
        </div>
      `).join('');
    }
  }

  // Load CTA Section
  async loadCTASection() {
    const ctaContent = document.getElementById('cta-content');
    const cta = this.data?.cta || {};

    if (ctaContent) {
      ctaContent.innerHTML = `
        <div class="fade-in">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            ${cta.title || 'Ready to start your project?'}
          </h2>
          <p class="text-lg text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            ${cta.description || 'Let\'s build something amazing together. Reach out and let\'s turn your idea into a reality.'}
          </p>
          <a href="${cta.buttonLink || '#contact'}" 
             class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-12 py-4 rounded-lg transition-all duration-300 hover:shadow-2xl text-lg">
            ${cta.buttonText || 'Hire Me Now'}
          </a>
        </div>
      `;
    }
  }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ServicesPageLoader;
}

