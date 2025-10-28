// About Me Page Dynamic Content Loader
class AboutMePageLoader {
  constructor(data = null) {
    this.loadDelay = 600; // Simulated loading delay
    this.data = data || (typeof aboutMeData !== 'undefined' ? aboutMeData : null);
  }

  // Simulate API call delay
  async simulateLoading(delay = this.loadDelay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  // Load all content
  async loadContent() {
    await this.simulateLoading(500);
    
    // Load sections in sequence for smooth appearance
    await this.loadProfileSection();
    await this.simulateLoading(200);
    
    await this.loadSkillsSection();
    await this.simulateLoading(200);
    
    await this.loadExperienceSection();
    await this.simulateLoading(200);
    
    await this.loadEducationSection();
    await this.simulateLoading(200);
    
    await this.loadCTASection();
  }

  // Load Profile Section
  async loadProfileSection() {
    const profileImage = document.getElementById('profile-image');
    const aboutContent = document.getElementById('about-content');
    const profile = this.data?.profile || {};

    if (profileImage) {
      const imgSrc = profile.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop';
      profileImage.innerHTML = `
        <div class="fade-in">
          <div class="w-48 h-48 rounded-full overflow-hidden shadow-xl bg-gradient-to-br from-gray-300 to-gray-400 mx-auto">
            <img src="${imgSrc}" 
                 alt="${profile.name || 'Profile'}" 
                 class="w-full h-full object-cover"
                 onerror="this.src='https://via.placeholder.com/400x400/3b82f6/ffffff?text=SO'">
          </div>
        </div>
      `;
    }

    if (aboutContent) {
      aboutContent.innerHTML = `
        <div class="fade-in">
          <h1 class="text-5xl font-bold text-gray-900 mb-3">
            ${profile.name || 'Safal Oli'}
          </h1>
          <h2 class="text-2xl text-primary font-medium mb-6">
            ${profile.title || 'Flutter Developer & Mobile Architect'}
          </h2>
          <p class="text-gray-600 text-lg leading-relaxed">
            ${profile.bio || ''}
          </p>
        </div>
      `;
    }
  }

  // Load Skills Section
  async loadSkillsSection() {
    const skillsTitle = document.getElementById('skills-title');
    const skillsGrid = document.getElementById('skills-grid');

    if (skillsTitle) {
      skillsTitle.innerHTML = '<span class="fade-in">My Skillset</span>';
    }

    if (skillsGrid) {
      const skills = this.data?.skills || [];

      skillsGrid.innerHTML = skills.map((skill, index) => `
        <div class="bg-white p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 fade-in" style="animation-delay: ${index * 100}ms">
          <div class="w-16 h-16 bg-gradient-to-br ${skill.color || 'from-gray-300 to-gray-400'} rounded-lg flex items-center justify-center text-3xl mb-4 mx-auto shadow-md">
            ${skill.icon}
          </div>
          <h3 class="font-semibold text-gray-900">${skill.name}</h3>
        </div>
      `).join('');
    }
  }

  // Load Experience Section
  async loadExperienceSection() {
    const experienceTitle = document.getElementById('experience-title');
    const experienceTimeline = document.getElementById('experience-timeline');

    if (experienceTitle) {
      experienceTitle.innerHTML = '<span class="fade-in">Professional Journey</span>';
    }

    if (experienceTimeline) {
      const experiences = this.data?.experience || [];

      experienceTimeline.innerHTML = experiences.map((exp, index) => `
        <div class="relative pl-8 ${index < experiences.length - 1 ? 'pb-12' : ''} border-l-2 ${index < experiences.length - 1 ? 'border-primary' : 'border-gray-200'} fade-in" style="animation-delay: ${index * 150}ms">
          <div class="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] shadow-md"></div>
          
          <div class="mb-3">
            <span class="text-sm font-medium text-primary">${exp.period}</span>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-1">
            ${exp.position}
          </h3>
          
          <p class="text-lg text-gray-600 mb-6">
            ${exp.company}
          </p>
          
          <ul class="space-y-3">
            ${exp.achievements.map(achievement => `
              <li class="text-gray-700 leading-relaxed flex">
                <span class="text-primary mr-3 flex-shrink-0">•</span>
                <span>${achievement}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('');
    }
  }

  // Load Education Section
  async loadEducationSection() {
    const educationTitle = document.getElementById('education-title');
    const educationContent = document.getElementById('education-content');

    if (educationTitle) {
      educationTitle.innerHTML = '<span class="fade-in">Education</span>';
    }

    if (educationContent) {
      const education = this.data?.education || {};

      educationContent.innerHTML = `
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 fade-in">
          <div class="flex items-start gap-6">
            <div class="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-3xl shadow-md flex-shrink-0">
              ${education.icon || '🎓'}
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                ${education.degree || 'Bachelor of Science in Computer Science'}
              </h3>
              <p class="text-lg text-gray-700 mb-1">
                ${education.institution || 'Tribhuvan University'}
              </p>
              <p class="text-gray-600">
                ${education.year || 'Graduated 2018'}
              </p>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Load CTA Section
  async loadCTASection() {
    const ctaSection = document.getElementById('cta-section');
    const cta = this.data?.cta || {};

    if (ctaSection) {
      ctaSection.innerHTML = `
        <div class="max-w-4xl mx-auto bg-gray-50 p-12 rounded-2xl text-center fade-in">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            ${cta.title || 'Interested in working together?'}
          </h2>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            ${cta.description || "I'm always open to discussing new projects and opportunities."}
          </p>
          <a href="${cta.buttonLink || '#resume'}" 
             class="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg text-lg">
            <span>${cta.buttonIcon || '⬇'}</span>
            <span>${cta.buttonText || 'Download My Resume'}</span>
          </a>
        </div>
      `;
    }
  }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AboutMePageLoader;
}

