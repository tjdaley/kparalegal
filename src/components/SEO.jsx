import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = 'K-Paralegal, LLC | Texas Family Law Specialist',
  description = 'Expert Texas Family Law paralegal services. Professional, reliable support for family law attorneys across Texas.',
  url = 'https://kparalegal.com',
  image = 'https://kparalegal.com/images/ogimage.png',
  type = 'website',
  structuredData = null,
}) => {
  const siteUrl = 'https://kparalegal.com'
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OpenGraph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="K-Paralegal, LLC" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
