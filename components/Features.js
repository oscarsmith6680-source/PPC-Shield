import { useEffect, useRef } from 'react'

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Cards are visible by default, no animation needed
  }, [])

  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 7V10C4 15.55 7.16 20.74 12 22C16.84 20.74 20 15.55 20 10V7L12 2Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Real-Time Protection',
      description: 'Monitor and block fraudulent clicks instantly as they happen, preventing wasted ad spend before it impacts your budget.',
      bgColor: 'rgba(35, 110, 232, 0.1)',
      iconColor: '#236EE8'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21V3H3ZM19 19H5V5H19V19Z" fill="currentColor"/>
          <path d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Advanced Analytics',
      description: 'Gain deep insights into your traffic quality with detailed reports showing click patterns, geographic data, and threat levels.',
      bgColor: 'rgba(139, 69, 19, 0.1)',
      iconColor: '#8B4513'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.5 6L18.5 11L13.5 16V13H8.5V11H13.5V6Z" fill="currentColor"/>
        </svg>
      ),
      title: 'AI-Powered Detection',
      description: 'Machine learning algorithms continuously evolve to identify new fraud patterns and protect against emerging threats.',
      bgColor: 'rgba(75, 0, 130, 0.1)',
      iconColor: '#4B0082'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with simple integration. No technical expertise required—just add our code and start protecting.',
      bgColor: 'rgba(255, 140, 0, 0.1)',
      iconColor: '#FF8C00'
    }
  ]

  return (
    <section id="features" className="section section-alt" ref={sectionRef}>
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 fw-bold mb-3">
              <span className="gradient-text">Complete Protection</span> Features
            </h2>
            <p className="lead text-muted">
              Everything you need to safeguard your advertising campaigns and maximize your return on investment.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-6 col-md-6">
              <div className="feature-card">
                <div 
                  className="feature-icon"
                  style={{ 
                    background: `linear-gradient(135deg, ${feature.iconColor}15 0%, ${feature.iconColor}25 100%)`,
                    color: feature.iconColor
                  }}
                >
                  {feature.icon}
                </div>
                <h4 className="fw-bold mb-3">{feature.title}</h4>
                <p className="text-muted mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

