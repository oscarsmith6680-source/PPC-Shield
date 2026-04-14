import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - PPC Shield</title>
        <meta name="description" content="PPC Shield Privacy Policy - Learn how we collect, use, and protect your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      <section className="hero-section">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content">
              <h1 className="hero-title">
                <span className="gradient-text">Privacy Policy</span>
              </h1>
              <p className="hero-subtitle">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
              <p className="text-muted small">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="hero-frame-visual">
                <div className="hero-frame-outer">
                  <div className="hero-frame-inner">
                    <Image 
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Privacy Policy"
                      width={800}
                      height={600}
                      className="hero-frame-img"
                      unoptimized
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section policy-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="policy-content">
                <div className="policy-section-item">
                  <h2 className="policy-heading">1. Information We Collect</h2>
                  <p className="policy-text">
                    We collect information that you provide directly to us when you register for our service, 
                    contact us, or use our platform. This may include:
                  </p>
                  <ul className="policy-list">
                    <li>Name, email address, and contact information</li>
                    <li>Payment and billing information</li>
                    <li>Account credentials and preferences</li>
                    <li>Usage data and analytics information</li>
                    <li>Communication records and support interactions</li>
                  </ul>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">2. How We Use Your Information</h2>
                  <p className="policy-text">
                    We use the information we collect to:
                  </p>
                  <ul className="policy-list">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect, prevent, and address technical issues</li>
                  </ul>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">3. Information Sharing</h2>
                  <p className="policy-text">
                    We do not sell, trade, or rent your personal information to third parties. We may share 
                    your information only in the following circumstances:
                  </p>
                  <ul className="policy-list">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>With service providers who assist in our operations</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">4. Data Security</h2>
                  <p className="policy-text">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction. However, 
                    no method of transmission over the Internet is 100% secure.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">5. Your Rights</h2>
                  <p className="policy-text">
                    You have the right to:
                  </p>
                  <ul className="policy-list">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Rectify inaccurate or incomplete information</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Request restriction of processing</li>
                    <li>Data portability</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">6. Cookies and Tracking</h2>
                  <p className="policy-text">
                    We use cookies and similar tracking technologies to track activity on our service and 
                    hold certain information. You can instruct your browser to refuse all cookies or to 
                    indicate when a cookie is being sent.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">7. Third-Party Links</h2>
                  <p className="policy-text">
                    Our service may contain links to third-party websites. We are not responsible for the 
                    privacy practices of these external sites. We encourage you to review their privacy policies.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">8. Children's Privacy</h2>
                  <p className="policy-text">
                    Our service is not intended for children under 13 years of age. We do not knowingly 
                    collect personal information from children under 13.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">9. Changes to This Policy</h2>
                  <p className="policy-text">
                    We may update our Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">10. Contact Us</h2>
                  <p className="policy-text">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="policy-contact-info">
                    <p><strong>Email:</strong> privacy@ppcshield.com</p>
                    <p><strong>Address:</strong> 123 Business St, Suite 100, New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

