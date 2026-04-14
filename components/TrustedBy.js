import { useEffect, useRef } from 'react'

export default function TrustedBy() {
  const containerRef = useRef(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const slider = sliderRef.current
    if (!container || !slider) return

    let scrollAmount = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollAmount += scrollSpeed
      const sliderWidth = slider.scrollWidth / 2
      if (scrollAmount >= sliderWidth) {
        scrollAmount = 0
      }
      slider.style.transform = `translateX(-${scrollAmount}px)`
    }

    const interval = setInterval(scroll, 16)

    return () => clearInterval(interval)
  }, [])

  const companies = [
    { 
      name: 'TechCorp',
      iconColor: '#236EE8',
      bgColor: 'rgba(35, 110, 232, 0.1)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6H16V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H4C2.9 6 2 6.9 2 8V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V8C22 6.9 21.1 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      name: 'DigitalPlus',
      iconColor: '#F97316',
      bgColor: 'rgba(249, 115, 22, 0.1)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.81 14.12L5.64 11.29L8.17 10.79C11.39 6.41 17.55 4.22 19.78 4.22C19.78 6.45 17.59 12.61 13.21 15.83L12.71 18.36L9.88 21.19C9.34 21.73 8.71 22 8.04 22C7.37 22 6.7 21.73 6.16 21.19L2.81 17.84C2.27 17.3 2 16.67 2 16C2 15.33 2.27 14.66 2.81 14.12Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      name: 'AdVantage',
      iconColor: '#22C55E',
      bgColor: 'rgba(34, 197, 94, 0.1)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21V3H3ZM19 19H5V5H19V19Z" fill="currentColor"/>
          <path d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z" fill="currentColor"/>
          <path d="M3 3V21H21V3H3ZM19 19H5V5H19V19Z" fill="currentColor"/>
          <path d="M7 16L12 11L16 15L21 10V3H14L7 16Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      name: 'MarketPro',
      iconColor: '#8B5CF6',
      bgColor: 'rgba(139, 92, 246, 0.1)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      )
    },
    { 
      name: 'ClickMax',
      iconColor: '#EF4444',
      bgColor: 'rgba(239, 68, 68, 0.1)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      name: 'BrandBoost',
      iconColor: '#F59E0B',
      bgColor: 'rgba(245, 158, 11, 0.1)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      name: 'AdShield',
      iconColor: '#14C0FF',
      bgColor: 'rgba(20, 192, 255, 0.1)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 7V10C4 15.55 7.16 20.74 12 22C16.84 20.74 20 15.55 20 10V7L12 2Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      name: 'GrowthLab',
      iconColor: '#10B981',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="currentColor"/>
          <path d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      name: 'MediaFlow',
      iconColor: '#EC4899',
      bgColor: 'rgba(236, 72, 153, 0.1)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21V3H3ZM19 19H5V5H19V19Z" fill="currentColor"/>
          <path d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      name: 'CampaignPro',
      iconColor: '#6366F1',
      bgColor: 'rgba(99, 102, 241, 0.1)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
        </svg>
      )
    }
  ]

  return (
    <section className="logo-slider">
      <div className="container">
        <div className="row mb-3">
          <div className="col-12 text-center">
            <div className="trusted-by-header">
              <h2 className="display-4 fw-bold mb-3 trusted-by-title">
                Trusted by <span className="gradient-text">leading brands</span> worldwide
              </h2>
              <p className="lead text-muted">Join thousands of companies protecting their ad campaigns</p>
            </div>
          </div>
        </div>
        <div 
          ref={containerRef}
          className="trusted-by-slider-wrapper"
        >
          <div 
            ref={sliderRef}
            className="trusted-by-slider"
          >
            {[...companies, ...companies].map((company, index) => (
              <div 
                key={index} 
                className="trusted-by-card"
              >
                <div 
                  className="trusted-by-icon-wrapper"
                  style={{
                    background: company.bgColor
                  }}
                >
                  <span 
                    className="trusted-by-company-icon"
                    style={{
                      color: company.iconColor
                    }}
                  >
                    {company.icon}
                  </span>
                </div>
                <div className="trusted-by-company-name">{company.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

