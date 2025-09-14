# 🚀 Deployment Guide

## GitHub Pages Setup

### Quick Deployment
```bash
npm run deploy
```

### First-Time Setup

1. **Push to GitHub Repository**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Configure GitHub Repository Settings**
   - Go to your repository: `https://github.com/amritamlife/amritamlife.github.io`
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **"Deploy from a branch"**
   - Choose **`gh-pages`** branch
   - Select **`/ (root)`** folder
   - Click **Save**

3. **Wait for Deployment**
   - GitHub Actions will automatically build and deploy
   - Check the **Actions** tab for deployment status
   - Site will be live at: **https://amritamlife.github.io/**

### Manual Deployment Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### Automatic Deployment

Every push to `main` branch triggers:
- Automatic build process
- Deployment to GitHub Pages
- Site update within 2-5 minutes

### Troubleshooting

#### If deployment fails:
1. Check GitHub Actions logs in repository
2. Ensure `gh-pages` branch exists
3. Verify repository settings in GitHub

#### If routes don't work:
- 404.html file handles client-side routing
- All React Router routes should work correctly
- Direct URL access is supported

#### Build warnings:
- Minor ESLint warnings are normal
- They don't affect deployment

### Repository Structure
```
├── .github/workflows/
│   ├── deploy.yml              # GitHub Pages action
│   └── deploy-gh-pages.yml     # Alternative deployment
├── public/
│   └── 404.html               # SPA routing support
├── package.json               # Homepage & deploy scripts
└── build/                     # Generated after npm run build
```

### Important Notes

- **Homepage URL**: Set to `https://amritamlife.github.io/`
- **Branch**: Deploys from `main` to `gh-pages`
- **SPA Support**: Full React Router support enabled
- **Build Time**: ~2-3 minutes for full deployment
- **Cache**: GitHub Pages may cache for up to 10 minutes

### Commands Reference

```bash
# Development
npm start                 # Start local development server

# Building
npm run build            # Create production build
npm run predeploy        # Runs automatically before deploy
npm run deploy           # Build and deploy to GitHub Pages

# Testing build locally
npx serve -s build       # Serve production build locally
```

---

**Live Site**: https://amritamlife.github.io/  
**Repository**: https://github.com/amritamlife/amritamlife.github.io
