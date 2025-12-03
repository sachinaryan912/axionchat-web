// GoogleAnalytics.jsx - Google Analytics 4 setup for SEO tracking
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 Tracking ID - Replace with your actual GA4 ID
const GA_TRACKING_ID = 'G-XXXXXXXXXX';

export const initGA = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname,
    });
  }
};

export const logPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const logEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Hook to track page views
export const useGAPageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);
};

// Track specific user actions for SEO
export const trackDownloadClick = (source) => {
  logEvent('download_click', 'engagement', source, 1);
};

export const trackVideoPlay = (videoId) => {
  logEvent('video_play', 'engagement', videoId, 1);
};

export const trackScrollDepth = (depth) => {
  logEvent('scroll_depth', 'engagement', `${depth}%`, depth);
};

export const trackFormSubmit = (formName) => {
  logEvent('form_submit', 'conversion', formName, 1);
};

export const trackOutboundLink = (url) => {
  logEvent('outbound_click', 'engagement', url, 1);
};
