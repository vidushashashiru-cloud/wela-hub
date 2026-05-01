// lib/supabase.js
// Supabase - Thumbnails storage සඳහා පමණයි

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const BUCKET = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || "thumbnails";

export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Supabase bucket හි ඇති thumbnail filename → public URL
 * @param {string} filename  e.g. "my-video.jpg"
 * @returns {string} full public URL
 */
export function getThumbUrl(filename) {
  if (!filename) return "/placeholder.png";
  if (filename.startsWith("http")) return filename; // already a URL
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(filename);
  return data?.publicUrl ?? "/placeholder.png";
}
