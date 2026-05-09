# 🚀 Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended - Easiest) ⭐

**Option A: Using Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Import your Git repository
5. Vercel will auto-detect settings
6. Click "Deploy"
7. Done! Your site will be live in ~2 minutes

**Option B: Using Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to frontend folder
cd frontend

# Deploy
vercel

# For production
vercel --prod
```

### 2. Netlify

**Option A: Drag & Drop**
1. Run: `pnpm build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to Netlify
4. Done!

**Option B: Using Git**
1. Push code to GitHub
2. Go to Netlify Dashboard
3. "Add new site" → "Import an existing project"
4. Connect your repository
5. Build settings are auto-configured
6. Deploy!

**Option C: Using Netlify CLI**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Navigate to frontend folder
cd frontend

# Build
pnpm build

# Deploy
netlify deploy --prod
```

### 3. GitHub Pages

**Setup:**
```bash
# Add deployment script
npm i -D gh-pages
```

**Add to package.json scripts:**
```json
"predeploy": "pnpm build",
"deploy": "gh-pages -d dist"
```

**Update vite.config.ts:**
```typescript
export default defineConfig({
  base: '/repository-name/', // Replace with your repo name
  // ... rest of config
})
```

**Deploy:**
```bash
pnpm deploy
```

### 4. Render

1. Go to [render.com](https://render.com)
2. Create new "Static Site"
3. Connect your Git repository
4. Build Command: `pnpm install && pnpm build`
5. Publish Directory: `dist`
6. Deploy!

## 📋 Pre-Deployment Checklist

- [ ] Update personal information in `src/app/data/portfolioData.ts`
- [ ] Replace profile photo in `src/imports/image.png`
- [ ] Test locally: `pnpm dev`
- [ ] Build successfully: `pnpm build`
- [ ] Preview build: `pnpm preview`
- [ ] Update README.md if needed
- [ ] Commit all changes to Git

## 🔧 Environment Setup

### Local Development
```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Open http://localhost:5173
```

### Production Build
```bash
# Build
pnpm build

# Preview
pnpm preview
```

## 🌐 Custom Domain Setup

### Vercel
1. Go to Project Settings
2. Domains tab
3. Add your domain
4. Update DNS records as shown

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

### GitHub Pages
1. Add `CNAME` file to `public/` folder
2. Content: your domain name
3. Configure DNS to point to GitHub

## 📱 Performance Optimization

Already optimized with:
- ✅ Vite for fast builds
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Optimized images
- ✅ Tree shaking
- ✅ Minification

## 🐛 Troubleshooting

**Build fails:**
- Clear node_modules: `rm -rf node_modules && pnpm install`
- Clear cache: `rm -rf dist`

**Images not loading:**
- Check image paths in `src/imports/`
- Verify imports in components

**404 on routes:**
- Add redirect rules (already configured in `vercel.json` and `netlify.toml`)

## 📞 Need Help?

If you encounter issues:
1. Check build logs
2. Verify all dependencies installed
3. Test local build: `pnpm build && pnpm preview`
4. Check deployment platform documentation

---

**Quick Start:**
```bash
cd frontend
pnpm install
pnpm dev
# Build: pnpm build
# Deploy: Choose any platform above!
```
