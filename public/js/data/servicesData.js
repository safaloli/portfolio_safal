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

  // Services Cards
  services: [
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Crafting beautiful and functional mobile apps that your users will love.',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces that provide a seamless experience.',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: '💻',
      title: 'Backend Integration',
      description: 'Connecting your app to powerful backends for robust and scalable solutions.',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: '🔧',
      title: 'App Maintenance',
      description: 'Ensuring your app remains up-to-date, secure, and running smoothly.',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ],

  // Work Process
  process: {
    title: 'My Work Process',
    steps: [
      {
        icon: '🔍',
        title: 'Research',
        description: 'Understanding your goals and target audience.',
        iconBg: 'bg-blue-500'
      },
      {
        icon: '🎨',
        title: 'Design',
        description: 'Creating a user-centric design and prototype.',
        iconBg: 'bg-purple-500'
      },
      {
        icon: '💻',
        title: 'Develop',
        description: 'Building a high-quality, performant app.',
        iconBg: 'bg-green-500'
      },
      {
        icon: '🚀',
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

