// pages/index.js
import Head from "next/head";
import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import { videos } from "../data/videos";
import { SITE, CATEGORIES } from "../data/config";
import VideoCard from "../components/VideoCard";
import { AffiliateBannerTop, AffiliateTextLink } from "../components/AffiliateBanner";

export default function Home({ dark }) {
  const router = useRouter();
  const query = (router.query.q || "").toLowerCase();
  const [category, setCategory] = useState("All");

  // Filter videos by search + category
  const filtered = useMemo(() => {
    return videos.filter((v) => {
      const matchQ =
        !query ||
        v.title.toLowerCase().includes(query) ||
        v.description.toLowerCase().includes(query) ||
        v.category.toLowerCase().includes(query) ||
        v.channel.toLowerCase().includes(query);
      const matchCat = category === "All" || v.category === category;
      return matchQ && matchCat;
    });
  }, [query, category]);

  const recentVideos = useMemo(
    () => [...videos].filter((v) => v.recent).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6),
    []
  );
  const popularVideos = useMemo(
    () => videos.filter((v) => v.popular).slice(0, 6),
    []
  );

  const isSearching = query || category !== "All";

  return (
    <>
      <Head>
        <title>{SITE.name} – {SITE.tagline}</title>
        <meta name="description" content={SITE.tagline} />
        <link rel="icon" href={SITE.logo} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="max-w-7xl mx-auto px-3 py-4">

        {/* Affiliate top banner */}
        <AffiliateBannerTop dark={dark} />

        {/* Category chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar mb-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                category === cat
                  ? "bg-brand text-black"
                  : dark
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Affiliate text link */}
        <AffiliateTextLink dark={dark} />

        {/* Search results */}
        {isSearching ? (
          <section>
            <h2 className={`text-lg font-bold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
              {query ? `"${query}" සඳහා ප්‍රතිඵල` : category}
              <span className={`ml-2 text-sm font-normal ${dark ? "text-gray-400" : "text-gray-500"}`}>
                ({filtered.length})
              </span>
            </h2>
            {filtered.length === 0 ? (
              <p className={`text-center py-16 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                😕 Videos හමු නොවීය. වෙනත් keyword එකක් try කරන්න.
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {filtered.map((v) => <VideoCard key={v.id} video={v} dark={dark} />)}
              </div>
            )}
          </section>
        ) : (
          <>
            {/* Recent Videos */}
            <Section title="🆕 Recent Videos" dark={dark}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {recentVideos.map((v) => <VideoCard key={v.id} video={v} dark={dark} />)}
              </div>
            </Section>

            <div className="my-6" />

            {/* Popular Videos */}
            <Section title="🔥 Popular Videos" dark={dark}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {popularVideos.map((v) => <VideoCard key={v.id} video={v} dark={dark} />)}
              </div>
            </Section>

            {/* All Videos */}
            <div className="my-6" />
            <Section title="📺 All Videos" dark={dark}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {videos.map((v) => <VideoCard key={v.id} video={v} dark={dark} />)}
              </div>
            </Section>
          </>
        )}
      </main>
    </>
  );
}

function Section({ title, dark, children }) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <h2 className={`text-lg font-bold ${dark ? "text-white" : "text-gray-900"}`}>{title}</h2>
        <div className="flex-1 h-px bg-brand/30" />
      </div>
      {children}
    </section>
  );
}
