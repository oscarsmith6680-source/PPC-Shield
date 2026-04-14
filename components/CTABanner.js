"use client";
import { useEffect, useRef, useState } from 'react'
import { createPath } from '../lib/paths'

export default function CTABanner() {
  const bannerRef = useRef(null)
  const [basePath, setBasePath] = useState("")

  useEffect(() => {
    // Get basePath on client side
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const bp = path.startsWith("/ppc-shield") ? "/ppc-shield" : "";
      setBasePath(bp);
    }
  }, [])

  return (
    <section id="cta" className="section cta-section" ref={bannerRef}>
      <div className="container-fluid px-0">
        <div className="cta-banner-enhanced">
          <div className="cta-shapes">
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
            <div className="cta-shape cta-shape-3"></div>
          </div>
          <div className="cta-banner-content">
            <h2 className="cta-title">
              Ready to Protect Your <span className="cta-highlight">Campaigns</span>?
            </h2>
            <p className="cta-subtitle">
              Join thousands of advertisers who trust PPC Shield to block fraud and maximize ROI. 
              Start your free trial today—no credit card required.
            </p>
            <div className="cta-buttons">
              <a href={createPath("contact", basePath)} className="btn cta-primary-btn">
                <span className="btn-text">Connect With Experts </span>
                <span className="btn-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
              <a href={createPath("contact", basePath)} className="btn cta-secondary-btn">
                Request A Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

