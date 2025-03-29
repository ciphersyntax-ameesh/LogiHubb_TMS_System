# LogiHubb Website - Hostinger Deployment Guide

This guide explains how to deploy the LogiHubb website to Hostinger, a popular web hosting service.

## Prerequisites

1. A Hostinger hosting account
2. Access to Hostinger's control panel
3. Basic knowledge of web hosting and FTP uploads

## Option 1: Node.js Hosting (Recommended)

Hostinger offers Node.js hosting plans that allow you to run the full LogiHubb application with backend functionality.

### Steps:

1. **Choose a Node.js Hosting Plan from Hostinger**
   - Make sure it supports Node.js version 20.x

2. **Set Up SSH Access**
   - Go to your Hostinger control panel → Advanced → SSH Access
   - Generate or upload SSH keys
   - Note down the SSH connection details

3. **Configure the Domain**
   - Add your domain to the Hostinger account
   - Set up DNS settings to point to your Hostinger hosting

4. **Upload the Application Files**
   - Use Git to clone the repository directly on the server:
     ```
     ssh user@yourhostingserver
     cd ~/public_html
     git clone https://your-git-repository-url.git .
     ```
   - Or upload via FTP:
     - Use an FTP client like FileZilla
     - Connect to your hosting server
     - Upload all application files to the public_html directory

5. **Install Dependencies and Build the Application**
   - SSH into your server and run:
     ```
     npm install
     npm run build
     ```

6. **Set Up Environment Variables**
   - Create a `.env` file in the root directory with necessary environment variables

7. **Start the Application**
   - Use the Node.js hosting control panel to set up the start command:
     ```
     npm start
     ```
   - Alternatively, set up a process manager like PM2:
     ```
     npm install -g pm2
     pm2 start server/index.js
     ```

8. **Set Up Domain Routing**
   - In the Hostinger control panel, set up domain routing to point to your Node.js application
   - Ensure the correct port is configured

## Option 2: Static Site Hosting

If you don't need backend functionality (e.g., the contact form will use a third-party service like Formspree), you can deploy a static version of the site.

### Steps:

1. **Build the Static Version Locally**
   - On your local development machine:
     ```
     npm run build
     ```
   - This will create a `dist` directory with static files

2. **Modify the Contact Form**
   - Update the contact form to work with a service like Formspree or Netlify Forms
   - Example modification using Formspree:
     ```jsx
     // In RegisterForm.tsx
     <form action="https://formspree.io/f/your-formspree-id" method="POST">
     ```

3. **Upload Static Files**
   - Use FTP to upload all files from the `dist` directory to your Hostinger public_html folder

4. **Create .htaccess File**
   - Create a file named `.htaccess` in your public_html directory with the following content:
     ```
     # Handle SPA routing
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```

5. **Enable HTTPS**
   - In the Hostinger control panel, enable SSL/TLS for your domain
   - Set up automatic redirection from HTTP to HTTPS

## Troubleshooting

### Common Issues:

1. **Page Not Found Errors (404)**
   - Make sure the `.htaccess` file is properly uploaded and mod_rewrite is enabled
   - Contact Hostinger support to confirm mod_rewrite is active on your hosting

2. **Contact Form Not Working**
   - Verify your form is properly connected to a form processing service
   - Check that you've included all required form fields

3. **Assets Not Loading**
   - Ensure all paths are relative or properly point to your domain
   - Check if the files are correctly uploaded to the server

4. **Node.js Application Not Starting**
   - Verify Node.js version compatibility
   - Check the server logs for error messages
   - Confirm all environment variables are correctly set

## Support

If you encounter issues with your Hostinger deployment, contact Hostinger support through their help center or live chat service.

For LogiHubb application-specific issues, refer to the project documentation or contact the development team.