import { Link } from 'react-router-dom'

const services = [
  { number: '01', title: 'Web Development', text: 'Modern, responsive websites designed to make your business look professional and help customers take action.', path: '/services/web-development', tags: 'BUSINESS WEBSITES · LANDING PAGES · RESPONSIVE DESIGN' },
  { number: '02', title: 'Online Communities', text: 'Organised digital spaces that help people connect, share ideas, and build an active community.', path: '/services/communities', tags: 'DISCORD · COMMUNITY STRUCTURE · MEMBER EXPERIENCE' },
  { number: '03', title: 'Digital Automation', text: 'Practical automations that reduce repetitive tasks, connect everyday tools, and save time.', path: '/services/automation', tags: 'WORKFLOWS · EMAIL AUTOMATION · PYTHON SCRIPTS' },
]

function Services() {
  return (
    <main className="content-page">
      <div className="section-label">WHAT WE DO / OUR SERVICES</div>
      <h1>Digital solutions.<br /><span>Without the drama.</span></h1>
      <p className="page-lead">You bring the idea. We help turn it into something useful, polished, and ready for the real world.</p>
      <div className="content-service-list">
        {services.map(s => <article className="content-service" key={s.number}>
          <span className="section-label">{s.number} / 03</span>
          <div><h2>{s.title}</h2><p>{s.text}</p><small>{s.tags}</small><br /><Link className="text-link" to={s.path}>EXPLORE SERVICE</Link></div>
        </article>)}
      </div>
      <section className="page-cta"><h2>Not sure what you need?</h2><p>Tell us what you're trying to achieve and we'll figure out the next step together.</p><Link className="contact-link" to="/contact">TALK TO US</Link></section>
    </main>
  )
}
export default Services


