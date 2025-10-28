# About Me Page Guide

## Overview

The About Me page (`aboutMe.html`) showcases your professional profile, skills, experience, and education with a beautiful, modern design that matches your portfolio aesthetic.

## Features

✅ **Profile Section** - Circular profile image with name, title, and bio  
✅ **Skills Showcase** - Grid of 8 skills with colorful gradient icons  
✅ **Professional Journey** - Timeline view of work experience  
✅ **Education** - Academic background display  
✅ **CTA Section** - Resume download call-to-action  
✅ **Loading Placeholders** - Animated skeleton loading states  
✅ **Dynamic Content** - Loads from `aboutMeData.js`  

## File Structure

```
public/
├── aboutMe.html                      # About Me page with loading skeletons
├── js/
│   ├── data/
│   │   └── aboutMeData.js            # Edit this to customize content
│   └── pageLoader/
│       └── aboutMePageLoader.js      # Dynamic content loader
└── components/
    ├── navbar.js                      # Shared navbar
    └── footer.js                      # Shared footer
```

## How to Access

1. **Run your server:**
   ```bash
   npm run dev
   ```

2. **Open in browser:**
   ```
   http://localhost:3000/aboutMe.html
   ```

3. **Or click "About" in the navigation menu**

## Customizing Content

### Edit Your Profile

Open `public/js/data/aboutMeData.js`:

```javascript
profile: {
  name: 'Your Name',
  title: 'Your Professional Title',
  bio: 'Your detailed biography here...',
  image: 'path/to/your/photo.jpg' // or URL
}
```

### Update Skills

Add/edit skills with custom icons and gradient colors:

```javascript
skills: [
  {
    name: 'Flutter',
    icon: '🎯',  // Any emoji or Unicode character
    color: 'from-blue-400 to-blue-500'  // Tailwind gradient
  },
  // Add more skills...
]
```

**Available gradient colors:**
- `from-blue-400 to-blue-500`
- `from-cyan-400 to-cyan-500`
- `from-orange-400 to-orange-500`
- `from-purple-400 to-purple-500`
- `from-red-400 to-red-500`
- `from-pink-400 to-pink-500`
- `from-green-400 to-green-500`
- `from-gray-400 to-gray-500`

### Add Work Experience

```javascript
experience: [
  {
    period: '2021 - Present',
    position: 'Senior Flutter Developer',
    company: 'Your Company Inc.',
    achievements: [
      'Achievement 1 with metrics and impact',
      'Achievement 2 with specific results',
      'Achievement 3 highlighting your skills'
    ]
  },
  // Add more positions...
]
```

### Update Education

```javascript
education: {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'Your University',
  year: 'Graduated 2018',
  icon: '🎓'
}
```

### Customize CTA Section

```javascript
cta: {
  title: 'Interested in working together?',
  description: 'Your custom message...',
  buttonText: 'Download My Resume',
  buttonLink: '/path/to/your-resume.pdf',  // Update this!
  buttonIcon: '⬇'
}
```

## Design Features Matching Your Image

### 1. Profile Section
- **Left**: Circular profile image (192px)
- **Right**: Name in large bold text, title in primary color, detailed bio

### 2. Skills Grid
- **Layout**: 4 columns on desktop, 2 on mobile
- **Style**: White cards with gradient icon backgrounds
- **Hover**: Shadow effect on hover

### 3. Professional Journey Timeline
- **Visual**: Vertical timeline with colored dots and connecting lines
- **Content**: Period badge, position title, company, achievements list
- **Animation**: Staggered fade-in effect

### 4. Education Card
- **Icon**: Large gradient icon (graduation cap)
- **Content**: Degree, institution, year
- **Style**: White card with shadow

### 5. CTA Section
- **Background**: Light gray rounded box
- **Button**: Primary color with icon and text

## Loading Animation Flow

1. **Initial Load**: Shows gray animated skeleton placeholders
2. **Content Loads**: After 500ms delay
3. **Sections Appear**: Sequential with 200ms delays between sections
4. **Fade-in Effect**: Smooth opacity and slide-up animation

## Responsive Design

- **Mobile**: Single column, stacked layout
- **Tablet**: Adjusted grid columns
- **Desktop**: Full multi-column layout
- **Profile**: Image above content on mobile, side-by-side on desktop

## Navigation Integration

The navbar automatically highlights "About" when on this page. Links work between pages:
- **Home** → `index.html`
- **About** → `aboutMe.html`
- **Projects** → `#projects` (on home page)

## Tips for Best Results

### Profile Image
- **Size**: At least 400x400px
- **Format**: JPG or PNG
- **Style**: Professional headshot with good lighting
- **Background**: Clean or blurred

### Bio Writing
- Keep it engaging and personal
- Highlight your passion and expertise
- Include specific technologies or achievements
- End with a forward-looking statement

### Achievements
- Use action verbs (Spearheaded, Championed, Developed)
- Include metrics and numbers (40% improvement, 5-star rating)
- Focus on impact and results
- Be specific about technologies used

### Skills Selection
- Include 6-8 core skills
- Mix technical skills and tools
- Choose recognizable icons/emojis
- Group related skills visually with similar colors

## Adding Your Resume

1. **Add PDF to project:**
   ```
   public/downloads/your-resume.pdf
   ```

2. **Update link in aboutMeData.js:**
   ```javascript
   buttonLink: 'downloads/your-resume.pdf'
   ```

3. **Or use external link:**
   ```javascript
   buttonLink: 'https://drive.google.com/your-resume'
   ```

## Testing

1. Check loading animations work smoothly
2. Verify all content displays correctly
3. Test responsive design on mobile
4. Ensure profile image loads
5. Test resume download link

## Troubleshooting

**Problem**: Content not loading  
**Solution**: Check browser console, ensure `aboutMeData.js` is loaded before `aboutMePageLoader.js`

**Problem**: Images not displaying  
**Solution**: Check image paths/URLs, ensure images are accessible

**Problem**: Styling looks wrong  
**Solution**: Run `npm run build:css` to rebuild Tailwind styles

**Problem**: Navigation not working  
**Solution**: Check that navbar component is initialized properly

## Next Steps

1. Replace placeholder data with your actual information
2. Add your real profile photo
3. Update all work experiences with your history
4. Add your resume PDF and update the download link
5. Test on different devices
6. Share with others for feedback!

---

Need help? Check the main README.md or the pageLoader documentation.

