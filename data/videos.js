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
    title: "Big Buck Bunny - Sample Video",
    description: "Replace with your video description. ඔබේ video description මෙහි දෙන්න.",
    category: "Entertainment",
    views: "1.2M",
    duration: "9:56",
    date: "2025-01-15",        // recent/popular sorting සඳහා
    channel: "My Channel",
    popular: true,             // ✅ Popular section හි show කිරීමට true
    recent: true,              // ✅ Recent section හි show කිරීමට true

    // ✅ Embed URL - replace VIDEO_ID
    embed_url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    embed_allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",

    // ✅ Thumbnail - YouTube auto thumbnail
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/mqdefault.jpg",
  },

  // ════════════════════════════════
  //  VIDEO 2 - Supabase thumbnail
  // ════════════════════════════════
  {
    id: "2",
    title: "ලංකාවේ හොඳම Video",
    description: "ඔබේ video description මෙහි.",
    category: "Sinhala",
    views: "450K",
    duration: "15:30",
    date: "2025-04-20",
    channel: "My Channel",
    popular: true,
    recent: true,

    // ✅ VidSonic / LuluVid embed URL
    embed_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",  // ← replace
    embed_allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",

    // ✅ Supabase Storage bucket හි ඇති filename
    thumbnail: "video2-thumb.jpg",   // ← Supabase හි upload කළ filename
  },

  // ════════════════════════════════
  //  VIDEO 3
  // ════════════════════════════════
  {
    id: "3",
    title: "Popular Video Title",
    description: "Description here.",
    category: "Music",
    views: "2.5M",
    duration: "4:20",
    date: "2025-03-10",
    channel: "Music Channel",
    popular: true,
    recent: false,

    embed_url: "https://www.youtube.com/embed/9bZkp7q19f0",
    embed_allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/mqdefault.jpg",
  },

  // ════════════════════════════════
  //  VIDEO 4
  // ════════════════════════════════
  {
    id: "4",
    title: "Recent Upload - New Content",
    description: "Fresh content just uploaded.",
    category: "Sports",
    views: "12K",
    duration: "22:15",
    date: "2025-04-28",
    channel: "Sports Hub",
    popular: false,
    recent: true,

    embed_url: "https://www.youtube.com/embed/ScMzIvxBSi4",
    embed_allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/mqdefault.jpg",
  },

  // ════════════════════════════════
  //  VIDEO 5
  // ════════════════════════════════
  {
    id: "5",
    title: "Comedy Clip",
    description: "Funny video description.",
    category: "Comedy",
    views: "890K",
    duration: "8:00",
    date: "2025-02-14",
    channel: "Comedy Zone",
    popular: true,
    recent: false,

    embed_url: "https://www.youtube.com/embed/zHl5ZEMg_Gs",
    embed_allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    thumbnail: "https://img.youtube.com/vi/zHl5ZEMg_Gs/mqdefault.jpg",
  },

  // ════════════════════════════════
  //  VIDEO 6
  // ════════════════════════════════
  {
    id: "6",
    title: "Tech Review 2025",
    description: "Latest tech review.",
    category: "Tech",
    views: "340K",
    duration: "18:45",
    date: "2025-04-25",
    channel: "Tech Lanka",
    popular: false,
    recent: true,

    embed_url: "https://www.youtube.com/embed/D0UnqGm_miA",
    embed_allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    thumbnail: "https://img.youtube.com/vi/D0UnqGm_miA/mqdefault.jpg",
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
