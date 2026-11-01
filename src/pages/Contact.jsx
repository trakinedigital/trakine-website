import { useState } from 'react'

function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'trakinedigital@gmail.com'

  async function copyDiscord() {
    try {
      await navigator.clipboard.writeText('seckten')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy this Discord username:', 'seckten')
    }
  }


  return <main className="content-page contact-page">
    <div className="section-label">CONTACT / YOUR NEXT STEP</div>
    <h1>Let's make<br /><span>something useful.</span></h1>
    <p className="page-lead">Tell us what you're thinking about. A rough idea is enough to start a conversation.</p>

    <div className="contact-layout">
      <section className="contact-details">
        <div className="section-label">GET IN TOUCH DIRECTLY</div>
        <div className="contact-method">
          <small>EMAIL</small>
          <a href={`mailto:${email}`}>{email}</a>
        </div>

        <div className="contact-method">
          <small>DISCORD</small>
          <strong>@seckten</strong>
          <button type="button" className="copy-button" onClick={copyDiscord}>
            {copied ? 'COPIED' : 'COPY USERNAME'}
          </button>
          <p>Search for this username in Discord to connect.</p>
        </div>

        <div className="contact-note">Have a question before committing? That's fine. Start with a message and we'll take it from there.</div>
      </section>

      <form
  className="contact-form"
  action="https://formsubmit.co/trakinedigital@gmail.com"
  method="POST"
>
  <input type="hidden" name="_subject" value="New TRAKINE Digital enquiry" />
  <input type="hidden" name="_template" value="table" />
  <input type="text" name="_honey" style={{ display: 'none' }} />
        <div className="section-label">TELL US ABOUT YOUR PROJECT</div>

        <label>Your name<input name="name" required placeholder="How should we address you?" /></label>
        <label>Your email<input name="replyEmail" type="email" required placeholder="you@example.com" /></label>

        <label>What do you need?
          <select name="service" defaultValue="Not sure yet">
            <option>Not sure yet</option>
            <option>Web Development</option>
            <option>Online Communities</option>
            <option>Digital Automation</option>
            <option>Something else</option>
          </select>
        </label>

        <label>Project name<input name="project" required placeholder="A name or short description" /></label>

        <label>Budget (optional)
          <select name="budget" defaultValue="Not sure yet">
            <option>Not sure yet</option>
            <option>Under 100</option>
            <option>100 - 300</option>
            <option>300 - 700</option>
            <option>700+</option>
          </select>
        </label>

        <label>Tell us a little more<textarea name="details" required rows="5" placeholder="What would you like to build or improve?" /></label>

        <button className="form-submit" type="submit">SEND ENQUIRY</button>
        <p className="form-disclaimer">Your enquiry will be sent securely to our inbox.</p>
      </form>
    </div>
  </main>
}

export default Contact



