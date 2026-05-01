// data/config.js
// ══════════════════════════════════════════════════════
//  ⚙️  SITE CONFIG - ඔබගේ details මෙහි edit කරන්න
// ══════════════════════════════════════════════════════

export const SITE = {
  name: "ලංකා hub",          // Site name
  tagline: "ලංකාවේ හොඳම video hub", // Sub-title
  logo: "/logo.jpg",           // public/ folder ඇති logo file
};

// ── Social Media ─────────────────────────────────────
// ✅ ඔබේ social links මෙහි දමන්න, නැතිනම් "" කරන්න
export const SOCIAL = {
  facebook:  "https://facebook.com/YOUR_PAGE",
  instagram: "https://instagram.com/YOUR_HANDLE",
  tiktok:    "https://tiktok.com/@YOUR_HANDLE",
  youtube:   "https://youtube.com/@YOUR_CHANNEL",
  telegram:  "https://t.me/YOUR_GROUP",
  whatsapp:  "https://wa.me/94XXXXXXXXX",    // country code සහිත
  twitter:   "",  // නොයොදන්නේ නම් "" කරන්න
};

// ── Affiliate / Ads ───────────────────────────────────
// ✅ Affiliate links / banner ads - ඉදිරියේ දී fill කරන්න
export const AFFILIATE = {
  enabled: true,   // false කළොත් banners hide වේ

  // Banner 1 - homepage top
  banner1: {
    image: "/ads/banner1.jpg",   // public/ads/ folder
    link:  "https://your-affiliate-link.com",
    alt:   "Special Offer",
  },

  // Banner 2 - watch page sidebar / bottom
  banner2: {
    image: "/ads/banner2.jpg",
    link:  "https://your-affiliate-link2.com",
    alt:   "Exclusive Deal",
  },

  // Text link ad
  textLink: {
    enabled: true,
    text:    "🔥 Hot Deals - Click Here",
    link:    "https://your-affiliate-link.com",
  },
};

// ── Categories ───────────────────────────────────────
// ✅ ඔබේ video categories
export const CATEGORIES = [
  "All", "Entertainment", "Music", "Sports", "News",
  "Education", "Comedy", "Drama", "Tech", "Sinhala",
];
