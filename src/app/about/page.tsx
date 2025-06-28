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
      {/* About Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="hero-badge">About Us</div>
            <h1 className="page-title">Webify Nebraska</h1>
            <p className="page-description">
              Founded in 2024 in the heart of Lincoln, Nebraska, we&apos;re
              dedicated to delivering high-quality web design and development
              services tailored to meet the unique needs of our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                To empower businesses of all sizes by providing innovative web
                solutions that enhance their online presence and help them
                achieve their goals. We understand that every business is
                unique, and we take the time to understand your vision and
                objectives to craft a custom solution that fits your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Our Foundation</div>
            <h2 className="section-title">Our Values</h2>
            <p className="section-description">
              The principles that guide everything we do
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Quality</h3>
              <p>
                We are committed to delivering exceptional quality in every
                project we undertake.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>
                We believe in transparency and honesty in all our dealings with
                clients and partners.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>
                We stay ahead of the curve by embracing the latest technologies
                and design trends.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Customer Focus</h3>
              <p>
                Our clients are at the center of everything we do. We listen,
                understand, and deliver beyond expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="about-services">
        <div className="container">
          <div className="about-services-content">
            <div className="about-services-text">
              <h2>What We Do</h2>
              <p>
                We offer a comprehensive range of services designed to help your
                business thrive online. From custom website development to
                search engine optimization, we have the expertise to bring your
                digital vision to life.
              </p>

              <div className="services-list">
                <div className="service-item">
                  <div className="service-number">01</div>
                  <div className="service-text">
                    <h4>Web Design & Development</h4>
                    <p>
                      Custom websites built with modern technologies for optimal
                      performance.
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-number">02</div>
                  <div className="service-text">
                    <h4>Search Engine Optimization</h4>
                    <p>
                      Strategic SEO services to improve your visibility and
                      drive organic traffic.
                    </p>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-number">03</div>
                  <div className="service-text">
                    <h4>Conversion Rate Optimization</h4>
                    <p>
                      Data-driven optimization to maximize conversions and
                      improve performance.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/#services" className="btn btn-primary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>Why Choose Webify Nebraska?</h2>
              <p>
                We&apos;re more than just a web design company. We&apos;re your
                partners in digital success, committed to helping you achieve
                your business goals through innovative web solutions.
              </p>

              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <span>Local Nebraska expertise with global standards</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <span>Custom solutions tailored to your business needs</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <span>Responsive design that works on all devices</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <span>SEO-optimized for better search engine rankings</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <span>24/7 support and maintenance services</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <span>Fast turnaround times and competitive pricing</span>
                </div>
              </div>

              <Link href="/contact" className="btn btn-primary">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
