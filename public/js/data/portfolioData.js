// Portfolio Data Configuration
// Edit this file to customize your portfolio content

const portfolioData = {
  // Hero Section
  hero: {
    name: 'Safal Oli',
    title: '',
    subtitle: '',
    description: 'I build high-performance mobile apps with stunning UI/UX and seamless backend integration. Let\'s bring your vision to life.',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    buttons: [
      { text: 'Hire Me', href: 'contact.html', style: 'primary' },
      { text: 'View My Work', href: '#projects', style: 'secondary' }
    ]
  },

  // Stats Section
  stats: [
    { label: 'Years of Experience', value: '5+' },
    { label: 'Completed Projects', value: '30+' },
    { label: 'Availability', value: 'Available' },
    { label: 'Location', value: 'Remote' }
  ],

  // Featured Projects
  projects: [
    {
      title: 'E-commerce App',
      description: 'A mobile app for online shopping, featuring product browsing, cart management, and secure checkout.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
      tags: ['Flutter', 'Dart', 'Firebase'],
      color: 'bg-gradient-to-br from-orange-50 to-orange-100',
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Fitness Tracker',
      description: 'A health and fitness tracking application to monitor activities, set goals, and view progress.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=300&fit=crop',
      tags: ['Flutter', 'Dart', 'Google Fit API'],
      color: 'bg-gradient-to-br from-amber-100 to-amber-200',
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Social Media Platform',
      description: 'A platform for social networking with features like feeds, profiles, and messaging.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
      tags: ['Flutter', 'Dart', 'Firebase'],
      color: 'bg-gradient-to-br from-pink-50 to-pink-100',
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Task Management Tool',
      description: 'A productivity app for managing tasks, setting deadlines, and organizing projects.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
      tags: ['Flutter', 'Dart', 'SQLite'],
      color: 'bg-gradient-to-br from-amber-100 to-orange-100',
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Recipe Finder',
      description: 'A mobile app for discovering and saving recipes from various cuisines and dietary preferences.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      tags: ['Flutter', 'Dart', 'Edamam API'],
      color: 'bg-gradient-to-br from-pink-100 to-pink-200',
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Travel Planner',
      description: 'A tool for planning and organizing trips, including itineraries, bookings, and destination info.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      tags: ['Flutter', 'Dart', 'Google Maps API'],
      color: 'bg-gradient-to-br from-green-100 to-green-200',
      liveDemo: '#',
      github: '#'
    }
  ],

  // Services
  services: [
    {
      icon: '📱',
      title: 'App Development',
      description: 'Building beautiful and high-performance cross-platform mobile applications.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces for a seamless user experience.'
    },
    {
      icon: '🔧',
      title: 'Backend Integration',
      description: 'Connecting your app to robust and scalable backend services and APIs.'
    }
  ],

  // CTA Section
  cta: {
    title: "Let's build something amazing together.",
    description: "Ready to bring your idea to life? I'm here to help. Let's connect and discuss how we can turn your vision into a reality.",
    buttonText: 'Contact Me',
    buttonLink: '#contact'
  },

  // Project Details (for project detail page)
  projectDetails: {
    '0': {
      title: 'E-Commerce App',
      subtitle: 'A sleek and performant mobile shopping experience built with Flutter.',
      heroImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop',
      heroBackgroundColor: 'bg-gradient-to-br from-orange-50 to-pink-50',
      overview: 'This project is a feature-rich e-commerce mobile application designed to provide a seamless and engaging shopping experience. As the lead Flutter developer, I was responsible for the entire front-end development, from UI/UX implementation to state management and API integration. The goal was to create a fast, intuitive, and visually appealing app for both iOS and Android platforms.',
      problem: 'The client needed a cross-platform mobile application to expand their online retail business. Their existing web-based store had low mobile conversion rates. The primary challenges were to build an app that was not only performant and reliable but also offered a user experience superior to mobile web, encouraging repeat purchases and customer loyalty.',
      solution: 'I developed a full-featured e-commerce app using Flutter, leveraging its capabilities for creating beautiful, natively compiled applications from a single codebase. The solution focused on a clean UI, smooth animations, and efficient state management to handle complex user flows like product browsing, searching, cart management, and checkout.',
      screenshots: [
        {
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop',
          alt: 'App Screenshot 1',
          backgroundColor: 'bg-gradient-to-br from-gray-50 to-gray-100'
        },
        {
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=800&fit=crop',
          alt: 'App Screenshot 2',
          backgroundColor: 'bg-gradient-to-br from-orange-100 to-orange-200'
        },
        {
          image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=800&fit=crop',
          alt: 'App Screenshot 3',
          backgroundColor: 'bg-gradient-to-br from-blue-50 to-blue-100'
        }
      ],
      tools: [
        { name: 'Flutter', icon: '📱' },
        { name: 'Dart', icon: '🎯' },
        { name: 'Firebase', icon: '🔥' },
        { name: 'Postman', icon: '📮' },
        { name: 'Figma', icon: '🎨' }
      ],
      results: [
        {
          value: '40%',
          label: 'Increase in Mobile Sales',
          bgColor: 'from-blue-50 to-blue-100',
          valueColor: 'text-blue-600'
        },
        {
          value: '4.8/5',
          label: 'Average User Rating',
          bgColor: 'from-purple-50 to-purple-100',
          valueColor: 'text-purple-600'
        },
        {
          value: '50k+',
          label: 'Downloads in First 3 Months',
          bgColor: 'from-emerald-50 to-emerald-100',
          valueColor: 'text-emerald-600'
        }
      ]
    },
    '1': {
      title: 'Fitness Tracker',
      subtitle: 'A comprehensive health and fitness tracking application.',
      heroImage: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=600&fit=crop',
      heroBackgroundColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      overview: 'A comprehensive fitness tracking application that helps users monitor their daily activities, set fitness goals, and track their progress over time. The app integrates with various fitness APIs to provide accurate data and insights.',
      problem: 'Users needed a simple yet powerful way to track their fitness journey without the complexity of existing solutions. Many fitness apps were either too complicated or lacked essential features like goal setting and progress visualization.',
      solution: 'Developed a user-friendly Flutter app with intuitive navigation, real-time activity tracking, customizable goals, and beautiful data visualizations. Integrated with Google Fit API for seamless data synchronization across devices.',
      screenshots: [
        {
          image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=800&fit=crop',
          alt: 'Fitness App Screenshot 1',
          backgroundColor: 'bg-gradient-to-br from-green-100 to-green-200'
        },
        {
          image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=800&fit=crop',
          alt: 'Fitness App Screenshot 2',
          backgroundColor: 'bg-gradient-to-br from-blue-100 to-blue-200'
        },
        {
          image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=800&fit=crop',
          alt: 'Fitness App Screenshot 3',
          backgroundColor: 'bg-gradient-to-br from-purple-100 to-purple-200'
        }
      ],
      tools: [
        { name: 'Flutter', icon: '📱' },
        { name: 'Dart', icon: '🎯' },
        { name: 'Google Fit', icon: '💪' },
        { name: 'Firebase', icon: '🔥' }
      ],
      results: [
        {
          value: '10k+',
          label: 'Active Users',
          bgColor: 'from-green-50 to-green-100',
          valueColor: 'text-green-600'
        },
        {
          value: '4.7/5',
          label: 'App Store Rating',
          bgColor: 'from-yellow-50 to-yellow-100',
          valueColor: 'text-yellow-600'
        },
        {
          value: '95%',
          label: 'User Retention Rate',
          bgColor: 'from-indigo-50 to-indigo-100',
          valueColor: 'text-indigo-600'
        }
      ]
    },
    '2': {
      title: 'Social Media Platform',
      subtitle: 'A modern social networking platform for connecting people.',
      heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop',
      heroBackgroundColor: 'bg-gradient-to-br from-pink-50 to-purple-50',
      overview: 'A feature-rich social media platform built with Flutter that enables users to connect, share content, and engage with their community. The app includes real-time messaging, content feeds, user profiles, and advanced social features.',
      problem: 'The client wanted to create a niche social platform for a specific community but existing solutions were too generic and didn\'t provide the customization needed. Performance issues with real-time features were also a major concern.',
      solution: 'Built a custom social media app using Flutter with Firebase backend for real-time data synchronization. Implemented efficient state management, optimized image loading, and created smooth animations for an engaging user experience.',
      screenshots: [
        {
          image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=800&fit=crop',
          alt: 'Social Media Screenshot 1',
          backgroundColor: 'bg-gradient-to-br from-pink-100 to-pink-200'
        },
        {
          image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400&h=800&fit=crop',
          alt: 'Social Media Screenshot 2',
          backgroundColor: 'bg-gradient-to-br from-purple-100 to-purple-200'
        },
        {
          image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&h=800&fit=crop',
          alt: 'Social Media Screenshot 3',
          backgroundColor: 'bg-gradient-to-br from-blue-100 to-blue-200'
        }
      ],
      tools: [
        { name: 'Flutter', icon: '📱' },
        { name: 'Dart', icon: '🎯' },
        { name: 'Firebase', icon: '🔥' },
        { name: 'Cloud Functions', icon: '⚡' }
      ],
      results: [
        {
          value: '25k+',
          label: 'Monthly Active Users',
          bgColor: 'from-pink-50 to-pink-100',
          valueColor: 'text-pink-600'
        },
        {
          value: '4.6/5',
          label: 'User Satisfaction',
          bgColor: 'from-purple-50 to-purple-100',
          valueColor: 'text-purple-600'
        },
        {
          value: '2M+',
          label: 'Posts Shared',
          bgColor: 'from-blue-50 to-blue-100',
          valueColor: 'text-blue-600'
        }
      ]
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}

