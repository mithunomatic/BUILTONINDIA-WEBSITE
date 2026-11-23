import { useEffect, useState } from 'react'
import { company, contactEmail, navigation } from '../data/siteContent.js'

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  useEffect(() => {
    if (!menuOpen) return undefined
    const closeOnEscape = (event) => { if (event.key === 'Escape') closeMenu() }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])
  return <header className="site-header">
    <a className="brand" href="#top" aria-label="BUILTONINDIA home" onClick={closeMenu}>
      <span className="brand-name">{company.name}<small>{company.tagline}</small></span>
    </a>
    <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
    <nav id="main-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
      {navigation.map(([name, href]) => <a key={name} href={href} onClick={closeMenu}>{name}</a>)}
      <a className="nav-cta" href={`mailto:${contactEmail}`} onClick={closeMenu}>Let's Talk <span aria-hidden="true">↗</span></a>
    </nav>
  </header>
}
