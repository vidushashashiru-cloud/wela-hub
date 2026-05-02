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
    category: "Sinhala,fuck,blowjob,anal fuck",
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

  // ════════════════════════════════
  //  VIDEO 2 - Supabase thumbnail
  // ════════════════════════════════
  {
    id: "2",
    title: "සදුනිගෙ අලුත් එක 🥵🥵",
    description: "ඔබේ video description මෙහි.",
    category: "Sinhala",
    views: "450K",
    duration: "15:30",
    date: "2025-04-20",
    channel: "My Channel",
    popular: true,
    recent: true,

    // ✅ VidSonic / LuluVid embed URL, 
    embed_url:"https://www.pornhub.com/embed/674815aa3c838",
    embed_allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",

    // ✅ Supabase Storage bucket හි ඇති filename
    thumbnail: "IMG_20260429_115403.jpg",   // ← Supabase හි upload කළ filename
  },

  // ════════════════════════════════
  //  VIDEO 3
  // ════════════════════════════════
  {
    id: "3",
    title: "සදුනිගෙ අලුත් එක 🥵🥵",
    description: "ඔබේ video description මෙහි.",
    category: "Sinhala",
    views: "450K",
    duration: "15:30",
    date: "2025-04-20",
    channel: "My Channel",
    popular: true,
    recent: true,

    // ✅ VidSonic / LuluVid embed URL, 
    embed_url:"https://www.pornhub.com/embed/674815aa3c838",
    embed_allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",

    // ✅ Supabase Storage bucket හි ඇති filename
    thumbnail: "IMG_20260429_115403.jpg",   // ← Supabase හි upload කළ filename
  },

  // ════════════════════════════════
  //  VIDEO 4
  // ════════════════════════════════
  {
    id: "4",
    title: "සදුනිගෙ අලුත් එක 🥵🥵",
    description: "ඔබේ video description මෙහි.",
    category: "Sinhala",
    views: "450K",
    duration: "15:30",
    date: "2025-04-20",
    channel: "My Channel",
    popular: true,
    recent: true,

    // ✅ VidSonic / LuluVid embed URL, 
    embed_url:"https://www.pornhub.com/embed/674815aa3c838",
    embed_allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",

    // ✅ Supabase Storage bucket හි ඇති filename
    thumbnail: "IMG_20260429_115403.jpg",   // ← Supabase හි upload කළ filename
  },

  // ════════════════════════════════
  //  VIDEO 5
  // ════════════════════════════════
  {
    id: "5",
    title: "සදුනිගෙ අලුත් එක 🥵🥵",
    description: "ඔබේ video description මෙහි.",
    category: "Sinhala",
    views: "450K",
    duration: "15:30",
    date: "2025-04-20",
    channel: "My Channel",
    popular: true,
    recent: true,

    // ✅ VidSonic / LuluVid embed URL, 
    embed_url:"https://www.pornhub.com/embed/674815aa3c838",
    embed_allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",

    // ✅ Supabase Storage bucket හි ඇති filename
    thumbnail: "IMG_20260429_115403.jpg",   // ← Supabase හි upload කළ filename
  },

  // ════════════════════════════════
  //  VIDEO 6
  // ════════════════════════════════
  {
    id: "6",
    title: "සදුනිගෙ අලුත් එක 🥵🥵",
    description: "ඔබේ video description මෙහි.",
    category: "Sinhala",
    views: "450K",
    duration: "15:30",
    date: "2025-04-20",
    channel: "My Channel",
    popular: true,
    recent: true,

    // ✅ VidSonic / LuluVid embed URL, 
    embed_url:"https://www.pornhub.com/embed/674815aa3c838",
    embed_allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",

    // ✅ Supabase Storage bucket හි ඇති filename
    thumbnail: "IMG_20260429_115403.jpg",   // ← Supabase හි upload කළ filename
  },
  {
    id: "7",
    title: "සදුනිගෙ ෆක් එක 🥵🥵",
    embed_url: "https://luluvdo.com/e/e3bka5e19ml3",
    embed_allow: "autoplay; fullscreen",
    thumbnail: "thumb.jpg",
    popular: true,
    recent: true,
    thumbnail:"v.jpg",
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
