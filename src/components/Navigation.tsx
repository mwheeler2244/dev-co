"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Handle scrolling to hash sections on page load
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash && pathname === "/") {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      }
    };

    // Handle initial page load with hash
    handleHashScroll();

    // Handle browser back/forward navigation
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      // Check if we're on the home page
      if (pathname === "/") {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        // If we're not on home page, navigate to home with hash
        router.push(`/${href}`);
      }
      closeMenu();
    }
  };

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/">
            <Image
              src="/assets/logowebify4.png"
              alt="Webify Nebraska"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`} id="nav-menu">
          <Link href="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" className="nav-link" onClick={closeMenu}>
            About
          </Link>
          <Link
            href="/#services"
            className="nav-link"
            onClick={(e) => handleSmoothScroll(e, "#services")}
          >
            Services
          </Link>
          <Link href="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
          <Link href="/contact" className="nav-cta" onClick={closeMenu}>
            Get Started
          </Link>
        </div>

        <div
          className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
          id="nav-toggle"
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          aria-label="Toggle navigation menu"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleMenu();
            }
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
