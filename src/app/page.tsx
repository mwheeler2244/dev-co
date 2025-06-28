import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">Strategic Web Design Solutions</div>
            <h1 className="hero-title">
              <span className="hero-title-main">Build Digital Experiences</span>
              <span className="hero-title-accent">That Drive Growth</span>
            </h1>
            <p className="hero-description">
              We create custom websites and digital solutions that enhance your
              brand, engage users, and deliver measurable results for businesses
              across Nebraska and beyond.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">24h</div>
                <div className="stat-label">Response Time</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link href="#services" className="btn btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-block">
              <div className="block-label">Mission</div>
              <h3>
                Empowering digital transformation through innovative design
              </h3>
            </div>
            <div className="vision-block">
              <div className="block-label">Vision</div>
              <h3>
                Creating meaningful connections between brands and their
                audiences
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-content">
            <div className="section-badge">Our Approach</div>
            <h2 className="section-title">Data-Driven Web Solutions</h2>
            <p className="section-description">
              We combine design excellence with technical expertise to deliver
              websites that perform
            </p>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <h4>Performance Analytics</h4>
                <p>
                  Real-time insights into your website&apos;s performance and
                  user behavior
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h4>Lightning Fast</h4>
                <p>
                  Optimized for speed with load times under 3 seconds guaranteed
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <h4>Mobile First</h4>
                <p>
                  Responsive design that works perfectly on all devices and
                  screen sizes
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔒</div>
                <h4>Secure & Reliable</h4>
                <p>Enterprise-grade security with 99.9% uptime guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">What We Do</div>
            <h2 className="section-title">Services</h2>
            <p className="section-description">
              Comprehensive digital solutions designed to help your business
              succeed online
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-content">
                <div className="service-number">01</div>
                <h3>Website Development</h3>
                <p>
                  Custom websites built with modern technologies for optimal
                  performance and user experience.
                </p>
                <div className="service-features">
                  <span>React & Next.js</span>
                  <span>Mobile Responsive</span>
                  <span>SEO Optimized</span>
                </div>
                <Link href="/webdev" className="service-link">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <div className="service-number">02</div>
                <h3>Search Engine Optimization</h3>
                <p>
                  Strategic SEO services to improve your visibility and drive
                  organic traffic to your website.
                </p>
                <div className="service-features">
                  <span>Keyword Research</span>
                  <span>Technical SEO</span>
                  <span>Content Strategy</span>
                </div>
                <Link href="/seo" className="service-link">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <div className="service-number">04</div>
                <h3>Conversion Rate Optimization</h3>
                <p>
                  Data-driven optimization to maximize conversions and improve
                  your website&apos;s performance.
                </p>
                <div className="service-features">
                  <span>A/B Testing</span>
                  <span>User Analytics</span>
                  <span>Funnel Optimization</span>
                </div>
                <Link href="/cro" className="service-link">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>
              Let&apos;s work together to create a website that drives results
              for your business.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial">
        <div className="container">
          <div className="testimonial-content">
            <blockquote>
              &quot;As the founder, I am committed to crafting innovative web
              design solutions that not only enhance user experience but also
              empower businesses to thrive in a digital world. Your success is
              our inspiration.&quot;
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
