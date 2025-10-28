# Page Loader Documentation

## Overview

The Page Loader system provides dynamic content loading with skeleton loading states for a better user experience.

## How It Works

1. **Loading State**: The HTML shows animated skeleton placeholders
2. **Data Loading**: JavaScript loads content from data files
3. **Content Rendering**: PageLoader classes replace placeholders with actual content
4. **Smooth Animations**: Fade-in animations as content appears

## File Structure

```
js/
├── data/
│   ├── portfolioData.js        # Home page content
│   └── aboutMeData.js          # About Me page content
├── pageLoader/
│   ├── homePageLoader.js       # Home page dynamic loader
│   ├── aboutMePageLoader.js    # About Me page dynamic loader
│   └── README.md               # This file
└── script.js                   # Main app logic
```

## Pages

### Home Page (index.html)
- Hero section with profile and CTA buttons
- Stats cards (experience, projects, etc.)
- Featured projects
- Services offered
- Call-to-action section

**Data File**: `js/data/portfolioData.js`  
**Loader**: `js/pageLoader/homePageLoader.js`

### About Me Page (aboutMe.html)
- Profile section with bio
- Skills showcase
- Professional journey timeline
- Education background
- Resume download CTA

**Data File**: `js/data/aboutMeData.js`  
**Loader**: `js/pageLoader/aboutMePageLoader.js`

## Usage

### Basic Usage

The loader automatically runs on page load:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const loader = new AboutMePageLoader();
    loader.loadContent();
});
```

### Custom Configuration

You can pass custom data to override the default content:

```javascript
const customData = {
    profile: {
        name: 'Your Name',
        title: 'Your Title',
        // ...more options
    },
    skills: [...],
    experience: [...]
};

const loader = new AboutMePageLoader(customData);
loader.loadContent();
```

## Customizing Content

### Edit About Me Data

Open `js/data/aboutMeData.js` and modify:

```javascript
const aboutMeData = {
  profile: {
    name: 'Your Name',
    title: 'Your Professional Title',
    bio: 'Your biography...',
    image: 'path/to/your/photo.jpg'
  },
  
  skills: [
    { name: 'Skill Name', icon: '🎯', color: 'from-blue-400 to-blue-500' },
    // ... more skills
  ],
  
  experience: [
    {
      period: 'Year - Year',
      position: 'Job Title',
      company: 'Company Name',
      achievements: [
        'Achievement 1',
        'Achievement 2'
      ]
    },
    // ... more experiences
  ],
  
  education: {
    degree: 'Your Degree',
    institution: 'University Name',
    year: 'Graduation Year',
    icon: '🎓'
  },
  
  cta: {
    title: 'CTA Title',
    description: 'CTA Description',
    buttonText: 'Button Text',
    buttonLink: '/path/to/resume.pdf'
  }
};
```

### Loading Delay

Adjust the loading simulation delay:

```javascript
constructor() {
    this.loadDelay = 600; // milliseconds
}
```

## About Me Page Sections

1. **Profile Section**: Name, title, bio, profile image
2. **Skills Section**: Grid of skills with icons and gradient backgrounds
3. **Professional Journey**: Timeline of work experience
4. **Education Section**: Academic background
5. **CTA Section**: Resume download with call-to-action

## Adding New Pages

To add a new page with dynamic loading:

1. Create HTML file with skeleton loading states
2. Create data file in `js/data/yourPageData.js`
3. Create loader in `js/pageLoader/yourPageLoader.js`:

```javascript
class YourPageLoader {
  constructor(data = null) {
    this.loadDelay = 600;
    this.data = data || (typeof yourPageData !== 'undefined' ? yourPageData : null);
  }
  
  async loadContent() {
    await this.simulateLoading(500);
    await this.loadYourSection();
  }
  
  async loadYourSection() {
    // Your loading logic
  }
}
```

4. Include scripts in HTML and initialize

## Animation Classes

- `.fade-in`: Fade in with slide up animation
- `.animate-pulse`: Skeleton loading pulse animation

## Skill Icon Colors

Available gradient colors for skills:
- `from-blue-400 to-blue-500` (Blue)
- `from-cyan-400 to-cyan-500` (Cyan)
- `from-orange-400 to-orange-500` (Orange)
- `from-gray-400 to-gray-500` (Gray)
- `from-purple-400 to-purple-500` (Purple)
- `from-red-400 to-red-500` (Red)
- `from-pink-400 to-pink-500` (Pink)
- `from-green-400 to-green-500` (Green)

## Timeline Styling

The professional journey uses a vertical timeline with:
- Primary color dots for timeline markers
- Border line connecting experiences
- Fade-in animations with staggered delays
- Hover effects on cards

## Performance Tips

- Images use `loading="lazy"` for better performance
- Content loads in sequence with delays for smooth appearance
- Skeleton states prevent layout shift
- Fallback images for error handling

## Error Handling

Images have fallback placeholders:
```javascript
onerror="this.src='https://via.placeholder.com/400x400/3b82f6/ffffff?text=Fallback'"
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS animations and transitions
- Grid and Flexbox layouts
