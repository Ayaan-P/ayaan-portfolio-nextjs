import Head from 'next/head'
import { personalInfo } from '@/lib/data'

interface SEOHeadProps {
  title?: string
  description?: string
  url?: string
  image?: string
  type?: string
}

export default function SEOHead({
  title = personalInfo.name,
  description = `${personalInfo.title} - AI Engineer passionate about building products that make life easier and more insightful.`,
  url = personalInfo.website,
  image = `${personalInfo.website}/images/profile.jpg`,
  type = 'website'
}: SEOHeadProps) {
  const fullTitle = title === personalInfo.name ? title : `${title} | ${personalInfo.name}`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": personalInfo.title,
    "url": personalInfo.website,
    "image": image,
    "sameAs": [
      personalInfo.social.linkedin,
      personalInfo.social.github,
      personalInfo.social.twitter
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Northwestern University"
      },
      {
        "@type": "EducationalOrganization", 
        "name": "University of Illinois at Urbana-Champaign"
      }
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Full Stack Development",
      "React",
      "TypeScript",
      "Python",
      "Product Development"
    ]
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={personalInfo.name} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@ayaanpupala" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={personalInfo.name} />
      <meta name="keywords" content="AI Engineer, Machine Learning, Deep Learning, Computer Vision, Full Stack Developer, React, TypeScript, Python, Northwestern University, UIUC" />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </Head>
  )
}