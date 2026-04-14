"use client";
import { useEffect, useState } from "react";
import { createPath, getAssetPath } from "../lib/paths";

export default function Footer() {
  const [basePath, setBasePath] = useState("");

  useEffect(() => {
    // Get basePath on client side
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const bp = path.startsWith("/ppc-shield") ? "/ppc-shield" : "";
      setBasePath(bp);
    }
  }, []);

  return (
    <footer className="footer-enhanced" id="contact">
      <div className="footer-shapes">
        <div className="footer-shape footer-shape-1"></div>
        <div className="footer-shape footer-shape-2"></div>
      </div>
      <div className="container">
        <div className="footer-top">
          <div className="row g-4 mb-5">
            <div className="col-lg-5 col-md-6">
              <div className="footer-brand-section">
                <div className="footer-logo-wrapper">
                  <a href={basePath || "/"} className="footer-logo-link">
                    <img src={getAssetPath("/logo.png", basePath)} alt="PPC Shield" className="footer-logo-icon" />
                  </a>
                </div>
                <p className="footer-description">
                  Advanced click fraud protection for your PPC campaigns. 
                  Protect your budget, maximize your ROI, and grow with confidence.
                </p>
                <div className="footer-social-top">
                  <span className="social-label-top">Follow Us:</span>
                  <div className="social-icons-wrapper">
                    <a href="#" className="social-icon-enhanced" aria-label="Facebook">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon-enhanced" aria-label="X (Twitter)">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon-enhanced" aria-label="LinkedIn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon-enhanced" aria-label="Instagram">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-column">
                <h5 className="footer-column-title">
                  <span className="footer-title-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </span>
                  Quick Links
                </h5>
                <ul className="footer-links">
                  <li>
                    <a href={basePath || "/"} className="footer-link">
                      <span className="link-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a href={createPath("about", basePath)} className="footer-link">
                      <span className="link-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a href={createPath("pricing", basePath)} className="footer-link">
                      <span className="link-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>Pricing</span>
                    </a>
                  </li>
                  <li>
                    <a href={createPath("faq", basePath)} className="footer-link">
                      <span className="link-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>FAQ</span>
                    </a>
                  </li>
                  <li>
                    <a href={createPath("reviews", basePath)} className="footer-link">
                      <span className="link-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>Reviews</span>
                    </a>
                  </li>
                  <li>
                    <a href={createPath("contact", basePath)} className="footer-link">
                      <span className="link-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-column">
                <h5 className="footer-column-title">
                  <span className="footer-title-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="currentColor"/>
                    </svg>
                  </span>
                  Legal
                </h5>
                <ul className="footer-links">
                  <li>
                    <a href={createPath("privacy-policy", basePath)} className="footer-link">
                      <span className="link-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>Privacy Policy</span>
                    </a>
                  </li>
                  <li>
                    <a href={createPath("terms-of-service", basePath)} className="footer-link">
                      <span className="link-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>Terms of Service</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-column">
                <h5 className="footer-column-title">
                  <span className="footer-title-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15.46L15.46 21L12 17.54L17.54 12L21 15.46ZM3 8.54L8.54 3L12 6.46L6.46 12L3 8.54ZM21 8.54L15.46 3L12 6.46L17.54 12L21 8.54ZM3 15.46L8.54 21L12 17.54L6.46 12L3 15.46Z" fill="currentColor"/>
                    </svg>
                  </span>
                  Get in Touch
                </h5>
                <ul className="footer-links">
                  <li>
                    <a href="mailto:support@ppcshield.com" className="footer-link">
                      <span className="link-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                      </span>
                      <span>support@ppcshield.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+1234567890" className="footer-link">
                      <span className="link-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9841 21.5573 21.2126 21.3528 21.3992C21.1482 21.5857 20.9071 21.7261 20.6447 21.8112C20.3822 21.8962 20.1045 21.924 19.83 21.892C16.7428 21.5856 13.787 20.5341 11.19 18.822C8.77382 17.2808 6.72533 15.2323 5.184 12.816C3.47041 10.2142 2.41925 7.25226 2.115 4.162C2.08304 3.88756 2.11084 3.60983 2.19595 3.3474C2.28106 3.08497 2.42149 2.84389 2.60805 2.63934C2.79461 2.43479 3.02308 2.27119 3.27802 2.15959C3.53296 2.04799 3.80871 1.99099 4.087 1.992H7.09C7.51541 1.99081 7.93308 2.11878 8.28506 2.35877C8.63704 2.59876 8.90704 2.94012 9.06 3.332L10.22 6.22C10.3724 6.60749 10.3963 7.03319 10.2881 7.43559C10.1799 7.83798 9.94519 8.19776 9.62 8.462L8.09 9.992C9.51355 12.4371 11.5629 14.4865 14.008 15.91L15.538 14.38C15.8022 14.0548 16.162 13.8201 16.5644 13.7119C16.9668 13.6037 17.3925 13.6276 17.78 13.78L20.668 14.94C21.0599 15.093 21.4012 15.363 21.6412 15.715C21.8812 16.067 22.0092 16.4846 22.008 16.91L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                      </span>
                      <span>+1 (234) 567-890</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      <span className="link-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                      </span>
                      <span>123 Business St, Suite 100, New York, NY 10001</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="footer-copyright">
                <span className="copyright-icon">©</span>
                <span className="copyright-text">
                  {new Date().getFullYear()} PPC Shield. All rights reserved.
                </span>
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="footer-developed-by">
                <span className="developed-by-text">
                  Developed by{' '}
                  <a href="https://logix9.io/" target="_blank" rel="noopener noreferrer" className="logix9-link">
                    logix9
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

