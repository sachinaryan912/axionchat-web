export const blogPosts = [
  {
    slug: "why-end-to-end-encryption-matters",
    title: "Why End-to-End Encryption Matters in 2025",
    excerpt: "In an age of digital surveillance, end-to-end encryption is not just a feature—it's a necessity. Learn how AxionChat protects your conversations.",
    date: "December 2, 2025",
    author: "Sarah Chen, Security Lead",
    image: "/assets/blog-encryption.png",
    content: `
      <p>In today's digital landscape, privacy is more than just a buzzword—it's a fundamental right. With data breaches becoming increasingly common and surveillance technologies becoming more sophisticated, the need for secure communication has never been greater.</p>
      
      <h3>What is End-to-End Encryption?</h3>
      <p>End-to-end encryption (E2EE) is a system of communication where only the communicating users can read the messages. In principle, it prevents potential eavesdroppers—including telecom providers, internet providers, and even the provider of the communication service—from being able to access the cryptographic keys needed to decrypt the conversation.</p>
      
      <h3>How AxionChat Implements E2EE</h3>
      <p>At AxionChat, we use the Signal Protocol, widely considered the gold standard for secure messaging. This means:</p>
      <ul>
        <li><strong>Private Keys:</strong> Your encryption keys are generated and stored only on your device.</li>
        <li><strong>Forward Secrecy:</strong> Even if a key is compromised, past messages remain secure.</li>
        <li><strong>Zero Knowledge:</strong> We have no way to access your message content.</li>
      </ul>
      
      <h3>Why It Matters</h3>
      <p>Without E2EE, your personal conversations, photos, and sensitive information are vulnerable. AxionChat ensures that your digital life remains as private as a face-to-face conversation in an empty room.</p>
    `,
  },
  {
    slug: "the-future-of-social-discovery",
    title: "The Future of Social Discovery: AI Meets Privacy",
    excerpt: "Discover how AxionChat uses privacy-preserving AI to help you find like-minded people without compromising your data.",
    date: "November 28, 2025",
    author: "Alex Rivera, Product Manager",
    image: "/assets/blog-social.png",
    content: `
      <p>Social media has connected the world, but often at the cost of user privacy. Algorithms mine your data to sell ads, and your personal information becomes a commodity. AxionChat is changing that paradigm.</p>
      
      <h3>Privacy-First Discovery</h3>
      <p>We believe you shouldn't have to trade your privacy for connection. Our new AI-powered discovery engine runs <strong>locally on your device</strong>. It analyzes your interests and preferences without ever sending raw data to the cloud.</p>
      
      <h3>Connecting Communities</h3>
      <p>AxionChat helps you find communities based on shared interests—whether it's cryptography, hiking, or gaming—while keeping your identity protected until you choose to reveal it.</p>
      
      <p>This is the future of social networking: decentralized, private, and user-centric.</p>
    `,
  },
  {
    slug: "protecting-your-digital-footprint",
    title: "5 Tips for Protecting Your Digital Footprint",
    excerpt: "Practical steps you can take today to minimize your online exposure and keep your personal data safe.",
    date: "November 25, 2025",
    author: "Marcus Johnson, Privacy Advocate",
    image: "/assets/blog-privacy.png",
    content: `
      <p>Every click, like, and message leaves a trace. This "digital footprint" can be used to track your behavior, target you with ads, or even steal your identity. Here are five actionable tips to take back control.</p>
      
      <h3>1. Use Encrypted Messaging</h3>
      <p>Switch to apps like AxionChat that offer default end-to-end encryption. Avoid SMS and unencrypted chat apps for sensitive conversations.</p>
      
      <h3>2. Review App Permissions</h3>
      <p>Regularly check which apps have access to your location, camera, and microphone. Revoke permissions that aren't necessary.</p>
      
      <h3>3. Enable Two-Factor Authentication (2FA)</h3>
      <p>Add an extra layer of security to your accounts. Use an authenticator app instead of SMS 2FA whenever possible.</p>
      
      <h3>4. Be Mindful of Metadata</h3>
      <p>Photos often contain location data. AxionChat automatically strips metadata from images you share to protect your location privacy.</p>
      
      <h3>5. Regular Digital Detox</h3>
      <p>Delete old accounts you no longer use and regularly clear your browser history and cookies.</p>
    `,
  },
];
