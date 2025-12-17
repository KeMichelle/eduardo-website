# Deployment Guide - GitHub & Vercel

## ✅ Security Setup Complete

Your project is now configured securely with environment variables. EmailJS credentials will NOT be exposed in your GitHub repository.

## 📦 What's Protected

- `.env` file (contains your EmailJS keys) → Already in `.gitignore`
- `node_modules/` → Already in `.gitignore`
- Build outputs (`.nuxt/`, `.output/`, `dist/`) → Already in `.gitignore`

## 🚀 Deployment Steps

### Step 1: Initialize Git Repository

```powershell
git init
git add .
git commit -m "Initial commit - EDUP GlobalFlex website"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (name it something like `eduardo-website` or `edup-globalflex`)
3. **Do NOT** initialize with README (you already have files)
4. Choose **Private** or **Public** (your choice)

### Step 3: Push to GitHub

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` below:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel

#### Option A: Using Vercel Website (Easiest)

1. Go to https://vercel.com/
2. Sign up/Login (use your GitHub account)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect it's a Nuxt 3 project
6. **Before deploying**, add your environment variables:
   - Click "Environment Variables"
   - Add these three variables:
     ```
     NUXT_PUBLIC_EMAILJS_SERVICE_ID = your_service_id
     NUXT_PUBLIC_EMAILJS_TEMPLATE_ID = your_template_id
     NUXT_PUBLIC_EMAILJS_PUBLIC_KEY = your_public_key
     ```
7. Click "Deploy"

#### Option B: Using Vercel CLI

```powershell
npm install -g vercel
vercel login
vercel
```

Follow the prompts, then add environment variables in the Vercel dashboard.

### Step 5: Configure Domain (Optional)

In Vercel dashboard:

1. Go to your project → Settings → Domains
2. Add your custom domain (e.g., `edupglobalflex.com`)
3. Follow DNS configuration instructions

## 🔒 Post-Deployment Security

### 1. Enable EmailJS Domain Whitelist

After your site is live:

1. Go to EmailJS dashboard
2. Settings → Security
3. Add your domain: `your-site.vercel.app`
4. Enable "Allowed Domains" to block unauthorized requests

### 2. Optional: Add reCAPTCHA

To prevent spam:

1. Get reCAPTCHA keys from https://www.google.com/recaptcha/
2. Add to your contact form
3. Update EmailJS template to require reCAPTCHA

## 📝 Future Updates

To update your live site:

```powershell
git add .
git commit -m "Description of changes"
git push
```

Vercel will automatically redeploy when you push to GitHub.

## ⚠️ Important Notes

1. **Never commit the `.env` file** - It's already in `.gitignore`
2. **Environment variables in Vercel** - Set them in dashboard, not in code
3. **Free Vercel limits**:
   - 100 GB bandwidth/month
   - Unlimited deployments
   - Perfect for this project

## 🎉 You're All Set!

Your website will be:

- ✅ Securely deployed
- ✅ EmailJS keys hidden from public
- ✅ Automatically rebuilt on every Git push
- ✅ HTTPS enabled by default
- ✅ Fast global CDN

## Support

- Vercel Docs: https://vercel.com/docs
- Nuxt Deployment: https://nuxt.com/docs/getting-started/deployment
- EmailJS Security: https://www.emailjs.com/docs/security/

---

**Your EmailJS keys are safe!** They're in `.env` locally and Vercel environment variables in production. Never commit `.env` to GitHub.
