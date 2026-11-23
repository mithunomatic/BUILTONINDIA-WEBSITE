import { useEffect } from 'react'
import SiteHeader from './components/SiteHeader.jsx'
import HeroCarousel from './components/HeroCarousel.jsx'
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  PartnershipEnquirySection,
  PartnershipSection,
  ProjectsSection,
  ServicesSection,
  SiteFooter,
  WhySection,
} from './components/HomeSections.jsx'
import './App.css'

export default function App() {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((target) => target.classList.add('is-revealed'))
      return undefined
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.12, rootMargin: '0px 0px -35px 0px' })
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <SiteHeader />
    <main id="main-content">
      <HeroCarousel />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <PartnershipSection />
      <PartnershipEnquirySection />
      <AboutSection />
      <WhySection />
      <ContactSection />
    </main>
    <SiteFooter />
  </>
}
