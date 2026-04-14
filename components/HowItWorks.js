import { useEffect, useRef } from 'react'

export default function HowItWorks() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Steps are visible by default
  }, [])

  const steps = [
    {
      number: '1',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="step1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35"/>
              <stop offset="100%" stopColor="#F7931E"/>
            </linearGradient>
          </defs>
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#step1Gradient)"/>
        </svg>
      ),
      title: 'Get Started',
      description: 'Contact us to get started and connect your advertising platforms in just a few clicks. No complex setup required.',
      color: '#FF6B35',
      bgColor: 'rgba(255, 107, 53, 0.15)'
    },
    {
      number: '2',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="step2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6"/>
              <stop offset="100%" stopColor="#A855F7"/>
            </linearGradient>
          </defs>
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.5 6L18.5 11L13.5 16V13H8.5V11H13.5V6Z" fill="url(#step2Gradient)"/>
        </svg>
      ),
      title: 'Automatic Detection',
      description: 'Our AI engine immediately starts analyzing your traffic, identifying suspicious patterns and fraudulent clicks in real-time.',
      color: '#8B5CF6',
      bgColor: 'rgba(139, 92, 246, 0.15)'
    },
    {
      number: '3',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="step3Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981"/>
              <stop offset="100%" stopColor="#34D399"/>
            </linearGradient>
          </defs>
          <path d="M12 2L4 7V10C4 15.55 7.16 20.74 12 22C16.84 20.74 20 15.55 20 10V7L12 2Z" fill="url(#step3Gradient)"/>
        </svg>
      ),
      title: 'Protect & Save',
      description: 'Watch as invalid clicks are blocked automatically, saving your budget and improving your campaign performance instantly.',
      color: '#10B981',
      bgColor: 'rgba(16, 185, 129, 0.15)'
    }
  ]

  return (
    <section className="section how-it-works-section" ref={sectionRef}>
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 fw-bold mb-3">
              How <span className="gradient-text">PPC Shield</span> Works
            </h2>
            <p className="lead text-muted">
              Three simple steps to complete protection and peace of mind. Get started in minutes.
            </p>
          </div>
        </div>
        <div className="row g-4 position-relative how-it-works-steps">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-4 col-md-4">
              <div className="step-card-enhanced">
                <div className="step-card-inner">
                  <div className="step-number-wrapper">
                    <div className="step-number-circle">
                      <span className="step-number">{step.number}</span>
                    </div>
                  </div>
                  <div className="step-content">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>
                  <div className="step-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="steps-connector d-none d-lg-block">
            <svg width="100%" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
              <defs>
                <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#236EE8" />
                  <stop offset="50%" stopColor="#1E88E5" />
                  <stop offset="100%" stopColor="#14C0FF" />
                </linearGradient>
                <animate attributeName="x2" values="0%;100%;0%" dur="3s" repeatCount="indefinite" />
              </defs>
              <line x1="0" y1="2" x2="100" y2="2" stroke="url(#connectorGradient)" strokeWidth="3" strokeLinecap="round">
                <animate attributeName="stroke-dasharray" values="0,100;100,0;0,100" dur="3s" repeatCount="indefinite" />
              </line>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

