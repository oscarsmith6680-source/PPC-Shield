"use client";
import { useRef, useState, useEffect } from 'react'
import { createPath } from '../lib/paths'

export default function CaseStudies() {
  const sectionRef = useRef(null)
  const [basePath, setBasePath] = useState("")

  useEffect(() => {
    // Get basePath on client side
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const bp = path.startsWith("/ppc-shield") ? "/ppc-shield" : "";
      setBasePath(bp);
    }
  }, [])

  const caseStudies = [
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&q=80',
      company: 'TechCorp Solutions',
      icon: '💼',
      title: '$85,000+ worth of fraudulent clicks prevented',
      metrics: [
        { label: '25% cleaner traffic', value: '25%' },
        { label: '+8,450 clicks saved', value: '+8,450' }
      ],
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&q=80',
      company: 'Digital Marketing Pro',
      icon: '🚀',
      title: '30% CPA improvement, lead cost decreased by 45%',
      metrics: [
        { label: '15% cleaner traffic', value: '15%' },
        { label: '$6,200 saved', value: '$6,200' }
      ],
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop&q=80',
      company: 'Growth Agency',
      icon: '📈',
      title: '$750,000+ savings by preventing click fraud',
      metrics: [
        { label: '32% Cleaner traffic', value: '32%' },
        { label: '+165,000 clicks saved', value: '+165,000' }
      ],
      link: '#'
    }
  ]

  return (
    <section id="case-studies" className="section case-studies-section" ref={sectionRef}>
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 fw-bold mb-3">
              Customer <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="lead text-muted">
              Real results from businesses using PPC Shield. See how our customers increased conversions, 
              achieved lower CPC, blocked fake clicks, and saved thousands in ad spend.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {caseStudies.map((study, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="case-study-card">
                <div className="case-study-image-wrapper">
                  <img 
                    src={study.image} 
                    alt={study.company}
                    className="case-study-image"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.target.style.display = 'none'
                      const placeholder = e.target.nextElementSibling
                      if (placeholder) {
                        placeholder.style.display = 'flex'
                      }
                    }}
                  />
                  <div className="case-study-image-placeholder" style={{ display: 'none' }}>
                    <div className="placeholder-gradient">
                      <span className="placeholder-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3V21H21V3H3ZM19 19H5V5H19V19Z" fill="currentColor"/>
                          <path d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z" fill="currentColor"/>
                        </svg>
                      </span>
                      <span className="placeholder-text">{study.company}</span>
                    </div>
                  </div>
                </div>
                <div className="case-study-content">
                  <h3 className="case-study-title">{study.title}</h3>
                  <div className="case-study-metrics">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="case-study-metric">
                        <span className="metric-check">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="metric-text">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                  <a href={createPath("contact", basePath)} className="case-study-link">
                    Request A Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

