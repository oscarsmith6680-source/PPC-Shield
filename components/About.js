import { useEffect, useState } from 'react'
import { createPath } from '../lib/paths'

export default function About() {
  const [animatedFacts, setAnimatedFacts] = useState({})
  const [basePath, setBasePath] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      setBasePath(path.startsWith('/ppc-shield') ? '/ppc-shield' : '')
    }
  }, [])

  useEffect(() => {
    // Counter animation for facts
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    }

    const animateCounter = (element, targetValue) => {
      const numberElement = element.querySelector('.about-fact-number')
      if (!numberElement) return

      const isPercentage = targetValue.includes('%')
      const isDollar = targetValue.includes('$')
      const isPlus = targetValue.includes('+')
      const isSlash = targetValue.includes('/')
      
      let numericValue = parseFloat(targetValue.replace(/[^0-9.]/g, ''))
      const suffix = targetValue.replace(/[0-9.]/g, '')
      
      if (isNaN(numericValue)) {
        numberElement.textContent = targetValue
        return
      }

      const duration = 2000
      const startTime = Date.now()
      const startValue = 0

      const updateCounter = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        
        const currentValue = startValue + (numericValue - startValue) * easeOutQuart
        
        if (isPercentage) {
          numberElement.textContent = currentValue.toFixed(1) + '%'
        } else if (isDollar) {
          numberElement.textContent = '$' + Math.floor(currentValue) + 'M' + suffix.replace('M', '')
        } else if (isSlash) {
          numberElement.textContent = targetValue // Keep original for 24/7
        } else {
          numberElement.textContent = Math.floor(currentValue) + suffix
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        } else {
          numberElement.textContent = targetValue
        }
      }

      updateCounter()
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedFacts[entry.target.dataset.index]) {
          const factIndex = parseInt(entry.target.dataset.index)
          const factCards = document.querySelectorAll('.about-fact-card')
          const factData = Array.from(factCards).map(card => {
            const label = card.querySelector('.about-fact-label')?.textContent || ''
            const number = card.querySelector('.about-fact-number')?.textContent || '0'
            return { number, label }
          })
          
          if (factData[factIndex]) {
            // Get the actual target value from facts array
            const factsData = [
              { number: '10M+', label: 'Clicks Protected' },
              { number: '50K+', label: 'Active Campaigns' },
              { number: '$500M+', label: 'Ad Spend Protected' },
              { number: '99.9%', label: 'Uptime Guarantee' },
              { number: '24/7', label: 'Support Available' },
              { number: '150+', label: 'Countries Served' }
            ]
            
            if (factsData[factIndex]) {
              animateCounter(entry.target, factsData[factIndex].number)
              setAnimatedFacts(prev => ({ ...prev, [factIndex]: true }))
            }
          }
        }
      })
    }, observerOptions)

    const factCards = document.querySelectorAll('.about-fact-card')
    factCards.forEach((card) => {
      observer.observe(card)
    })

    return () => {
      factCards.forEach(card => observer.unobserve(card))
    }
  }, [animatedFacts])

  const animateCounter = (element, targetValue, index) => {
    const numberElement = element.querySelector('.about-fact-number')
    if (!numberElement) return

    const isPercentage = targetValue.includes('%')
    const isDollar = targetValue.includes('$')
    const isPlus = targetValue.includes('+')
    const isSlash = targetValue.includes('/')
    
    let numericValue = parseFloat(targetValue.replace(/[^0-9.]/g, ''))
    const suffix = targetValue.replace(/[0-9.]/g, '')
    
    if (isNaN(numericValue)) return

    const duration = 2000
    const startTime = Date.now()
    const startValue = 0

    const updateCounter = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      const currentValue = startValue + (numericValue - startValue) * easeOutQuart
      
      if (isPercentage) {
        numberElement.textContent = currentValue.toFixed(1) + '%'
      } else if (isDollar) {
        numberElement.textContent = '$' + Math.floor(currentValue) + 'M' + suffix.replace('M', '')
      } else if (isSlash) {
        numberElement.textContent = targetValue // Keep original for 24/7
      } else {
        numberElement.textContent = Math.floor(currentValue) + suffix
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        numberElement.textContent = targetValue
      }
    }

    updateCounter()
  }

  const values = [
    {
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 7V10C4 15.55 7.16 20.74 12 22C16.84 20.74 20 15.55 20 10V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Security First',
      description: 'Your data and campaigns are protected with enterprise-grade security measures and encryption protocols.',
      color: '#236EE8',
      gradient: 'linear-gradient(135deg, rgba(35, 110, 232, 0.15) 0%, rgba(35, 110, 232, 0.05) 100%)'
    },
    {
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 8L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 8L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Innovation',
      description: 'Continuously evolving our technology with AI and machine learning to stay ahead of fraud patterns.',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 100%)'
    },
    {
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M12 6V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12L12 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Transparency',
      description: 'Clear reporting and honest communication about what we detect and block in your campaigns.',
      color: '#14C0FF',
      gradient: 'linear-gradient(135deg, rgba(20, 192, 255, 0.15) 0%, rgba(20, 192, 255, 0.05) 100%)'
    },
    {
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Excellence',
      description: 'Committed to delivering the highest quality protection and service with 99.9% uptime guarantee.',
      color: '#FF6B35',
      gradient: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, rgba(255, 107, 53, 0.05) 100%)'
    }
  ]

  const timeline = [
    {
      year: '2020',
      title: 'Founded',
      description: 'PPC Shield was born from a vision to protect advertisers from click fraud.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.19 6.38C10.07 5.82 11.27 5.5 12.5 5.5C16.64 5.5 20 8.86 20 13C20 17.14 16.64 20.5 12.5 20.5C8.36 20.5 5 17.14 5 13C5 10.36 6.67 8.11 9.19 6.38ZM11.5 2L13.5 8.5L11.5 9.5L13.5 15L11.5 16L9.5 9.5L11.5 8.5L9.5 2H11.5Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      year: '2021',
      title: 'AI Integration',
      description: 'Launched our AI-powered detection system, revolutionizing fraud prevention.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6ZM12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded services to protect campaigns across 50+ countries worldwide.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17.93C13.5 17.8 13.9 17.5 14.1 17.1C14.3 16.7 14.3 16.2 14.1 15.8L12.5 12.5L15.5 10.9C15.9 10.7 16.2 10.3 16.3 9.8C16.4 9.3 16.2 8.8 15.8 8.5L12.8 6.3C12.4 6.1 11.9 6.1 11.5 6.3C11.1 6.5 10.8 6.9 10.7 7.4L10.1 10.4L7.1 11.9C6.7 12.1 6.4 12.5 6.3 13C6.2 13.5 6.4 14 6.8 14.3L9.8 16.5C10.2 16.7 10.7 16.7 11.1 16.5C11.5 16.3 11.8 15.9 11.9 15.4L12.5 12.4L13 17.93Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      year: '2023',
      title: 'Industry Leader',
      description: 'Recognized as the top click fraud protection platform by industry experts.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 5H17V3H7V5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.72 12.74 7 13.24V19H17V13.24C19.28 12.74 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8ZM12 13C10.9 13 10 12.1 10 11C10 9.9 10.9 9 12 9C13.1 9 14 9.9 14 11C14 12.1 13.1 13 12 13Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      year: '2024',
      title: 'Innovation Continues',
      description: 'Launching next-generation real-time protection with advanced machine learning.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
          <path d="M19 11L20.09 13.26L22 14L20.09 14.74L19 17L17.91 14.74L16 14L17.91 13.26L19 11Z" fill="currentColor"/>
          <path d="M5 15L6.09 17.26L8 18L6.09 18.74L5 21L3.91 18.74L2 18L3.91 17.26L5 15Z" fill="currentColor"/>
        </svg>
      )
    }
  ]

  const facts = [
    { 
      number: '10M+', 
      label: 'Clicks Protected', 
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 7V10C4 15.55 7.16 20.74 12 22C16.84 20.74 20 15.55 20 10V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: 'rgba(35, 110, 232, 0.15)',
      iconColor: '#236EE8'
    },
    { 
      number: '50K+', 
      label: 'Active Campaigns', 
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21V3H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 13H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: 'rgba(139, 92, 246, 0.15)',
      iconColor: '#8B5CF6'
    },
    { 
      number: '$500M+', 
      label: 'Ad Spend Protected', 
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M15 15C15 16.66 13.66 18 12 18C10.34 18 9 16.66 9 15C9 13.34 10.34 12 12 12C13.66 12 15 13.34 15 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
      bgColor: 'rgba(34, 197, 94, 0.15)',
      iconColor: '#22C55E'
    },
    { 
      number: '99.9%', 
      label: 'Uptime Guarantee', 
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M13 2L3 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: 'rgba(249, 115, 22, 0.15)',
      iconColor: '#F97316'
    }
  ]

  return (
    <>
      {/* About Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-shapes">
          <div className="about-shape about-shape-1"></div>
          <div className="about-shape about-shape-2"></div>
          <div className="about-shape about-shape-3"></div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content">
              <h1 className="hero-title">
                Protecting Your<br />
                <span className="gradient-text">Digital Investments</span>
              </h1>
              <p className="hero-subtitle">
              We stop click fraud so your ads reach real customers.
              AI-powered protection you can trust.Used by advertisers worldwide.
              </p>
              <div className="d-flex flex-wrap gap-3 about-hero-ctas">
                <a
                  href={createPath('contact', basePath)}
                  className="btn btn-gradient pulse"
                >
                  Contact Us
                </a>
                <a href="#facts" className="btn btn-gradient-outline">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="hero-frame-visual">
                <div className="hero-frame-outer">
                  <div className="hero-frame-inner">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                      alt="PPC Shield Team"
                      className="hero-frame-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="mission-card">
                <div className="mission-icon">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="mission-title">Our Mission</h3>
                <p className="mission-description">
                  To empower advertisers worldwide by providing the most advanced click fraud protection, 
                  ensuring that every advertising dollar delivers real value and genuine engagement. 
                  We believe in a transparent, fraud-free digital advertising ecosystem.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="vision-card">
                <div className="vision-icon">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                    <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="vision-title">Our Vision</h3>
                <p className="vision-description">
                  To become the global standard for click fraud protection, setting new benchmarks in 
                  AI-powered detection and prevention. We envision a future where advertisers can invest 
                  confidently, knowing their campaigns are protected by the industry's most trusted shield.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="timeline-section section">
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-4 fw-bold mb-3">
                <span className="gradient-text">Our</span> Story
              </h2>
              <p className="lead text-muted">
                From a startup vision to industry leadership, here's how we've grown
              </p>
            </div>
          </div>
          <div className="timeline-container">
            {timeline.map((item, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                <div className="timeline-marker">
                  <div className="timeline-icon-wrapper">
                    <div className="timeline-icon">{item.icon}</div>
                  </div>
                  <div className="timeline-year">{item.year}</div>
                </div>
                <div className="timeline-content">
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section section">
        <div className="values-bg-shapes">
          <div className="value-shape value-shape-1"></div>
          <div className="value-shape value-shape-2"></div>
        </div>
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-4 fw-bold mb-3">
                Our <span className="gradient-text">Core Values</span>
              </h2>
              <p className="lead text-muted">
                The principles that guide everything we do
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {values.map((value, index) => (
              <div key={index} className="col-lg-6 col-md-6">
                <div className="value-card fade-in-animate">
                  <div className="value-card-inner">
                    <div className="value-icon-wrapper" style={{ color: value.color, background: value.gradient }}>
                      {value.icon}
                      <div className="value-icon-glow" style={{ background: value.color }}></div>
                    </div>
                    <h4 className="value-title">{value.title}</h4>
                    <p className="value-description">{value.description}</p>
                    <div className="value-accent-line" style={{ background: `linear-gradient(90deg, ${value.color} 0%, transparent 100%)` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section id="facts" className="about-facts-section section">
        <div className="about-facts-bg-shapes">
          <div className="fact-shape fact-shape-1"></div>
          <div className="fact-shape fact-shape-2"></div>
        </div>
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-4 fw-bold mb-3">
                Key <span className="gradient-text">Statistics</span>
              </h2>
              <p className="lead text-muted">
                Numbers that showcase our commitment to protecting your advertising investments
              </p>
            </div>
          </div>
          <div className="about-facts-grid">
            {facts.map((fact, index) => (
              <div key={index} className="about-fact-card fade-in-animate" data-index={index} data-target={fact.number}>
                <div 
                  className="about-fact-icon-wrapper"
                  style={{
                    background: fact.bgColor,
                    color: fact.iconColor
                  }}
                >
                  {fact.icon}
                </div>
                <div className="about-fact-content">
                  <h3 className="about-fact-number">0</h3>
                  <p className="about-fact-label">{fact.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-10 mx-auto text-center">
              <h2 className="display-4 fw-bold mb-3">
                Trusted by <span className="gradient-text">Industry Leaders</span>
              </h2>
              <p className="lead text-muted">
                We've earned the trust of thousands of advertisers, from startups to Fortune 500 companies, 
                by consistently delivering results that matter.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="why-feature-card">
                <div className="why-feature-icon-new">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 7V10C4 15.55 7.16 20.74 12 22C16.84 20.74 20 15.55 20 10V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h5 className="why-feature-title-new">AI-Powered Detection</h5>
                <p className="why-feature-desc-new">Advanced machine learning algorithms that adapt to new fraud patterns</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="why-feature-card">
                <div className="why-feature-icon-new">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <h5 className="why-feature-title-new">Real-Time Protection</h5>
                <p className="why-feature-desc-new">Block fraudulent clicks instantly before they impact your budget</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="why-feature-card">
                <div className="why-feature-icon-new">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V21H21V3H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h5 className="why-feature-title-new">Transparent Reporting</h5>
                <p className="why-feature-desc-new">Detailed insights into what we detect and how we protect you</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="why-feature-card">
                <div className="why-feature-icon-new">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h5 className="why-feature-title-new">24/7 Support</h5>
                <p className="why-feature-desc-new">Expert team ready to help you maximize your campaign performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

