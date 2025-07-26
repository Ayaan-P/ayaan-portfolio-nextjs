import React from 'react';

export const PROFILE_SECTIONS = [
  {
    key: 'about' as const,
    label: 'About',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    key: 'education' as const,
    label: 'Education',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18M12,3L1,9L12,15L21,11V17H23V9L12,3Z"/>
      </svg>
    )
  },
  {
    key: 'work' as const,
    label: 'Work Experience',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z"/>
      </svg>
    )
  },
  {
    key: 'projects' as const,
    label: 'Projects',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
      </svg>
    )
  }
];