import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image: string;
  page_type: string;
  jsonLd?: object;
}

export const SEO: React.FC<SEOProps> = (
  {
    title = 'K-Paralegal, LLC | Texas Family Law Paralegal',
    description = 'Expert Texas Family Law paralegal services. Professional, reliable support for family law attorneys across Texas.',
    url = 'https://kparalegal.com',
    image = 'https://kparalegal.com/images/ogimage.png',
    page_type = 'website',
    jsonLd = null
  }
) => {
  useEffect(() => {
    // Set document title
    document.title = `${title} | Texas Family Law Paralegal`;

    // Define all meta tags to set
    const metaTags = [
      { type: 'name', key: 'description', value: description },
      { type: 'property', key: 'og:title', value: title },
      { type: 'property', key: 'og:description', value: description },
      { type: 'property', key: 'og:url', value: url },
      { type: 'property', key: 'og:image', value: image },
      { type: 'property', key: 'og:type', value: page_type },
      { type: 'property', key: 'og:site_name', value: 'K-Paralegal, LLC' },
      { type: 'property', key: 'og:locale', value: 'en_US' },
      { type: 'property', key: 'og:image:width', value: '1200' },
      { type: 'property', key: 'og:image:height', value: '630' },
      { type: 'name', key: 'twitter:card', value: 'summary_large_image' },
      { type: 'name', key: 'twitter:title', value: title },
      { type: 'name', key: 'twitter:description', value: description },
      { type: 'name', key: 'twitter:image', value: image },
    ];

    // Loop through and create/update all meta tags
    metaTags.forEach(({ type, key, value }) => {
      const selector = `meta[${type}="${key}"]`;
      let metaTag = document.querySelector(selector);

      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute(type, key);
        document.head.appendChild(metaTag);
      }

      metaTag.setAttribute('content', value);
    });

    // Handle canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url);

    // Handle JSON-LD structured data
    if (jsonLd) {
      let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(jsonLd);
    }

  }, [title, description, url, image, page_type, jsonLd]);

  return null;
};
