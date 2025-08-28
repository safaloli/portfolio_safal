const express = require('express');
const router = express.Router();

// Sample project data (in a real app, this would come from a database)
const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform built with Node.js and React",
    image: "/images/projects/ecommerce.jpg",
    techStack: ["Node.js", "React", "MongoDB", "Express"],
    category: "Web",
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    isRecent: true,
    isOngoing: false,
    progress: 100
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Flutter-based mobile banking application with secure authentication",
    image: "/images/projects/banking-app.jpg",
    techStack: ["Flutter", "Dart", "Firebase", "Supabase"],
    category: "Mobile",
    githubUrl: "https://github.com/yourusername/banking-app",
    liveUrl: "https://play.google.com/store/apps/details?id=com.bankingapp",
    isRecent: true,
    isOngoing: false,
    progress: 100
  },
  {
    id: 3,
    title: "Student Management System",
    description: "Academic project for managing student records and grades",
    image: "/images/projects/student-system.jpg",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    category: "Academic",
    githubUrl: "https://github.com/yourusername/student-system",
    liveUrl: "https://student-system-demo.com",
    isRecent: true,
    isOngoing: false,
    progress: 100
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills",
    image: "/images/projects/portfolio.jpg",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    category: "Personal",
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://safaloli.com",
    isRecent: true,
    isOngoing: false,
    progress: 100
  },
  {
    id: 5,
    title: "AI Chatbot",
    description: "Machine learning chatbot for customer support",
    image: "/images/projects/chatbot.jpg",
    techStack: ["Python", "TensorFlow", "Flask", "React"],
    category: "AI/ML",
    githubUrl: "https://github.com/yourusername/ai-chatbot",
    liveUrl: "https://chatbot-demo.com",
    isRecent: false,
    isOngoing: true,
    progress: 75
  },
  {
    id: 6,
    title: "Weather App",
    description: "Real-time weather application with location services",
    image: "/images/projects/weather-app.jpg",
    techStack: ["React Native", "OpenWeather API", "Geolocation"],
    category: "Mobile",
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-app-demo.com",
    isRecent: false,
    isOngoing: true,
    progress: 60
  }
];

// Get all projects
router.get('/', (req, res) => {
  res.json(projects);
});

// Get recent projects (latest 4)
router.get('/recent', (req, res) => {
  const recentProjects = projects.filter(project => project.isRecent).slice(0, 4);
  res.json(recentProjects);
});

// Get ongoing projects
router.get('/ongoing', (req, res) => {
  const ongoingProjects = projects.filter(project => project.isOngoing);
  res.json(ongoingProjects);
});

// Get projects by category
router.get('/category/:category', (req, res) => {
  const { category } = req.params;
  const filteredProjects = projects.filter(project => 
    project.category.toLowerCase() === category.toLowerCase()
  );
  res.json(filteredProjects);
});

// Get single project by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const project = projects.find(p => p.id === parseInt(id));
  
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  
  res.json(project);
});

module.exports = router;
