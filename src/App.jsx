import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import CaseManagementPage from './pages/CaseManagementPage'
import LegalResearchPage from './pages/LegalResearchPage'
import CourtFilingPage from './pages/CourtFilingPage'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/case-management" element={<CaseManagementPage />} />
              <Route path="/services/legal-research" element={<LegalResearchPage />} />
              <Route path="/services/court-filing" element={<CourtFilingPage />} />
              <Route path="/product/:slug" element={<ProductDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/blog" element={<div className="container mx-auto px-4 py-16"><h1 className="text-3xl font-bold">Blog</h1></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
