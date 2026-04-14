import { useRef } from 'react'

export default function Reviews() {
  const sectionRef = useRef(null)

  const reviews = [
    {
      name: 'Sarah Chen',
      avatar: 'SC',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80',
      rating: 5,
      text: 'PPC Shield has transformed our advertising efficiency. We\'ve reduced wasted spend by 85% and our ROI has improved dramatically. The real-time protection is incredible and the dashboard provides insights we never had before.',
      date: '2 weeks ago',
      verified: true
    },
    {
      name: 'Michael Rodriguez',
      avatar: 'MR',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
      rating: 5,
      text: 'The best investment we\'ve made in our PPC campaigns. The AI detection catches fraud we never would have noticed, and the setup took less than 10 minutes. Customer support is outstanding.',
      date: '1 month ago',
      verified: true
    },
    {
      name: 'Emily Johnson',
      avatar: 'EJ',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80',
      rating: 5,
      text: 'Finally, a solution that actually works. Our click fraud issues disappeared overnight, and we\'re saving thousands every month. Highly recommend to any serious advertiser looking to protect their budget.',
      date: '3 weeks ago',
      verified: true
    },
    {
      name: 'David Kim',
      avatar: 'DK',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80',
      rating: 5,
      text: 'Outstanding platform! The automated blocking feature saves us hours every week. Our campaign performance has never been better since implementing PPC Shield. The analytics are comprehensive.',
      date: '1 month ago',
      verified: true
    },
    {
      name: 'Lisa Anderson',
      avatar: 'LA',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80',
      rating: 5,
      text: 'Game changer for our agency! We manage multiple client accounts and PPC Shield provides the protection we need. The reporting dashboard is incredibly detailed and our clients love the transparency.',
      date: '2 months ago',
      verified: true
    },
    {
      name: 'James Wilson',
      avatar: 'JW',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80',
      rating: 5,
      text: 'PPC Shield is essential for any serious advertiser. The real-time blocking has saved us over $50K in fraudulent clicks. The ROI is incredible and the support team is top-notch. Worth every penny.',
      date: '1 week ago',
      verified: true
    },
    {
      name: 'Rachel Martinez',
      avatar: 'RM',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80',
      rating: 5,
      text: 'We\'ve seen a 40% improvement in our ad performance since using PPC Shield. The fraud detection is spot-on and the interface is so easy to use. Our team can focus on strategy instead of monitoring.',
      date: '3 weeks ago',
      verified: true
    },
    {
      name: 'Thomas Brown',
      avatar: 'TB',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&q=80',
      rating: 5,
      text: 'Best tool we\'ve added to our marketing stack. The integration was seamless and we started seeing results immediately. The cost savings alone paid for the subscription in the first month.',
      date: '2 months ago',
      verified: true
    },
    {
      name: 'Amanda Taylor',
      avatar: 'AT',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80',
      rating: 5,
      text: 'Incredible platform! The real-time alerts help us respond quickly to threats. We\'ve blocked thousands of fraudulent clicks and our conversion rates have improved significantly.',
      date: '1 month ago',
      verified: true
    }
  ]

  return (
    <section id="reviews" className="reviews-section section" ref={sectionRef}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 fw-bold mb-3">
              Customer <span className="gradient-text">Reviews</span>
            </h2>
            <p className="lead text-muted">
              See what our customers are saying about PPC Shield. Real reviews from real businesses protecting their advertising campaigns.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {reviews.map((review, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="review-card">
                <div className="review-card-header">
                  <div className="review-author-info">
                    <div className="review-avatar">
                      <img 
                        src={review.image} 
                        alt={review.name}
                        className="review-avatar-image"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          const initials = e.target.nextElementSibling
                          if (initials) {
                            initials.style.display = 'flex'
                          }
                        }}
                      />
                      <span className="review-avatar-initials" style={{ display: 'none' }}>{review.avatar}</span>
                    </div>
                    <div className="review-author-details">
                      <h6 className="review-name">{review.name}</h6>
                    </div>
                  </div>
                  {review.verified && (
                    <div className="review-verified-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="review-star">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                    </span>
                  ))}
                </div>
                <p className="review-text">{review.text}</p>
                <div className="review-footer">
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

