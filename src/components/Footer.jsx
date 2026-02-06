import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/images/marissa_daley_headshot.jpg"
                alt="Marissa Daley"
                className="w-10 h-10 rounded-full object-cover border-2 border-primary-400 shadow-md"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">K-Paralegal</span>
                <span className="text-xs text-gray-400">Texas Family Law</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Professional paralegal services for Texas Family Law attorneys. Reliable, efficient, and detail-oriented support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-primary-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-primary-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-primary-400 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">Document Preparation</li>
              <li className="text-sm text-gray-400">Case Management</li>
              <li className="text-sm text-gray-400">Legal Research</li>
              <li className="text-sm text-gray-400">Court Filing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:contact@kparalegal.com" className="hover:text-primary-400 transition-colors duration-200">
                  contact@kparalegal.com
                </a>
              </li>
              <li className="text-sm text-gray-400">
                <span className="block">Serving:</span>
                <span>Texas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} K-Paralegal. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
