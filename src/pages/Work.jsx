import { Link } from 'react-router-dom'

const projects = [
  {
    number: '01',
    name: 'MONO',
    category: 'WEBSITE DESIGN',
    description: 'A refined digital experience for a modern restaurant, designed to make browsing and discovering the menu effortless.',
    type: 'restaurant',
    label: 'Restaurant website concept',
  },
  {
    number: '02',
    name: 'NORTHSTAR',
    category: 'BUSINESS WEBSITE',
    description: 'A confident online presence for a growing business, with clear messaging and a focused user experience.',
    type: 'business',
    label: 'Business website concept',
  },
  {
    number: '03',
    name: 'COMMON GROUND',
    category: 'ONLINE COMMUNITY',
    description: 'A welcoming digital space that brings members together through organised channels and a simple structure.',
    type: 'community',
    label: 'Community platform concept',
  },
]

function ProjectVisual({ type }) {
  if (type === 'restaurant') {
    return (
      <div className="project-screen restaurant-screen">
        <div className="restaurant-nav">MONO <span>MENU&nbsp;&nbsp; OUR STORY&nbsp;&nbsp; FIND US</span></div>
        <div className="restaurant-content">
          <small>GOOD FOOD. GOOD COMPANY.</small>
          <strong>A little<br />something<br />different.</strong>
          <span>EXPLORE THE MENU</span>
        </div>
        <div className="restaurant-bottom">SEASONAL KITCHEN — EST. 2026</div>
      </div>
    )
  }

  if (type === 'business') {
    return (
      <div className="project-screen business-screen">
        <div className="business-nav">NORTHSTAR <span>ABOUT&nbsp;&nbsp; SERVICES&nbsp;&nbsp; CONTACT</span></div>
        <div className="business-content">
          <small>BUILT AROUND YOUR AMBITION</small>
          <strong>Move your<br />business<br />forward.</strong>
          <p>Clear thinking. Better solutions.</p>
          <span>LET'S TALK</span>
        </div>
        <div className="business-footer"><span>STRATEGY</span><span>GROWTH</span><span>RESULTS</span></div>
      </div>
    )
  }

  return (
    <div className="project-screen common-screen">
      <div className="common-sidebar">
        <strong>? COMMON<br />&nbsp;&nbsp;GROUND</strong>
        <span>HOME</span>
        <span>DISCUSSIONS</span>
        <span>EVENTS</span>
        <span>RESOURCES</span>
      </div>
      <div className="common-content">
        <small>YOUR SPACE TO CONNECT</small>
        <h3>Better together.</h3>
        <p>A community built around shared interests and good conversations.</p>
        <div className="common-post"><strong>Welcome to the community</strong><p>Meet members, share ideas, and find your people.</p></div>
        <div className="common-post"><strong>Upcoming community events</strong><p>There's always something happening.</p></div>
      </div>
    </div>
  )
}

function Work() {
  return (
    <main className="work-page">
      <section className="work-hero">
        <div className="section-label">SELECTED CONCEPTS / 2026</div>
        <h1>Ideas made <span>digital.</span></h1>
        <p>A look at the kind of digital experiences we can create. These demonstration projects show our approach to design, structure, and functionality.</p>
        <div className="work-hero-index">CONCEPT PORTFOLIO — 03 PROJECTS</div>
      </section>

      <section className="project-list">
        {projects.map((project) => (
          <article className="project-entry" key={project.number}>
            <div className="project-art">
              <ProjectVisual type={project.type} />
            </div>
            <div className="project-info">
              <div className="project-meta"><span>{project.number} / 03</span><span>{project.category}</span></div>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="project-concept-label">{project.label} · DEMONSTRATION</div>
            </div>
          </article>
        ))}
      </section>

      <section className="work-cta">
        <div className="section-label">HAVE A PROJECT IN MIND?</div>
        <h2>Your idea could<br /><span>be next.</span></h2>
        <Link to="/contact" className="contact-link">LET'S TALK</Link>
      </section>
    </main>
  )
}

export default Work


