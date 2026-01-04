# Bharatonic Industries Website

**Tagline:** You Dream It, We Build It

A comprehensive construction workforce management platform connecting workers, contractors, homeowners, and supervisors.

## 📁 Project Structure
bharatonic-website/ │ ├── index.html # Main HTML file (Landing Page + Dashboard Container) ├── style.css # Custom CSS styles (Gradients & Animations) ├── script.js # JavaScript logic (Dashboard functionality & Navigation) └── README.md # This file


## 🚀 Deployment on Hostinger

### Step 1: Prepare Your Files

1. Create a new folder on your computer called `bharatonic-website`.
2. Save the following files in this folder:
   - `index.html`
   - `style.css`
   - `script.js`

### Step 2: Upload to Hostinger

#### Option A: Using File Manager (Recommended for Beginners)

1. Log in to your **Hostinger** account.
2. Go to **hPanel** dashboard.
3. Click on **File Manager**.
4. Navigate to `public_html` folder.
5. Delete any existing `index.html` or default files.
6. Click **Upload** button.
7. Upload all three files:
   - `index.html`
   - `style.css`
   - `script.js`
8. Done! Your website is now live!

#### Option B: Using FTP (For Advanced Users)

1. Download **FileZilla** FTP client.
2. Get your FTP credentials from Hostinger:
   - Host/Server
   - Username
   - Password
   - Port (usually 21)
3. Connect to your server using FileZilla.
4. Navigate to `public_html` folder.
5. Drag and drop all three files.
6. Your website is live!

### Step 3: Access Your Website

Visit your domain: `http://yourdomain.com` or `https://yourdomain.com`

## ✨ Features

### Public Pages (Landing Site)
- **Home Section** - Hero banner with call-to-action
- **Services Section** - Overview for Workers, Contractors, and Homeowners
- **Contact Section** - Contact form (demo) and company details

### Admin Dashboard (Single Page Application)
The dashboard is hidden by default. Click **"Login (Demo)"** on the landing page to access it.

- **Dashboard Overview** - Real-time stats, AI insights, and notifications.
- **Worker Management** - List of workers with status, skills, and ratings.
- **Placeholder Modules** - Navigation structure for Contractors, Supervisors, and Admin tools (visual only).

## 🎨 Customization

### Change Colors
To change the gradient backgrounds, edit `style.css`:
```css
.gradient-bg {
    background: linear-gradient(135deg, #YOUR_COLOR_1, #YOUR_COLOR_2);
}
For other colors, update the Tailwind classes in index.html (e.g., change bg-blue-900 to bg-red-900).

Update Content
Text: Edit the text directly inside index.html.

Worker Data: Edit the workersData array in script.js.

Menu Items: Edit the modules array in script.js.

📱 Responsive Design
The website uses Tailwind CSS for full responsiveness:

✅ Desktop (1920px and above)

✅ Laptop (1024px - 1919px)

✅ Tablet (768px - 1023px)

✅ Mobile (320px - 767px)

🔧 Technical Details
Technologies Used
HTML5: Semantic structure for landing page and dashboard.

Vanilla JavaScript (ES6+): Handles SPA navigation, data rendering, and state management without frameworks.

Tailwind CSS (CDN): Utility-first styling for layout and responsiveness.

Lucide Icons: Scalable vector icons for the UI.

Browser Compatibility
✅ Chrome

✅ Firefox

✅ Safari

✅ Edge

Performance
No build step required.

Fast loading with minimal assets.

Icons and styles loaded via reliable CDNs.

🔐 Security Notes
Important: This is a DEMO version (Client-Side Only).

For production use, you need to:

Implement a real backend (Node.js, Python, PHP).

Secure API endpoints for data fetching.

Add real authentication (OAuth, JWT).

Remove the CDN link for Tailwind and use a build process for better performance optimization.

📞 Support
For technical assistance:

Email: info@bharatonic.com

Phone: +91 98765 43210

📄 License
© 2026 Bharatonic Industries. All rights reserved.

Happy Building! 🏗️