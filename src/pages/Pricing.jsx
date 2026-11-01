import { Link } from 'react-router-dom'

function Pricing() {
  return <main className="content-page">
    <div className="section-label">PRICING / STRAIGHTFORWARD BY DESIGN</div>
    <h1>Small prices.<br /><span>Clear expectations.</span></h1>
    <p className="page-lead">The right price depends on what you're building. We aim to keep projects accessible and agree on the scope before work begins.</p>
    <div className="pricing-grid">
      <article className="pricing-card"><span className="section-label">01 / START SMALL</span><h2>Starter</h2><p>For a focused idea or a first step online.</p><ul><li>Clearly defined scope</li><li>Essential features first</li><li>Suitable for smaller projects</li></ul><Link to="/contact" className="text-link">DISCUSS YOUR IDEA</Link></article>
      <article className="pricing-card pricing-featured"><span className="section-label">02 / BUILD IT OUT</span><h2>Standard</h2><p>For projects that need more pages, features, or planning.</p><ul><li>More tailored functionality</li><li>Additional design and structure</li><li>Scope agreed in advance</li></ul><Link to="/contact" className="text-link">DISCUSS YOUR IDEA</Link></article>
      <article className="pricing-card"><span className="section-label">03 / YOUR REQUIREMENTS</span><h2>Custom</h2><p>For specific needs that don't fit a standard package.</p><ul><li>Individual project assessment</li><li>Custom scope and priorities</li><li>Quotation before work begins</li></ul><Link to="/contact" className="text-link">REQUEST A QUOTE</Link></article>
    </div>
    <p className="pricing-note">Prices are provided after we understand the project requirements. No invented starting prices or surprise add-ons.</p>
  </main>
}
export default Pricing
