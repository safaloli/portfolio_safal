# 🚀 Safal Oli - Portfolio Website

A modern, responsive portfolio website for a BCA student showcasing projects, skills, and professional experience. Built with Node.js, Express, and modern web technologies.

## ✨ Features

### 🎯 Core Features
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Project Showcase**: Display projects with filtering by category
- **Blog Section**: Share knowledge and insights
- **Contact Form**: Functional contact form with email integration
- **Skills Display**: Interactive skills and technologies section
- **Experience Timeline**: Professional and educational timeline

### 🛠 Technical Features
- **Backend API**: RESTful API with Express.js
- **Email Integration**: Contact form sends emails via Nodemailer
- **Rate Limiting**: API protection with express-rate-limit
- **Security**: Helmet.js for security headers
- **CORS Support**: Cross-origin resource sharing enabled
- **Error Handling**: Comprehensive error handling and logging

### 🎨 Design Features
- **Color Scheme**: Modern slate gray (#2c3e50) and vibrant blue (#3498db)
- **Typography**: Montserrat (headings) and Open Sans (body)
- **Animations**: Smooth hover effects and scroll animations
- **Responsive**: Works perfectly on all device sizes

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/safaloli0/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   PORT=3000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit `http://localhost:3000`

## 📁 Project Structure

```
Portfolio-Website/
├── public/                 # Frontend static files
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── main.js        # Frontend JavaScript
│   ├── images/            # Images and assets
│   └── index.html         # Main HTML file
├── routes/                # API routes
│   ├── contact.js         # Contact form handling
│   ├── projects.js        # Projects API
│   └── blog.js           # Blog posts API
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── env.example           # Environment variables template
└── README.md             # Project documentation
```

## 🔧 Configuration

### Email Setup (for contact form)

1. **Gmail Setup**:
   - Enable 2-factor authentication
   - Generate an App Password
   - Use the App Password in your `.env` file

2. **Other Email Providers**:
   - Update the transporter configuration in `routes/contact.js`
   - Modify SMTP settings as needed

### Customization

#### Personal Information
- Update personal details in `public/index.html`
- Replace placeholder images in `public/images/`
- Modify project data in `routes/projects.js`
- Update blog posts in `routes/blog.js`

#### Styling
- Modify CSS variables in `public/css/style.css`
- Update color scheme, fonts, and animations
- Customize responsive breakpoints

#### Content
- Update hero section content
- Modify skills and technologies
- Edit experience and education timeline
- Update social media links

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎯 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/recent` - Get recent projects
- `GET /api/projects/ongoing` - Get ongoing projects
- `GET /api/projects/category/:category` - Filter by category
- `GET /api/projects/:id` - Get specific project

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/recent` - Get recent blog posts
- `GET /api/blog/:id` - Get specific blog post
- `GET /api/blog/tag/:tag` - Filter by tag
- `GET /api/blog/search/:query` - Search posts

### Contact
- `POST /api/contact/submit` - Submit contact form

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production
```bash
npm start
```

### Environment Variables for Production
```env
NODE_ENV=production
PORT=3000
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASS=your-production-app-password
```

## 🛠 Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Modern JavaScript features
- **Bootstrap 5**: Responsive framework
- **Font Awesome**: Icons
- **Google Fonts**: Typography

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **Nodemailer**: Email functionality
- **Helmet**: Security middleware
- **CORS**: Cross-origin resource sharing
- **express-rate-limit**: Rate limiting

### Development Tools
- **Nodemon**: Development server with auto-reload
- **dotenv**: Environment variable management

## 📈 Performance Features

- **Lazy Loading**: Images load as needed
- **Debounced Scroll Events**: Optimized scroll handling
- **Minified Assets**: Production-ready assets
- **Caching**: Browser caching headers
- **Compression**: Gzip compression for responses

## 🔒 Security Features

- **Helmet.js**: Security headers
- **Rate Limiting**: API protection
- **Input Validation**: Form validation
- **CORS Configuration**: Controlled cross-origin access
- **Environment Variables**: Secure configuration management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Safal Oli**
- BCA Student & Aspiring Developer
- Location: Kathmandu, Nepal
- Email: safal.oli@example.com

## 🙏 Acknowledgments

- Bootstrap team for the amazing framework
- Font Awesome for the icons
- Google Fonts for typography
- The open-source community for inspiration

## 📞 Support

If you have any questions or need help:
- Create an issue in the repository
- Contact via email: safal.oli@example.com
- Connect on LinkedIn: [Your LinkedIn Profile]

---

**Made with ❤️ by Safal Oli**
