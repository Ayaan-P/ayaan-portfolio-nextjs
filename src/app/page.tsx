'use client'

import { useState } from 'react'
import Image from 'next/image'
import { profileData, type ProfileSectionKey, type ProfileSection } from '@/lib/data'
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
      
      {/* Main Container */}
      <div className="container">
        {/* Profile Header */}
        <div className="profile-container">
          <div className="profile-content">
            <div className="profile-avatar">
              <Image
                alt="Ayaan Pupala"
                src="/images/profile.jpg"
                width={180}
                height={180}
                className="avatar-image fade-in"
                priority
              />
            </div>
            <div className="name-container">
              <h1 className="main-title fade-in-delay-1">
                Ayaan Pupala
              </h1>
            </div>

            {/* About Section */}
            <div className="about-section fade-in-delay-2">
              {profileData.about.map((item) => (
                <div key={item.id} className="about-content">
                  {item.aboutText.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Working On Section */}
            <div className="working-on-section fade-in-delay-3">
              <h3 className="working-on-title">Check out what I&apos;m working on</h3>
              <SocialLinks />
            </div>
          </div>
          
          {/* Profile Content */}
          <div className="profile-content-container fade-in-delay-3">
            <div className="content-grid">
              {PROFILE_SECTIONS.map((section) => (
                <div key={section.key} className="profile-card">
                  <div className="profile-card-header">
                    <section.icon className="card-icon" />
                    {/* <h2 className="section-title">{section.label}</h2> */}
                  </div>
                  <div className="sections-container">
                    {profileData[section.key as ProfileSectionKey].map((item) => (
                      <div key={item.id} className="section-content" onClick={() => handleOpenExpanded(item)}>
                        <div className="section-layout">
                          {!item.about && (
                            <div className="section-image">
                              <Image
                                src={item.imgSrc}
                                alt={item.sectionTitle}
                                width={120}
                                height={120}
                                className="content-image"
                              />
                            </div>
                          )}
                          <div className="section-text">
                            <div className="section-header">
                              <div className="section-info">
                                <h3 className="section-item-title">{item.sectionTitle}</h3>
                                {item.subtitle && (
                                  <p className="section-subtitle">{item.subtitle}</p>
                                )}
                              </div>
                              {item.date && !item.about && (
                                <span className="section-date">{item.date}</span>
                              )}
                            </div>
                            {/* <div className="section-description">
                              {item.about ? (
                                <div>
                                  {item.aboutText.split('\n').map((paragraph, pIndex) => (
                                    <p key={pIndex} className={pIndex > 0 ? 'paragraph-spacing' : ''}>
                                      {paragraph}
                                    </p>
                                  ))}
                                </div>
                              ) : (
                                <p className="section-excerpt">
                                  {item.aboutText.length > 150 
                                    ? `${item.aboutText.substring(0, 150)}...` 
                                    : item.aboutText
                                  }
                                </p>
                              )}
                            </div> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded View Modal */}
      <ExpandedView
        open={expandedSection.open}
        section={expandedSection.section}
        onClose={handleCloseExpanded}
      />
    </div>
  )
}