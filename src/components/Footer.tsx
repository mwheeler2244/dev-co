import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Info */}
          <div className="footer-brand">
            <h3>Webify Nebraska</h3>
            <p>
              Creating exceptional digital experiences that drive growth and
              success for businesses across Nebraska and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link href="/webdev">Web Development</Link>
                </li>
                <li>
                  <Link href="/seo">SEO Optimization</Link>
                </li>
                <li>
                  <Link href="/cro">Conversion Optimization</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="mailto:info@webifynebraska.com">
                    info@webifynebraska.com
                  </a>
                </li>
                <li>
                  <span>Lincoln, NE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h4>Ready to get started?</h4>
            <p>Get your free consultation and project quote today.</p>
          </div>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="newsletter-form"
          >
            <input
              type="hidden"
              name="access_key"
              value="bda44771-a9c7-4ef3-89c6-a4d4ab63fcf0"
            />
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="btn btn-primary">
                Get Quote
              </button>
            </div>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 Webify Nebraska. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
