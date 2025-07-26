'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { ProfileSection as ProfileSectionType } from '@/lib/data'
import { formatDate, cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface ProfileSectionProps {
  section: ProfileSectionType
  isExpanded?: boolean
  onToggle?: () => void
  className?: string
}

export default function ProfileSection({ 
  section, 
  isExpanded = false, 
  onToggle, 
  className 
}: ProfileSectionProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className={cn(
      "bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300",
      className
    )}>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-lg overflow-hidden bg-gray-200/10">
            {!imageError ? (
              <Image
                src={section.imgSrc}
                alt={section.sectionTitle}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-700 text-gray-400">
                <span className="text-xs text-center">No Image</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                {section.sectionTitle}
              </h3>
              {section.subtitle && (
                <p className="text-gray-300 font-medium">
                  {section.subtitle}
                </p>
              )}
            </div>
            {section.date && (
              <span className="text-sm text-gray-400 font-medium whitespace-nowrap">
                {formatDate(section.date)}
              </span>
            )}
          </div>

          <div className="text-gray-300 mb-4 leading-relaxed">
            {section.aboutText.split('\n').map((paragraph, index) => (
              <p key={index} className={index > 0 ? 'mt-4' : ''}>
                {paragraph}
              </p>
            ))}
          </div>

          {section.expandedDetails && onToggle && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 p-0 h-auto font-medium"
            >
              {isExpanded ? (
                <>
                  <span>Show less</span>
                  <ChevronUpIcon className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  <span>Learn more</span>
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && section.expandedDetails && (
        <div className="mt-6 pt-6 border-t border-white/10 space-y-6">
          {/* Full Description */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
            <div className="text-gray-300 leading-relaxed">
              {section.expandedDetails.fullDescription.split('\n').map((paragraph, index) => (
                <p key={index} className={index > 0 ? 'mt-4' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Skills */}
          {section.expandedDetails.skills.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {section.expandedDetails.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {section.expandedDetails.achievements.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
              <ul className="space-y-2">
                {section.expandedDetails.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="text-green-400 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          {section.expandedDetails.links && section.expandedDetails.links.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Links</h4>
              <div className="flex flex-wrap gap-3">
                {section.expandedDetails.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm bg-white/10 text-white rounded-md hover:bg-white/20 transition-colors border border-white/20"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}