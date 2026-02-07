import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const ContactPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://kparalegal.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "K-Paralegal, LLC",
      "email": "contact@kparalegal.com"
    }
  }

  useEffect(() => {
    // Load Cognito Forms script
    const script = document.createElement('script')
    script.src = 'https://www.cognitoforms.com/f/seamless.js'
    script.setAttribute('data-key', 'wDxXHUzbukKC6A7d_bOxWw')
    script.setAttribute('data-form', '11')
    script.async = true

    const formContainer = document.getElementById('cognito-form-container')
    if (formContainer) {
      formContainer.appendChild(script)
    }

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (formContainer && script.parentNode === formContainer) {
        formContainer.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="w-full">
      <SEO
        title="Contact K-Paralegal | Texas Family Law Paralegal Support"
        description="Get in touch with K-Paralegal, LLC for expert Texas Family Law paralegal services. Fast response times and professional support for attorneys."
        url="/contact"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to elevate your Texas Family Law practice? Fill out the form below and let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Card 1 */}
              <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100">
                <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope text-white text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-sm text-gray-600">
                  Quick questions? Drop us a line anytime.
                </p>
              </div>

              {/* Card 2 */}
              <div className="text-center p-6 bg-gradient-to-br from-accent-50 to-white rounded-xl border border-accent-100">
                <div className="w-14 h-14 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-white text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Response</h3>
                <p className="text-sm text-gray-600">
                  We typically respond within 24 hours.
                </p>
              </div>

              {/* Card 3 */}
              <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100">
                <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-map-marker-alt text-white text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Serving Texas</h3>
                <p className="text-sm text-gray-600">
                  Supporting family law attorneys statewide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* Cognito Form Container */}
              <div id="cognito-form-container" className="cognito-form-wrapper"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What Can We Help You With?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Reason 1 */}
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-question-circle text-primary-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Service Inquiries
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Questions about our services, pricing, or availability? We're here to help.
                  </p>
                </div>
              </div>

              {/* Reason 2 */}
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50">
                <div className="flex-shrink-0 w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-briefcase text-accent-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    New Projects
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Have a case or project you need support with? Let's discuss how we can help.
                  </p>
                </div>
              </div>

              {/* Reason 3 */}
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-handshake text-primary-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Partnership Opportunities
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Interested in ongoing paralegal support? Let's talk about a partnership.
                  </p>
                </div>
              </div>

              {/* Reason 4 */}
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50">
                <div className="flex-shrink-0 w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-comments text-accent-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    General Questions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Have a question that doesn't fit elsewhere? We'd love to hear from you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
