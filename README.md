# Wokoo Website

Official website for Wokoo - Professional Cleaning Services in Kenya.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **SEO Optimized**: Built with Next.js 14 for excellent SEO performance
- **Service Showcase**: Display all 5 service types (Standard, Deep, Office, Post Construction, Fumigation)
- **Download Links**: App Store and Google Play download buttons
- **Careers Page**: Worker recruitment information
- **Partners Page**: B2B partnership opportunities
- **Contact Form**: Easy way for users to get in touch
- **Social Media Integration**: Links to social platforms

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
wokooweb/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── careers/             # Careers page
│   ├── partners/            # Partners page
│   ├── sitemap.ts           # SEO sitemap
│   └── robots.txt           # SEO robots file
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with links
│   └── sections/            # Page sections
│       ├── Hero.tsx         # Hero section
│       ├── Services.tsx     # Services showcase
│       ├── HowItWorks.tsx   # How it works steps
│       ├── Features.tsx     # Features section
│       ├── Download.tsx     # App download section
│       ├── Testimonials.tsx # Customer testimonials
│       └── Contact.tsx      # Contact form
└── public/                  # Static assets
```

## 🎨 Customization

### Update Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  },
}
```

### Update Content

- **Services**: Edit `components/sections/Services.tsx`
- **Contact Info**: Edit `components/Footer.tsx` and `components/sections/Contact.tsx`
- **Social Links**: Update links in `components/Footer.tsx`
- **App Download Links**: Update in `components/sections/Download.tsx`

### SEO Configuration

Update metadata in `app/layout.tsx`:
- Site URL
- Description
- Keywords
- Open Graph images
- Twitter card images

## 📱 App Download Links

Update the download links in:
- `components/sections/Download.tsx`
- `app/careers/page.tsx`

Replace `#` with actual App Store and Google Play URLs.

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted with Node.js

## 📝 Notes

- Replace placeholder email addresses and phone numbers with actual contact information
- Add actual social media links
- Update domain name in metadata and sitemap
- Add actual app download links when apps are published
- Consider adding analytics (Google Analytics, etc.)
- Add actual customer testimonials and reviews

## 🔗 Related Projects

- **Wokoo Client App**: `/Wokoo` - Customer mobile app
- **Wokoo Worker App**: `/WokooWorker` - Worker mobile app
- **Wokoo Admin**: `/WokooAdmin` - Admin dashboard

