'use client'

import { useState } from 'react'
import Image from 'next/image'
import { profileData, type ProfileSection } from '@/lib/data'
import { PROFILE_SECTIONS } from '@/lib/profile-sections'
import ExpandedView from '@/components/expanded-view'
import SocialLinks from '@/components/social-links'
import Navigation from '@/components/navigation'

export default function HomePage() {
  const [expandedSection, setExpandedSection] = useState<{
    section: ProfileSection | null;
    open: boolean;
  }>({
    section: null,
    open: false
  })

  const handleOpenExpanded = (section: ProfileSection) => {
    setExpandedSection({
      section,
      open: true
    })
  }

  const handleCloseExpanded = () => {
    setExpandedSection({
      section: null,
      open: false
    })
  }

  return (
    <div className="App">
      <div className="bg-gradient"></div>
      <div className="bg-noise"></div>

      <Navigation />

      <div className="home-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="avatar-container">
            <Image
              alt="Ayaan Pupala"
              src="/images/profile.jpg"
              width={240}
              height={240}
              className="avatar-image"
              priority
            />
          </div>
          <h1 className="page-title">Ayaan Pupala</h1>
          <p className="page-subtitle">I like to build with AI</p>

          <div className="about-wrapper">
            {profileData.about.map((item) => (
              <div key={item.id} className="about-text">
                {item.aboutText.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="social-wrapper">
            <p className="social-label">Links</p>
            <SocialLinks />
          </div>
        </div>

        {/* Sections with Icons */}
        {PROFILE_SECTIONS.map((section) => (
          <div key={section.key} className="section-group">
            <div className="section-divider">
              <section.icon className="divider-icon" />
            </div>
            <div className="app-drawer">
              {profileData[section.key as 'tools' | 'education' | 'work' | 'projects'].map((item) => {
                const isTools = section.key === 'tools';
                const directLink = item.expandedDetails?.links?.[0];
                const hasDirectLink = isTools && directLink;

                return hasDirectLink ? (
                  <a
                    key={item.id}
                    href={directLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="app-icon"
                    style={{ textDecoration: 'none' }}
                  >
                    <Image
                      src={item.imgSrc}
                      alt={item.sectionTitle}
                      width={120}
                      height={120}
                      className="icon-image"
                    />
                  </a>
                ) : (
                  <div
                    key={item.id}
                    className="app-icon"
                    onClick={() => handleOpenExpanded(item)}
                  >
                    <Image
                      src={item.imgSrc}
                      alt={item.sectionTitle}
                      width={120}
                      height={120}
                      className="icon-image"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <ExpandedView
        open={expandedSection.open}
        section={expandedSection.section}
        onClose={handleCloseExpanded}
      />
    </div>
  )
}
