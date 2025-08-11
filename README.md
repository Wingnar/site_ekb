# Site EKB - Enerji Kimlik Belgesi Website

A modern, multi-page React website for energy efficiency consulting services.

## Features

- **Multi-page navigation** using React Router
- **Responsive design** with Tailwind CSS
- **Modern UI components** with smooth animations
- **Appointment booking system** with modal
- **Service regions showcase** with pagination

## Website Structure

### Pages
- **Ana Sayfa (Home)** - `/`
  - Hero section
  - Services section (slide-wise version)
  - Thermal Camera section
  - FAQ section

- **Hizmetlerimiz (Services)** - `/services`
  - Services grid layout

- **Termal Kamera (Thermal Camera)** - `/thermal-camera`
  - Thermal camera services and benefits

- **Referanslarımız (References)** - `/references`
  - Customer testimonials and completed projects

- **Hizmet Bölgelerimiz (Service Regions)** - `/service-regions`
  - 108 cities/regions with pagination (9 per page, 12 pages total)

- **İletişim (Contact)** - `/contact`
  - Contact information and form

### Navigation
- Ana Sayfa (Home)
- Hizmetlerimiz (Services)
- Termal Kamera (Thermal Camera)
- Referanslarımız (References)
- Hizmet Bölgelerimiz (Service Regions)
- İletişim (Contact)
- Randevu Al (Appointment)

## Components

### Main Components
- `Hero` - Landing section with call-to-action
- `Services` - Slide-wise services showcase (Home page)
- `ServicesGrid` - Grid layout services (Services page)
- `ThermalCamera` - Thermal camera services
- `References` - Customer references and testimonials
- `ServiceRegions` - Service regions with pagination
- `FAQ` - Frequently asked questions
- `Header` - Navigation and header
- `Footer` - Site footer
- `AppointmentModal` - Appointment booking modal

### Page Components
- `Home` - Home page wrapper
- `ServicesPage` - Services page wrapper
- `ThermalCameraPage` - Thermal camera page wrapper
- `ReferencesPage` - References page wrapper
- `ServiceRegionsPage` - Service regions page wrapper
- `ContactPage` - Contact page wrapper
- `NotFound` - 404 error page

## Technical Details

- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

1. Navigate to the project directory:
   ```bash
   cd project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Notes

- Old components (Process, Documents, Pricing) are preserved for future use
- The Services component has two versions: slide-wise (Home) and grid (Services page)
- Service Regions component supports 108 cities with pagination (9 per page)
- All components are fully responsive and optimized for mobile devices 
