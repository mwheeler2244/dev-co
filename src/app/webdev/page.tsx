import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services - Custom Websites | Webify Nebraska",
  description:
    "Professional web development services in Nebraska. Custom, responsive websites built with modern technologies. E-commerce, performance optimization, and more.",
  keywords:
    "web development nebraska, custom websites, responsive design, ecommerce development, website optimization",
};

export default function WebDev() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="hero-badge">Our Services</div>
            <h1 className="page-title">Web Development</h1>
            <p className="page-description">
              Custom websites built with modern technologies for optimal
              performance and user experience. We create responsive, fast, and
              SEO-optimized websites that drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="about-services">
        <div className="container">
          <div className="about-services-content">
            <div className="about-services-text">
              <h2>How We Can Help</h2>
              <p>
                We offer comprehensive web development services designed to help
                your business succeed online with cutting-edge technology and
                proven strategies.
              </p>

              <div className="services-list">
                <div className="service-item">
                  <div className="service-number">01</div>
                  <div className="service-text">
                    <h4>Custom Website Design</h4>
                    <p>
                      We will create a visually appealing, user-friendly, and
                      fully responsive website tailored to your business needs.
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-number">02</div>
                  <div className="service-text">
                    <h4>E-Commerce Integration</h4>
                    <p>
                      If you sell products or services online, we will set up a
                      seamless e-commerce experience with secure payment
                      processing and easy-to-use shopping features.
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-number">03</div>
                  <div className="service-text">
                    <h4>Performance Optimization</h4>
                    <p>
                      We will ensure your site is optimized for speed, improving
                      load times and overall user experience.
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-number">04</div>
                  <div className="service-text">
                    <h4>Mobile Optimization</h4>
                    <p>
                      With more users browsing on mobile, we will ensure your
                      site is fully responsive, looking great on all devices.
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-number">05</div>
                  <div className="service-text">
                    <h4>Ongoing Maintenance</h4>
                    <p>
                      We offer maintenance services to keep your website up to
                      date, secure, and running smoothly over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <div className="contact-info-card">
                <div className="contact-info-header">
                  <h3>Reach Us</h3>
                  <p>Ready to get started? Get in touch with us today.</p>
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
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="contact-form-header">
                <h3>Get a Quote</h3>
                <p>Tell us about your web development project.</p>
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
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    id="phone"
                    name="phone"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Enter a message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
