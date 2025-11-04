# Routing Guide

This portfolio uses **React Router** for clean, hash-free URLs.

## Available Routes

### Public Routes
- **`/`** - Home page with hero, projects, about, and contact sections
- **`/cv`** - Full CV page with detailed experience, education, and skills

### Protected Routes
- **`/admin`** - Admin panel (requires password authentication)
  - Default password: `stefania2024`
  - Change in `/components/AdminLogin.tsx`

### Wildcard
- **`/*`** - Any invalid route redirects to home page

## Navigation Methods

### 1. Direct URL Navigation
Users can type routes directly:
- `yoursite.com/` → Home
- `yoursite.com/cv` → CV page
- `yoursite.com/admin` → Admin login

### 2. In-App Links
Click links within the site:
- "VIEW & DOWNLOAD CV" button in Contact section → `/cv`
- ⚙ icon in header → `/admin`
- Logo/name → Scrolls to top of home page

### 3. Smooth Scroll (Home Page Only)
On the home page, navigation uses smooth scrolling:
- Filter buttons (ALL/DESIGN/ART) → Scrolls to projects section
- ABOUT button → Scrolls to about section
- CONTACT button → Scrolls to contact section

## How It Works

### Tech Stack
- **React Router DOM v6** - Client-side routing
- **BrowserRouter** - HTML5 History API (clean URLs without #)
- **Vercel Configuration** - Rewrites all routes to `/index.html` for SPA support

### Deployment Configuration
The `vercel.json` file contains:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures that:
1. `/cv` serves the React app (not a 404)
2. `/admin` serves the React app
3. React Router handles the route matching client-side

### Browser Behavior
- **Back/Forward buttons** work correctly
- **Bookmarks** work for any route
- **Direct links** can be shared
- **Page refresh** maintains the current route

## Authentication Flow

### Admin Route Protection
```
User navigates to /admin
  ↓
Check sessionStorage for "admin_authenticated"
  ↓
If authenticated:
  → Show Admin panel
If not authenticated:
  → Show AdminLogin component
  ↓
After successful login:
  → Set sessionStorage
  → Show Admin panel
```

### Logout Flow
```
User clicks "Logout" in Admin panel
  ↓
Clear sessionStorage
  ↓
Redirect to home page (/)
```

## Development

### Running Locally
```bash
npm run dev
```

Then navigate to:
- `http://localhost:5173/` - Home
- `http://localhost:5173/cv` - CV
- `http://localhost:5173/admin` - Admin

### Building for Production
```bash
npm run build
npm run preview
```

Test all routes work correctly before deploying.

## Migration Notes

### Before (Hash Routing)
- Home: `yoursite.com/`
- CV: `yoursite.com/#cv`
- Admin: `yoursite.com/#admin`

### After (React Router)
- Home: `yoursite.com/`
- CV: `yoursite.com/cv`
- Admin: `yoursite.com/admin`

### Breaking Changes
None! Old hash URLs will redirect to home page and users can navigate normally.

## Troubleshooting

### 404 on Refresh
**Problem**: Refreshing `/cv` or `/admin` gives 404

**Solution**: Ensure `vercel.json` has the rewrite rule (already configured)

### Admin Authentication Persists
**Problem**: Logged out but still authenticated

**Solution**: 
- Clear browser sessionStorage
- Or close and reopen browser (sessionStorage auto-clears)

### Links Not Working
**Problem**: Clicking links doesn't navigate

**Solution**: 
- Check if you're using `<Link>` from `react-router-dom`
- Don't use `<a href>` for internal routes
- Use `<Link to="/route">` instead

## Best Practices

### Internal Links
✅ **DO**: Use React Router Link
```tsx
import { Link } from 'react-router-dom';

<Link to="/cv">View CV</Link>
```

❌ **DON'T**: Use anchor tags for internal routes
```tsx
<a href="/cv">View CV</a>  // This causes full page reload
```

### External Links
✅ **DO**: Use regular anchor tags
```tsx
<a href="https://linkedin.com/..." target="_blank" rel="noopener">
  LinkedIn
</a>
```

### Programmatic Navigation
```tsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

// Navigate to route
navigate('/cv');

// Go back
navigate(-1);

// Replace history (no back button)
navigate('/admin', { replace: true });
```

## Future Enhancements

Potential routing improvements:
- **Project detail pages**: `/project/:id` for deep linking to projects
- **Category pages**: `/art` and `/design` for filtered views
- **Query parameters**: `/projects?filter=art` for shareable filter states
- **404 page**: Custom 404 instead of redirect to home
