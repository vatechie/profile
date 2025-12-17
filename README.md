# Portfolio Project

A personal portfolio website built with React and TypeScript.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Project Structure

```
src/
├── components/          # UI components
│   ├── Navigation.tsx
│   ├── HomeSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── SkillsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── hooks/               # Custom React hooks
│   └── useScrollSpy.ts
├── data/                # Portfolio content
│   └── portfolioData.ts
├── types/               # TypeScript definitions
│   └── index.ts
├── App.tsx              # Main app component
└── index.tsx            # Entry point
```

## Customization

Edit `src/data/portfolioData.ts` to update:
- Personal information
- Work experience
- Education
- Skills

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Lucide Icons
