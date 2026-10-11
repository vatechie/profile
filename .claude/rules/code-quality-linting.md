# Code Quality & Linting Rules for Dev Portfolio Project

## ESLint Configuration

### React-Specific Rules
- Use `react-hooks/exhaustive-deps` to ensure all dependencies are included in useEffect
- Prefer `react/jsx-key` to require keys in array iterations
- Use `react/jsx-no-duplicate-props` to prevent duplicate props
- Enforce `react/jsx-no-undef` to prevent undefined JSX elements
- Use `react/no-array-index-key` to avoid using array index as key
- Prefer `react/no-unused-state` to detect unused state variables

### TypeScript Rules
- Use `@typescript-eslint/no-explicit-any` to avoid `any` type
- Enforce `@typescript-eslint/explicit-function-return-type` for complex functions
- Use `@typescript-eslint/no-unused-vars` to catch unused variables
- Prefer `@typescript-eslint/strict-boolean-expressions` for type-safe conditionals
- Use proper type imports with `import type` when appropriate

### JavaScript/ES6+ Rules
```typescript
// Prefer const over let, avoid var
const user = { name: 'John' };
let count = 0; // Only use let when reassignment is needed

// Use arrow functions for consistency
const handleClick = () => {
  // function body
};

// Use destructuring for cleaner code
const { name, email } = user;
const [first, second] = array;

// Use template literals instead of string concatenation
const message = `Hello ${name}, welcome to ${appName}!`;
```

### Import/Export Rules
- Use named exports for multiple exports
- Use default exports sparingly (mainly for `App.tsx`)
- Group imports: React, third-party libraries, local imports, type imports
- Remove unused imports
- Use `import type` for type-only imports

```typescript
// Good import organization
import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { personalInfo, experience } from './data/portfolioData';
import type { Experience, Education } from './types';
```

## Code Quality Standards

### Function Quality
- Keep functions small and focused (max 20-30 lines)
- Use descriptive function names
- Limit function parameters (max 3-4)
- Use early returns to reduce nesting
- Handle errors gracefully
- Provide proper TypeScript types for parameters and return values

```typescript
// Good function example
const validateEmail = (email: string): boolean => {
  if (!email) return false;
  if (!email.includes('@')) return false;
  return true;
};

// Bad function example
const doEverything = (data: any, config: any, options: any, callback: any, errorHandler: any) => {
  // 50+ lines of mixed concerns
};
```

### Variable Naming
- Use camelCase for variables and functions
- Use PascalCase for components and types
- Use UPPER_SNAKE_CASE for constants
- Use descriptive names, avoid abbreviations

```typescript
// Good naming
const userProfile = getUserData();
const isMenuOpen = false;
const MAX_RETRY_ATTEMPTS = 3;

// Bad naming
const up = getUserData();
const flag = false;
const max = 3;
```

### Component Quality
- Single responsibility principle
- Keep components under 200 lines
- Extract reusable logic into custom hooks
- Use proper TypeScript interfaces for props
- Implement error boundaries

```typescript
// Good component structure
interface PortfolioProps {
  initialSection?: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ initialSection = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(initialSection);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="portfolio">
      <Navigation
        isOpen={isMenuOpen}
        onToggle={handleMenuToggle}
        activeSection={activeSection}
      />
      {/* Component content */}
    </div>
  );
};

export default Portfolio;
```

## Performance Rules

### React Optimization
- Use `React.memo` for expensive components
- Use `useCallback` for function props
- Use `useMemo` for expensive calculations
- Avoid inline object/array creation in render

```typescript
// Good performance practices
interface ComponentProps {
  data: DataItem[];
  onUpdate: (data: ProcessedData[]) => void;
}

const MemoizedComponent = React.memo<ComponentProps>(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({ ...item, processed: true }));
  }, [data]);

  const handleClick = useCallback(() => {
    onUpdate(processedData);
  }, [onUpdate, processedData]);

  return <div onClick={handleClick}>{/* content */}</div>;
});

MemoizedComponent.displayName = 'MemoizedComponent';
```

### Bundle Optimization
- Lazy load components and routes
- Optimize images and assets
- Use dynamic imports for code splitting
- Remove unused dependencies

```typescript
// Lazy loading example
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// Dynamic import example
const loadFeature = async () => {
  const { default: Feature } = await import('./Feature');
  return Feature;
};
```

## Error Handling

### Try-Catch Patterns
- Always handle async operations
- Provide meaningful error messages
- Log errors appropriately
- Implement fallback UI

```typescript
// Good error handling
const fetchData = async (): Promise<DataType | null> => {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
};
```

### React Error Boundaries
```typescript
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

## Accessibility Standards

### ARIA and Semantic HTML
- Use semantic HTML elements
- Add proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios

```typescript
// Good accessibility
<button
  aria-label="Close menu"
  onClick={handleClose}
  onKeyDown={handleKeyDown}
>
  <X aria-hidden="true" />
</button>

// Use semantic elements
<nav role="navigation" aria-label="Main navigation">
  <ul>
    <li><a href="#home">Home</a></li>
  </ul>
</nav>
```

## Testing Standards

### Unit Testing
- Test component rendering
- Test user interactions
- Test error states
- Maintain good test coverage

```typescript
// Good test example
import { render, screen, fireEvent } from '@testing-library/react';
import Portfolio from './Portfolio';

test('renders portfolio with user name', () => {
  render(<Portfolio />);
  expect(screen.getByText('Vishal Aggarwal')).toBeInTheDocument();
});

test('toggles mobile menu', () => {
  render(<Portfolio />);
  const menuButton = screen.getByLabelText('Toggle menu');
  fireEvent.click(menuButton);
  expect(screen.getByRole('navigation')).toBeVisible();
});
```

## Prettier Configuration

### Code Formatting
- Use consistent indentation (2 spaces)
- Use semicolons consistently
- Use single quotes for strings
- Use trailing commas in objects/arrays
- Max line length: 80-100 characters

```typescript
// Prettier formatted code
const component = {
  name: 'Portfolio',
  props: {
    title: 'Developer Portfolio',
    description: 'A showcase of my work',
  },
  render() {
    return (
      <div className="portfolio">
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  },
};
```

## Git Commit Standards

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples
```
feat(portfolio): add dark mode toggle
fix(navigation): resolve mobile menu overlap
docs(readme): update deployment instructions
style(components): improve button hover states
refactor(hooks): extract scroll logic to useScrollSpy
```

## Code Review Checklist

### Before Submitting
- [ ] Code follows project conventions
- [ ] TypeScript types are properly defined
- [ ] All tests pass
- [ ] No console errors or warnings
- [ ] Responsive design works
- [ ] Accessibility standards met
- [ ] Performance impact considered
- [ ] Error handling implemented
- [ ] Documentation updated

### Review Points
- Code readability and maintainability
- TypeScript type safety
- Security considerations
- Performance implications
- Test coverage adequacy
- Accessibility compliance
- Cross-browser compatibility

## Common Anti-Patterns to Avoid

### React Anti-Patterns
```typescript
// ❌ Don't use array index as key
{items.map((item, index) => (
  <div key={index}>{item.name}</div>
))}

// ✅ Use unique, stable keys
{items.map((item) => (
  <div key={item.id}>{item.name}</div>
))}

// ❌ Don't mutate state directly
this.state.count++;

// ✅ Use setState or useState
setCount(prevCount => prevCount + 1);

// ❌ Don't create objects in render
const style = { color: 'red' };

// ✅ Move outside component or use useMemo
const style = useMemo(() => ({ color: 'red' }), []);
```

### TypeScript Anti-Patterns
```typescript
// ❌ Don't use any
const getData = (data: any) => {};

// ✅ Use proper types
const getData = (data: UserData) => {};

// ❌ Don't use type assertions unnecessarily
const value = data as string;

// ✅ Use type guards or proper typing
const value: string = typeof data === 'string' ? data : '';
```

### JavaScript Anti-Patterns
```typescript
// ❌ Don't use var
var name = 'John';

// ✅ Use const or let
const name = 'John';

// ❌ Don't use == for comparison
if (value == 5) {}

// ✅ Use === for strict comparison
if (value === 5) {}

// ❌ Don't use eval
eval('console.log("Hello")');

// ✅ Use safer alternatives
console.log('Hello');
```

## Performance Monitoring

### Metrics to Track
- Bundle size
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- Time to Interactive (TTI)

### Tools
- Lighthouse for performance audits
- React DevTools for component profiling
- Bundle analyzer for size optimization
- Web Vitals for Core Web Vitals monitoring

## Security Best Practices

### Input Validation
- Validate all user inputs
- Sanitize data before rendering
- Use Content Security Policy (CSP)
- Implement proper authentication

### Dependencies
- Regularly update dependencies
- Use `npm audit` to check vulnerabilities
- Avoid using `dangerouslySetInnerHTML`
- Validate external data sources

## TypeScript-Specific Guidelines

### Type Definitions
```typescript
// Define interfaces in types/index.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
}
```

### Component Props
```typescript
// Always define prop interfaces
interface NavigationProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onToggle, activeSection }) => {
  return (
    <nav className={`navigation ${isOpen ? 'open' : ''}`}>
      {/* Navigation content */}
    </nav>
  );
};
```

This comprehensive code quality and linting guide ensures your React portfolio project maintains high standards of code quality, performance, maintainability, and type safety with TypeScript.
