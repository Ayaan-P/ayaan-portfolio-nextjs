#!/bin/bash

# Portfolio Deployment Commands
# Run these commands after creating the GitHub repository

echo "🚀 Deploying Ayaan's Next.js Portfolio..."

# Add remote origin (replace with your actual repo URL)
echo "📡 Adding remote repository..."
git remote add origin https://github.com/Ayaan-P/ayaan-portfolio-nextjs.git

# Push to GitHub
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Portfolio successfully published to GitHub!"
echo "🌐 Repository: https://github.com/Ayaan-P/ayaan-portfolio-nextjs"

# Next steps
echo ""
echo "🔥 Next Steps:"
echo "1. Deploy to Vercel: https://vercel.com/new"
echo "2. Connect your GitHub repo"
echo "3. Deploy automatically!"
echo "4. Update your domain to point to the new site"