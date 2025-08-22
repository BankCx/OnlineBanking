#!/bin/bash
# Setup script for Online Banking

echo "Setting up Online Banking..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Create build directory
mkdir -p build

echo "Setup complete! Use 'npm start' to start the development server."
