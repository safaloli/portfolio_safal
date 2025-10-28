// Project Detail Page Dynamic Content Loader
class ProjectDetailPageLoader {
  constructor(data = null) {
    this.loadDelay = 400; // Simulated loading delay
    this.data = data || (typeof portfolioData !== 'undefined' ? portfolioData : null);
    this.projectId = this.getProjectIdFromURL();
    this.project = this.getProjectData();
  }

  // Get project ID from URL parameter
  getProjectIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '0';
  }

  // Get project data by ID
  getProjectData() {
    if (!this.data || !this.data.projectDetails) {
      return null;
    }
    return this.data.projectDetails[this.projectId] || this.data.projectDetails['0'];
  }

  // Simulate API call delay
  async simulateLoading(delay = this.loadDelay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  // Load all content
  async loadContent() {
    await this.simulateLoading(300);
    
    // Load sections in sequence for smooth appearance
    await this.loadBackButton();
    await this.simulateLoading(100);
    
    await this.loadProjectHeader();
    await this.simulateLoading(100);
    
    await this.loadHeroImage();
    await this.simulateLoading(100);
    
    await this.loadProjectOverview();
    await this.simulateLoading(100);
    
    await this.loadProblemSection();
    await this.simulateLoading(100);
    
    await this.loadSolutionSection();
    await this.simulateLoading(100);
    
    await this.loadScreenshots();
    await this.simulateLoading(100);
    
    await this.loadToolsSection();
    await this.simulateLoading(100);
    
    await this.loadResultSection();
  }

  // Load Back Button
  async loadBackButton() {
    const container = document.getElementById('back-button-container');
    if (container) {
      container.innerHTML = `
        <a href="projects.html" 
           class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 fade-in">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          <span>Back to Projects</span>
        </a>
      `;
    }
  }

  // Load Project Header
  async loadProjectHeader() {
    const container = document.getElementById('project-header');
    if (container && this.project) {
      container.innerHTML = `
        <h1 class="text-5xl font-bold text-gray-900 mb-4 fade-in">${this.project.title}</h1>
        <p class="text-lg text-blue-600 font-medium fade-in" style="animation-delay: 100ms">
          ${this.project.subtitle}
        </p>
      `;
    }
  }

  // Load Hero Image
  async loadHeroImage() {
    const container = document.getElementById('hero-image-container');
    if (container && this.project) {
      container.innerHTML = `
        <div class="relative rounded-2xl overflow-hidden shadow-2xl fade-in ${this.project.heroBackgroundColor || 'bg-gradient-to-br from-orange-50 to-pink-50'}">
          <div class="flex items-center justify-center p-12 md:p-16">
            <img src="${this.project.heroImage}" 
                 alt="${this.project.title}" 
                 class="w-full max-w-4xl h-auto object-contain rounded-xl"
                 onerror="this.src='https://via.placeholder.com/1200x600/f97316/ffffff?text=${encodeURIComponent(this.project.title)}'">
          </div>
        </div>
      `;
    }
  }

  // Load Project Overview
  async loadProjectOverview() {
    const container = document.getElementById('project-overview');
    if (container && this.project) {
      container.innerHTML = `
        <h2 class="text-3xl font-bold text-gray-900 mb-6 fade-in">Project Overview</h2>
        <p class="text-gray-700 leading-relaxed text-lg fade-in" style="animation-delay: 100ms">
          ${this.project.overview}
        </p>
      `;
    }
  }

  // Load Problem Section
  async loadProblemSection() {
    const container = document.getElementById('problem-section');
    if (container && this.project) {
      container.innerHTML = `
        <h2 class="text-3xl font-bold text-gray-900 mb-6 fade-in">Problem</h2>
        <p class="text-gray-700 leading-relaxed text-lg fade-in" style="animation-delay: 100ms">
          ${this.project.problem}
        </p>
      `;
    }
  }

  // Load Solution Section
  async loadSolutionSection() {
    const container = document.getElementById('solution-section');
    if (container && this.project) {
      container.innerHTML = `
        <h2 class="text-3xl font-bold text-gray-900 mb-6 fade-in">Solution</h2>
        <p class="text-gray-700 leading-relaxed text-lg fade-in" style="animation-delay: 100ms">
          ${this.project.solution}
        </p>
      `;
    }
  }

  // Load Screenshots
  async loadScreenshots() {
    const container = document.getElementById('screenshots-section');
    if (container && this.project && this.project.screenshots) {
      container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${this.project.screenshots.map((screenshot, index) => `
            <div class="fade-in" style="animation-delay: ${index * 100}ms">
              <div class="relative rounded-2xl overflow-hidden shadow-xl ${screenshot.backgroundColor || 'bg-gradient-to-br from-orange-100 to-pink-100'}">
                <div class="flex items-center justify-center p-8">
                  <img src="${screenshot.image}" 
                       alt="${screenshot.alt || `Screenshot ${index + 1}`}" 
                       class="w-full max-w-xs h-auto object-contain rounded-xl shadow-2xl"
                       onerror="this.src='https://via.placeholder.com/400x800/3b82f6/ffffff?text=Screenshot'">
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
  }

  // Load Tools Section
  async loadToolsSection() {
    const container = document.getElementById('tools-section');
    if (container && this.project && this.project.tools) {
      container.innerHTML = `
        <h2 class="text-3xl font-bold text-gray-900 mb-8 fade-in">Tools Used</h2>
        <div class="flex flex-wrap gap-6">
          ${this.project.tools.map((tool, index) => `
            <div class="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 fade-in" style="animation-delay: ${index * 50}ms">
              ${tool.icon ? `<div class="text-4xl">${tool.icon}</div>` : `<img src="${tool.image}" alt="${tool.name}" class="w-8 h-8 object-contain">`}
              <span class="font-semibold text-gray-800 text-lg">${tool.name}</span>
            </div>
          `).join('')}
        </div>
      `;
    }
  }

  // Load Result Section
  async loadResultSection() {
    const container = document.getElementById('result-section');
    if (container && this.project && this.project.results) {
      container.innerHTML = `
        <h2 class="text-3xl font-bold text-gray-900 mb-8 fade-in">Result</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${this.project.results.map((result, index) => `
            <div class="bg-gradient-to-br ${result.bgColor || 'from-blue-50 to-blue-100'} p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 fade-in" style="animation-delay: ${index * 100}ms">
              <div class="text-5xl font-bold ${result.valueColor || 'text-blue-600'} mb-4">
                ${result.value}
              </div>
              <div class="text-gray-700 font-medium text-lg">
                ${result.label}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
  }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProjectDetailPageLoader;
}

