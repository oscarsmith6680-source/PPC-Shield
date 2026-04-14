import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

export default function AboutPage() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      let target = e.target
      while (target && target !== document.body) {
        if (target.tagName === 'A') {
          const href = target.getAttribute('href')
          if (href && href.startsWith('#')) {
            e.preventDefault()
            const targetId = href.substring(1)
            const targetElement = document.getElementById(targetId)
            if (targetElement) {
              const offset = 80
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
        <title>About Us - PPC Shield | Protecting Your Digital Investments</title>
        <meta name="description" content="Learn about PPC Shield's mission to eliminate click fraud and protect your advertising investments. Discover our story, values, and commitment to excellence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      <About />
      <CTABanner />
      <Footer />
    </>
  )
}

