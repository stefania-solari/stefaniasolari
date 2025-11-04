# Admin Panel Guide

## Accessing the Admin Panel

There are two ways to access the admin panel:

1. **Via URL**: Navigate to `yoursite.com/admin`
2. **Via Header Link**: Click the small ⚙ icon in the header (desktop) or mobile menu

### Login Required

The admin panel is protected by password authentication:

- **Default Password**: `stefania2024`
- **Change Password**: Edit the `ADMIN_PASSWORD` constant in `/components/AdminLogin.tsx`
- **Session Duration**: Authentication persists until you close the browser (uses sessionStorage)
- **Logout**: Click the "Logout" button in the admin panel header

## Features

### 1. Project Management

#### Creating a New Project
1. Click "Create New Project" button
2. Fill in the required fields (marked with *):
   - **Title**: Project name in UPPERCASE
   - **Category**: Brief category description (e.g., "IMMERSIVE INSTALLATION")
   - **Type**: Select "ART" or "DESIGN"
   - **Year**: Project year
   - **Description**: Main project description (appears in grid view)
   - **Images**: At least one image URL

3. Navigate through tabs to add more information:
   - **Basic Info**: Required fields
   - **Images**: Add multiple image URLs (press Enter or click Add)
   - **Details**: Optional fields for DESIGN projects (role, challenge, concept, etc.)

4. Click "Create Project" to save

#### Editing a Project
1. Find the project in the list
2. Click the Edit (pencil) icon
3. Modify any fields
4. Click "Update Project" to save changes

#### Deleting a Project
1. Find the project in the list
2. Click the Delete (trash) icon
3. Confirm the deletion

### 2. Import/Export

#### Export Projects
- Click "Export" button in the header
- Downloads a JSON file with all current projects
- Use this to backup your projects

#### Import Projects
- Click "Import" button
- Select a previously exported JSON file
- Projects will be imported and replace current data

#### Reset to Default
- Click "Reset" button
- Confirms before resetting
- Restores the original 7 projects

## Data Storage

- All projects are saved in **localStorage**
- Data persists across browser sessions
- Data is local to your browser (not synced across devices)
- Clearing browser data will delete custom projects

## Tips

### Images
- Use Unsplash URLs: `https://images.unsplash.com/photo-...?w=1600&q=80`
- Or use GitHub raw URLs for custom images:
  1. Create public GitHub repo
  2. Upload images
  3. Get raw URL: click image > "Raw" button
  4. Format: `https://raw.githubusercontent.com/USERNAME/REPO/main/images/file.jpg`

### DESIGN Projects
- Fill in optional fields for detailed case studies:
  - **Role**: Your role on the project
  - **Challenge**: Problem statement
  - **Concept**: Solution concept
  - **Process**: Design process (use line breaks)
  - **Tech Stack**: Technologies used (add one at a time)
  - **Features**: Key features with descriptions (add one at a time)
  - **Outcomes**: Results and impact

### ART Projects
- Keep it simple: Title, Category, Year, Description, Images
- Optional fields are typically left empty for ART projects

## Workflow Tips

1. **Backup First**: Export projects before making major changes
2. **Use Import**: Create projects in JSON and import them
3. **Test Changes**: Check how projects look in the main portfolio
4. **Mobile Check**: Test on mobile devices after changes

## JSON Format

If you prefer to edit JSON directly, here's the structure:

```json
[
  {
    "id": 1,
    "title": "PROJECT TITLE",
    "category": "PROJECT CATEGORY",
    "type": "ART",
    "year": "2024",
    "description": "Project description...",
    "images": [
      "https://images.unsplash.com/photo-...",
      "https://images.unsplash.com/photo-..."
    ],
    "role": "Optional for DESIGN projects",
    "challenge": "Optional for DESIGN projects",
    "concept": "Optional for DESIGN projects",
    "process": "Optional for DESIGN projects",
    "techStack": ["Tech 1", "Tech 2"],
    "features": ["Feature 1 — Description"],
    "outcomes": "Optional for DESIGN projects"
  }
]
```

## Troubleshooting

### Projects not showing up
- Refresh the page
- Check localStorage in browser DevTools
- Export and re-import projects

### Lost projects
- If you exported before, import the backup
- Otherwise, click "Reset" to restore defaults

### Images not loading
- Verify image URLs are correct
- Check if images are publicly accessible
- Try different image sources (Unsplash, GitHub, etc.)

## Security Note

The admin panel is **password-protected** with a simple authentication system:

### Current Security Features
- **Password Authentication**: Requires password to access admin panel
- **Session-Based**: Authentication expires when browser closes
- **Client-Side Only**: Password is hardcoded in the frontend code

### Security Limitations
⚠️ **Important**: This is a basic protection suitable for personal portfolios, but has limitations:

1. **Password is visible in source code**: Anyone can view the password by inspecting the JavaScript bundle
2. **No brute-force protection**: Someone could try many passwords (though there's a small delay)
3. **No backend validation**: All authentication happens in the browser
4. **No rate limiting**: No protection against automated attacks

### Recommendations for Production

**For Personal Portfolio (Current Setup)**
- Change the default password in `/components/AdminLogin.tsx`
- Use a strong, unique password
- Don't share the password publicly
- Don't share the `/admin` URL publicly
- After initial setup, consider removing the admin link from the header

**For Better Security**
If you need stronger security:
1. **Use Supabase Auth**: Implement proper user authentication with Supabase
2. **Backend API**: Move project management to a secure backend
3. **Environment Variables**: Store passwords in environment variables (still not ideal for client-side)
4. **Remove Admin Panel**: After setting up projects, remove the admin feature entirely

**Alternative Approach**
For maximum simplicity and security:
1. Use the admin panel during development
2. Export your final projects as JSON
3. Hardcode projects in `defaultProjects` in `/lib/projectsData.ts`
4. Remove or hide the admin panel before deployment
5. Make updates locally and redeploy when needed

### Changing the Password

Edit `/components/AdminLogin.tsx`:

```typescript
// Line 13
const ADMIN_PASSWORD = "your-secure-password-here";
```

Make sure to use a strong password with:
- At least 12 characters
- Mix of uppercase and lowercase
- Numbers and special characters
