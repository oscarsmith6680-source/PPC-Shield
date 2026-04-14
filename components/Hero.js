"use client";
import { useEffect, useRef, useState } from 'react'
import { createPath } from '../lib/paths'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useRef(null)
  const [basePath, setBasePath] = useState("")

  useEffect(() => {
    // Get basePath on client side
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const bp = path.startsWith("/ppc-shield") ? "/ppc-shield" : "";
      setBasePath(bp);
    }
  }, [])

  return (
    <section id="home" className={`${styles.homeHero} home-hero`} ref={heroRef}>
      <div className={styles.homeHeroBg} aria-hidden="true">
        <div className={styles.homeHeroMesh} />
        <div className={styles.homeHeroGrain} />
        <div className={`${styles.homeHeroOrb} ${styles.homeHeroOrb1}`} />
        <div className={`${styles.homeHeroOrb} ${styles.homeHeroOrb2}`} />
      </div>
      <div className={`container ${styles.homeHeroInner}`}>
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6">
            <div className={styles.homeHeroCopy}>
              <h1 className="hero-title">
                Protect Your Ads From<br />
                <span className="gradient-text">Fake Clicks</span>
              </h1>
              <p className={styles.homeHeroSubtitle}>
                Advanced click fraud protection that shields your PPC campaigns from invalid traffic, 
                saving you thousands in wasted ad spend while maximizing your ROI.
              </p>
              <div className={`d-flex flex-wrap gap-3 ${styles.homeHeroCtas}`}>
                <a
                  href={createPath("contact", basePath)}
                  className="btn btn-gradient pulse"
                >
                  Connect With Experts
                </a>
                <a href="#features" className="btn btn-gradient-outline">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-frame-visual">
              <div className="hero-frame-outer">
                <div className="hero-frame-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                    alt="PPC Shield - Click Fraud Protection"
                    className="hero-frame-img"
                    loading="eager"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1551288049-8a33f3800f7f?w=800&h=600&fit=crop';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
