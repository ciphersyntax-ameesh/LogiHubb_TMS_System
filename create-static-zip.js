import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Create a zip of the static website for easy deployment
console.log('Creating zip file of the static website...');

try {
  // Create the zip file of the static website
  execSync('cd dist/public && zip -r ../../logihubb-static-website.zip .', { stdio: 'inherit' });
  
  console.log('\nStatic website zip created successfully!');
  console.log('File created: logihubb-static-website.zip');
  console.log('\nTo deploy:');
  console.log('1. Download the zip file from Replit');
  console.log('2. Extract the contents');
  console.log('3. Upload everything to your web hosting public_html directory');
  console.log('4. Configure the contact form as described in the README.txt');
} catch (error) {
  console.error('Error creating zip file:', error);
  process.exit(1);
}