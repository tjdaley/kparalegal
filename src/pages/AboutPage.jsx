import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

const AboutPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Marissa A. Daley",
    "jobTitle": "Certificated Paralegal",
    "sameAs": "https://en.wikipedia.org/wiki/Paralegal",
    "worksFor": {
      "@type": "Organization",
      "name": "K-Paralegal, LLC"
    },
    "description": "Certificated paralegal with 13+ years of experience in Texas Family Law",
    "knowsAbout": ["Texas Family Law", "Legal Research", "Document Preparation", "Case Management"],
    "image": "https://kparalegal.com/images/marissa_daley_headshot.jpg"
  }

  return (
    <div className="w-full">
      <SEO
        title="About Marissa Daley | K-Paralegal, LLC"
        description="Meet Marissa A. Daley, certificated paralegal with 13+ years of experience in Texas Family Law. Expert in case management, legal research, and document preparation."
        url="/about"
        image="/images/marissa_daley_headshot.jpg"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About K-Paralegal
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Meet the expert behind your next success story in Texas Family Law.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              {/* Headshot */}
              <div className="md:col-span-1">
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src="/images/marissa_daley_headshot.jpg"
                      alt="Marissa A. Daley"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full -z-10"></div>
                </div>
              </div>

              {/* Bio Content */}
              <div className="md:col-span-2">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      Marissa A. Daley
                    </h2>
                    <p className="text-lg text-primary-600 font-medium italic">
                      Certificated Paralegal
                    </p>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <p>
                      <strong>Marissa</strong> is a certificated paralegal having earned her credentials at Collin College.
                      She has an undergraduate degree in fine arts (BFA) from Midwestern State University in Wichita Falls, Texas.
                    </p>

                    <p>
                      Marissa started her legal career working in her father's law firm at the age of 15 years.
                      Since then, she has worked in legal settings for over 13 years. Most recently she served as
                      a paralegal at KoonsFuller, P.C. in Plano, Texas, where she supported several senior partners.
                    </p>

                    <p>
                      She is proficient in Microsoft Word, Excel, and PowerPoint. She drafts legal pleadings and orders,
                      and prepares trial binders and exhibits. She prepares and serves document and trial subpoenas
                      around the United States and is familiar with the Uniform Deposition and Discovery Act (UDDA)
                      enacted by most states.
                    </p>

                    <p>
                      Marissa is also an expert at organizing discovery materials, drafting deficiency letters,
                      creating easy to use discovery trackers, and motions to compel discovery.
                    </p>

                    <p>
                      Most recently, Marissa has been trained in the ethical and responsible use of Artificial Intelligence
                      having achieved a certificate from Google and graduated from KoonsFuller's AI certification and training program.
                      She knows how to protect attorneys from the dangers of AI, is familiar with the ethical standards
                      governing the use of AI in Texas, and knows how to lean on AI when appropriate for greater efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Areas of Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Expertise 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-file-contract text-primary-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Document Preparation
                </h3>
                <p className="text-gray-600 text-sm">
                  Expert drafting of pleadings, orders, trial binders, and exhibits
                </p>
              </div>

              {/* Expertise 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-search text-accent-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Discovery Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Organization, tracking, and compelling discovery with precision
                </p>
              </div>

              {/* Expertise 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-gavel text-primary-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Subpoena Services
                </h3>
                <p className="text-gray-600 text-sm">
                  Nationwide document and trial subpoena preparation and service
                </p>
              </div>

              {/* Expertise 4 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-balance-scale text-accent-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Texas Family Law
                </h3>
                <p className="text-gray-600 text-sm">
                  13+ years of specialized experience in family law matters
                </p>
              </div>

              {/* Expertise 5 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-desktop text-primary-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Microsoft Office Suite
                </h3>
                <p className="text-gray-600 text-sm">
                  Advanced proficiency in Word, Excel, and PowerPoint
                </p>
              </div>

              {/* Expertise 6 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-robot text-accent-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  AI & Legal Tech
                </h3>
                <p className="text-gray-600 text-sm">
                  Certified in ethical AI use with Google and KoonsFuller credentials
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Education & Credentials
            </h2>

            <div className="space-y-8">
              {/* Credential 1 */}
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-primary-50 to-white rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Paralegal Certification
                  </h3>
                  <p className="text-primary-600 font-medium">Collin College</p>
                </div>
              </div>

              {/* Credential 2 */}
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-accent-50 to-white rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-palette text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Bachelor of Fine Arts (BFA)
                  </h3>
                  <p className="text-accent-600 font-medium">Midwestern State University, Wichita Falls, Texas</p>
                </div>
              </div>

              {/* Credential 3 */}
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-primary-50 to-white rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-certificate text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    AI Ethics & Implementation
                  </h3>
                  <p className="text-primary-600 font-medium">Google AI Certificate & KoonsFuller AI Training Program</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 text-primary-50">
              Let's discuss how Marissa's expertise can support your Texas family law practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg shadow-lg"
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary-600 transition-colors duration-200 font-semibold text-lg"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
