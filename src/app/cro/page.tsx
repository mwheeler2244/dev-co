import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conversion Rate Optimization (CRO) Services | Webify Nebraska",
  description:
    "Increase your website conversions with data-driven CRO strategies. A/B testing, user behavior analysis, and conversion optimization in Nebraska.",
  keywords:
    "conversion rate optimization, cro services, ab testing, website optimization, increase conversions nebraska",
};

export default function CRO() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="hero-badge">Our Services</div>
            <h1 className="page-title">Conversion Rate Optimization</h1>
            <p className="page-description">
              Increase your website&apos;s conversion rate and maximize ROI with
              our data-driven CRO strategies. Turn more visitors into customers
              with optimized user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* What is CRO Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>What is CRO?</h2>
              <p>
                Conversion Rate Optimization (CRO) is the process of improving
                your website to increase the percentage of visitors who take a
                desired action, whether it&apos;s making a purchase, signing up
                for a newsletter, or filling out a form. This involves analyzing
                user behavior, identifying barriers to conversion, and testing
                strategies to enhance user experience.
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
                Our conversion rate optimization services are designed to
                improve your website&apos;s performance and increase the
                percentage of visitors who take desired actions.
              </p>

              <div className="services-list">
                <div className="service-item">
                  <div className="service-number">01</div>
                  <div className="service-text">
                    <h4>Analyze User Behavior</h4>
                    <p>
                      Using tools like heatmaps, session recordings, and
                      analytics, we&apos;ll identify where users drop off and
                      uncover opportunities for improvement.
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-number">02</div>
                  <div className="service-text">
                    <h4>A/B Testing</h4>
                    <p>
                      We&apos;ll run tests to see which designs, headlines, or
                      CTAs perform better and implement data-driven decisions to
                      optimize your site.
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-number">03</div>
                  <div className="service-text">
                    <h4>Improved User Journeys</h4>
                    <p>
                      By streamlining navigation, optimizing landing pages, and
                      making forms more accessible, we&apos;ll help create a
                      smooth and intuitive path for users to convert.
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-number">04</div>
                  <div className="service-text">
                    <h4>Boost ROI</h4>
                    <p>
                      We&apos;ll focus on converting more of your existing
                      traffic, improving your return on investment without
                      increasing advertising spend.
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
                  <p>Ready to optimize your conversions? Get in touch today.</p>
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
                <p>Tell us about your conversion optimization goals.</p>
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
