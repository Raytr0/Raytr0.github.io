"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation - Fixed Sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-56 flex-col bg-card/80 backdrop-blur-sm border-r border-border z-50">
        <div className="p-6 border-b border-border">
          <a href="#" className="block">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/30 hover:border-primary transition-colors duration-300">
              <img
                src="/images/profile.jpg"
                alt="Ryan Huang"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="mt-4 text-lg font-semibold text-center text-foreground">
              Ryan Huang
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              Software Developer
            </p>
          </a>
        </div>

        <div className="flex-1 py-8">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href.slice(1)
                      ? "bg-primary/10 text-primary border-l-3 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 border-t border-border">
          <a
            href="https://Raytr0.github.io/assets/resume/2025 Jan 10.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-2.5 text-center text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30">
              <img
                src="/images/profile.jpg"
                alt="Ryan Huang"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-foreground">Ryan Huang</p>
              <p className="text-xs text-muted-foreground">Software Developer</p>
            </div>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="py-4 px-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-foreground hover:bg-secondary/50 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://Raytr0.github.io/assets/resume/2025 Jan 10.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-center text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
