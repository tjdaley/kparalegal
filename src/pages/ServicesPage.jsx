import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { apiService } from '../services/apiService'

const ServicesPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Document Preparation",
        "description": "Pleadings, motions, discovery requests, and more",
        "provider": { "@type": "Organization", "name": "K-Paralegal, LLC" }
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Case Management",
        "description": "Comprehensive support from intake to resolution",
        "provider": { "@type": "Organization", "name": "K-Paralegal, LLC" }
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Legal Research",
        "description": "Thorough research on Texas family law issues",
        "provider": { "@type": "Organization", "name": "K-Paralegal, LLC" }
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Court Filing & Calendar Management",
        "description": "Meticulous filing and calendar tracking services",
        "provider": { "@type": "Organization", "name": "K-Paralegal, LLC" }
      }
    ]
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiService.getProducts()
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-800">Error loading services: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <SEO
        title="Paralegal Services for Texas Family Law | K-Paralegal"
        description="Comprehensive paralegal services for Texas Family Law attorneys. Document preparation, case management, legal research, and court filing services."
        url="/services"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Document Preparation Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive paralegal services tailored for Texas Family Law attorneys.
              Choose the support that fits your practice perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No services available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200"
                >
                  {/* Product Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                    {product.image_path ? (
                      <img
                        src={product.image_path}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <i className={`${product.icon} text-6xl text-primary-600 opacity-50`}></i>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-start space-x-3 mb-3">
                      {product.icon && (
                        <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <i className={`${product.icon} text-primary-600`}></i>
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                        {product.title}
                      </h3>
                    </div>

                    <div className="flex items-center text-primary-600 font-medium mt-4">
                      <span>Learn more</span>
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Don't see exactly what you're looking for? Let's chat about creating a custom service package for your practice.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors duration-200 font-semibold text-lg shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
