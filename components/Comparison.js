import { useEffect, useRef } from 'react'

export default function Comparison() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Table is visible by default
  }, [])

  const comparisonData = [
    {
      metric: 'Invalid Click Detection',
      without: { 
        text: 'Manual Review', 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ), 
        type: 'danger' 
      },
      with: { 
        text: 'Real-Time AI Detection', 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ), 
        type: 'success' 
      }
    },
    {
      metric: 'Wasted Ad Spend',
      without: { 
        text: 'Up to 30%', 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 10V3H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ), 
        type: 'danger' 
      },
      with: { 
        text: 'Less than 2%', 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21V3H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 8L12 13L16 9L21 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 14V21H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ), 
        type: 'success' 
      }
    },
    {
      metric: 'Response Time',
      without: { 
        text: 'Days to weeks', 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ), 
        type: 'danger' 
      },
      with: { 
        text: 'Instant blocking', 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
          </svg>
        ), 
        type: 'success' 
      }
    },
    {
      metric: 'Campaign ROI',
      without: { 
        text: 'Reduced by fraud', 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 10V3H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ), 
        type: 'danger' 
      },
      with: { 
        text: 'Optimized & protected', 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
          </svg>
        ), 
        type: 'success' 
      }
    },
    {
      metric: 'Threat Intelligence',
      without: { 
        text: 'Limited visibility', 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          </svg>
        ), 
        type: 'danger' 
      },
      with: { 
        text: 'Comprehensive analytics', 
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 16H7.01M12 12H12.01M17 8H17.01M7 12H7.01M12 8H12.01M17 16H17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ), 
        type: 'success' 
      }
    }
  ]

  return (
    <section className="section section-alt comparison-section" ref={sectionRef}>
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 fw-bold mb-3">
              See the <span className="gradient-text">Difference</span>
            </h2>
            <p className="lead text-muted">
              Compare how PPC Shield protects your campaigns versus going unprotected. 
              Make an informed decision for your business.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="comparison-table-enhanced">
              <div className="comparison-header">
                <div className="comparison-header-cell metric-header">
                  <span className="header-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span>Metric</span>
                </div>
                <div className="comparison-header-cell without-header">
                  <span className="header-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Without PPC Shield</span>
                </div>
                <div className="comparison-header-cell with-header">
                  <span className="header-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>With PPC Shield</span>
                </div>
              </div>
              <div className="comparison-body">
                {comparisonData.map((item, index) => (
                  <div key={index} className="comparison-row">
                    <div className="comparison-cell metric-cell">
                      <span className="metric-icon">•</span>
                      <span className="metric-text">{item.metric}</span>
                    </div>
                    <div
                      className={`comparison-cell without-cell ${item.without.type}`}
                      data-metric={item.metric}
                    >
                      <div className="cell-content">
                        <span className="cell-icon">{item.without.icon}</span>
                        <span className="cell-text">{item.without.text}</span>
                      </div>
                    </div>
                    <div
                      className={`comparison-cell with-cell ${item.with.type}`}
                      data-metric={item.metric}
                    >
                      <div className="cell-content">
                        <span className="cell-icon">{item.with.icon}</span>
                        <span className="cell-text">{item.with.text}</span>
                      </div>
                      <div className="success-badge">Best Choice</div>
                    </div>
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

