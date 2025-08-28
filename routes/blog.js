const express = require('express');
const router = express.Router();

// Sample blog data (in a real app, this would come from a database)
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Flutter Development",
    excerpt: "Learn the basics of Flutter and how to create your first mobile app",
    content: "Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. In this post, we'll explore the fundamentals of Flutter development...",
    author: "Safal Oli",
    date: "2024-01-15",
    tags: ["Flutter", "Mobile Development", "Dart"],
    image: "/images/blog/flutter-intro.jpg",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Building REST APIs with Node.js and Express",
    excerpt: "A comprehensive guide to creating robust REST APIs using Node.js",
    content: "Node.js has revolutionized backend development with its event-driven, non-blocking I/O model. In this tutorial, we'll build a complete REST API using Express.js...",
    author: "Safal Oli",
    date: "2024-01-10",
    tags: ["Node.js", "Express", "API", "Backend"],
    image: "/images/blog/nodejs-api.jpg",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Modern CSS Techniques for Better UX",
    excerpt: "Explore advanced CSS techniques to create stunning user interfaces",
    content: "CSS has evolved significantly over the years. From Flexbox to Grid, CSS custom properties to animations, there are many powerful features available to create modern, responsive designs...",
    author: "Safal Oli",
    date: "2024-01-05",
    tags: ["CSS", "Frontend", "UX", "Design"],
    image: "/images/blog/modern-css.jpg",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Introduction to Supabase: The Open Source Firebase Alternative",
    excerpt: "Discover how Supabase can simplify your backend development",
    content: "Supabase is an open source alternative to Firebase that provides a PostgreSQL database, authentication, instant APIs, and real-time subscriptions. Let's explore how to get started...",
    author: "Safal Oli",
    date: "2023-12-28",
    tags: ["Supabase", "Database", "Backend", "PostgreSQL"],
    image: "/images/blog/supabase-intro.jpg",
    readTime: "7 min read"
  }
];

// Get all blog posts
router.get('/', (req, res) => {
  res.json(blogPosts);
});

// Get recent blog posts (latest 3)
router.get('/recent', (req, res) => {
  const recentPosts = blogPosts.slice(0, 3);
  res.json(recentPosts);
});

// Get blog post by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const post = blogPosts.find(p => p.id === parseInt(id));
  
  if (!post) {
    return res.status(404).json({ error: 'Blog post not found' });
  }
  
  res.json(post);
});

// Get blog posts by tag
router.get('/tag/:tag', (req, res) => {
  const { tag } = req.params;
  const filteredPosts = blogPosts.filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
  res.json(filteredPosts);
});

// Search blog posts
router.get('/search/:query', (req, res) => {
  const { query } = req.params;
  const searchResults = blogPosts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.content.toLowerCase().includes(query.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );
  res.json(searchResults);
});

module.exports = router;
