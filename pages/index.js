import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import Features from '../components/Features'
import Platforms from '../components/Platforms'
import HowItWorks from '../components/HowItWorks'
import Comparison from '../components/Comparison'
import Testimonials from '../components/Testimonials'
import Facts from '../components/Facts'
import CTABanner from '../components/CTABanner'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      let target = e.target
      // Check if clicked element or its parent is an anchor
      while (target && target !== document.body) {
        if (target.tagName === 'A') {
          const href = target.getAttribute('href')
          if (href && href.startsWith('#')) {
            e.preventDefault()
            const targetId = href.substring(1)
            const targetElement = document.getElementById(targetId)
            if (targetElement) {
              const offset = 80 // Navbar height
              const elementPosition = targetElement.getBoundingClientRect().top
              const offsetPosition = elementPosition + window.pageYOffset - offset

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              })
            }
            break
          }
        }
        target = target.parentElement
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <>
      <Head>
        <title>PPC Shield - Protect Your Ads From Fake Clicks</title>
        <meta name="description" content="Advanced click fraud protection that shields your PPC campaigns from invalid traffic, saving you thousands in wasted ad spend." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Facts />
      <Platforms />
      <HowItWorks />
      <Comparison />
      <Testimonials />
      <CTABanner />
      <FAQ />
      <Footer />
    </>
  )
}

