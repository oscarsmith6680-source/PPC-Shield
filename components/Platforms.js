import { useRef } from 'react'

export default function Platforms() {
  const sectionRef = useRef(null)

  const platforms = [
    {
      name: 'Google Ads',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#4285F4"/>
          <path d="M24 12L18 24L24 36L30 24L24 12Z" fill="white"/>
          <path d="M12 24L18 12L24 24L18 36L12 24Z" fill="#EA4335"/>
          <path d="M36 24L30 12L24 24L30 36L36 24Z" fill="#34A853"/>
        </svg>
      ),
      color: '#4285F4'
    },
    {
      name: 'Microsoft Advertising',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#0078D4"/>
          <path d="M12 12H24V24H12V12Z" fill="#00A4EF"/>
          <path d="M24 12H36V24H24V12Z" fill="#FFB900"/>
          <path d="M12 24H24V36H12V24Z" fill="#00A4EF"/>
          <path d="M24 24H36V36H24V24Z" fill="#00A4EF"/>
        </svg>
      ),
      color: '#0078D4'
    },
    {
      name: 'Facebook Ads',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#1877F2"/>
          <path d="M24 12C17.373 12 12 17.373 12 24C12 29.302 15.581 33.838 20.5 35.292V27.5H17.5V24H20.5V21.5C20.5 18.462 22.462 16.5 25.5 16.5H28.5V20H26.5C25.395 20 24.5 20.895 24.5 22V24H28.5V27.5H24.5V35.292C29.419 33.838 33 29.302 33 24C33 17.373 27.627 12 24 12Z" fill="white"/>
        </svg>
      ),
      color: '#1877F2'
    },
    {
      name: 'Instagram Ads',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="url(#instagram-gradient)"/>
          <defs>
            <linearGradient id="instagram-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FCAF45"/>
              <stop offset="0.5" stopColor="#E1306C"/>
              <stop offset="1" stopColor="#C13584"/>
            </linearGradient>
          </defs>
          <path d="M24 16C19.582 16 16 19.582 16 24C16 28.418 19.582 32 24 32C28.418 32 32 28.418 32 24C32 19.582 28.418 16 24 16ZM24 29C21.239 29 19 26.761 19 24C19 21.239 21.239 19 24 19C26.761 19 29 21.239 29 24C29 26.761 26.761 29 24 29ZM30.5 18C29.672 18 29 17.328 29 16.5C29 15.672 29.672 15 30.5 15C31.328 15 32 15.672 32 16.5C32 17.328 31.328 18 30.5 18Z" fill="white"/>
        </svg>
      ),
      color: '#E1306C'
    },
    {
      name: 'LinkedIn Ads',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#0077B5"/>
          <path d="M16 20H20V32H16V20ZM18 18C16.895 18 16 17.105 16 16C16 14.895 16.895 14 18 14C19.105 14 20 14.895 20 16C20 17.105 19.105 18 18 18ZM22 20H26C26 18.343 27.343 17 29 17C30.657 17 32 18.343 32 20V32H28V21C28 20.448 27.552 20 27 20C26.448 20 26 20.448 26 21V32H22V20Z" fill="white"/>
        </svg>
      ),
      color: '#0077B5'
    },
    {
      name: 'Twitter Ads',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#000000"/>
          <path d="M24 14C18.477 14 14 18.477 14 24C14 29.523 18.477 34 24 34C29.523 34 34 29.523 34 24C34 18.477 29.523 14 24 14ZM28.5 20.5L26.5 22.5L28.5 24.5L26.5 26.5L24.5 24.5L22.5 26.5L20.5 24.5L22.5 22.5L20.5 20.5L22.5 18.5L24.5 20.5L26.5 18.5L28.5 20.5Z" fill="white"/>
        </svg>
      ),
      color: '#000000'
    },
    {
      name: 'Amazon Ads',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#FF9900"/>
          <path d="M24 12L18 18L24 24L30 18L24 12ZM18 24L12 18L18 12L24 18L18 24ZM30 24L24 18L30 12L36 18L30 24ZM24 30L18 24L24 18L30 24L24 30Z" fill="white"/>
        </svg>
      ),
      color: '#FF9900'
    },
    {
      name: 'TikTok Ads',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#000000"/>
          <path d="M24 14C18.477 14 14 18.477 14 24C14 29.523 18.477 34 24 34C29.523 34 34 29.523 34 24C34 18.477 29.523 14 24 14ZM26 22V24C26 25.657 24.657 27 23 27C21.343 27 20 25.657 20 24C20 22.343 21.343 21 23 21C23.351 21 23.688 21.062 24 21.17V19H26V22Z" fill="white"/>
        </svg>
      ),
      color: '#000000'
    }
  ]

  return (
    <section id="platforms" className="section section-alt platforms-section" ref={sectionRef}>
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 fw-bold mb-3">
              PPC Shield works with <span className="gradient-text">any platform</span>
            </h2>
            <p className="lead text-muted">
              Seamlessly integrate with all major advertising platforms. One solution to protect all your campaigns, 
              regardless of where you advertise.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {platforms.map((platform, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="platform-card">
                <div className="platform-icon-wrapper">
                  {platform.icon}
                </div>
                <h5 className="platform-name">{platform.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

