# 🎬 VideoHub - සම්පූර්ණ Setup & Hosting Guide

---

## 📁 Project Files Structure

```
videohub/
├── 📄 package.json          ← dependencies
├── 📄 next.config.js        ← image domains
├── 📄 tailwind.config.js    ← styling
├── 📄 postcss.config.js
├── 📄 .env.local.example    ← Supabase keys template
│
├── 📂 lib/
│   └── supabase.js          ← Supabase client (thumbnails)
│
├── 📂 data/
│   ├── config.js            ← ⭐ SITE NAME, SOCIAL LINKS, AFFILIATE
│   └── videos.js            ← ⭐ VIDEO LIST (embed URLs + thumbnails)
│
├── 📂 components/
│   ├── Navbar.js            ← search + dark mode + social icons
│   ├── VideoCard.js         ← video thumbnail card
│   ├── AffiliateBanner.js   ← affiliate banners
│   └── Footer.js
│
├── 📂 pages/
│   ├── _app.js              ← dark mode global
│   ├── index.js             ← homepage (recent + popular + all)
│   └── watch/[id].js        ← video player page
│
├── 📂 styles/
│   └── globals.css
│
└── 📂 public/
    ├── logo.jpg             ← ⭐ ඔබේ logo file
    └── placeholder.svg      ← fallback thumbnail
```

---

## ═══════════════════════════════════════════
## STEP 1 - GitHub Setup
## ═══════════════════════════════════════════

### 1.1 GitHub Account හදන්න
- https://github.com → Sign Up
- Username, email, password fill කරන්න

### 1.2 New Repository හදන්න
1. GitHub homepage → `+` button → **New repository**
2. Repository name: `videohub` (හෝ ඔබ කැමති නමක්)
3. **Public** select කරන්න
4. **Create repository** click

### 1.3 Files Upload කරන්න
```bash
# Method A: GitHub web interface (easy)
# Repository page → "uploading an existing file" → 
# සියලු files drag & drop → Commit changes
```

**OR Git use කරනවා නම්:**
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/videohub.git
git push -u origin main
```

---

## ═══════════════════════════════════════════
## STEP 2 - Supabase Setup (Thumbnails Only)
## ═══════════════════════════════════════════

### 2.1 Supabase Account
- https://supabase.com → Sign Up (GitHub account use කරන්නත් පුළුවන්)

### 2.2 New Project හදන්න
1. **New Project** click
2. Name: `videohub`
3. Password: strong password one set (save කරන්න!)
4. Region: **Southeast Asia (Singapore)** ← Sri Lanka ට closest
5. **Create new project** → 2-3 minutes wait

### 2.3 Storage Bucket හදන්න
1. Left menu → **Storage**
2. **New bucket** click
3. Name: `thumbnails`
4. **Public bucket** ✅ tick කරන්න (public access සඳහා)
5. **Create bucket**

### 2.4 Bucket Policy Set කරන්න (Public Read)
1. Storage → thumbnails bucket → **Policies**
2. **New policy** → **For full customization**
3. Policy name: `public-read`
4. Allowed operation: **SELECT** ✅
5. Target roles: **anon** ✅
6. **Review** → **Save policy**

### 2.5 Thumbnails Upload කරන්න
1. Storage → thumbnails → **Upload files**
2. ඔබගේ thumbnail images select කරන්න (JPG/PNG)
3. Upload වූ file name copy කරන්න (e.g. `video1-thumb.jpg`)
4. `data/videos.js` හි `thumbnail: "video1-thumb.jpg"` ලෙස add කරන්න

### 2.6 API Keys Copy කරන්න
1. Left menu → **Settings** → **API**
2. **Project URL** copy → `.env.local` හි `NEXT_PUBLIC_SUPABASE_URL` ට
3. **anon public** key copy → `NEXT_PUBLIC_SUPABASE_ANON_KEY` ට

---

## ═══════════════════════════════════════════
## STEP 3 - ඔබේ Content Add කරන්න
## ═══════════════════════════════════════════

### 3.1 data/config.js Edit කරන්න
```js
export const SITE = {
  name: "ලංකා hub",          // ← ඔබේ site name
  tagline: "ලංකාවේ හොඳම video hub",
  logo: "/logo.jpg",
};

export const SOCIAL = {
  facebook:  "https://facebook.com/YOUR_PAGE",    // ← ඔබේ Facebook
  instagram: "https://instagram.com/YOUR_HANDLE", // ← ඔබේ Instagram
  tiktok:    "https://tiktok.com/@YOUR_HANDLE",
  youtube:   "https://youtube.com/@YOUR_CHANNEL",
  telegram:  "https://t.me/YOUR_GROUP",
  whatsapp:  "https://wa.me/94XXXXXXXXX",
};
```

### 3.2 data/videos.js හි Videos Add කරන්න

**YouTube video:**
```js
{
  id: "10",                    // ← unique number
  title: "ඔබේ Video Title",
  description: "Description...",
  category: "Entertainment",
  views: "10K",
  duration: "5:30",
  date: "2025-05-01",
  channel: "My Channel",
  popular: true,               // Popular section → true
  recent: true,                // Recent section → true
  embed_url: "https://www.youtube.com/embed/VIDEO_ID_HERE",
  embed_allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  thumbnail: "https://img.youtube.com/vi/VIDEO_ID_HERE/mqdefault.jpg",
},
```

**VidSonic / LuluVid / Streamtape:**
```js
{
  id: "11",
  title: "ඔබේ Video",
  ...
  embed_url: "PASTE_EMBED_URL_FROM_VIDSONIC_OR_LULUVID",
  thumbnail: "uploaded-thumb.jpg",  // Supabase bucket filename
},
```

### 3.3 Affiliate Banners Add කරන්න (Optional - ඉදිරිය සඳහා)
```js
// data/config.js
export const AFFILIATE = {
  enabled: true,
  banner1: {
    image: "/ads/banner1.jpg",      // public/ads/ folder හි image
    link:  "https://affiliate.com/your-link",
    alt:   "Special Offer",
  },
  ...
};
```
- `/public/ads/` folder හදා banner images add කරන්න

---

## ═══════════════════════════════════════════
## STEP 4 - Vercel Hosting
## ═══════════════════════════════════════════

### 4.1 Vercel Account
- https://vercel.com → **Sign Up with GitHub** (GitHub account use)

### 4.2 Project Import
1. Vercel dashboard → **Add New** → **Project**
2. **Import Git Repository** → GitHub list එකෙන් `videohub` select
3. **Import** click

### 4.3 Environment Variables Add කරන්න ⚠️ IMPORTANT
Vercel deploy screen හි:
1. **Environment Variables** section expand
2. Add කරන්න:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://YOUR_PROJECT_ID.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `your_anon_key_here` |
| `NEXT_PUBLIC_SUPABASE_BUCKET` | `thumbnails` |

3. **Deploy** click → 2-3 minutes → ✅ Live!

### 4.4 ඔබේ URL
Deploy complete → `https://videohub-xxxx.vercel.app` URL ලැබේ 🎉

---

## ═══════════════════════════════════════════
## STEP 5 - Videos Update කරන විට
## ═══════════════════════════════════════════

**නව video add කිරීම:**
1. `data/videos.js` open → නව video object add
2. Thumbnail → Supabase Storage → Upload
3. GitHub → file update (commit & push / web editor)
4. Vercel auto-deploy → 2 minutes → live! ✅

---

## ═══════════════════════════════════════════
## Quick Reference - Embed URL ලබා ගැනීම
## ═══════════════════════════════════════════

| Source | How to get embed URL |
|--------|---------------------|
| **YouTube** | Video URL → Share → Embed → iframe src copy |
| **VidSonic** | Video → Share/Embed → iframe src |
| **LuluVid** | Video → Embed → iframe src |
| **Streamtape** | `https://streamtape.com/e/VIDEO_ID` |
| **Doodstream** | `https://dood.watch/e/VIDEO_ID` |
| **Mp4upload** | `https://www.mp4upload.com/embed-VIDEO_ID.html` |

---

## ═══════════════════════════════════════════
## Custom Domain (Optional)
## ═══════════════════════════════════════════

1. Vercel → Settings → **Domains**
2. ඔබේ domain add (e.g. `lankahub.com`)
3. Domain registrar (GoDaddy/Namecheap) → DNS settings:
   - CNAME: `www` → `cname.vercel-dns.com`
   - A: `@` → `76.76.21.21`
4. 24-48 hours → ✅ domain live

---

## ═══════════════════════════════════════════
## Troubleshooting
## ═══════════════════════════════════════════

❌ **Thumbnails load නොවේ:**
- Supabase bucket Public ✅ ද check
- `next.config.js` හි `*.supabase.co` ඇද්ද check
- filename exact match ද check (case sensitive)

❌ **Videos embed නොවේ:**
- embed_url correct ද check
- VidSonic/LuluVid hotlink protection ඇත්නම් ඔවුන්ගේ embed method use

❌ **Build fail:**
- Vercel → Deployments → error logs check
- Environment variables correct ද verify

---

**🎉 Complete! ඔබේ video site live!**
