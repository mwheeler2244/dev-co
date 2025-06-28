"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const targetId = target.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId || "");
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // Add event listener for smooth scrolling
    document.addEventListener("click", handleSmoothScroll);

    // Cleanup
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return null; // This component doesn't render anything
}
