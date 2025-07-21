# Portfolio Project

## Project Overview
This is a React-based developer portfolio website built with:
- React 19.1.0
- Tailwind CSS for styling
- Lucide React for icons
- GitHub Pages deployment
- Modern JavaScript (ES6+)

## Code Style & Structure

### React Components
- Use functional components with hooks
- Prefer `useState` and `useEffect` over class components
- Keep components focused and single-responsibility
- Use meaningful component names in PascalCase
- Extract reusable components to `src/components/` directory
- Use proper prop validation and default props

### File Organization
```
src/
├── components/     # Reusable UI components
├── data/          # Static data and configuration
├── resources/     # Assets and static files
└── App.js         # Main application component
```

### JavaScript/JSX Conventions
- Use ES6+ features (arrow functions, destructuring, template literals)
- Prefer `const` and `let` over `var`
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Use early returns to reduce nesting
- Handle async operations with proper error handling

### Styling Guidelines
- Use Tailwind CSS utility classes for styling
- Follow mobile-first responsive design
- Use semantic color classes (e.g., `text-gray-900`, `bg-blue-600`)
- Maintain consistent spacing with Tailwind's spacing scale
- Use CSS Grid and Flexbox for layouts
- Implement smooth transitions and hover effects

## Portfolio-Specific Guidelines

### Content Structure
- Keep personal information in `src/data/portfolioData.js`
- Use consistent data structure for experience, education, skills
- Ensure all links are valid and open in new tabs when external
- Add proper alt text for images and accessibility

### Performance & SEO
- Optimize images for web (use WebP format when possible)
- Implement proper meta tags for SEO
- Use semantic HTML elements
- Ensure fast loading times
- Add proper Open Graph tags for social sharing

### User Experience
- Implement smooth scrolling navigation
- Add loading states for dynamic content
- Ensure responsive design across all devices
- Use consistent visual hierarchy
- Implement proper focus states for accessibility

## Development Workflow

### Component Development
1. Start with a clear component purpose
2. Define props interface
3. Implement basic functionality
4. Add styling with Tailwind
5. Test responsiveness
6. Add accessibility features

### Data Management
- Keep all portfolio data in the data file
- Use consistent naming conventions
- Validate data structure
- Add proper TypeScript-like comments for data shape

### Testing
- Write unit tests for utility functions
- Test component rendering
- Ensure responsive design works
- Test accessibility features

## Best Practices

### Code Quality
- Use meaningful commit messages
- Keep functions small and focused
- Avoid deep nesting
- Use proper error boundaries
- Implement proper loading states

### Accessibility
- Use semantic HTML elements
- Add proper ARIA labels
- Ensure keyboard navigation works
- Maintain proper color contrast
- Test with screen readers

### Performance
- Lazy load images and components when appropriate
- Optimize bundle size
- Use React.memo for expensive components
- Implement proper caching strategies

## Common Patterns

### Navigation
```javascript
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

### Responsive Design
```javascript
// Use Tailwind responsive prefixes
className="text-lg md:text-xl lg:text-2xl"
```

### State Management
```javascript
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeSection, setActiveSection] = useState('home');
```

## Deployment
- Build command: `npm run build`
- Deploy to GitHub Pages: `npm run deploy`
- Ensure all assets are properly referenced
- Test deployment locally before pushing

## File Naming Conventions
- Components: PascalCase (e.g., `Portfolio.js`)
- Data files: camelCase (e.g., `portfolioData.js`)
- CSS files: kebab-case (e.g., `App.css`)
- Images: descriptive names with proper extensions

## Dependencies
- Keep dependencies up to date
- Use specific versions for stability
- Document any custom configurations
- Follow security best practices

## Error Handling
- Implement proper error boundaries
- Add fallback UI for failed components
- Handle image loading errors gracefully
- Provide meaningful error messages

## Future Considerations
- Consider adding TypeScript for better type safety
- Implement dark mode toggle
- Add animations and micro-interactions
- Consider adding a blog section
- Implement contact form functionality 