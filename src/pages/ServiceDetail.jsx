import { Link, useParams } from 'react-router-dom'

const details = {
  'web-development': {
    number: '01', title: 'Web Development', lead: 'A website should do more than exist. It should make the right impression.', text: 'We build clean, responsive websites that explain what you do, work across devices, and give visitors a clear next step.',
    items: ['Business and portfolio websites', 'Landing pages for products or services', 'Responsive layouts for phones, tablets, and desktops', 'Clear navigation and contact options', 'Practical updates and improvements']
  },
  communities: {
    number: '02', title: 'Online Communities', lead: 'Create a space people actually want to be part of.', text: 'We help organise online communities so members can find their way around, join conversations, and understand how everything works.',
    items: ['Discord server structure and channels', 'Roles and permission planning', 'Onboarding and welcome flows', 'Community information and rules', 'Ideas for useful bots and moderation workflows']
  },
  automation: {
    number: '03', title: 'Digital Automation', lead: 'Spend less time repeating tasks. More time doing meaningful work.', text: 'We explore practical ways to connect tools and automate repetitive processes without adding unnecessary complexity.',
    items: ['Email and notification workflows', 'Simple Python utilities and scripts', 'Data organisation and repetitive-task automation', 'Workflow planning and documentation', 'Small-scale process improvements']
  }
}

function ServiceDetail() {
  const { service } = useParams()
  const item = details[service]
  if (!item) return <main className="content-page"><h1>Service not found.</h1><Link to="/services">View all services ?</Link></main>
  return <main className="content-page">
    <div className="section-label">OUR SERVICES / {item.number}</div>
    <h1>{item.title}<br /><span>Made practical.</span></h1>
    <p className="page-lead">{item.lead}</p>
    <section className="detail-panel"><div className="section-label">WHAT WE CAN HELP WITH</div><p>{item.text}</p><ul>{item.items.map(x => <li key={x}>{x}</li>)}</ul></section>
    <section className="page-cta"><h2>Let's talk about your idea.</h2><p>Every project is different. Tell us what you need and we'll discuss a suitable approach.</p><Link className="contact-link" to="/contact">REQUEST A QUOTE ?</Link></section>
  </main>
}
export default ServiceDetail
