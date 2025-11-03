# Stefania Solari — Portfolio

Minimalist portfolio website showcasing immersive design, interactive art, and Art+Technology projects. Built with React, TypeScript, and Tailwind CSS with a retro monospace aesthetic inspired by Cargo.site.

**Live Site:** [Coming Soon - Deploy on Vercel]

## 👩‍🎨 About

Head of Design at Crurated, specializing in Art+Technology convergence. This portfolio showcases:
- **Product Design & UX** — E-commerce, AR platforms, enterprise applications
- **Immersive Art** — VR experiences, generative systems, interactive installations
- **Full-Stack Development** — Unity (C#), TouchDesigner, web applications

## 🎨 Features

- **Dual Identity System**: Separate filters for Design (commercial/UX) and Art (experimental/installations)
- **Full-Screen Project Views**: Cargo.site-inspired immersive browsing experience
- **Detailed Case Studies**: In-depth documentation with research, process, tech stack, and outcomes
- **Complete CV Section**: Downloadable resume with 17+ years experience, 9 positions, 3 degrees
- **Print-Optimized CV**: Professional PDF export with proper formatting
- **Smooth Animations**: Motion-powered transitions, scroll effects, and micro-interactions
- **Keyboard Navigation**: Full accessibility support (Esc, Arrow keys, Tab)
- **Responsive Design**: Optimized for desktop, tablet, and mobile

## 🚀 Tech Stack

### Frontend
- **React 18** + **TypeScript** — Type-safe component architecture
- **Vite** — Lightning-fast development and optimized production builds
- **Tailwind CSS v4** — Modern utility-first styling with custom design tokens
- **Motion** (Framer Motion) — Smooth animations and transitions

### UI Components
- **Radix UI** — Accessible, unstyled component primitives
- **Shadcn/UI** — Beautiful, customizable components built on Radix
- **Lucide React** — Consistent icon system

### Typography & Design
- **IBM Plex Mono** — Retro monospace aesthetic
- **Black & White** — Minimalist color scheme
- **Full-screen layouts** — Immersive project presentation

## 📦 Installation & Development

```bash
# Clone repository
git clone https://github.com/YOUR-USERNAME/stefania-solari-portfolio.git
cd stefania-solari-portfolio

# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🖼️ Using Your Own Images

The portfolio currently uses **Unsplash placeholder images**. To add your own project images:

### Option 1: GitHub Repository (Recommended)
1. Create a public GitHub repository (e.g., `portfolio-images`)
2. Upload images to an `images` folder
3. Get raw URLs: Click image → "Raw" button
4. Format: `https://raw.githubusercontent.com/USERNAME/REPO/main/images/filename.jpg`
5. Replace URLs in `/components/Projects.tsx`

### Option 2: External CDN
- Use **Cloudinary**, **ImgIx**, or similar image CDN
- Ensure images are optimized (WebP format, ~1600px width recommended)

## ✏️ Customization Guide

### 1. Projects (`/components/Projects.tsx`)
Add/edit projects in the `projects` array. Each project includes:
- Basic info: title, category, type (DESIGN/ART), year
- Images array (min 1, recommended 2-3)
- Optional case study fields: role, challenge, concept, process, techStack, features, outcomes

```typescript
{
  id: 8,
  title: "YOUR PROJECT NAME",
  category: "PROJECT TYPE",
  type: "DESIGN", // or "ART"
  year: "2024",
  description: "Brief description for grid view",
  images: ["url1", "url2"],
  // Optional detailed fields...
}
```

### 2. About Section (`/components/About.tsx`)
Update your bio, skills, and professional summary.

### 3. CV (`/components/CV.tsx`)
Edit experience, education, skills sections. The CV is print-optimized for PDF export.

### 4. Hero Section (`/components/Hero.tsx`)
Customize landing page headline and tagline.

### 5. Contact Info (`/components/Contact.tsx`)
Update email and LinkedIn URL.

### 6. Design Tokens (`/styles/globals.css`)
Modify typography, spacing, and color tokens for brand customization.

## 📱 Deployment

### **Deploy to Vercel** (Recommended — ~2 minutes)

#### Step 1: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio ready for deployment"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/stefania-solari-portfolio.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"New Project"**
3. Import your `stefania-solari-portfolio` repository
4. **Vercel auto-detects settings** (Vite, React, build commands)
5. Click **"Deploy"**

**Your site will be live in ~60 seconds!** 🎉

Vercel provides:
- ✅ Free hosting for personal projects
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on `git push`
- ✅ Custom domain support (optional)

### Alternative: Netlify, GitHub Pages, or Custom Hosting

```bash
# Build for production
npm run build

# The 'dist' folder contains your static site
# Upload to any static hosting provider
```

## 🎯 Portfolio Structure

```
/
├── App.tsx                    # Main app component with routing/filters
├── components/
│   ├── Hero.tsx              # Landing section
│   ├── Projects.tsx          # Project grid + data
│   ├── ProjectDetail.tsx     # Full-screen project view
│   ├── About.tsx             # Bio section
│   ├── CV.tsx                # Resume component
│   ├── Contact.tsx           # Footer contact
│   ├── Header.tsx            # Navigation
│   └── ui/                   # Shadcn components
├── styles/
│   └── globals.css           # Tailwind + custom tokens
└── vercel.json               # Deployment config
```

## 🔑 Key Technologies

| Category | Tools |
|----------|-------|
| **Art & Immersive** | TouchDesigner, Unity VR, Unreal Engine, Processing |
| **Development** | React, TypeScript, Unity (C#), PHP/Laravel |
| **Design** | Figma, Blender, Adobe Suite |
| **AR/XR** | Unity AR Foundation, Meta Quest, OpenXR |
| **AI** | ComfyUI, Replicate API, Pulsoid biometric sensors |

## 📄 License

Personal portfolio website © 2025 Stefania Solari  
All rights reserved.

## 📧 Contact

**Stefania Solari**  
Head of Design | Art+Technology Specialist

- 📧 Email: [stefania_solari@hotmail.it](mailto:stefania_solari@hotmail.it)
- 💼 LinkedIn: [linkedin.com/in/stefaniasolari](https://www.linkedin.com/in/stefaniasolari)
- 🌐 Portfolio: [Coming Soon]

---

**Built with React + Vite + Tailwind CSS**  
Designed for artists, designers, and creative technologists applying to residencies, exhibitions, and art+science programs like CERN.
