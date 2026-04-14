import '../styles/globals.css'
import { useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Load Bootstrap JS asynchronously (non-blocking)
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    
    // Global IntersectionObserver for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const observeAnimated = () => {
      document.querySelectorAll('.fade-in-animate, .slide-up-animate').forEach((el) => {
        observer.observe(el)
      })
    }

    observeAnimated()

    const onRouteComplete = () => {
      observeAnimated()
    }

    Router.events.on('routeChangeComplete', onRouteComplete)

    return () => {
      observer.disconnect()
      Router.events.off('routeChangeComplete', onRouteComplete)
      // Cleanup script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
