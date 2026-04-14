import { useEffect, useRef } from 'react'

export default function FAQ() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // FAQ items are visible by default
  }, [])

  const faqs = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
          <path d="M9 9H11V7H9V9ZM13 9H15V7H13V9ZM9 13H11V11H9V13ZM13 13H15V11H13V13ZM9 17H11V15H9V17ZM13 17H15V15H13V17Z" fill="currentColor"/>
          <circle cx="7" cy="7" r="1.5" fill="currentColor"/>
          <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
        </svg>
      ),
      question: 'How does PPC Shield detect fraudulent clicks?',
      answer: 'PPC Shield uses advanced machine learning algorithms that analyze click patterns, IP addresses, device fingerprints, behavioral data, and geographic information in real-time. Our AI continuously learns and adapts to identify new fraud patterns, ensuring comprehensive protection against both known and emerging threats.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 5V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V5L12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
        </svg>
      ),
      question: 'Will PPC Shield affect my legitimate traffic?',
      answer: 'No. Our sophisticated detection system is specifically designed to distinguish between legitimate users and fraudulent activity. We use multiple verification layers and machine learning to ensure that only invalid clicks are blocked, preserving your genuine traffic and conversions.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
        </svg>
      ),
      question: 'How quickly can I get started?',
      answer: 'Setup takes just minutes. Simply create your account, connect your advertising platforms, and add our tracking code. Our system will immediately begin monitoring and protecting your campaigns. No technical expertise required.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM8 13H16V11H8V13ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12C20.1 13.71 18.71 15.1 17 15.1H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7Z" fill="currentColor"/>
        </svg>
      ),
      question: 'Which advertising platforms does PPC Shield support?',
      answer: 'PPC Shield integrates with all major advertising platforms including Google Ads, Microsoft Advertising, Facebook Ads, and more. Our universal tracking solution works across any platform where you run PPC campaigns.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 10.73 8.2 11.96 11 12.71C13.5 13.36 14.2 14.1 14.2 15.1C14.2 16.35 13.17 17.1 11.5 17.1C9.5 17.1 8.7 16.2 8.5 15H6.32C6.5 17.18 8.22 18.5 10 18.84V21H13V18.85C14.95 18.5 16.5 17.35 16.5 15.3C16.5 13.1 14.7 11.85 11.8 10.9Z" fill="currentColor"/>
        </svg>
      ),
      question: 'What kind of savings can I expect?',
      answer: 'Most customers see a reduction in wasted ad spend of 20-40% within the first month. The exact savings depend on your current fraud levels, but our analytics dashboard will show you exactly how much you\'re saving in real-time.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6H17.82C17.4 4.84 16.3 4 15 4C13.7 4 12.6 4.84 12.18 6H4C2.9 6 2 6.9 2 8V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V8C22 6.9 21.1 6 20 6ZM15 6C15.55 6 16 6.45 16 7C16 7.55 15.55 8 15 8C14.45 8 14 7.55 14 7C14 6.45 14.45 6 15 6ZM20 19H4V17H20V19ZM20 15H4V13H20V15ZM20 11H4V9H20V11Z" fill="currentColor"/>
        </svg>
      ),
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can see the protection in action and review detailed analytics before making any commitment.'
    }
  ]

  return (
    <section id="faq" className="section section-alt faq-section" ref={sectionRef}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 fw-bold mb-3">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="lead text-muted">
              Everything you need to know about PPC Shield protection
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <div className="accordion faq-accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    className="faq-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#faq${index}`}
                    aria-expanded={index === 0 ? 'true' : 'false'}
                    aria-controls={`faq${index}`}
                  >
                    <div className="faq-question-content">
                      <div className="faq-icon-box">
                        {faq.icon}
                      </div>
                      <span className="faq-question">{faq.question}</span>
                    </div>
                    <span className="faq-arrow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq${index}`}
                    className={`collapse ${index === 0 ? 'show' : ''}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

