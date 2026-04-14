import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - PPC Shield</title>
        <meta name="description" content="PPC Shield Terms of Service - Read our terms and conditions for using our click fraud protection service." />
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
                <span className="gradient-text">Terms of Service</span>
              </h1>
              <p className="hero-subtitle">
                Please read these terms carefully before using our service. By using PPC Shield, you agree to be bound by these terms.
              </p>
              <p className="text-muted small">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="hero-frame-visual">
                <div className="hero-frame-outer">
                  <div className="hero-frame-inner">
                    <Image 
                      src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Terms of Service"
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
                  <h2 className="policy-heading">1. Acceptance of Terms</h2>
                  <p className="policy-text">
                    By accessing and using PPC Shield, you accept and agree to be bound by the terms and 
                    provision of this agreement. If you do not agree to these terms, please do not use our service.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">2. Description of Service</h2>
                  <p className="policy-text">
                    PPC Shield provides click fraud protection and detection services for pay-per-click 
                    advertising campaigns. Our service includes real-time monitoring, fraud detection, 
                    analytics, and reporting features.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">3. User Accounts</h2>
                  <p className="policy-text">
                    To use our service, you must create an account. You are responsible for:
                  </p>
                  <ul className="policy-list">
                    <li>Maintaining the confidentiality of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Providing accurate and complete information</li>
                    <li>Notifying us immediately of any unauthorized use</li>
                  </ul>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">4. Payment Terms</h2>
                  <p className="policy-text">
                    Subscription fees are billed in advance on a monthly or annual basis. All fees are 
                    non-refundable except as required by law or as stated in our Refund Policy. You are 
                    responsible for any taxes applicable to your use of our service.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">5. Service Availability</h2>
                  <p className="policy-text">
                    We strive to maintain high availability of our service but do not guarantee uninterrupted 
                    access. We may perform maintenance, updates, or modifications that may temporarily 
                    interrupt service availability.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">6. User Responsibilities</h2>
                  <p className="policy-text">
                    You agree to:
                  </p>
                  <ul className="policy-list">
                    <li>Use the service only for lawful purposes</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Not interfere with or disrupt the service</li>
                    <li>Not use the service to violate any laws or regulations</li>
                    <li>Comply with all applicable terms and conditions</li>
                  </ul>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">7. Intellectual Property</h2>
                  <p className="policy-text">
                    All content, features, and functionality of the service are owned by PPC Shield and 
                    are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">8. Limitation of Liability</h2>
                  <p className="policy-text">
                    To the maximum extent permitted by law, PPC Shield shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
                    whether incurred directly or indirectly.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">9. Termination</h2>
                  <p className="policy-text">
                    We may terminate or suspend your account and access to the service immediately, without 
                    prior notice, for any breach of these Terms of Service. You may cancel your subscription 
                    at any time through your account settings.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">10. Changes to Terms</h2>
                  <p className="policy-text">
                    We reserve the right to modify these terms at any time. We will notify users of any 
                    material changes. Your continued use of the service after changes constitutes acceptance 
                    of the new terms.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">11. Governing Law</h2>
                  <p className="policy-text">
                    These terms shall be governed by and construed in accordance with the laws of the 
                    jurisdiction in which PPC Shield operates, without regard to its conflict of law provisions.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-heading">12. Contact Information</h2>
                  <p className="policy-text">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="policy-contact-info">
                    <p><strong>Email:</strong> legal@ppcshield.com</p>
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

