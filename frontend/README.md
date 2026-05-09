# Sandeep Kumar - Portfolio Website

A modern, dynamic portfolio website showcasing projects, experience, and skills with warm orange-red sunset theme.

## 🚀 Features

- **Dynamic Animations**: Smooth Motion (Framer Motion) animations throughout
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI**: Warm sunset gradient theme (Orange → Red → Rose)
- **Interactive Elements**: Hover effects, animated transitions, and scroll effects
- **Optimized Performance**: Built with Vite and React

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📦 Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run development server:
```bash
pnpm dev
```

3. Build for production:
```bash
pnpm build
```

4. Preview production build:
```bash
pnpm preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
pnpm build
```

2. Drag and drop the `dist` folder to Netlify

OR use Netlify CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
pnpm add -D gh-pages
```

2. Add to package.json scripts:
```json
"deploy": "pnpm build && gh-pages -d dist"
```

3. Update vite.config.ts (add base URL):
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

4. Deploy:
```bash
pnpm deploy
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── App.tsx              # Main application component
│   │   ├── components/
│   │   │   └── Navigation.tsx   # Navigation component
│   │   └── data/
│   │       └── portfolioData.ts # All portfolio data
│   ├── imports/                 # Images and assets
│   └── styles/
│       └── theme.css            # Tailwind theme and styles
├── index.html                   # Entry HTML
├── package.json                 # Dependencies
├── vite.config.ts              # Vite configuration
└── README.md                    # This file
```

## 🎨 Customization

### Update Personal Information

Edit `src/app/data/portfolioData.ts`:
- Projects
- Experience
- Skills
- Certifications
- Coursework

### Change Colors

Update color gradients in components:
- Current theme: `from-orange-600 via-red-600 to-rose-600`
- Replace with your preferred Tailwind colors

### Update Profile Photo

Replace `src/imports/image.png` with your photo

## 📝 License

© 2026 Sandeep Kumar. All rights reserved.

## 📧 Contact

- **Email**: sandeep636764@gmail.com
- **LinkedIn**: [Sandeep Kumar](https://linkedin.com/in/sandeep-kumar-869189333)
- **GitHub**: [sandeepmthf](https://github.com/sandeepmthf)
