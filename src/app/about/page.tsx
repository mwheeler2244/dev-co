import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Webify Nebraska - Your Local Web Design Partners",
  description:
    "Learn about Webify Nebraska, founded in 2024 in Lincoln, NE. We're dedicated to delivering high-quality web design and development services.",
  keywords:
    "about webify nebraska, web design company lincoln ne, nebraska web developers, local web design",
};

export default function About() {
  return (
    <>
      {/* Enhanced About Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">Founded in 2024</div>
            <h1 className="hero-title">
              <span className="hero-title-main">
                We&apos;re Webify Nebraska
              </span>
              <span className="hero-title-accent">
                Your Digital Growth Partners
              </span>
            </h1>
            <p className="hero-description">
              Born in Lincoln, Nebraska, with a mission to transform how local
              businesses connect with their customers online. We combine Midwest
              values with cutting-edge technology to deliver exceptional digital
              experiences.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Work With Us
              </Link>
              <Link href="#story" className="btn btn-secondary">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="mission-vision" id="story">
        <div className="container">
          <div
            className="section-header text-center"
            style={{ marginBottom: "4rem" }}
          >
            <div className="section-badge">Our Journey</div>
            <h2 className="section-title">The Story Behind Webify Nebraska</h2>
            <p className="section-description">
              Every great company starts with a simple idea and a commitment to
              excellence
            </p>
          </div>
          <div className="mission-vision-grid">
            <div className="mission-block">
              <div className="block-label">Our Beginning</div>
              <h3>
                Started in 2024 with a vision to bridge the gap between local
                businesses and modern digital solutions
              </h3>
              <p
                style={{
                  color: "#a0a0a0",
                  marginTop: "1rem",
                  fontSize: "1rem",
                }}
              >
                Founded in Lincoln, NE, we saw too many great local businesses
                struggling with outdated websites and poor online presence. We
                decided to change that.
              </p>
            </div>
            <div className="vision-block">
              <div className="block-label">Our Mission</div>
              <h3>
                Empowering Nebraska businesses with world-class web solutions
                and personalized service
              </h3>
              <p
                style={{
                  color: "#a0a0a0",
                  marginTop: "1rem",
                  fontSize: "1rem",
                }}
              >
                We believe every business deserves a website that not only looks
                great but drives real results and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="about-values">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Our Foundation</div>
            <h2 className="section-title">Values That Drive Us</h2>
            <p className="section-description">
              The principles that guide every project, every client
              relationship, and every decision we make
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">💎</div>
              <h4>Quality First</h4>
              <p>
                We never compromise on quality. Every line of code, every design
                element, and every strategy is crafted with excellence in mind.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <h4>Honest Partnership</h4>
              <p>
                Transparency and integrity form the foundation of every client
                relationship. No hidden fees, no false promises, just honest
                communication.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🚀</div>
              <h4>Innovation Driven</h4>
              <p>
                We stay ahead of the curve, constantly learning and implementing
                the latest technologies and best practices.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h4>Results Focused</h4>
              <p>
                Pretty websites are nice, but we&apos;re obsessed with websites
                that drive real business results and growth.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h4>Lightning Fast</h4>
              <p>
                Speed matters. We build websites that load in under 3 seconds
                because your customers won&apos;t wait longer.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <h4>Security First</h4>
              <p>
                Your website and your customers&apos; data are protected with
                enterprise-grade security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Process */}
      <section className="services" style={{ background: "#0a0a0a" }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Our Process</div>
            <h2 className="section-title">How We Bring Your Vision to Life</h2>
            <p className="section-description">
              A proven process that ensures every project delivers exceptional
              results
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-content">
                <div className="service-number">01</div>
                <h3>Discovery & Strategy</h3>
                <p>
                  We start by understanding your business, goals, and target
                  audience. This foundation shapes everything we build.
                </p>
                <div className="service-features">
                  <span>Business Analysis</span>
                  <span>Competitor Research</span>
                  <span>Goal Setting</span>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <div className="service-number">02</div>
                <h3>Design & Planning</h3>
                <p>
                  Custom designs that reflect your brand and provide exceptional
                  user experiences across all devices.
                </p>
                <div className="service-features">
                  <span>Custom Design</span>
                  <span>User Experience</span>
                  <span>Mobile First</span>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <div className="service-number">03</div>
                <h3>Development & Testing</h3>
                <p>
                  Clean, efficient code built with modern technologies and
                  thoroughly tested for performance and security.
                </p>
                <div className="service-features">
                  <span>Modern Code</span>
                  <span>Performance Testing</span>
                  <span>Security Audits</span>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <div className="service-number">04</div>
                <h3>Launch & Optimize</h3>
                <p>
                  Seamless launch with ongoing optimization and support to
                  ensure continued success and growth.
                </p>
                <div className="service-features">
                  <span>Smooth Launch</span>
                  <span>Performance Monitoring</span>
                  <span>Ongoing Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section
        className="why-choose-us"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/assets/about2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <div className="section-badge" style={{ marginBottom: "1rem" }}>
                Why Choose Us
              </div>
              <h2>What Makes Webify Nebraska Different?</h2>
              <p>
                We&apos;re not just another web design agency. We&apos;re your
                local partners who understand Nebraska businesses and deliver
                solutions that work.
              </p>

              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <span>Local Nebraska expertise with global standards</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <span>
                    Custom solutions tailored to your specific business needs
                  </span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <span>Guaranteed page load times under 3 seconds</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <span>
                    Mobile-responsive design that works on every device
                  </span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <span>
                    SEO-optimized for maximum search engine visibility
                  </span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <span>24/7 support and proactive maintenance services</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <span>
                    Transparent pricing with no hidden fees or surprises
                  </span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <span>100% satisfaction guarantee on every project</span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "2rem",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/contact" className="btn btn-primary">
                  Start Your Project
                </Link>
                <Link href="/#services" className="btn btn-secondary">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="testimonial">
        <div className="container">
          <div
            className="section-header text-center"
            style={{ marginBottom: "3rem" }}
          >
            <div className="section-badge">Success Stories</div>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">
              Real results from real Nebraska businesses
            </p>
          </div>

          <div className="testimonial-content">
            <blockquote>
              &quot;Webify Nebraska transformed our online presence completely.
              Our website traffic increased by 300% and we&apos;re getting more
              qualified leads than ever before. They truly understand local
              businesses.&quot;
            </blockquote>
            <div
              style={{
                textAlign: "center",
                marginTop: "2rem",
                color: "#a0a0a0",
              }}
            >
              <strong style={{ color: "#e5e5e5" }}>Sarah Johnson</strong>
              <br />
              <span>Owner, Johnson's Hardware - Omaha, NE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
    </>
  );
}
