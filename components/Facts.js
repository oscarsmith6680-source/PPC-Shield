import { useRef } from 'react'

export default function Facts() {
  const sectionRef = useRef(null)

  const facts = [
    {
      number: '10K+',
      label: 'Active Users',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" fill="currentColor"/>
          <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" fill="currentColor"/>
          <path d="M20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7Z" fill="currentColor"/>
          <path d="M17 13C14.2386 13 12 15.2386 12 18H22C22 15.2386 19.7614 13 17 13Z" fill="currentColor"/>
          <path d="M10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7Z" fill="currentColor"/>
          <path d="M7 13C4.23858 13 2 15.2386 2 18H12C12 15.2386 9.76142 13 7 13Z" fill="currentColor"/>
        </svg>
      ),
      bgColor: 'rgba(35, 110, 232, 0.1)',
      iconColor: '#236EE8'
    },
    {
      number: '99.9%',
      label: 'Uptime',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
        </svg>
      ),
      bgColor: 'rgba(34, 197, 94, 0.1)',
      iconColor: '#22C55E'
    },
    {
      number: '24/7',
      label: 'Support',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
        </svg>
      ),
      bgColor: 'rgba(249, 115, 22, 0.1)',
      iconColor: '#F97316'
    },
    {
      number: '500K+',
      label: 'Clicks Protected',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 7V10C4 15.55 7.16 20.74 12 22C16.84 20.74 20 15.55 20 10V7L12 2Z" fill="currentColor"/>
        </svg>
      ),
      bgColor: 'rgba(168, 85, 247, 0.1)',
      iconColor: '#A855F7'
    }
  ]

  return (
    <section id="facts" className="section section-alt facts-section" ref={sectionRef}>
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 fw-bold mb-3">
              Key <span className="gradient-text">Statistics</span>
            </h2>
            <p className="lead text-muted">
              Trusted by thousands of businesses worldwide. See why companies choose PPC Shield.
            </p>
          </div>
        </div>
        <div className="row">
          {facts.map((fact, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="fact-card">
                <div 
                  className="fact-icon-wrapper"
                  style={{
                    background: fact.bgColor,
                    color: fact.iconColor
                  }}
                >
                  {fact.icon}
                </div>
                <div className="fact-content">
                  <h3 className="fact-number">{fact.number}</h3>
                  <p className="fact-label">{fact.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

