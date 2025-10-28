// Projects Page Dynamic Content Loader
class ProjectsPageLoader {
  constructor(data = null) {
    this.loadDelay = 600; // Simulated loading delay
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
    await this.loadProjectsTitle();
    await this.simulateLoading(200);
    
    await this.loadProjectsGrid();
  }

  // Load Projects Title
  async loadProjectsTitle() {
    const projectsTitle = document.getElementById('projects-title');

    if (projectsTitle) {
      projectsTitle.innerHTML = '<span class="fade-in">My Projects</span>';
    }
  }

  // Load Projects Grid
  async loadProjectsGrid() {
    const projectsGrid = document.getElementById('projects-grid');

    if (projectsGrid) {
      const projects = this.data?.projects || [];

      projectsGrid.innerHTML = projects.map((project, index) => `
        <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden fade-in group" style="animation-delay: ${index * 100}ms">
          <!-- Project Image/Mockup with Background Color -->
          <div class="${project.color} h-64 flex items-center justify-center p-6 relative overflow-hidden">
            <div class="relative z-10 transform group-hover:scale-105 transition-transform duration-300">
              <img src="${project.image}" 
                   alt="${project.title}" 
                   class="w-40 h-64 object-cover rounded-2xl shadow-2xl"
                   onerror="this.src='https://via.placeholder.com/400x600/3b82f6/ffffff?text=${encodeURIComponent(project.title)}'">
            </div>
          </div>
          
          <!-- Project Details -->
          <div class="p-6">
            <!-- Title -->
            <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
              ${project.title}
            </h3>
            
            <!-- Description -->
            <p class="text-gray-600 mb-4 leading-relaxed">
              ${project.description}
            </p>
            
            <!-- Technology Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              ${project.tags.map(tag => `
                <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
                  ${tag}
                </span>
              `).join('')}
            </div>
            
            <!-- Action Links -->
            <div class="flex gap-3">
              <a href="projectDetail.html?id=${index}" 
                 class="inline-flex items-center gap-1 text-primary hover:text-primary-dark font-semibold transition-colors">
                <span>View Details</span>
              </a>
              <a href="${project.liveDemo || '#'}" 
                 class="inline-flex items-center gap-1 text-gray-600 hover:text-gray-800 font-semibold transition-colors">
                <span>Live Demo</span>
              </a>
              <a href="${project.github || '#'}" 
                 class="inline-flex items-center gap-1 text-gray-600 hover:text-gray-800 font-semibold transition-colors">
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProjectsPageLoader;
}

