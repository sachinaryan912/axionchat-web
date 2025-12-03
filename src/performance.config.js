// Performance and SEO optimizations for production build

// Image loading optimization
export const imageOptimization = {
  // Use this for lazy loading images
  lazyLoadConfig: {
    root: null,
    rootMargin: '50px',
    threshold: 0.01
  },
  
  // Recommended image formats and sizes
  imageSizes: {
    screenshot: '800x1600', // Mobile screenshots
    ogImage: '1200x630',    // Social sharing
    logo: '512x512',        // App icon
    favicon: '32x32'        // Favicon
  }
};

// Critical performance metrics for SEO
export const performanceTargets = {
  // Core Web Vitals (important for SEO ranking)
  LCP: 2.5,  // Largest Contentful Paint (seconds)
  FID: 100,  // First Input Delay (milliseconds)  
  CLS: 0.1,  // Cumulative Layout Shift
  
  // Additional metrics
  FCP: 1.8,  // First Contentful Paint (seconds)
  TTI: 3.8,  // Time to Interactive (seconds)
  TBT: 200   // Total Blocking Time (milliseconds)
};

// SEO-friendly URL structure
export const urlStructure = {
  home: '/',
  downloads: '/downloads/old-versions',
  // Future pages
  blog: '/blog',
  features: '/features',
  security: '/security',
  pricing: '/pricing',
  support: '/support',
  about: '/about',
  privacy: '/privacy-policy',
  terms: '/terms-of-service'
};

// Meta tag defaults for all pages
export const defaultMeta = {
  titleTemplate: '%s | AxionChat - Secure Messaging App',
  defaultTitle: 'AxionChat - Best Secure Messaging App 2025',
  description: 'Download AxionChat for free - #1 secure messaging app with military-grade encryption',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://axionchat.com',
    siteName: 'AxionChat',
  },
  twitter: {
    handle: '@AxionChat',
    site: '@AxionChat',
    cardType: 'summary_large_image',
  },
};

// Preload critical resources
export const preloadResources = [
  { rel: 'preload', as: 'font', type: 'font/woff2' },
  { rel: 'preload', as: 'image', href: '/assets/screenshot1.jpg' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
];

// Content security policy for better security (SEO ranking factor)
export const contentSecurityPolicy = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://www.googletagmanager.com', 'https://www.google-analytics.com'],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'img-src': ["'self'", 'data:', 'https:', 'http:'],
  'font-src': ["'self'", 'https://fonts.gstatic.com'],
  'connect-src': ["'self'", 'https://www.google-analytics.com'],
  'frame-src': ["'self'", 'https://www.youtube.com'],
};

// Accessibility improvements (indirect SEO benefit)
export const a11yConfig = {
  // Ensure all interactive elements are keyboard accessible
  // Add ARIA labels where needed
  // Maintain proper heading hierarchy
  // Color contrast ratios meet WCAG AA standards
};

// Mobile optimization settings
export const mobileOptimization = {
  viewport: 'width=device-width, initial-scale=1',
  touchIcons: [
    { size: '180x180', href: '/apple-touch-icon.png' },
    { size: '192x192', href: '/android-chrome-192x192.png' },
    { size: '512x512', href: '/android-chrome-512x512.png' }
  ],
  statusBarStyle: 'black-translucent'
};

// Recommended Lighthouse score targets
export const lighthouseTargets = {
  performance: 90,
  accessibility: 95,
  bestPractices: 95,
  seo: 100,
  pwa: 85
};

export default {
  imageOptimization,
  performanceTargets,
  urlStructure,
  defaultMeta,
  preloadResources,
  contentSecurityPolicy,
  a11yConfig,
  mobileOptimization,
  lighthouseTargets
};
