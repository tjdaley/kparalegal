import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const LandingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kparalegal.com/#organization",
        "name": "K-Paralegal, LLC",
        "url": "https://kparalegal.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kparalegal.com/images/ogimage.png"
        },
        "description": "Expert Texas Family Law paralegal services for attorneys",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://kparalegal.com/#website",
        "url": "https://kparalegal.com",
        "name": "K-Paralegal, LLC",
        "description": "Texas Family Law paralegal services",
        "publisher": {
          "@id": "https://kparalegal.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://kparalegal.com/#webpage",
        "url": "https://kparalegal.com",
        "name": "K-Paralegal, LLC | Texas Family Law Specialist",
        "isPartOf": {
          "@id": "https://kparalegal.com/#website"
        },
        "about": {
          "@id": "https://kparalegal.com/#organization"
        },
        "description": "Expert Texas Family Law paralegal services. Professional, reliable support for family law attorneys across Texas."
      },
      {
        "@type": "ProfessionalService",
        "name": "K-Paralegal, LLC",
        "image": "https://kparalegal.com/images/ogimage.png",
        "priceRange": "$$",
        "areaServed": "Texas",
        "serviceType": "Paralegal Services"
      }
    ]
  }

  return (
    <div className="w-full">
      <SEO
        title="K-Paralegal, LLC | Texas Family Law Specialist"
        description="Expert Texas Family Law paralegal services. Professional, reliable support for family law attorneys across Texas. Case management, legal research, and court filing."
        url="/"
        structuredData={structuredData}
      />
      {/* Brand Section */}
      <section className="bg-white py-12 md:py-16 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            {/* Large Circular Headshot */}
            <div className="relative mb-6">
              <img
                src="/images/marissa_daley_headshot.jpg"
                alt="Marissa Daley"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary-200 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full border-4 border-white shadow-md"></div>
            </div>

            {/* Company Name */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
              K-Paralegal, LLC
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              Texas Family Law Specialist
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted Partner in
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"> Texas Family Law</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Expert paralegal services that empower attorneys to focus on what matters most—winning cases and serving clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Let's Work Together
              </Link>
              <Link
                to="/services"
                className="bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 font-semibold text-lg border-2 border-primary-600"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Attorneys Choose K-Paralegal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring precision, reliability, and Texas family law expertise to every case we touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Texas Family Law Specialist</h3>
              <p className="text-gray-600">
                Deep expertise in Texas family law procedures, forms, and court requirements. We know the nuances that make a difference.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-accent-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-14 h-14 bg-accent-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning-Fast Turnaround</h3>
              <p className="text-gray-600">
                Need something yesterday? We get it. Quick turnarounds without compromising quality—that's our promise.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Detail-Obsessed</h3>
              <p className="text-gray-600">
                Every comma matters. Every deadline is sacred. We sweat the small stuff so you can focus on strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services Built for Your Practice
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From document prep to case management, we've got your back at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Document Preparation</h3>
              <p className="text-gray-600 mb-4">
                Pleadings, motions, discovery requests, and more—prepared accurately and on time.
              </p>
              <Link to="/services" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Case Management</h3>
              <p className="text-gray-600 mb-4">
                Keep your cases organized with comprehensive support from intake to resolution.
              </p>
              <Link to="/services/case-management" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Research</h3>
              <p className="text-gray-600 mb-4">
                Thorough research on Texas family law issues to support your legal arguments.
              </p>
              <Link to="/services/legal-research" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Court Filing & Calendar Management</h3>
              <p className="text-gray-600 mb-4">
                Never miss a deadline with our meticulous filing and calendar tracking services.
              </p>
              <Link to="/services/court-filing" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Practice?
            </h2>
            <p className="text-xl mb-8 text-primary-50">
              Let's chat about how we can support your Texas family law practice with reliable, professional paralegal services.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
