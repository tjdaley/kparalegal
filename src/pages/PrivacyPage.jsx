import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy and confidentiality are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    At K-Paralegal, we understand the sensitive nature of legal work and the importance of maintaining
                    strict confidentiality. This Privacy Policy outlines our commitment to protecting your data and
                    maintaining the highest standards of information security.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Section 1 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-shield-alt text-primary-600 mr-3"></i>
                      Data Confidentiality
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      All data and information provided to K-Paralegal are kept in strict confidence. We treat all
                      client information with the utmost care and discretion, recognizing the privileged nature of
                      attorney-client communications and work product.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We do not share, sell, or distribute any client data to third parties under any circumstances,
                      except as required by law or with explicit written consent.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-lock text-primary-600 mr-3"></i>
                      Data Security
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      All data are stored on secured servers implementing industry-standard encryption and access controls.
                      Our security measures include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>End-to-end encryption for data transmission</li>
                      <li>Encrypted storage using industry-standard protocols</li>
                      <li>Multi-factor authentication for system access</li>
                      <li>Regular security audits and updates</li>
                      <li>Restricted access controls limited to authorized personnel only</li>
                      <li>Secure backup systems with redundancy</li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-server text-primary-600 mr-3"></i>
                      Data Storage
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We utilize enterprise-grade cloud infrastructure with physical and digital security measures
                      that meet or exceed industry standards. Our servers are housed in secure data centers with
                      24/7 monitoring, environmental controls, and redundant power systems.
                    </p>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-user-shield text-primary-600 mr-3"></i>
                      Access Controls
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Access to client data is strictly limited to authorized personnel who require such access to
                      perform their duties. All personnel with access to client data are bound by confidentiality
                      agreements and trained in data security best practices.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-envelope-open-text text-primary-600 mr-3"></i>
                      Communication Security
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      All electronic communications, including emails and file transfers, are encrypted using
                      industry-standard protocols. We recommend using secure file transfer methods for sensitive
                      documents, and we're happy to accommodate your preferred secure communication methods.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-question-circle text-primary-600 mr-3"></i>
                      Questions About Privacy
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      If you have any questions or concerns about our privacy practices or data security measures,
                      please don't hesitate to contact us. We're committed to maintaining your trust and
                      confidence.
                    </p>
                  </div>

                  {/* Last Updated */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 italic">
                      Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors duration-200 font-semibold text-lg shadow-lg"
              >
                Contact Us with Questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPage
