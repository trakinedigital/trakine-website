import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    name: 'Web Development',
    description: 'Websites that make your business look credible, communicate clearly, and turn visitors into customers.',
    link: '/services/web-development',
    visual: 'website',
  },
  {
    number: '02',
    name: 'Online Communities',
    description: 'Organised, welcoming online spaces that help people connect, participate, and grow together.',
    link: '/services/communities',
    visual: 'community',
  },
  {
    number: '03',
    name: 'Digital Automation',
    description: 'Less repetitive work. Smarter workflows. Practical automation that gives you time back.',
    link: '/services/automation',
    visual: 'automation',
  },
]

function ServiceVisual({ type }) {
  if (type === 'website') {
    return (
      <div className="visual-window website-visual">
        <div className="visual-topbar"><span /><span /><span /><small>YOUR BRAND / ONLINE</small></div>
        <div className="website-preview">
          <div className="preview-nav">STUDIO <span>ABOUT&nbsp;&nbsp; WORK&nbsp;&nbsp; CONTACT</span></div>
          <div className="preview-content">
            <small>DESIGNED TO MOVE YOU FORWARD</small>
            <strong>Make your<br />next move.</strong>
            <div className="preview-button">EXPLORE MORE ?</div>
          </div>
          <div className="preview-footer">STRATEGY. DESIGN. DIGITAL.</div>
        </div>
      </div>
    )
  }

  if (type === 'community') {
    return (
      <div className="visual-window community-visual">
        <div className="community-sidebar">
          <div className="community-logo">? COMMUNITY</div>
          <div className="community-active"># welcome</div>
          <div># announcements</div>
          <div># general</div>
          <div># resources</div>
          <div className="community-label">VOICE CHANNELS</div>
          <div>? Lounge</div>
          <div>? Events</div>
        </div>
        <div className="community-main">
          <div className="community-heading"># welcome <span>? 128 online</span></div>
          <div className="community-message">
            <div className="message-avatar">T</div>
            <div><strong>TRAKINE TEAM</strong><small>Today at 10:24</small><p>Welcome to your new community. Everything starts here.</p></div>
          </div>
          <div className="community-card"><small>COMMUNITY UPDATE</small><strong>You're in the right place.</strong><p>Meet people, share ideas, and get involved.</p></div>
          <div className="community-input">Message #welcome...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="visual-window automation-visual">
      <div className="automation-heading"><span>WORKFLOW OVERVIEW</span><span className="automation-status">? ACTIVE</span></div>
      <div className="workflow">
        <div className="workflow-node"><span>?</span><div><strong>New enquiry</strong><small>Form submitted</small></div></div>
        <div className="workflow-line" />
        <div className="workflow-node"><span>?</span><div><strong>Send response</strong><small>Automatic email</small></div></div>
        <div className="workflow-line" />
        <div className="workflow-node"><span>?</span><div><strong>Update records</strong><small>Information saved</small></div></div>
      </div>
      <div className="automation-bottom"><span>3 STEPS CONNECTED</span><span>RUNNING SMOOTHLY ?</span></div>
    </div>
  )
}

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-eyebrow">INDEPENDENT DIGITAL STUDIO</div>
        <h1>BIG DIGITAL.<br /><span>SMALL PRICES.</span></h1>
        <div className="hero-bottom">
          <p>Digital solutions built to move your ideas forward — without the oversized price tag.</p>
          <Link to="/services" className="text-link">EXPLORE OUR SERVICES ?</Link>
        </div>
        <div className="hero-index">01 — 03 / WHAT WE DO</div>
      </section>

      <section className="intro-section">
        <div className="section-label">A DIFFERENT KIND OF DIGITAL STUDIO</div>
        <div className="intro-content">
          <h2>Good ideas deserve <span>good execution.</span></h2>
          <p>We make digital tools more accessible. From your first website to smarter everyday workflows, we focus on useful solutions, thoughtful design, and fair prices.</p>
        </div>
      </section>

      <section className="services-preview">
        <div className="section-heading">
          <div className="section-label">WHAT WE CAN DO</div>
          <h2>Digital, made <span>practical.</span></h2>
        </div>

        {services.map((service, index) => (
          <article className={`service-feature ${index % 2 === 1 ? 'reverse' : ''}`} key={service.number}>
            <div className="service-visual">
              <ServiceVisual type={service.visual} />
            </div>
            <div className="service-copy">
              <div className="service-number">{service.number} / 03</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="text-link">DISCOVER MORE ?</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="approach-section">
        <div className="section-label">THE TRAKINE APPROACH</div>
        <h2>Simple process.<br /><span>Solid results.</span></h2>
        <div className="approach-steps">
          <div><small>01</small><h3>Understand</h3><p>We learn what you need and what success looks like.</p></div>
          <div><small>02</small><h3>Build</h3><p>We create a solution around your goals, not the other way around.</p></div>
          <div><small>03</small><h3>Deliver</h3><p>You get a practical digital solution, ready to use.</p></div>
        </div>
      </section>

      <section className="home-contact">
        <div className="section-label">HAVE SOMETHING IN MIND?</div>
        <h2>Let's make it <span>happen.</span></h2>
        <Link to="/contact" className="contact-link">START A CONVERSATION ?</Link>
      </section>
    </main>
  )
}

export default Home


