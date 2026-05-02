// pages/watch/[id].js
import Head from "next/head";
import Link from "next/link";
import { videos } from "../../data/videos";
import { SITE } from "../../data/config";
import VideoCard from "../../components/VideoCard";
import { AffiliateBannerSide, AffiliateTextLink } from "../../components/AffiliateBanner";
import { getThumbUrl } from "../../lib/supabase";

export async function getStaticPaths() {
  return {
    paths: videos.map((v) => ({ params: { id: v.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const video = videos.find((v) => v.id === params.id) || null;
  return { props: { video } };
}

export default function WatchPage({ video, dark }) {
  if (!video) return <div className="p-8 text-center">Video not found.</div>;

  const related = videos.filter((v) => v.id !== video.id && v.category === video.category).slice(0, 6);
  const fallback = videos.filter((v) => v.id !== video.id).slice(0, 6);
  const suggestions = related.length > 0 ? related : fallback;

  return (
    <>
      <Head>
        <title>{video.title} – {SITE.name}</title>
        <meta name="description" content={video.description} />
        <meta property="og:title" content={video.title} />
        <meta property="og:image" content={getThumbUrl(video.thumbnail)} />
        <link rel="icon" href={SITE.logo} />
      </Head>

      <main className="max-w-7xl mx-auto px-3 py-4">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left: player + details */}
          <div className="flex-1 min-w-0">

            {/* Back button */}
            <Link href="/" className="inline-flex items-center gap-1 text-sm text-brand mb-3 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              Home
            </Link>

            {/* Video player */}
            <div className="video-wrapper">
              <iframe
                src={video.embed_url}
                allow={video.embed_allow || "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
                allowFullScreen
                title={video.title}
              />
            </div>

            {/* Video info */}
            <div className="mt-4">
              <h1 className={`text-xl font-bold leading-snug ${dark ? "text-white" : "text-gray-900"}`}>
                {video.title}
              </h1>
              <div className={`flex flex-wrap items-center gap-3 mt-2 text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>
                <span className="font-medium text-brand">{video.channel}</span>
                <span>•</span>
                <span>👁 {video.views}</span>
                <span>•</span>
                <span>🕒 {video.duration}</span>
                <span>•</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${dark ? "bg-gray-700" : "bg-gray-200"}`}>
                  {video.category}
                </span>
              </div>
              <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-gray-300" : "text-gray-700"}`}>
                {video.description}
              </p>
            </div>

            {/* Affiliate text */}
            <AffiliateTextLink dark={dark} />

            {/* Affiliate side banner (below player on mobile) */}
            <div className="lg:hidden mt-2">
              <AffiliateBannerSide dark={dark} />
            </div>
          </div>

          {/* Right: suggestions + side affiliate */}
          <div className="lg:w-80 xl:w-96 flex-shrink-0">
            <div className="hidden lg:block">
              <AffiliateBannerSide dark={dark} />
            </div>

            <h2 className={`text-base font-bold mt-4 mb-3 ${dark ? "text-white" : "text-gray-900"}`}>
              Related Videos
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {suggestions.map((v) => (
                <VideoCard key={v.id} video={v} dark={dark} />
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
