// About Me Page Data Configuration
// Edit this file to customize your about me content

const aboutMeData = {
  // Profile Section
  profile: {
    name: 'Safal Oli',
    title: 'Flutter Developer & Mobile Architect',
    bio: `Hi, I'm Safal. A business-driven Flutter developer passionate about transforming ideas into elegant, high-performance mobile applications. With a keen eye for detail and a commitment to clean, scalable code, I build user-centric experiences that not only meet but exceed expectations. My journey in mobile development is fueled by a constant desire to learn and innovate, ensuring that every project I touch is at the forefront of technology. Let's build something amazing together.`,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  },

  // Skills
  skills: [
    {
      name: 'Flutter',
      icon: '🎯',
      color: 'from-blue-400 to-blue-500'
    },
    {
      name: 'Dart',
      icon: '🎨',
      color: 'from-cyan-400 to-cyan-500'
    },
    {
      name: 'Firebase',
      icon: '🔥',
      color: 'from-orange-400 to-orange-500'
    },
    {
      name: 'Swift',
      icon: '🍎',
      color: 'from-gray-400 to-gray-500'
    },
    {
      name: 'Kotlin',
      icon: '🤖',
      color: 'from-purple-400 to-purple-500'
    },
    {
      name: 'Git',
      icon: '📦',
      color: 'from-red-400 to-red-500'
    },
    {
      name: 'Figma',
      icon: '✨',
      color: 'from-pink-400 to-pink-500'
    },
    {
      name: 'Jira',
      icon: '📋',
      color: 'from-blue-500 to-blue-600'
    }
  ],

  // Professional Journey
  experience: [
    {
      period: '2021 - Present',
      position: 'Senior Flutter Developer',
      company: 'Innovatech Solutions Inc.',
      achievements: [
        'Spearheaded the development of a flagship e-commerce app, architecting a scalable BLoC pattern that improved state management efficiency by 40% and contributed to a 30% rise in user engagement.',
        'Mentored a team of 4 junior developers, establishing rigorous code review processes and CI/CD pipelines that reduced bug reports by 25%.',
        'Championed the adoption of advanced animations and pixel-perfect UI implementation, leading to a 5-star rating on both App Store and Google Play.'
      ]
    },
    {
      period: '2019 - 2021',
      position: 'Mobile Application Developer',
      company: 'NextGen Apps Ltd.',
      achievements: [
        'Developed and shipped 5+ features for a popular utility app suite using Flutter, increasing user retention by 15%.',
        'Successfully integrated complex third-party APIs for mapping and payment gateways, enhancing core application functionality.',
        'Actively participated in the full agile development lifecycle, from sprint planning and daily stand-ups to final deployment.'
      ]
    },
    {
      period: '2018 - 2019',
      position: 'Junior Software Engineer',
      company: 'CodeCrafters Co.',
      achievements: [
        'Contributed to the development and maintenance of mobile and web applications, gaining hands-on experience in a fast-paced environment.',
        'Mastered version control with Git and collaborated effectively within an agile team framework to deliver features on schedule.'
      ]
    }
  ],

  // Education
  education: {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Tribhuvan University',
    year: 'Graduated 2018',
    icon: '🎓'
  },

  // CTA Section
  cta: {
    title: 'Interested in working together?',
    description: "I'm always open to discussing new projects and opportunities. Take a look at my full experience and let's connect.",
    buttonText: 'Download My Resume',
    buttonLink: '#resume',
    buttonIcon: '⬇'
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = aboutMeData;
}

