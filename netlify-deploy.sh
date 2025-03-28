#!/bin/bash

# This script helps prepare the Netlify deployment by copying files
npm run build
cp -r dist/public/* dist/
echo "Files have been prepared for Netlify deployment"