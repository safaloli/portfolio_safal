// Contact Page Dynamic Content Loader
class ContactPageLoader {
  constructor(data = null) {
    this.loadDelay = 600; // Simulated loading delay
    this.data = data || this.getDefaultData();
  }

  // Default contact data
  getDefaultData() {
    return {
      header: {
        title: 'Contact Me',
        subtitle: "I'm open to discussing new projects and collaborations. Feel free to get in touch!"
      },
      directInfo: {
        email: 'safal.oli@example.com',
        location: 'Nepal'
      },
      socials: [
        {
          name: 'GitHub',
          icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
          url: 'https://github.com/safal-oli'
        },
        {
          name: 'LinkedIn',
          icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
          url: 'https://linkedin.com/in/safal-oli'
        }
      ],
      cta: {
        text: "Let's build something amazing together."
      }
    };
  }

  // Simulate API call delay
  async simulateLoading(delay = this.loadDelay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  // Load all content
  async loadContent() {
    await this.simulateLoading(500);
    
    // Load sections in sequence for smooth appearance
    await this.loadHeaderSection();
    await this.simulateLoading(200);
    
    await this.loadFormSection();
    await this.simulateLoading(200);
    
    await this.loadContactInfoSection();
    await this.simulateLoading(200);
    
    await this.loadCTASection();
  }

  // Load Header Section
  async loadHeaderSection() {
    const headerContainer = document.getElementById('contact-header');
    const header = this.data.header;

    if (headerContainer) {
      headerContainer.innerHTML = `
        <div class="fade-in">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            ${header.title}
          </h1>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            ${header.subtitle}
          </p>
        </div>
      `;
    }
  }

  // Load Contact Form Section
  async loadFormSection() {
    const formContainer = document.getElementById('contact-form');

    if (formContainer) {
      formContainer.innerHTML = `
        <div class="bg-white p-8 rounded-xl shadow-sm fade-in">
          <form id="contact-form-element" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Name Field -->
              <div>
                <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Enter your name"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
              </div>
              <!-- Email Field -->
              <div>
                <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Enter your email address"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
              </div>
            </div>
            <!-- Subject Field -->
            <div>
              <label for="subject" class="block text-gray-700 font-medium mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="Enter the subject"
                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              >
            </div>
            <!-- Message Field -->
            <div>
              <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                placeholder="Your message here..."
                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                required
              ></textarea>
            </div>
            <!-- Submit Button -->
            <button 
              type="submit" 
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      `;

      // Add form submission handler
      this.setupFormHandler();
    }
  }

  // Load Contact Info Section
  async loadContactInfoSection() {
    const infoContainer = document.getElementById('contact-info');
    const directInfo = this.data.directInfo;
    const socials = this.data.socials;

    if (infoContainer) {
      infoContainer.innerHTML = `
        <div class="space-y-8 fade-in">
          <!-- Direct Info -->
          <div class="bg-white p-8 rounded-xl shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Direct Info</h2>
            <div class="space-y-4">
              <!-- Email -->
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <a href="mailto:${directInfo.email}" class="text-gray-700 hover:text-blue-600 transition-colors">
                    ${directInfo.email}
                  </a>
                </div>
              </div>
              <!-- Location -->
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <span class="text-gray-700">${directInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Socials -->
          <div class="bg-white p-8 rounded-xl shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Socials</h2>
            <div class="flex gap-4">
              ${socials.map(social => `
                <a 
                  href="${social.url}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-white"
                  title="${social.name}"
                >
                  ${social.icon}
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }
  }

  // Load CTA Section
  async loadCTASection() {
    const ctaContainer = document.getElementById('contact-cta');
    const cta = this.data.cta;

    if (ctaContainer) {
      ctaContainer.innerHTML = `
        <div class="fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
            ${cta.text}
          </h2>
        </div>
      `;
    }
  }

  // Setup form submission handler
  setupFormHandler() {
    const form = document.getElementById('contact-form-element');
    
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = `
          <span class="flex items-center justify-center gap-2">
            <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        `;

        // Simulate form submission
        await this.simulateLoading(1500);

        // Show success message
        submitButton.innerHTML = `
          <span class="flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Message Sent!
          </span>
        `;
        submitButton.classList.remove('bg-blue-500', 'hover:bg-blue-600');
        submitButton.classList.add('bg-green-500');

        // Reset form
        form.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
          submitButton.classList.remove('bg-green-500');
          submitButton.classList.add('bg-blue-500', 'hover:bg-blue-600');
        }, 3000);
      });
    }
  }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ContactPageLoader;
}

