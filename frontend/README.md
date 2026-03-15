# Frontend Setup & Build Guide

## Prerequisites
- Node.js v16 or higher
- npm v7 or higher

## Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

### Development Server
```bash
npm start
```
Runs the app in development mode at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
Builds the app for production in the `build` folder

### Run Tests
```bash
npm test
```
Launches the test runner

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.js
│   ├── Footer.js
│   └── PetCard.js
├── pages/              # Page components
│   ├── LoginPage.js
│   ├── HomePage.js
│   ├── PetDetailsPage.js
│   └── FeedbackPage.js
├── styles/             # CSS files
│   └── index.css
├── App.js             # Main app component
└── index.js           # Entry point
```

## Key Features

- **React Routing**: Uses React Router for page navigation
- **Tailwind CSS**: Modern utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Component-Based**: Modular component architecture

## Environment Variables

Create a `.env` file in the frontend directory (optional):
```
REACT_APP_API_URL=http://localhost:8080/api
```

## Backend Integration

The frontend expects the backend API at `http://localhost:8080/api`

Make sure the backend is running before starting the frontend!

## Troubleshooting

### Port 3000 already in use
```bash
# Use a different port
PORT=3001 npm start
```

### Dependencies issues
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Tailwind CSS not loading
```bash
# Rebuild Tailwind
npm run build
```

## Performance

- Code splitting enabled
- Lazy loading for components
- Optimized images
- CSS minification in production

## Deployment

The app can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build: `npm run build`

---

For more information, see the main README.md
