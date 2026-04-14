"use client";
import { useRef, useState, useEffect } from 'react'
import { createPath } from '../lib/paths'

export default function Pricing() {
  const sectionRef = useRef(null)
  const [isYearly, setIsYearly] = useState(false)
  const [basePath, setBasePath] = useState("")

  useEffect(() => {
    // Get basePath on client side
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const bp = path.startsWith("/ppc-shield") ? "/ppc-shield" : "";
      setBasePath(bp);
    }
  }, [])

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with click fraud protection',
      monthlyPrice: '$99',
      yearlyPrice: '$84',
      period: '/month',
      details: {
        websites: 'Protect 1 website',
        traffic: 'For sites with total traffic up to 10k clicks/month'
      },
      features: [
        'Real-time fraud detection',
        'Basic analytics dashboard',
        'Email support',
        'Google Ads integration',
        'Monthly reports',
        'Up to 10,000 clicks/month'
      ],
      buttonText: 'Buy Now',
      popular: false
    },
    {
      name: 'Pro',
      description: 'Best for growing businesses managing multiple campaigns',
      monthlyPrice: '$299',
      yearlyPrice: '$254',
      period: '/month',
      details: {
        websites: 'Protect 5 websites',
        traffic: 'For sites with total traffic up to 100k clicks/month'
      },
      features: [
        'All Starter features',
        'Advanced AI detection',
        'Comprehensive analytics',
        'Priority email support',
        'All platform integrations',
        'Real-time alerts',
        'Custom reporting',
        'API access',
        'Up to 100,000 clicks/month'
      ],
      buttonText: 'Buy Now',
      popular: true
    },
    {
      name: 'Advanced',
      description: 'For high-traffic businesses needing premium support',
      monthlyPrice: '$599',
      yearlyPrice: '$509',
      period: '/month',
      details: {
        websites: 'Protect up to 20 websites',
        traffic: 'For sites with total traffic up to 500k clicks/month'
      },
      features: [
        'All Pro features',
        'Enterprise-grade AI',
        'Advanced analytics suite',
        '24/7 dedicated support',
        'Custom integrations',
        'White-label options',
        'SLA guarantee',
        'Dedicated account manager',
        'Unlimited clicks'
      ],
      buttonText: 'Buy Now',
      popular: false
    }
  ]

  const allPlansInclude = [
    'Unlimited Google Ads accounts',
    '24/7 support',
    'Cancel-any-time policy'
  ]

  return (
    <section id="pricing" className="pricing-section section" ref={sectionRef}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto text-center">
            <h2 className="display-4 fw-bold mb-3">
              Select your <span className="gradient-text">Protection Plan</span>
            </h2>
            <p className="lead text-muted">
              Choose the perfect plan for your business. All plans include comprehensive protection and support.
            </p>
          </div>
        </div>

        {/* Toggle */}
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto">
            <div className="pricing-controls d-flex align-items-center justify-content-center">
              <div className="pricing-toggle-wrapper">
                <div className="pricing-toggle">
                  <button
                    className={`pricing-toggle-btn ${!isYearly ? 'active' : ''}`}
                    onClick={() => setIsYearly(false)}
                  >
                    Monthly
                  </button>
                  <button
                    className={`pricing-toggle-btn ${isYearly ? 'active' : ''}`}
                    onClick={() => setIsYearly(true)}
                  >
                    Yearly
                  </button>
                  {isYearly && (
                    <span className="pricing-save-badge">Save 15%</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4 justify-content-center">
          {plans.map((plan, index) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            return (
              <div key={index} className={`col-lg-4 col-md-6 ${plan.popular ? 'order-first order-lg-0' : ''}`}>
                <div className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}>
                  {plan.popular && (
                    <div className="pricing-badge">
                      <span>Most Popular</span>
                    </div>
                  )}
                  <div className="pricing-card-header">
                    <h3 className="pricing-plan-name">{plan.name}</h3>
                    <p className="pricing-plan-description">{plan.description}</p>
                  </div>
                  <div className="pricing-card-body">
                    <div className="pricing-price">
                      <span className="pricing-amount">{price}</span>
                      <span className="pricing-period">{plan.period}</span>
                    </div>
                    <div className="pricing-details">
                      <div className="pricing-detail-item">
                        <span className="pricing-detail-label">{plan.details.websites}</span>
                      </div>
                    </div>
                    <ul className="pricing-features">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="pricing-feature-item">
                          <span className="pricing-feature-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pricing-card-footer">
                    <a href={createPath("contact", basePath)} className="btn btn-gradient w-100">
                      {plan.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* All Plans Include Section */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="pricing-includes-section">
              <h4 className="pricing-includes-title">All plans include:</h4>
              <div className="pricing-includes-items">
                {allPlansInclude.map((item, index) => (
                  <div key={index} className="pricing-includes-item">
                    <span className="pricing-includes-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
