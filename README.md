# Portfolio Website

A modern portfolio website built with React, Vite, and Tailwind CSS, inspired by rython.dev.

## Features

- 🎨 Clean, minimal design matching rython.dev
- 📱 Fully responsive (mobile-first)
- ✨ Smooth scroll animations
- 🎯 Active section highlighting in navigation
- 🌙 Dark theme with purple accents
- ⚡ Fast performance with Vite
- 🎭 Intersection Observer for scroll animations

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Vanilla JavaScript (no heavy libraries)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
portfolio-site/
├── public/
│   ├── images/
│   │   ├── pfp.webp
│   │   └── projects/
│   └── HarshRana_Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Update Content

Edit the component files in `src/components/` to update:
- Personal information
- Projects
- Skills
- Experience
- Social links

### Styling

- Tailwind configuration: `tailwind.config.js`
- Global styles: `src/styles/globals.css`
- Component styles: Use Tailwind classes directly in components

### Images

Place your images in:
- Profile picture: `public/images/pfp.webp`
- Project images: `public/images/projects/`
- Resume: `public/HarshRana_Resume.pdf`

## License

MIT
