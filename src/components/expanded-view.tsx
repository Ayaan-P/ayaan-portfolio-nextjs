'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { type ProfileSection } from '@/lib/data'

interface ExpandedViewProps {
  open: boolean
  section: ProfileSection | null
  onClose: () => void
}

export default function ExpandedView({ open, section, onClose }: ExpandedViewProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  if (!open || !section) return null

  return (
    <div className="expanded-view-overlay" onClick={onClose}>
      <div className="expanded-view-content" onClick={(e) => e.stopPropagation()}>
        <div className="expanded-view-header">
          <button className="expanded-view-close" onClick={onClose}>
            <svg className="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="expanded-view-body">
          <div className="expanded-section-header">
            {section.imgSrc && !section.about && (
              <div className="expanded-section-image">
                <Image
                  src={section.imgSrc}
                  alt={section.sectionTitle}
                  width={150}
                  height={150}
                  className="expanded-image"
                />
              </div>
            )}
            <div className="expanded-section-info">
              <h2 className="expanded-section-title">{section.sectionTitle}</h2>
              {section.subtitle && (
                <p className="expanded-section-subtitle">{section.subtitle}</p>
              )}
              {section.date && (
                <span className="expanded-section-date">{section.date}</span>
              )}
            </div>
          </div>

          <div className="expanded-section-content">
            {section.expandedDetails ? (
              <>
                <div className="expanded-description">
                  <h3 className="expanded-content-title">Description</h3>
                  <div className="expanded-text">
                    {section.expandedDetails.fullDescription.split('\n').map((paragraph: string, index: number) => (
                      <p key={index} className={index > 0 ? 'paragraph-spacing' : ''}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {section.expandedDetails.skills && section.expandedDetails.skills.length > 0 && (
                  <div className="expanded-skills">
                    <h3 className="expanded-content-title">Skills & Technologies</h3>
                    <div className="skills-grid">
                      {section.expandedDetails.skills.map((skill: string, index: number) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {section.expandedDetails.achievements && section.expandedDetails.achievements.length > 0 && (
                  <div className="expanded-achievements">
                    <h3 className="expanded-content-title">Key Achievements</h3>
                    <ul className="achievements-list">
                      {section.expandedDetails.achievements.map((achievement: string, index: number) => (
                        <li key={index} className="achievement-item">
                          <span className="achievement-bullet">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.expandedDetails.links && section.expandedDetails.links.length > 0 && (
                  <div className="expanded-links">
                    <h3 className="expanded-content-title">Links</h3>
                    <div className="links-grid">
                      {section.expandedDetails.links.map((link, index: number) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-button"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="expanded-description">
                <div className="expanded-text">
                  {section.aboutText.split('\n').map((paragraph: string, index: number) => (
                    <p key={index} className={index > 0 ? 'paragraph-spacing' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}