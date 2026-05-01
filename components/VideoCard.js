// components/VideoCard.js
import Link from "next/link";
import Image from "next/image";
import { getThumbUrl } from "../lib/supabase";

export default function VideoCard({ video, dark }) {
  const thumb = getThumbUrl(video.thumbnail);

  return (
    <Link href={`/watch/${video.id}`}>
      <div
        className={`group rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
          dark ? "bg-gray-800 hover:shadow-gray-700" : "bg-white hover:shadow-gray-200 border border-gray-100"
        }`}
      >
        {/* Thumbnail */}
        <div className="relative w-full aspect-video bg-gray-900 overflow-hidden">
          <Image
            src={thumb}
            alt={video.title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 group-hover:scale-105"
            onError={(e) => { e.target.src = "/placeholder.png"; }}
            unoptimized={thumb.startsWith("http")}
          />
          {/* Duration badge */}
          <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded-md font-medium">
            {video.duration}
          </span>
          {/* Play icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-brand/90 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-3">
          <h3 className={`font-semibold text-sm leading-snug line-clamp-2 mb-1 ${dark ? "text-white" : "text-gray-900"}`}>
            {video.title}
          </h3>
          <p className={`text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}>
            {video.channel}
          </p>
          <div className={`flex items-center gap-2 mt-1 text-xs ${dark ? "text-gray-500" : "text-gray-400"}`}>
            <span>{video.views} views</span>
            <span>•</span>
            <span>{video.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
