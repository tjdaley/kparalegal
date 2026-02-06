import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/marissa_daley_headshot.jpg"
              alt="Marissa Daley"
              className="w-10 h-10 rounded-full object-cover border-2 border-primary-200 shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">K-Paralegal</span>
              <span className="text-xs text-gray-600">Contract Paralegal for Texas Family Law</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              to="/about"
              className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors duration-200 font-medium text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
