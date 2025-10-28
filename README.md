# Portfolio Website - Safal Oli

A modern and responsive portfolio website built with Node.js and Express.

## Features

- ✨ Modern and clean design with Tailwind CSS
- 📱 Fully responsive
- 🚀 Fast and lightweight
- 🎨 Easy to customize with utility classes
- 🔧 Built with Express.js and Tailwind CSS
- 🎯 Beautiful gradient hero section
- 💼 Project showcase with tags
- 📧 Contact form included

## Project Structure

```
portfolio-website-safal-oli/
├── public/
│   ├── css/
│   │   ├── input.css      (Tailwind source)
│   │   └── style.css      (Generated output)
│   ├── js/
│   │   └── script.js
│   └── index.html
├── server.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── .env
├── .env.example
├── .gitignore
└── README.md
```

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone this repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Create your environment file:
```bash
cp .env.example .env
```

4. (Optional) Modify the `.env` file to change the port or other settings

## Usage

### First Time Setup
After installing dependencies, build the CSS:
```bash
npm run build:css
```

### Development Mode (with auto-reload and CSS watch)
```bash
npm run dev
```
This will:
- Build Tailwind CSS
- Watch for CSS changes
- Run the server with auto-reload

### Production Mode
```bash
npm run build:css
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file)

## Customization

### Update Portfolio Content
The easiest way to customize your portfolio is to edit the data file:

**Edit `public/js/data/portfolioData.js`** to change:
- Hero section (name, title, description, profile image)
- Stats (experience, projects, availability)
- Featured projects (with images and tags)
- Services offered
- Call-to-action section

### Update Styling
- Modify `public/css/input.css` to add custom styles (then run `npm run build:css`)
- Use Tailwind utility classes directly in HTML for quick styling changes
- Component styles can be edited in `public/components/navbar.js` and `public/components/footer.js`

### Change Colors
Edit the theme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#2563eb',  // Change this
        dark: '#1e40af',     // Change this
        light: '#3b82f6',    // Change this
      },
    },
  },
}
```

After making changes, rebuild the CSS:
```bash
npm run build:css
```

### Tailwind CSS Documentation
For styling options, check out [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## API Endpoints

- `GET /` - Serves the main portfolio page
- `GET /api/health` - Health check endpoint

## Deployment

### Deploying to Heroku
```bash
heroku create your-app-name
git push heroku main
```

### Deploying to Vercel/Netlify
Follow their respective deployment guides for Node.js applications.

## Contributing

Feel free to fork this project and make it your own!

## License

MIT License - feel free to use this project for your own portfolio.

## Author

Safal Oli

---

Made with ❤️ using Node.js, Express, and Tailwind CSS

