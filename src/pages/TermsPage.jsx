import React from 'react'
import { Link } from 'react-router-dom'

const TermsPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Clear terms for a professional partnership.
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
                    These Terms of Service govern your use of K-Paralegal's services. By engaging our services,
                    you agree to these terms. Please read them carefully.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Section 1 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-credit-card text-primary-600 mr-3"></i>
                      Payment Terms
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Standard Services:</strong> Payment is due at the time the order is placed. We accept
                      electronic payments including credit cards, debit cards, and ACH transfers.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Custom Services:</strong> For services not included on our menu of standard services,
                      we bill at $50 per hour with a three-hour minimum.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Hourly Projects:</strong> For hourly projects, such as discovery work, the attorney
                      must deposit $500 in our escrow account. We will bill against this deposit. Any unused deposit
                      will be refunded to the attorney at the end of the month or rolled into the next month at the
                      attorney's option.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Payment Due Date:</strong> All balances are due three business days after a statement
                      is sent to the attorney.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Payment Methods:</strong> Electronic payment is preferred. If you need to pay by check
                      or any other non-electronic means, please contact us to make arrangements.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-clock text-primary-600 mr-3"></i>
                      Turnaround Times
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Standard Turnaround:</strong> Our standard turnaround time is one business day.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Same-Day Rush Orders:</strong> Rush orders for same business day service must be
                      received by noon Central Time on that business day.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Late Rush Orders:</strong> Orders for "same day" service that are received after
                      noon Central Time will be completed on a best-efforts basis but may not be completed until
                      the next business day.
                    </p>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-business-time text-primary-600 mr-3"></i>
                      Business Hours & Holidays
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Business Hours:</strong> We are open from 8:00 AM to 5:00 PM Central Time, Monday
                      through Friday.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Holidays:</strong> We are closed for all federal holidays and holidays recognized by
                      the courts in Collin County, Texas. Orders received on holidays or outside business hours will
                      be processed on the next business day.
                    </p>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-user-tie text-primary-600 mr-3"></i>
                      Eligible Clients
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Attorneys Only:</strong> Our services are available to licensed attorneys only. We
                      cannot represent self-represented non-lawyers at this time due to Texas's rules on the
                      unauthorized practice of law.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      By engaging our services, you represent and warrant that you are a licensed attorney in good
                      standing authorized to practice law.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-file-contract text-primary-600 mr-3"></i>
                      Service Limitations
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      K-Paralegal provides paralegal support services under the supervision and direction of the
                      retaining attorney. We do not provide legal advice, represent clients in court, or engage in
                      any activity that constitutes the practice of law. All work product remains subject to attorney
                      review and approval.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-handshake text-primary-600 mr-3"></i>
                      Professional Responsibility
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      The retaining attorney maintains sole responsibility for all legal work and client
                      relationships. Attorneys engaging our services remain responsible for supervising our work,
                      ensuring compliance with all applicable rules of professional conduct, and making all legal
                      decisions.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-ban text-primary-600 mr-3"></i>
                      Cancellations & Refunds
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Orders may be cancelled before work begins for a full refund. Once work has commenced,
                      cancellations will be subject to payment for work completed to date. Rush orders cannot be
                      cancelled once accepted.
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-sync-alt text-primary-600 mr-3"></i>
                      Changes to Terms
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We reserve the right to modify these Terms of Service at any time. Changes will be effective
                      immediately upon posting to our website. Your continued use of our services after changes are
                      posted constitutes acceptance of the modified terms.
                    </p>
                  </div>

                  {/* Section 9 */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-gavel text-primary-600 mr-3"></i>
                      Governing Law
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      These Terms of Service are governed by the laws of the State of Texas. Any disputes arising
                      from these terms or our services shall be resolved in the courts of Collin County, Texas.
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
              <p className="text-gray-600 mb-6">
                Questions about our terms? We're here to help.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors duration-200 font-semibold text-lg shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsPage
