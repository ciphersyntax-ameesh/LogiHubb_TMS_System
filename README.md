# LogiHubb - Logistics Management Platform Marketing Website

![LogiHubb Logo](generated-icon.png)

A modern, responsive marketing website for LogiHubb, a comprehensive Transportation Management System (TMS) designed for logistics companies. The website showcases the platform's features through interactive visualizations, engaging user experiences, and effective lead generation capabilities.

## 🚚 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Interactive Animations**: Visualize logistics processes with smooth, engaging animations
- **Dual-Brand Styling**: Consistent dual-color branding with "Logi" in dark blue and "Hubb" in orange
- **Lead Generation**: Built-in demo request form that works in both dynamic and static hosting environments
- **SVG-Based Icons**: Custom logistics-themed and AI/ML-themed icon sets
- **Performance Optimized**: Fast loading times with optimized assets

## 📋 Pages

- **Home**: Overview of LogiHubb's value proposition and key features
- **Features**: Detailed exploration of TMS capabilities and modules
- **About**: Company information, team, and mission
- **Register**: Lead capture form for demo requests

## 🧰 Technology Stack

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS with custom theme configuration
- **Animations**: Framer Motion for advanced animations
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Custom SVG icons and Lucide React
- **State Management**: React Query
- **Routing**: Wouter for lightweight client-side routing

## 🚀 Deployment Options

The website supports two deployment models:

### 1. Full-Stack Deployment (Node.js hosting)

Deploy with backend functionality for form submissions and potential future features.

- Requires Node.js hosting environment
- See [HOSTINGER_DEPLOYMENT.md](HOSTINGER_DEPLOYMENT.md) for detailed instructions

### 2. Static Site Deployment

Deploy as a static website with form submissions handled via Formspree or similar services.

- Works on any basic hosting plan (Apache, Nginx, etc.)
- No server-side processing required
- See [FORMSPREE_INTEGRATION.md](FORMSPREE_INTEGRATION.md) for form setup details

## 🛠 Development

### Prerequisites

- Node.js v20+ and npm

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`
4. Start the development server:
   ```bash
   npm run dev
   ```

### Environment Variables

- `VITE_FORMSPREE_ENDPOINT`: (Optional) Formspree form endpoint for static deployments

### Project Structure

```
├── client/            # Frontend React application
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions
│   │   ├── pages/       # Page components
│   │   └── styles/      # Global styles
├── server/            # Backend Express server
├── shared/            # Shared types and schemas
├── HOSTINGER_DEPLOYMENT.md    # Hostinger deployment guide
└── FORMSPREE_INTEGRATION.md   # Formspree integration guide
```

### Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server

## 📄 License

Proprietary - All rights reserved

## 🔗 Credits

Developed by [Your Development Team]