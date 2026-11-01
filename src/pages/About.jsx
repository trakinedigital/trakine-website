import { Link } from 'react-router-dom'

function About() {
  return <main className="content-page">
    <div className="section-label">ABOUT TRAKINE DIGITAL</div>
    <h1>Big digital.<br /><span>Small prices.</span></h1>
    <p className="page-lead">We believe useful digital solutions should be accessible to more people, not reserved for businesses with huge budgets.</p>
    <section className="about-manifesto"><div className="section-label">WHAT WE BELIEVE</div><h2>Good work doesn't need to be complicated.</h2><p>TRAKINE Digital is built around a simple idea: make digital projects feel more approachable. Whether you need a website, a better-organised online community, or a repetitive task automated, the goal is to build something useful without making the process confusing.</p></section>
    <div className="values-grid"><article><span>01</span><h3>Accessible</h3><p>Practical solutions and clear conversations about scope and budget.</p></article><article><span>02</span><h3>Thoughtful</h3><p>Design and functionality should work together, not compete.</p></article><article><span>03</span><h3>Transparent</h3><p>Clear expectations, honest communication, and no made-up promises.</p></article></div>
    <section className="page-cta"><h2>Have an idea worth building?</h2><Link to="/contact" className="contact-link">LET'S TALK</Link></section>
  </main>
}
export default About
