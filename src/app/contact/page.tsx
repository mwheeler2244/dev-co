import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Webify Nebraska - Get Your Free Quote Today",
  description:
    "Ready to start your project? Contact Webify Nebraska for web design, SEO, and CRO services. Located in Lincoln, NE. Free quotes available.",
  keywords:
    "contact webify nebraska, web design quote, lincoln nebraska web developer, get started web design",
};

export default function Contact() {
  return (
    <>
      {/* Contact Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="hero-badge">Get In Touch</div>
            <h1 className="page-title">Contact Us</h1>
            <p className="page-description">
              Ready to start your project? We&apos;d love to hear from you.
              Let&apos;s discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="contact-form-header">
                <h2>Send Us a Message</h2>
                <p>
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
              </div>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="contact-form"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="bda44771-a9c7-4ef3-89c6-a4d4ab63fcf0"
                />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a service</option>
                    <option value="website-development">
                      Website Development
                    </option>
                    <option value="seo">Search Engine Optimization</option>
                    <option value="cro">Conversion Rate Optimization</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              <div className="contact-info-card">
                <div className="contact-info-header">
                  <h3>Get in Touch</h3>
                  <p>We&apos;re here to help you succeed online.</p>
                </div>

                <div className="contact-details">
                  <div className="contact-detail">
                    <div className="contact-icon">📍</div>
                    <div className="contact-text">
                      <h4>Location</h4>
                      <p>Lincoln, NE USA</p>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="contact-icon">✉️</div>
                    <div className="contact-text">
                      <h4>Email</h4>
                      <p>info@webifynebraska.com</p>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="contact-icon">⏰</div>
                    <div className="contact-text">
                      <h4>Response Time</h4>
                      <p>Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="contact-cta">
                  <p>Prefer to call? We&apos;d love to chat!</p>
                  <a
                    href="mailto:info@webifynebraska.com"
                    className="btn btn-secondary"
                  >
                    Email Us Directly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-header">
            <h2>Find Us in Lincoln, Nebraska</h2>
            <p>
              Located in the heart of Nebraska, serving businesses nationwide.
            </p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48314.13930406814!2d-96.72460542119137!3d40.8140423452984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8796be59ca561265%3A0x633a859b1fd5deb9!2sLincoln%2C%20NE!5e0!3m2!1sen!2sus!4v1727557013149!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lincoln, Nebraska Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
