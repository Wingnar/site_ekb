# EKB Website - Multi-Page React Application

This is a multi-page website for Enerji Kimlik Belgesi (Energy Performance Certificate) services, built with React, TypeScript, and Tailwind CSS.

## Features

- **Multi-page navigation** with React Router
- **Responsive design** for all devices
- **Modern UI** with Tailwind CSS
- **TypeScript** for type safety
- **Appointment booking system**

## Pages

- **Home** (`/`) - Landing page with Hero, Services, ThermalCamera, and References sections combined
- **Services** (`/services`) - Our services overview
- **Thermal Camera** (`/thermal-camera`) - Thermal imaging services
- **References** (`/references`) - Customer testimonials and completed projects
- **FAQ** (`/faq`) - Frequently asked questions
- **Contact** (`/contact`) - Contact information

## Installation

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Recommended version: 18.x or higher

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components for routing
├── App.tsx             # Main app with routing
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Dependencies

- **React 18** - UI library
- **React Router 6** - Client-side routing
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Navigation

The website now uses React Router for navigation. The home page (`/`) contains four main sections:

- **Hero Section** - Main landing area with call-to-action buttons
- **Services Section** - Overview of EKB services offered
- **Thermal Camera Section** - Thermal imaging services for energy efficiency
- **References Section** - Customer testimonials and completed projects

Other pages are accessible via the navigation menu:
- **Hizmetlerimiz** → Services page (`/services`)
- **Termal Kamera** → Thermal Camera page (`/thermal-camera`)
- **Referanslarımız** → References page (`/references`)
- **SSS** → FAQ page (`/faq`)
- **İletişim** → Contact page (`/contact`)

## Development Notes

- The appointment modal is available on all pages
- The home page combines Hero, Services, ThermalCamera, and References sections for better user experience
- Each page has proper spacing to account for the fixed header
- 404 page handles invalid routes
- All components are properly typed with TypeScript
- Old components (Process, Documents, Pricing) are preserved for future use

