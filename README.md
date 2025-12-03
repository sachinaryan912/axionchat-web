<div align="center">

# 🔒 AxionChat Website

<img src="public/assets/chatloop_logo.png" alt="AxionChat Logo" width="120" height="120" />

### The Official Landing Page for AxionChat - Secure Messaging Redefined

[![Website](https://img.shields.io/badge/Website-axionchat.online-blue?style=for-the-badge)](https://axionchat.online)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[🌐 Visit Website](https://axionchat.online) • [📱 Download App](#download) • [📖 Documentation](#features)

</div>

---

## 📱 Download AxionChat

<div align="center">

[![Get it on Google Play](https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png)](https://play.google.com/store/apps/details?id=com.sachin.axionchat)

**Experience military-grade encryption, HD video calls, and AI-powered social features.**

</div>

---

## ✨ About This Project

This is the official marketing website for **AxionChat**, a next-generation secure messaging application. Built with modern web technologies, this site showcases AxionChat's features, security capabilities, and provides resources for users.

### 🎯 Key Highlights

- **🎨 Modern Design**: Beautiful, responsive UI with light/dark theme support
- **⚡ Performance**: Optimized React application with code splitting and lazy loading
- **🔍 SEO Optimized**: Comprehensive SEO implementation with Schema.org markup
- **📱 Mobile-First**: Fully responsive design that works on all devices
- **♿ Accessible**: WCAG compliant with proper ARIA labels and semantic HTML

---

## 🚀 Features

### 📄 Pages

- **Home** - Hero section with app overview and download CTA
- **Features** - Detailed feature showcase
- **Security** - In-depth security and privacy information
- **Blog** - Articles about privacy, security, and messaging
- **Old Versions** - APK downloads for previous releases

### 🎨 Design Features

- ✅ Light/Dark theme toggle
- ✅ Smooth animations with Framer Motion
- ✅ Glassmorphism effects
- ✅ Gradient accents
- ✅ Mobile hamburger menu
- ✅ Sticky navigation header

### 🔧 Technical Features

- ✅ React 18 with Hooks
- ✅ React Router for navigation
- ✅ Tailwind CSS for styling
- ✅ React Helmet Async for SEO
- ✅ Framer Motion for animations
- ✅ Google Analytics integration
- ✅ Schema.org structured data

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | UI Framework |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **React Router** | Routing |
| **React Helmet Async** | SEO Meta Tags |
| **Google Analytics** | Analytics |

---

## 📦 Installation & Setup

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/axionchat-website.git

# Navigate to project directory
cd axionchat-website/site/chatloop

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# The build folder will contain the production-ready files
```

---

## 📁 Project Structure

```
chatloop/
├── public/
│   ├── assets/          # Images, logos, screenshots
│   └── index.html       # HTML template
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── pages/           # Page components
│   │   ├── Features.jsx
│   │   ├── Security.jsx
│   │   ├── Blog.jsx
│   │   └── BlogPost.jsx
│   ├── context/         # React Context
│   │   └── ThemeContext.jsx
│   ├── data/            # Static data
│   │   └── blogPosts.js
│   ├── AxionChatLanding.jsx  # Home page
│   ├── SEOContent.jsx   # SEO components
│   ├── seo.config.js    # SEO configuration
│   ├── App.js           # Main app component
│   └── index.js         # Entry point
└── tailwind.config.js   # Tailwind configuration
```

---

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      'axionchat-primary': '#6366f1',
      'axionchat-secondary': '#8b5cf6',
      'axionchat-accent': '#ec4899',
    }
  }
}
```

### SEO Configuration

Update `src/seo.config.js` to modify SEO settings:

```javascript
export const siteMetadata = {
  title: "Your Title",
  description: "Your Description",
  siteUrl: "https://yoursite.com",
  // ... more settings
};
```

---

## 📊 SEO Features

- ✅ Meta tags optimization
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Schema.org structured data (Organization, Product, FAQ, Article)
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Social media integration

---

## 🌐 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`
4. Deploy!

### Vercel

```bash
npm install -g vercel
vercel
```

### Manual Deployment

```bash
npm run build
# Upload the 'build' folder to your hosting provider
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

<div align="center">

### Connect With Us

[![Website](https://img.shields.io/badge/Website-axionchat.online-blue?style=for-the-badge)](https://axionchat.online)
[![X (Twitter)](https://img.shields.io/badge/X-@axionchat-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/axionchat)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-AxionChat-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/axionchat)
[![Instagram](https://img.shields.io/badge/Instagram-@axionchat-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/axionchat)

**Email**: support@axionchat.com

</div>

---

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Icons from [Heroicons](https://heroicons.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">

**Made with ❤️ by the AxionChat Team**

⭐ Star this repo if you find it helpful!

</div>
