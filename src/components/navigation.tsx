'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <>
      {/* Menu Button */}
      <button 
        className="menu-button" 
        aria-label="open drawer"
        onClick={handleDrawerToggle}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Overlay */}
      {drawerOpen && (
        <div 
          className="drawer-overlay" 
          onClick={handleDrawerToggle}
        />
      )}

      {/* Drawer */}
      <div className={`drawer ${drawerOpen ? 'drawer-open' : ''}`}>
        <div className="drawer-header">
          <h2 className="drawer-title">Menu</h2>
          <button
            type="button"
            className="drawer-close"
            onClick={handleDrawerToggle}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="drawer-nav">
          <ul className="nav-list">
            <li>
              <Link href="/" className="nav-link active" onClick={handleDrawerToggle}>
                Profile
              </Link>
            </li>
            <li>
              <Link href="/blog" className="nav-link" onClick={handleDrawerToggle}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}