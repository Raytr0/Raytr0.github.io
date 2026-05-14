"use client";

import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  details: string[];
  tools: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Web Scraper",
    description: "Project for Amazon data collection",
    details: [
      "Collected product name, price, rating, rating count, brand name, features, specifications and measurements, and stock information",
      "Created a variety of filters to allow users to search for items matching their criteria",
      "Resulting data automatically exported and formatted in an Excel file",
    ],
    tools: ["Python", "Excel", "AWS AI"],
    github: "https://github.com/Raytr0/WebCrawler",
  },
  {
    title: "QQ Disaster Tracker",
    description: "Project for WEC 2024 Programming Competition",
    details: [
      "Developed a Disaster Tracker application for Western Engineering Competition 2024 in 7 hours, leveraging PHP, MySQL, and MAMP for local deployment, featuring real-time disaster data filtering by type, severity, and location",
      "Implemented custom search functionalities, allowing users to filter disasters by type, severity, or geographical location for targeted and relevant insights",
    ],
    tools: ["PHP", "HTML/CSS", "MAMP", "MySQL"],
    github: "https://github.com/Raytr0/QQ_Disaster_Tracker",
  },
  {
    title: "Wizard War",
    description:
      "Unity game project created in second year of software engineering",
    details: [
      "First person shooter with abilities and platforming",
      "Movement tech for more player freedom",
      "Level progression with enemies and bosses to fight",
    ],
    tools: ["Unity", "C#"],
    github: "https://github.com/Raytr0/Wizard-War-Public",
  },
  {
    title: "Kite Runner Kite Game",
    description: 'A small game based on the book "Kite Runner"',
    details: [
      "Story progression and cutscenes",
      "Has different endings depending on player results",
      "3 Different difficulty levels as game is played",
    ],
    tools: ["Python", "PyGame"],
    github: "https://github.com/Raytr0/kiterunnerkitegame",
  },
  {
    title: "Pong Game",
    description: "Recreation of Pong in Python",
    details: [
      "Created a custom menu for the player to select modes",
      "Supports two players and a versus computer mode",
    ],
    tools: ["Python", "PyGame"],
    github: "https://github.com/Raytr0/Pong",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="lg:ml-56 py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">03.</span>
            Projects
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>

              {/* Details */}
              <ul className="space-y-1 mb-6">
                {project.details.slice(0, 2).map((detail, i) => (
                  <li
                    key={i}
                    className="text-xs text-muted-foreground flex gap-2"
                  >
                    <span className="text-primary flex-shrink-0">▹</span>
                    <span className="line-clamp-2">{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tool}
                    {i < project.tools.length - 1 && (
                      <span className="ml-2 text-border">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Raytr0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors duration-200"
          >
            View More on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
