import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: personalInfo.name,
  description: `${personalInfo.title} - AI Engineer passionate about building products that make life easier and more insightful.`,
  keywords: [
    "AI Engineer",
    "Machine Learning", 
    "Deep Learning",
    "Computer Vision",
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Python",
    "Northwestern University",
    "UIUC"
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(personalInfo.website),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: personalInfo.website,
    title: personalInfo.name,
    description: `${personalInfo.title} - AI Engineer passionate about building products that make life easier and more insightful.`,
    siteName: personalInfo.name,
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: personalInfo.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: personalInfo.name,
    description: `${personalInfo.title} - AI Engineer passionate about building products that make life easier and more insightful.`,
    creator: '@ayaanpupala',
    images: ['/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": personalInfo.title,
    "url": personalInfo.website,
    "image": `${personalInfo.website}/images/profile.jpg`,
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
