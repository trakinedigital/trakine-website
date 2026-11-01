import { useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Work from './pages/Work'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const links = [
    ['/services', 'Services'],
    ['/work', 'Our work'],
    ['/pricing', 'Pricing'],
    ['/about', 'About'],
  ]
  return <header className="site-header">
    <Link className="brand" to="/" onClick={closeMenu}><strong>TRAKINE.</strong></Link>
    <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'CLOSE ?' : 'MENU ?'}</button>
    <nav className={`navigation ${menuOpen ? 'navigation-open' : ''}`}>
      {links.map(([path, label]) => <NavLink key={path} to={path} onClick={closeMenu}>{label}</NavLink>)}
      <Link className="nav-cta" to="/contact" onClick={closeMenu}>Get in touch</Link>
    </nav>
  </header>
}

function Footer() {
  return <footer className="site-footer">
    <div><Link className="brand" to="/"><strong>TRAKINE.</strong></Link><p>BIG DIGITAL. SMALL PRICES.</p></div>
    <a href="mailto:trakinedigital@gmail.com">trakinedigital@gmail.com</a>
    <small>© {new Date().getFullYear()} TRAKINE DIGITAL</small>
  </footer>
}

function App() {
  return <><Navbar /><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/services/:service" element={<ServiceDetail />} />
    <Route path="/work" element={<Work />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<main className="content-page"><div className="section-label">404 / PAGE NOT FOUND</div><h1>Wrong turn.<br /><span>Easy fix.</span></h1><Link className="text-link" to="/">BACK TO HOME</Link></main>} />
  </Routes><Footer /></>
}
export default App


