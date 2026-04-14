import { useEffect } from 'react'

export default function Testimonials() {
  useEffect(() => {
    const initCarousel = async () => {
      const bootstrap = await import('bootstrap')
      const carousel = document.querySelector('#testimonialsCarousel')
      if (carousel && typeof bootstrap.Carousel !== 'undefined') {
        new bootstrap.Carousel(carousel, {
          interval: 5000,
          ride: 'carousel',
          wrap: true
        })
      }
    }
    initCarousel()
  }, [])

  const testimonials = [
    {
      name: 'Sarah Chen',
      avatar: 'SC',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80',
      icon: '💼',
      rating: 5,
      text: 'PPC Shield has transformed our advertising efficiency. We\'ve reduced wasted spend by 85% and our ROI has improved dramatically. The real-time protection is incredible.',
      stats: '85% Reduction'
    },
    {
      name: 'Michael Rodriguez',
      avatar: 'MR',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
      icon: '🚀',
      rating: 5,
      text: 'The best investment we\'ve made in our PPC campaigns. The AI detection catches fraud we never would have noticed, and the setup took less than 10 minutes.',
      stats: '10 Min Setup'
    },
    {
      name: 'Emily Johnson',
      avatar: 'EJ',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80',
      icon: '📈',
      rating: 5,
      text: 'Finally, a solution that actually works. Our click fraud issues disappeared overnight, and we\'re saving thousands every month. Highly recommend to any serious advertiser.',
      stats: 'Thousands Saved'
    },
    {
      name: 'David Kim',
      avatar: 'DK',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80',
      icon: '🎯',
      rating: 5,
      text: 'Outstanding platform! The automated blocking feature saves us hours every week. Our campaign performance has never been better since implementing PPC Shield.',
      stats: '99% Accuracy'
    },
    {
      name: 'Lisa Anderson',
      avatar: 'LA',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80',
      icon: '⭐',
      rating: 5,
      text: 'Game changer for our agency! We manage multiple client accounts and PPC Shield provides the protection we need. The reporting dashboard is incredibly detailed.',
      stats: '50+ Clients'
    },
    {
      name: 'James Wilson',
      avatar: 'JW',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80',
      icon: '🔥',
      rating: 5,
      text: 'PPC Shield is essential for any serious advertiser. The real-time blocking has saved us over $50K in fraudulent clicks. The ROI is incredible and the support team is top-notch.',
      stats: '$50K Saved'
    }
  ]

  // Group testimonials into slides of 2
  const slides = []
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2))
  }

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 fw-bold mb-3">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="lead text-muted">
              See what our customers say about protecting their campaigns with PPC Shield. 
              Join thousands of satisfied businesses.
            </p>
          </div>
        </div>
        <div className="testimonials-slider-wrapper">
          <div id="testimonialsCarousel" className="carousel slide testimonials-carousel-enhanced" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner">
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}>
                  <div className="row g-4">
                    {slide.map((testimonial, index) => (
                      <div key={index} className="col-lg-6 col-md-6">
                        <div className="testimonial-card-modern">
                          <div className="testimonial-quote-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 21C3 17.4 5.4 15 9 15C12.6 15 15 17.4 15 21V22H3V21ZM15 8C15 11.6 12.6 14 9 14C5.4 14 3 11.6 3 8C3 4.4 5.4 2 9 2C12.6 2 15 4.4 15 8ZM21 21C21 17.4 23.4 15 27 15C30.6 15 33 17.4 33 21V22H21V21ZM33 8C33 11.6 30.6 14 27 14C23.4 14 21 11.6 21 8C21 4.4 23.4 2 27 2C30.6 2 33 4.4 33 8Z" fill="currentColor" opacity="0.1"/>
                            </svg>
                          </div>
                          <div className="testimonial-rating-top">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i} className="star-filled">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                                </svg>
                              </span>
                            ))}
                          </div>
                          <p className="testimonial-text-modern">{testimonial.text}</p>
                          <div className="testimonial-author-modern">
                            <div className="testimonial-avatar-modern">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="avatar-image-modern"
                                onError={(e) => {
                                  e.target.style.display = 'none'
                                  const initials = e.target.nextElementSibling
                                  if (initials) {
                                    initials.style.display = 'flex'
                                  }
                                }}
                              />
                              <span className="avatar-initials-modern" style={{ display: 'none' }}>{testimonial.avatar}</span>
                            </div>
                            <div className="testimonial-info">
                              <h6 className="testimonial-name-modern">{testimonial.name}</h6>
                            </div>
                          </div>
                          <div className="testimonial-badge-modern">
                            <span className="badge-icon">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                            <span className="badge-text">{testimonial.stats}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev testimonials-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next testimonials-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-indicators testimonials-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#testimonialsCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

