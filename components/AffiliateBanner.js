// components/AffiliateBanner.js
// Affiliate marketing banners - data/config.js හි AFFILIATE object edit කරන්න

import { AFFILIATE } from "../data/config";

export function AffiliateBannerTop({ dark }) {
  if (!AFFILIATE.enabled || !AFFILIATE.banner1?.image) return null;
  const { image, link, alt } = AFFILIATE.banner1;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block w-full overflow-hidden rounded-xl mb-4"
    >
      <img src={image} alt={alt} className="w-full h-auto max-h-24 object-cover" />
    </a>
  );
}

export function AffiliateBannerSide({ dark }) {
  if (!AFFILIATE.enabled || !AFFILIATE.banner2?.image) return null;
  const { image, link, alt } = AFFILIATE.banner2;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block w-full overflow-hidden rounded-xl mt-4"
    >
      <img src={image} alt={alt} className="w-full h-auto rounded-xl" />
    </a>
  );
}

export function AffiliateTextLink({ dark }) {
  if (!AFFILIATE.enabled || !AFFILIATE.textLink?.enabled) return null;
  const { text, link } = AFFILIATE.textLink;

  return (
    <div className="flex justify-center my-3">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-block bg-brand hover:bg-brand-dark text-black font-bold text-sm px-5 py-2 rounded-full shadow transition-colors"
      >
        {text}
      </a>
    </div>
  );
}
