# Deployment Instructions for GitHub Pages

## Prerequisites
- GitHub account
- Git repository pushed to GitHub

## Setup Steps

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: `https://github.com/dandresrp/marketing-company-page`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
   - (This allows the GitHub Actions workflow to deploy automatically)

### 2. Push Your Code

Make sure all your changes are committed and pushed to the `main` branch:

```bash
git add .
git commit -m "Prepare project for GitHub Pages deployment"
git push origin main
```

### 3. Workflow Will Run Automatically

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Trigger automatically on every push to `main` branch
- Install dependencies with pnpm
- Build the Astro site
- Deploy to GitHub Pages

### 4. Check Deployment Status

1. Go to the **Actions** tab in your GitHub repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 1-2 minutes)
4. If it fails, click on the workflow run to see error details

### 5. Access Your Live Site

Once deployed, your site will be available at:
**https://dandresrp.github.io/marketing-company-page/**

## Manual Deployment (Optional)

If you need to manually trigger a deployment:

1. Go to the **Actions** tab
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select the `main` branch
5. Click "Run workflow"

## Local Testing

To test the production build locally before deploying:

```bash
# Build the site
pnpm build

# Preview the built site
pnpm preview
```

The preview will be available at `http://localhost:4321` by default.

## Troubleshooting

### Build Fails
- Check the Actions tab for error messages
- Ensure all dependencies are correctly listed in `package.json`
- Try building locally with `pnpm build` to catch errors early

### Site Shows 404 Errors
- Verify that `site` and `base` are correctly configured in `astro.config.mjs`
- Make sure the repository name matches the `base` path
- Clear browser cache and hard refresh (Cmd+Shift+R / Ctrl+Shift+F5)

### Styles Not Loading
- Check browser console for 404 errors on CSS files
- Verify `base` path is correct in `astro.config.mjs`
- All asset paths should use the `buildPath()` helper function

## Configuration Files

- **astro.config.mjs**: Contains `site` and `base` configuration for GitHub Pages
- **.github/workflows/deploy.yml**: GitHub Actions workflow for automatic deployment
- **src/utils/paths.ts**: Helper functions for handling base paths in URLs

## Features Included

✅ Internationalization (Spanish/English)
✅ Dark/Light mode toggle
✅ Responsive design
✅ SEO-friendly URLs
✅ Automatic deployment on push to main
✅ Static site generation (SSG)

## Development vs Production

- **Development** (`pnpm dev`): Base URL is `/`
- **Production** (GitHub Pages): Base URL is `/marketing-company-page`

The `buildPath()` utility function automatically handles this difference.
