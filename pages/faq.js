import Head from 'next/head'
import { useEffect } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import FAQ from '../components/FAQ'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

export default function FAQPage() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      let target = e.target
      while (target && target !== document.body) {
        if (target.tagName === 'A') {
          const href = target.getAttribute('href')
          if (href && href.startsWith('#')) {
            e.preventDefault()
            const targetId = href.substring(1)
            const targetElement = document.getElementById(targetId)
            if (targetElement) {
              const offset = 80
              const elementPosition = targetElement.getBoundingClientRect().top
              const offsetPosition = elementPosition + window.pageYOffset - offset

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              })
            }
            break
          }
        }
        target = target.parentElement
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <>
      <Head>
        <title>FAQ - PPC Shield | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about PPC Shield click fraud protection. Learn how we protect your advertising campaigns." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      <section className="hero-section">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content">
              <h1 className="hero-title">
                Frequently Asked <br />
                <span className="gradient-text">Questions</span>
              </h1>
              <p className="hero-subtitle">
                Find answers to common questions about PPC Shield. Everything you need to know about protecting your advertising campaigns from click fraud.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#faq" className="btn btn-gradient pulse">
                  View Questions
                </a>
                <a href="/pricing" className="btn btn-gradient-outline">
                  View Pricing
                </a>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="hero-frame-visual">
                <div className="hero-frame-outer">
                  <div className="hero-frame-inner">
                    <Image 
                      src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="PPC Shield FAQ"
                      width={800}
                      height={600}
                      className="hero-frame-img"
                      unoptimized
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <CTABanner />
      <Footer />
    </>
  )
}

