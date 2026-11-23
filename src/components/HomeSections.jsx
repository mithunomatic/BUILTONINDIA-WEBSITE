import { useState } from 'react'
import { aboutContent, company, contactContent, contactEmail, differentiators, experienceContent, footerContent, journey, partnershipContent, portfolioContent, servicesContent, whyContent } from '../data/siteContent.js'
import { projects } from '../data/projects.js'
import EnquiryForm from './EnquiryForm.jsx'
import ServiceEnquiryModal from './ServiceEnquiryModal.jsx'

function Eyebrow({ children, light = false }) { return <div className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span />{children}</div> }

function ServiceIcon({ name }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const content = {
    interiors: <><path d="M4 17.5 12 22l8-4.5M4 12l8 4.5 8-4.5M4 6.5 12 11l8-4.5L12 2 4 6.5Z" /><path d="M4 6.5v11M20 6.5v11M12 11v11" /></>,
    construction: <><path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7" /></>,
    management: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l4 2M12 3v2M3 12h2M19 12h2" /></>,
    engineering: <><path d="M4 20V9l8-5 8 5v11M2 20h20M8 20v-6h8v6M8 9h.01M16 9h.01" /></>,
    systems: <><path d="M4 7h16M4 12h16M4 17h16" /><circle cx="8" cy="7" r="2" fill="var(--cream)" /><circle cx="15" cy="12" r="2" fill="var(--cream)" /><circle cx="10" cy="17" r="2" fill="var(--cream)" /></>,
    partnerships: <><path d="M8 12 5.5 9.5a2.5 2.5 0 0 1 3.5-3.5l3 3 3-3a2.5 2.5 0 0 1 3.5 3.5L16 12M7 13l3-3a2.8 2.8 0 0 1 4 0l3 3-5 6-5-6Z" /><path d="m10 16 2 2m1-4 2 2" /></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>{content[name]}</svg>
}

export function ExperienceSection() {
  return <section className="experience section-pad" id="experience"><div className="wrap">
    <div className="experience-heading" data-reveal><div><Eyebrow>{experienceContent.eyebrow}</Eyebrow><h2>{experienceContent.heading[0]}<br /><em>{experienceContent.heading[1]}</em></h2></div><p>{experienceContent.description}</p></div>
    <div className="credibility-grid">{experienceContent.facts.map((fact, i) => <article className={`credibility-card credibility-${fact.kind}`} key={fact.kind} data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}><span className="credibility-index">0{i + 1}</span><strong>{fact.number}</strong><h3>{fact.title}</h3><p>{fact.note}</p></article>)}</div>
    <div className="journey" data-reveal><div className="journey-title"><Eyebrow>OUR JOURNEY</Eyebrow><h3>Experience to enterprise.</h3></div><ol className="journey-list">{journey.map((item) => <li key={item.year}><span className="journey-year">{item.year}</span><div><h4>{item.label}</h4><p>{item.note}</p></div></li>)}</ol></div>
  </div></section>
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null)
  const openServiceEnquiry = (service) => setSelectedService(service)
  const handleCardKeyDown = (event, service) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openServiceEnquiry(service)
    }
  }

  return <><section className="expertise section-pad" id="expertise"><div className="wrap"><div className="section-heading" data-reveal><div><Eyebrow>{servicesContent.eyebrow}</Eyebrow><h2>{servicesContent.heading[0]}<br /><em>{servicesContent.heading[1]}</em></h2></div><p>{servicesContent.description}</p></div><div className="services-grid">{servicesContent.services.map((item, i) => <article className="service-card service-card-interactive" key={item.title} data-reveal style={{ '--reveal-delay': `${(i % 3) * 75}ms` }} role="button" tabIndex="0" aria-label={`Enquire about ${item.title}`} onClick={() => openServiceEnquiry(item.title)} onKeyDown={(event) => handleCardKeyDown(event, item.title)}><span className="service-index">0{i + 1}</span><div className="service-icon"><ServiceIcon name={item.icon} /></div><h3>{item.title}</h3><p>{item.description}</p><span className="service-card-cta">Enquire about this service <span aria-hidden="true">↗</span></span></article>)}</div></div></section>{selectedService && <ServiceEnquiryModal service={selectedService} onClose={() => setSelectedService(null)} />}</>
}

export function ProjectsSection() {
  const [category, setCategory] = useState('All')
  const categories = ['All', ...projects.map((project) => project.category)]
  const visibleProjects = category === 'All' ? projects : projects.filter((project) => project.category === category)
  return <section className="projects section-pad" id="projects"><div className="wrap"><div className="section-heading projects-heading" data-reveal><div><Eyebrow>{portfolioContent.eyebrow}</Eyebrow><h2>{portfolioContent.heading[0]}<br /><em>{portfolioContent.heading[1]}</em></h2></div><a className="text-link" href={`mailto:${contactEmail}`}>{portfolioContent.cta} <span aria-hidden="true">↗</span></a></div>
    <div className="portfolio-toolbar" data-reveal><p>{portfolioContent.filterLabel}</p><div className="portfolio-filters" role="group" aria-label="Filter project categories">{categories.map((item) => <button key={item} className={category === item ? 'is-selected' : ''} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
    <div className="project-grid">{visibleProjects.map((project, i) => <article className={`project-card project-${i + 1}`} key={project.category} data-reveal style={{ '--reveal-delay': `${(i % 3) * 70}ms` }}><a href={`mailto:${contactEmail}`} className="project-image-link" aria-label={`Enquire about ${project.category} work`}><div className="project-photo"><img src={project.coverImage} alt={project.imageAlt} loading="lazy" decoding="async" /></div><span className="project-view">Enquire <span aria-hidden="true">↗</span></span></a><div className="project-meta"><div><span>{project.category.toUpperCase()}</span><h3>{project.title}</h3>{(project.location || project.scopeOfWork || project.year) && <p>{[project.location, project.scopeOfWork, project.year].filter(Boolean).join(' · ')}</p>}</div><span className="project-arrow" aria-hidden="true">↗</span></div></article>)}</div>
    <p className="portfolio-note">{portfolioContent.note}</p>
  </div></section>
}

export function PartnershipSection() {
  return <section className="partnerships" id="partnerships"><div className="partnership-image" role="img" aria-label="Contemporary commercial architecture framed against the sky" /><div className="partnership-content" data-reveal><Eyebrow light>{partnershipContent.eyebrow}</Eyebrow><h2>{partnershipContent.heading[0]}<br /><em>{partnershipContent.heading[1]}</em></h2><p>{partnershipContent.description}</p><div className="partner-audience">{partnershipContent.audience.flatMap((item, index) => [index > 0 && <i key={`${item}-divider`} />, <span key={item}>{item}</span>])}</div><a className="button button-outline" href="#partnership-enquiry">{partnershipContent.cta} <span aria-hidden="true">↗</span></a></div><span className="partnership-note">{partnershipContent.note}</span></section>
}

export function PartnershipEnquirySection() {
  const { enquiry } = partnershipContent
  return <section className="partnership-enquiry section-pad" id="partnership-enquiry"><div className="wrap partnership-enquiry-grid"><div className="partnership-enquiry-copy" data-reveal><Eyebrow>{enquiry.eyebrow}</Eyebrow><h2>{enquiry.heading[0]}<br /><em>{enquiry.heading[1]}</em></h2><p>{enquiry.description}</p><h3>{enquiry.areasHeading}</h3><ul className="opportunity-list">{enquiry.opportunities.map((item) => <li key={item}><span aria-hidden="true">+</span>{item}</li>)}</ul></div><div className="enquiry-panel" data-reveal><div className="enquiry-panel-heading"><span>{enquiry.formKicker}</span><p>{enquiry.formDescription}</p></div><EnquiryForm variant="partnership" /></div></div></section>
}

export function AboutSection() {
  return <section className="about section-pad" id="about"><div className="wrap"><div className="about-intro-grid"><div className="about-heading" data-reveal><Eyebrow>{aboutContent.eyebrow}</Eyebrow><h2>{aboutContent.heading[0]}<br /><em>{aboutContent.heading[1]}</em></h2></div><div className="about-copy" data-reveal>{aboutContent.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div><div className="principles-grid">{aboutContent.principles.map(([title, body], i) => <article className="principle-card" key={title} data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
}

export function WhySection() {
  return <section className="why-section section-pad"><div className="wrap why-grid"><div className="why-heading" data-reveal><Eyebrow>{whyContent.eyebrow}</Eyebrow><h2>{whyContent.heading[0]}<br /><em>{whyContent.heading[1]}</em></h2><p>{whyContent.description}</p></div><div className="why-list">{differentiators.map(([title, body], i) => <article className="why-row" key={title} data-reveal style={{ '--reveal-delay': `${(i % 3) * 60}ms` }}><span>0{i + 1}</span><div><h3>{title}</h3><p>{body}</p></div><span className="why-mark" aria-hidden="true">↗</span></article>)}</div></div></section>
}

export function ContactSection() {
  return <section className="contact section-pad" id="contact"><div className="wrap"><div className="contact-heading" data-reveal><div><Eyebrow light>{contactContent.eyebrow}</Eyebrow><h2>{contactContent.heading[0]}<br /><em>{contactContent.heading[1]}</em></h2><p>{contactContent.description}</p></div><a className="contact-email" href={`mailto:${contactEmail}`}><span>{contactContent.emailLabel}</span><strong>{contactEmail}</strong><span aria-hidden="true">↗</span></a></div><div className="contact-form-panel" data-reveal><div><span className="form-kicker">{contactContent.formKicker}</span><p>{contactContent.formDescription}</p></div><EnquiryForm /></div></div></section>
}

export function SiteFooter() {
  return <footer className="footer"><div className="wrap footer-main"><a className="brand footer-brand" href="#top"><span className="brand-name">{company.name}<small>{company.tagline}</small></span></a><p>{footerContent.description[0]}<br />{footerContent.description[1]}</p><div className="footer-nav"><a href="#expertise">Expertise</a><a href="#projects">Projects</a><a href="#partnerships">Partnerships</a><a href="#about">About</a><a href={`mailto:${contactEmail}`}>Contact</a></div></div><div className="wrap footer-legal"><span>{footerContent.rights}</span><a href={`mailto:${contactEmail}`}>{contactEmail}</a><a href="#top">BACK TO TOP ↑</a></div></footer>
}
