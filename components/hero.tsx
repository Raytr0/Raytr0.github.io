"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const roles = ["Video Game Enthusiast", "Developer", "Fast Learner"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="hero"
      className="lg:ml-56 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23fff'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }} />

      {/* Glowing orb effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20 lg:py-0">
        <div className="max-w-3xl">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in">
            Hello, my name is
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Ryan Huang
            <span className="text-primary">.</span>
          </h1>

          {/* Animated Role */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 h-10">
            A{" "}
            <span className="text-primary font-medium">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
            Self-driven, quick starter, passionate programmer with a curious
            mind who enjoys solving complex and challenging real-world problems.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-10">
            <a
              href="https://www.linkedin.com/in/ryan-huang-25139a21b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/Raytr0/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Read More
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-[calc(50%+7rem)] animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-mono">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
