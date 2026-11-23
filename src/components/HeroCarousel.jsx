import { useEffect, useState } from 'react'
import { heroContent, slides } from '../data/siteContent.js'

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (paused || hovered || reducedMotion) return undefined
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 7000)
    return () => window.clearInterval(timer)
  }, [paused, hovered, reducedMotion])

  const move = (direction) => setActive((current) => (current + direction + slides.length) % slides.length)
  const slide = slides[active]

  return <section className="hero" id="top" aria-roledescription="carousel" aria-label="BUILTONINDIA expertise" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
    <div className="hero-images" aria-hidden="true">
      {slides.map((item, index) => <div key={item.id} className={`hero-image${index === active ? ' is-active' : ''}`} style={{ backgroundImage: `url("${item.image}")` }} />)}
    </div>
    <div className="hero-shade" />
    <div className="hero-content wrap" key={slide.id}>
      <div className="eyebrow eyebrow-light"><span />{slide.eyebrow}</div>
      <h1>{heroContent.heading[0]}<br /><em>{heroContent.heading[1]}</em></h1>
      <p>{heroContent.description}</p>
      <div className="hero-actions"><a className="button button-gold" href="#expertise">{heroContent.expertiseCta} <span aria-hidden="true">→</span></a><a className="text-link light-link" href="#projects">{heroContent.projectsCta} <span aria-hidden="true">↗</span></a></div>
    </div>
    <div className="hero-caption"><span>0{active + 1} / 0{slides.length}</span><i /><span>{slide.label}</span></div>
    <div className="hero-controls" aria-label="Carousel controls">
      <button className="carousel-arrow" onClick={() => move(-1)} aria-label="Previous slide">←</button>
      <div className="carousel-dots" role="group" aria-label="Choose a slide">{slides.map((item, index) => <button key={item.id} className={`carousel-dot${active === index ? ' is-active' : ''}`} aria-label={`Show slide ${index + 1}: ${item.label}`} aria-current={active === index ? 'true' : undefined} onClick={() => setActive(index)}><span /></button>)}</div>
      <button className="carousel-arrow" onClick={() => move(1)} aria-label="Next slide">→</button>
      <button className="carousel-pause" onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Play slides' : 'Pause slides'} title={paused ? 'Play slides' : 'Pause slides'}>{paused ? '▶' : 'Ⅱ'}</button>
    </div>
    <a className="scroll-cue" href="#experience" aria-label="Scroll to experience"><span /></a>
  </section>
}
