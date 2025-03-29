import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// This script generates a static version of the site for deployment to basic hosting

console.log('Building static version of LogiHubb website...');

try {
  // Make sure dist/public directory exists
  if (!fs.existsSync('dist/public')) {
    fs.mkdirSync('dist/public', { recursive: true });
  }

  // Create a modified vite config for static builds to handle path aliases properly
  console.log('\nCreating static build configuration...');
  const staticViteConfig = `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Create a static tailwind.config.js
const fs = require('fs');
fs.writeFileSync('./tailwind.config.js', `
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // LogiHubb colors
        'logiblue': '#0F2A47',
        'logiorange': '#E67E22',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
`);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../shared'),
    },
  },
  build: {
    outDir: '../dist/public',
    emptyOutDir: true,
  },
});
`;

  fs.writeFileSync('client/vite.static.config.js', staticViteConfig);
  
  // Build the client-side React application using Vite with our custom config
  console.log('\nBuilding frontend...');
  execSync('cd client && npx vite build --config vite.static.config.js', { stdio: 'inherit' });

  // Create .htaccess file for Apache servers to handle SPA routing
  console.log('\nCreating .htaccess file for proper routing...');
  const htaccessContent = `# Handle SPA routing
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Set proper MIME types
<IfModule mod_mime.c>
  AddType text/css .css
  AddType text/javascript .js
  AddType application/json .json
  AddType image/svg+xml .svg
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>

# Set caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType text/javascript "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType application/json "access plus 1 day"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
</IfModule>`;

  fs.writeFileSync('dist/public/.htaccess', htaccessContent);

  // Create zip file for easy deployment
  console.log('\nCreating zip file for deployment...');
  execSync('cd dist/public && zip -r ../../logihubb-static-website.zip .', { stdio: 'inherit' });

  console.log('\nStatic build completed successfully!');
  console.log('Deployment package created: logihubb-static-website.zip');
  console.log('\nTo deploy:');
  console.log('1. Download the zip file from Replit');
  console.log('2. Extract and upload to your hosting provider\'s public directory');
  console.log('3. Configure the contact form as described in the README.txt file');
} catch (error) {
  console.error('\nBuild failed with error:', error);
  process.exit(1);
}