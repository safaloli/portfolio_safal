// Services Page Data Configuration
// Edit this file to customize your services page content

const servicesData = {
  // Hero Section
  hero: {
    title: 'Building Your Vision into Reality',
    description: 'I help startups and businesses create smooth, modern mobile apps with great UI and backend integration.',
    buttonText: 'Hire Me Now',
    buttonLink: '#contact'
  },

  // Services Cards (using Lucide icon names)
  services: [
    {
      icon: 'code',
      title: 'Software Developer Services',
      description: 'Custom solutions tailored for your needs.',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: 'settings',
      title: 'Automation & Integrations',
      description: 'Connecting services and automating workflows.',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: 'smartphone',
      title: 'Mobile App Development',
      description: 'Building cross-platform apps with Flutter.',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: 'palette',
      title: 'UI/UX Design & Prototyping',
      description: 'Crafting intuitive and beautiful user interfaces.',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      icon: 'cloud',
      title: 'Cloud & Backend Solutions',
      description: 'Scalable backend services and cloud integration.',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600'
    },
    {
      icon: 'bar-chart-3',
      title: 'Data & Analytics',
      description: 'Implementing analytics for data-driven decisions.',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: 'briefcase',
      title: 'Business & Brand Solutions',
      description: 'Digital strategies to elevate your brand.',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: 'wrench',
      title: 'Maintenance & Support',
      description: 'Ongoing support to keep your apps running.',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: 'shield-check',
      title: 'Authentication & Admin Systems',
      description: 'Secure auth and powerful admin panels.',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      icon: 'rocket',
      title: 'Consulting & MVP Development',
      description: 'Strategic guidance for startups and MVPs.',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    }
  ],

  // Work Process (using Lucide icon names)
  process: {
    title: 'My Work Process',
    steps: [
      {
        icon: 'search',
        title: 'Research',
        description: 'Understanding your goals and target audience.',
        iconBg: 'bg-blue-500'
      },
      {
        icon: 'palette',
        title: 'Design',
        description: 'Creating a user-centric design and prototype.',
        iconBg: 'bg-purple-500'
      },
      {
        icon: 'code',
        title: 'Develop',
        description: 'Building a high-quality, performant app.',
        iconBg: 'bg-green-500'
      },
      {
        icon: 'rocket',
        title: 'Launch',
        description: 'Deploying your app to the app stores and providing support.',
        iconBg: 'bg-orange-500'
      }
    ]
  },

  // Testimonials
  testimonials: {
    title: 'What My Clients Say',
    reviews: [
      {
        name: 'Jane Doe',
        role: 'CEO, Tech Innovators',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        rating: 5,
        text: '"Safal\'s work is exceptional. The communication was clear, and the project was delivered ahead of schedule. Highly recommended!"'
      },
      {
        name: 'John Smith',
        role: 'Founder, Creative Solutions',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        rating: 5,
        text: '"The quality of the final app exceeded our expectations. Safal is a true professional and a pleasure to work with."'
      }
    ]
  },

  // CTA Section
  cta: {
    title: 'Ready to start your project?',
    description: 'Let\'s build something amazing together. Reach out and let\'s turn your idea into a reality.',
    buttonText: 'Hire Me Now',
    buttonLink: '#contact'
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = servicesData;
}

