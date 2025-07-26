import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string): string {
  if (!date) return ''
  
  // Handle date ranges like "June 2025 - August 2025"
  if (date.includes(' - ')) {
    return date
  }
  
  // Handle single dates
  return date
}