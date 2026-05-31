// data/videos.js
// ══════════════════════════════════════════════════════════════════
//  📹 VIDEO LIST - ඔබගේ videos මෙහි add කරන්න
// ══════════════════════════════════════════════════════════════════
//
//  embed_url:
//  ┌────────────────────────────────────────────────────────────────
//  │ YouTube   → https://www.youtube.com/embed/VIDEO_ID
//  │ VidSonic  → VidSonic share page → embed → iframe src copy
//  │ LuluVid   → LuluVid embed iframe src copy
//  │ Streamtape→ https://streamtape.com/e/VIDEO_ID
//  │ Doodstream→ https://dood.watch/e/VIDEO_ID
//  └────────────────────────────────────────────────────────────────
//
//  thumbnail:
//  ┌────────────────────────────────────────────────────────────────
//  │ Supabase  → bucket හි upload කළ filename: "thumb1.jpg"
//  │ YouTube   → "https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg"
//  │ Direct URL→ full https:// url
//  └────────────────────────────────────────────────────────────────

export const videos = [
  // ════════════════════════════════
  //  VIDEO 1 - YouTube example
  // ════════════════════════════════
  {
    id: "1",
    title: "පැලවත්තෙ සිතුමි අක්ක ලීක් එක 🥵",
    description: "ඔබේ video description මෙහි.",
    category: "sinhala new",
    views: "4K",
    duration: "17:44",
    date: "2026-05-2",
    channel: "සිංහල ලීක්",
    popular: true,
    recent: true,

    // ✅ VidSonic / LuluVid embed URL, 
    embed_url:"https://luluvdo.com/e/j9px08er4lvc",
    embed_allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",

    // ✅ Supabase Storage bucket හි ඇති filename
    thumbnail: "vk.jpg",   // ← Supabase හි upload කළ filename
  },

  {
    id: "2",
    title: "fetish englsih🍆",
    description: "",
    category: "Sinhala",
    views: "450K",
    duration: "15:30",
    date: "2025-04-20",
    channel: "My Channel",
    popular: true,
    recent: false,

    // ✅ VidSonic / LuluVid embed URL, 
    embed_url:"https://www.pornhub.com/embed/674815aa3c838",
    embed_allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",

    // ✅ Supabase Storage bucket හි ඇති filename
    thumbnail: "IMG_20260429_115403.jpg",   // ← Supabase හි upload කළ filename
  },
  {
    id: "3",
    title: "විහාරහේන නන්ගිගෙ ඇගිලි සොමිය🥵🍆",
    views:"3k",
    category:"fingering",
    embed_url: "https://luluvdo.com/e/e3bka5e19ml3",
    date:"2026-05-02",
    duration :"01:37",
    embed_allow: "autoplay; fullscreen",
    thumbnail: "thumb.jpg",
    popular: true,
    recent: true,
    thumbnail:"v.jpg",
  },
    {
    id: "4",
    title: "තිශූ අක්කගෙ බැක් එක🥵🍆",
    views:"10k",
    category:"cam show",
    embed_url: "https://luluvdo.com/e/zffivewd9fgb",
    date:"2026-05-05",
    duration :"02:27",
    embed_allow: "autoplay; fullscreen",
    thumbnail: "InShot_20260505_121859753.jpg",
    popular: true,
    recent: true,
    thumbnail:"InShot_20260505_121859753.jpg",
  },
  {
    id: "5",
    title: "threesome fuck hard",
    views:"10k",
    category:"english",
    embed_url: "https://luluvid.com/e/qkurdav3pqj4",
    date:"2026-05-05",
    duration :"02:27",
    embed_allow: "autoplay; fullscreen",
    popular: true,
    recent: true,
    thubnail:"Screenshot_20260531_102626.jpg",
  },

  // ════════════════════════════════════════════════════
  //  ✅ ඔබේ videos මෙසේ add කරන්න:
  // ════════════════════════════════════════════════════
  // {
  //   id: "7",
  //   title: "ඔබේ video title",
  //   description: "...",
  //   category: "Entertainment",
  //   views: "0",
  //   duration: "0:00",
  //   date: "2025-05-01",
  //   channel: "My Channel",
  //   popular: false,
  //   recent: true,
  //   embed_url: "YOUR_EMBED_URL",
  //   embed_allow: "accelerometer; autoplay; ...",
  //   thumbnail: "supabase-filename.jpg",
  // },
];
