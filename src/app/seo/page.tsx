import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services Nebraska - Search Engine Optimization | Webify",
  description:
    "Professional SEO services in Nebraska. Improve your search rankings with keyword research, on-page SEO, technical SEO, and local SEO strategies.",
  keywords:
    "seo services nebraska, search engine optimization, keyword research, local seo lincoln ne, organic traffic",
};

export default function SEO() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="hero-badge">Our Services</div>
            <h1 className="page-title">Search Engine Optimization</h1>
            <p className="page-description">
              Improve your website&apos;s visibility and drive organic traffic
              with our strategic SEO services. We help your business rank higher
              in search results and reach more potential customers.
            </p>
          </div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>What is SEO?</h2>
              <p>
                Search Engine Optimization (SEO) is the practice of optimizing
                your website so it ranks higher in search engine results pages
                (SERPs), making it easier for potential customers to find you
                online. SEO includes on-page optimizations, such as improving
                content and structure, and off-page efforts, like building
                backlinks.
              </p>
            </div>
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
                Our comprehensive SEO services are designed to improve your
                search engine rankings and drive more qualified traffic to your
                website.
              </p>

              <div className="services-list">
                <div className="service-item">
                  <div className="service-number">01</div>
                  <div className="service-text">
                    <h4>Keyword Research</h4>
                    <p>
                      We will identify the most relevant keywords your target
                      audience is searching for and integrate them strategically
                      into your website&apos;s content.
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-number">02</div>
                  <div className="service-text">
                    <h4>On-Page SEO</h4>
                    <p>
                      We will optimize your content, meta tags, URL structures,
                      and site architecture to improve your rankings in search
                      results.
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-number">03</div>
                  <div className="service-text">
                    <h4>Technical SEO</h4>
                    <p>
                      We will ensure that your website is fast, mobile-friendly,
                      and technically sound to improve crawlability and user
                      experience.
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-number">04</div>
                  <div className="service-text">
                    <h4>Local SEO</h4>
                    <p>
                      For businesses targeting specific locations, we will
                      optimize your site for local searches, making sure
                      you&apos;re found by nearby customers.
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-number">05</div>
                  <div className="service-text">
                    <h4>Content Strategy</h4>
                    <p>
                      We will help develop a long-term content plan that aligns
                      with your SEO goals and keeps your website fresh and
                      relevant.
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-number">06</div>
                  <div className="service-text">
                    <h4>Ongoing Maintenance</h4>
                    <p>
                      We will offer maintenance services to keep your website up
                      to date, secure, and running smoothly over time.
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
                  <p>
                    Ready to improve your search rankings? Get in touch today.
                  </p>
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
                <p>Tell us about your SEO needs and goals.</p>
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
