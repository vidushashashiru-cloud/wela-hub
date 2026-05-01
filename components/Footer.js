// components/Footer.js
import { SITE, SOCIAL } from "../data/config";

export default function Footer({ dark }) {
  const socials = Object.entries(SOCIAL).filter(([, v]) => v);
  const year = new Date().getFullYear();

  return (
    <footer className={`mt-10 pt-8 pb-6 border-t ${dark ? "bg-gray-900 border-gray-700 text-gray-300" : "bg-gray-50 border-gray-200 text-gray-600"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <img src={SITE.logo} alt={SITE.name} className="h-8 object-contain" />
            </div>
            <p className="text-xs mt-1 opacity-60">{SITE.tagline}</p>
          </div>

          {/* Social links */}
          {socials.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {socials.map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="capitalize text-sm text-brand hover:underline"
                >
                  {platform}
                </a>
              ))}
            </div>
          )}
        </div>

        <p className="text-center text-xs mt-6 opacity-40">
          © {year} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
