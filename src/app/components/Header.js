'use client'
import { useState, useEffect } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand logo and name */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">NextGen Voice & Web Solutions</h1>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Services</button>
            <button onClick={() => scrollToSection('case-studies')} className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Case Studies</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">Contact</button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-2 space-y-1">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">Services</button>
              <button onClick={() => scrollToSection('case-studies')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">Case Studies</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md mt-2">Contact</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
