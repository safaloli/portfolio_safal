# Components

This folder contains reusable JavaScript components for the portfolio website.

## Navbar Component

The `navbar.js` file contains a reusable Navbar class that can be customized and used across different pages.

### Usage

```javascript
// Initialize navbar
const navbar = new Navbar({
    brandName: 'Your Name',
    brandIcon: '🚀',
    links: [
        { text: 'Home', href: '#home' },
        { text: 'About', href: '#about' },
        { text: 'Projects', href: '#projects' }
    ],
    ctaButton: { text: 'Hire Me', href: '#contact' }
});

navbar.init('navbar-container');
```

### Features

- **Responsive Design**: Fully responsive, works seamlessly on desktop, tablet, and mobile devices
- **Mobile Menu with Animations**: Smooth slide-down hamburger menu with animated icon transitions
- **Active Link Highlighting**: Automatically highlights the current page/section
- **Smooth Scrolling**: Smooth scroll to sections with header offset calculation
- **Hide on Scroll Down**: Navbar intelligently hides when scrolling down and reappears when scrolling up
- **Scroll-Based Shadow**: Dynamic shadow effect that appears when page is scrolled
- **Click Outside to Close**: Mobile menu closes when clicking outside the menu area
- **Keyboard Navigation**: Press 'Escape' to close mobile menu
- **Logo Click to Top**: Click the logo to smoothly scroll back to the top of the page
- **Focus States**: Enhanced keyboard navigation with visible focus indicators for accessibility
- **ARIA Attributes**: Full ARIA support for screen readers and accessibility
- **Optimized Performance**: Uses `requestAnimationFrame` for smooth scroll animations
- **Body Scroll Lock**: Prevents background scrolling when mobile menu is open
- **Loading States**: Visual feedback when navigating between pages
- **Customizable**: Easy to customize colors, links, branding, and scroll behavior

### Options

- `brandName`: The brand/logo text (default: 'Safal Oli')
- `brandIcon`: Icon or emoji for the logo (default: '🚀')
- `links`: Array of navigation links with `text` and `href`
- `ctaButton`: Call-to-action button with `text` and `href`

### Methods

- `init(containerId)`: Initialize the navbar in a specified container
- `render()`: Generate the navbar HTML
- `setupEventListeners()`: Set up all interactive event handlers
- `toggleMobileMenu()`: Toggle the mobile menu open/closed
- `closeMobileMenu()`: Close the mobile menu
- `updateActiveLink(activeLink)`: Update which link is marked as active
- `setupScrollBehavior()`: Initialize scroll-based navbar behavior
- `handleScroll()`: Handle scroll events to show/hide navbar
- `isActive(href)`: Check if a link should be marked as active

### Advanced Customization

#### Adjust Scroll Threshold

You can customize when the navbar hides by modifying the scroll threshold:

```javascript
const navbar = new Navbar({
    // ... your options
});
navbar.scrollThreshold = 200; // Navbar hides after scrolling 200px (default: 100px)
navbar.init('navbar-container');
```

#### Disable Auto-Hide on Scroll

To keep the navbar always visible, you can comment out the scroll behavior setup in `setupEventListeners()` method, or modify the `handleScroll()` method.

#### Custom Mobile Menu Animation

The mobile menu uses CSS animations defined in `input.css`. You can modify the `slideDown` and `slideUp` keyframes to create custom animations.

---

## Footer Component

The `footer.js` file contains a reusable Footer class with social links, copyright info, and quick navigation.

### Usage

```javascript
// Initialize footer
const footer = new Footer({
    brandName: 'Your Name',
    year: 2024,
    tagline: 'Built with love and code',
    socialLinks: [
        { icon: '📧', href: 'mailto:you@example.com', title: 'Email', ariaLabel: 'Email me' },
        { icon: '💻', href: 'https://github.com/username', title: 'GitHub', ariaLabel: 'GitHub' },
        { icon: '💼', href: 'https://linkedin.com/in/username', title: 'LinkedIn', ariaLabel: 'LinkedIn' }
    ],
    showQuickLinks: true,
    quickLinks: [
        { text: 'Home', href: '#home' },
        { text: 'About', href: '#about' }
    ]
});

footer.init('footer-container');
```

### Features

- **Social Media Links**: Customizable social icons with hover effects
- **Quick Links**: Optional navigation links in footer
- **Auto Year**: Automatically uses current year
- **Smooth Scrolling**: Smooth scroll for internal links
- **Accessibility**: Proper aria-labels and titles
- **Responsive**: Works on all screen sizes

### Options

- `brandName`: Your name/brand (default: 'Safal Oli')
- `year`: Copyright year (default: current year)
- `tagline`: Optional tagline below copyright (default: 'Built with Node.js & Tailwind CSS')
- `socialLinks`: Array of social media links with icon, href, title, and ariaLabel
- `showQuickLinks`: Show/hide quick links section (default: true)
- `quickLinks`: Array of quick navigation links

### Methods

- `init(containerId)`: Initialize the footer in a container
- `updateYear()`: Update the year dynamically (useful for SPAs)

---

## Customization

To customize colors and styling, edit the Tailwind classes in the component files or override styles in your CSS file.

### Example: Custom Social Icons

You can use emojis, Unicode symbols, or even replace with SVG icons:

```javascript
socialLinks: [
    { icon: '✉️', href: 'mailto:...', title: 'Email', ariaLabel: 'Email' },
    { icon: '⚡', href: 'https://...', title: 'Website', ariaLabel: 'Website' },
    { icon: '🐦', href: 'https://twitter.com/...', title: 'Twitter', ariaLabel: 'Twitter' }
]
```

For SVG icons, you can modify the component to accept HTML strings instead of emojis.
