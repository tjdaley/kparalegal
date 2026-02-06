import React from 'react'
import { Link } from 'react-router-dom'

const CourtFilingPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Court Filing & Calendar Management
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Never miss a deadline with our meticulous filing and calendar tracking services.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
              <p className="text-gray-600 text-center mb-8">
                Content coming soon...
              </p>
              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors duration-200 font-semibold text-lg shadow-lg"
                >
                  Contact Us to Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourtFilingPage
