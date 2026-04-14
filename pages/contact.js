import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function ContactPage() {
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
        <title>Contact Us - PPC Shield | Get in Touch</title>
        <meta name="description" content="Contact PPC Shield for questions, support, or inquiries. We're here to help protect your advertising campaigns." />
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
                Let's <br />
                <span className="gradient-text">Connect</span>
              </h1>
              <p className="hero-subtitle">
                Have questions about PPC Shield? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-gradient pulse">
                  Contact Us
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
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80"
                      alt="Contact PPC Shield"
                      className="hero-frame-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  )
}

