import { Eyebrow, Shell } from '@/components/site'

export default function ContactPage() {
  return (
    <Shell current="contact">
      <div className="page active" id="page-contact">
        <section className="contact-hero" aria-labelledby="contact-title">
          <Eyebrow>Get in Touch</Eyebrow>
          <h1 className="page-title" id="contact-title" aria-label="Your story matters. Let's grow it together.">Your story matters.<br /><em>Let&apos;s grow it together.</em></h1>
        </section>

        <section className="contact-body" aria-label="Contact Saguaro Blossoms">
          <div className="contact-info">
            <p className="contact-info-title">Begin your journey</p>
            <p>Whether you&apos;re a parent seeking support for your child, a homeschool family, a college student, or an adult learner — we&apos;d love to hear from you. Every inquiry is answered personally and with care.</p>
            <div className="contact-details">
              <div className="contact-row">
                <span className="contact-row-label">Location</span>
                <span className="contact-row-val">Tucson, Arizona<br />Serving the greater Arizona area</span>
              </div>
              <div className="contact-row">
                <span className="contact-row-label">Sessions</span>
                <span className="contact-row-val">In-person &amp; virtual available</span>
              </div>
              <div className="contact-row">
                <span className="contact-row-label">Response</span>
                <span className="contact-row-val">Within 24–48 hours</span>
              </div>
            </div>
          </div>

          <form className="contact-form-wrap" aria-labelledby="contact-form-title">
            <p className="form-title" id="contact-form-title">Tell us about your learning journey</p>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="first-name">First Name</label>
                <input className="form-control" id="first-name" name="first-name" type="text" placeholder="Your first name" autoComplete="given-name" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="last-name">Last Name</label>
                <input className="form-control" id="last-name" name="last-name" type="text" placeholder="Your last name" autoComplete="family-name" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input className="form-control" id="email" name="email" type="email" placeholder="your@email.com" autoComplete="email" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="learner-type">I am a</label>
              <select className="form-control" id="learner-type" name="learner-type" defaultValue="">
                <option value="">Select one...</option>
                <option>Parent seeking services for my child</option>
                <option>Homeschool family</option>
                <option>College student</option>
                <option>Adult learner</option>
                <option>ESL learner</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="interest">Area of Interest</label>
              <select className="form-control" id="interest" name="interest" defaultValue="">
                <option value="">Select one...</option>
                <option>Reading development</option>
                <option>Writing &amp; expression</option>
                <option>English as a Second Language</option>
                <option>Homeschool support</option>
                <option>Multiple areas</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="story">Share your story</label>
              <textarea className="form-control" id="story" name="story" placeholder="Tell us where you are and where you'd like to grow..." />
            </div>
            <button className="form-btn" type="submit">Send My Inquiry</button>
            <p className="form-success" aria-live="polite">
              Thank you for reaching out. We&apos;ll be in touch within 24–48 hours to begin your journey together.
            </p>
          </form>
        </section>
      </div>
    </Shell>
  )
}
