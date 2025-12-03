// seo.config.js - SEO Configuration and Schema Markup

export const siteMetadata = {
  title: "AxionChat - Best Secure Messaging App 2025 | Free Encrypted Chat & Video Calls",
  description: "Download AxionChat for free - #1 secure messaging app with military-grade end-to-end encryption, HD video calls, voice chat, and AI-powered social features. Private, fast, and secure communication for Android.",
  siteUrl: "https://axionchat.online",
  siteName: "AxionChat",
  author: "AxionChat Team",
  keywords: [
    "secure messaging app",
    "encrypted chat app",
    "private messaging",
    "end-to-end encryption",
    "HD video calls",
    "voice calls",
    "secure chat android",
    "encrypted messaging",
    "private chat app",
    "messaging app",
    "chat application",
    "video calling app",
    "secure communication",
    "AxionChat",
    "encrypted video calls",
    "military grade encryption",
    "secure group chat",
    "private video calling",
    "Flutter messaging app",
    "free messaging app",
    "safe chat app",
    "confidential messaging",
    "secure instant messaging",
    "best messaging app 2025",
    "WhatsApp alternative",
    "Signal alternative",
    "Telegram alternative",
    "private communication app",
    "business messaging app",
    "team chat app",
    "secure file sharing",
    "encrypted calls",
    "privacy-focused messaging",
  ],
  social: {
    twitter: "https://x.com/axionchat",
    facebook: "https://www.facebook.com/axionchat",
    instagram: "https://www.instagram.com/axionchat",
    linkedin: "https://www.linkedin.com/company/axionchat",
  },
  supportEmail: "support@axionchat.com",
  appId: "com.company.axionchat",
};

export const generateFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is AxionChat really secure and private?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, AxionChat uses military-grade end-to-end encryption for all messages, calls, and media. This means only you and the recipient can read your messages - not even AxionChat servers can access your conversations. We don't store or mine your data."
        }
      },
      {
        "@type": "Question",
        "name": "Is AxionChat free to download and use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! AxionChat is completely free to download and use. There are no hidden charges, subscriptions, or premium tiers. All features including HD video calls, voice messaging, and group chats are available to all users at no cost."
        }
      },
      {
        "@type": "Question",
        "name": "What devices support AxionChat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AxionChat is currently available for Android devices running Android 6.0 and above. You can download it from the Google Play Store. We're built with Flutter for optimal performance across all Android devices."
        }
      },
      {
        "@type": "Question",
        "name": "How does AxionChat compare to WhatsApp, Telegram, or Signal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AxionChat offers the same level of security as Signal with end-to-end encryption, combines it with modern AI-powered social features for friend discovery, and delivers crystal-clear HD calls. It's faster, more private, and more feature-rich than traditional messaging apps."
        }
      },
      {
        "@type": "Question",
        "name": "Can I make video and voice calls on AxionChat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! AxionChat supports both HD video calls and crystal-clear voice calls. Our adaptive quality technology ensures excellent call quality even on slower internet connections. Both one-on-one and group calls are supported."
        }
      }
    ]
  };
};

export const generateBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateProductSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "AxionChat",
    "operatingSystem": "Android",
    "applicationCategory": "CommunicationApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "15000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Secure messaging app with military-grade end-to-end encryption, HD video calls, and AI-powered social networking. Free download for Android devices.",
    "screenshot": "https://axionchat.online/assets/screenshot1.jpg",
    "softwareVersion": "1.2.0",
    "datePublished": "2025-09-05",
    "author": {
      "@type": "Organization",
      "name": "AxionChat",
      "url": "https://axionchat.online"
    },
    "downloadUrl": "https://play.google.com/store/apps/details?id=com.company.axionchat",
    "installUrl": "https://play.google.com/store/apps/details?id=com.company.axionchat",
    "featureList": [
      "Military-grade end-to-end encryption",
      "HD video calling with adaptive quality",
      "Crystal-clear voice calls",
      "AI-powered friend discovery",
      "Secure group chats",
      "Media sharing (photos, videos, documents)",
      "Cross-device synchronization",
      "Cloud backup with encryption",
      "Voice messages",
      "Message reactions and typing indicators",
      "No phone number required",
      "Dark mode support"
    ],
    "requirements": "Android 6.0 and up",
    "memoryRequirements": "30MB",
    "storageRequirements": "30MB"
  };
};

export const generateArticleSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AxionChat - The Most Secure Messaging App for Private Communication in 2025",
    "description": "Discover why AxionChat is the best secure messaging app with military-grade encryption, HD calls, and AI-powered social features. Free download for Android.",
    "image": "https://axionchat.online/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": "AxionChat Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AxionChat",
      "logo": {
        "@type": "ImageObject",
        "url": "https://axionchat.online/logo512.png"
      }
    },
    "datePublished": "2025-12-02",
    "dateModified": "2025-12-02"
  };
};
