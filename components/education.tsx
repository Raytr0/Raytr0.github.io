"use client";

import { ExternalLink, GraduationCap } from "lucide-react";

export default function Education() {
  const coursework = [
    "Engineering Design",
    "Intro To AI",
    "Digital Logic Systems",
    "Intro To Machine Learning",
  ];

  return (
    <section id="education" className="lg:ml-56 py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">05.</span>
            Education
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        {/* Education Card */}
        <div className="max-w-2xl">
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors duration-300">
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  <a
                    href="https://www.uwo.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    University of Western Ontario
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </h3>
                <p className="text-muted-foreground mb-4">Ontario, Canada</p>

                <div className="mb-6">
                  <p className="text-foreground">
                    <span className="text-primary font-medium">Degree:</span>{" "}
                    Fourth Year Software Engineering
                  </p>
                </div>

                <div>
                  <p className="text-primary font-medium mb-3">
                    Relevant Courseworks:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-sm bg-secondary/50 text-muted-foreground rounded-lg"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
