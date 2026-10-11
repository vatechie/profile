# Claude Rules for Dev Portfolio Project

## Project Overview
This is a React-based developer portfolio website built with:
- React 19.1.0
- TypeScript
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
- Use proper prop validation with TypeScript interfaces

### File Organization
```
src/
├── components/     # Reusable UI components
├── data/          # Static data and configuration (portfolioData.ts)
├── hooks/         # Custom React hooks (useScrollSpy.ts)
├── pages/         # Page components (Home.tsx)
├── types/         # TypeScript type definitions
└── App.tsx        # Main application component
```

### TypeScript Conventions
- Use TypeScript for all new code
- Define interfaces for all props and data structures
- Use type exports from `src/types/index.ts`
- Prefer interfaces over types for object shapes
- Use proper typing, avoid `any`
- Export types alongside components when needed

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
- Keep all content in `src/data/portfolioData.ts` as typed exports
- Data exports: `personalInfo`, `experience`, `education`, `skills`, `projects`
- Use consistent data structure matching types in `src/types/index.ts`
- Ensure all links are valid and open in new tabs when external
- Add proper alt text for images and accessibility

### Architecture
- Single-page application with scroll-spy navigation (no client-side routing)
- Data flow: `portfolioData.ts` → `App.tsx` → `Layout` → `Home` → section components
- `useScrollSpy` hook drives active nav highlighting and profile image visibility
- Navigation shows profile image only when home section's `#profile-image` scrolls out of view

### Adding New Sections
When adding a new section, follow this checklist:
1. Add data types to `src/types/index.ts`
2. Add data to `src/data/portfolioData.ts`
3. Create component in `src/components/`
4. Export from `src/components/index.ts`
5. Register section ID in `useScrollSpy.ts` `SECTIONS` array
6. Add to `Navigation.tsx` `navItems` array
7. Render in `src/pages/Home.tsx`

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
2. Define TypeScript interface for props
3. Implement basic functionality
4. Add styling with Tailwind
5. Test responsiveness
6. Add accessibility features

### Data Management
- Keep all portfolio data in `src/data/portfolioData.ts`
- Use consistent naming conventions
- Validate data structure against TypeScript types
- Export data as named exports

### Testing
- Write unit tests for utility functions
- Test component rendering
- Ensure responsive design works
- Test accessibility features

## Best Practices

### Code Quality
- Use meaningful commit messages (format: `type(scope): description`)
- Commit types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
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
```typescript
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

### Responsive Design
```typescript
// Use Tailwind responsive prefixes
className="text-lg md:text-xl lg:text-2xl"
```

### State Management
```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeSection, setActiveSection] = useState('home');
```

## Build & Deployment

### Commands
```bash
npm install --legacy-peer-deps  # Install dependencies (required)
npm start                       # Dev server at localhost:3000/profile
npm run build                   # Production build
npm test                        # Run tests (watch mode)
npm test -- --watchAll=false   # Run tests once
npm run deploy                  # Build + deploy to GitHub Pages
```

### Deployment Details
- GitHub Actions (`deploy.yml`) auto-deploys on push to `master` branch
- Builds and pushes to `gh-pages` branch
- Live site: `https://vatechie.github.io/profile`
- Homepage configured in `package.json`

## File Naming Conventions
- Components: PascalCase with `.tsx` extension (e.g., `Portfolio.tsx`)
- Data files: camelCase with `.ts` extension (e.g., `portfolioData.ts`)
- Hooks: camelCase starting with `use` (e.g., `useScrollSpy.ts`)
- Types: PascalCase interfaces/types in `types/index.ts`
- CSS files: kebab-case (e.g., `App.css`)
- Images: descriptive names with proper extensions

## Dependencies
- Keep dependencies up to date
- Use specific versions for stability
- Document any custom configurations
- Follow security best practices
- Use `--legacy-peer-deps` flag for npm install due to peer dependency conflicts

## Error Handling
- Implement proper error boundaries
- Add fallback UI for failed components
- Handle image loading errors gracefully
- Provide meaningful error messages

## TypeScript Best Practices
- Define all data structures in `src/types/index.ts`
- Use interfaces for component props
- Export types alongside data
- Avoid `any`, use proper typing
- Use TypeScript strict mode features

## Future Considerations
- Maintain TypeScript type safety across codebase
- Consider implementing dark mode toggle
- Add animations and micro-interactions
- Consider adding a blog section
- Implement contact form functionality
