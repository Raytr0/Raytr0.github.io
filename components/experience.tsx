"use client";

import { ExternalLink } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tools: string;
  link?: string;
}

const experiences: Experience[] = [
  {
    company: "HUHSIN TECHNOLOGY Co.",
    role: "Facilities Engineering Technician",
    period: "May 2025 - Sept 2025",
    location: "Taipei, Taiwan | Japan, Kumamoto",
    description: [
      "Worked on-site at TSMC Japan's JASM semiconductor fabrication facility in Kumamoto with security clearance and cleanroom access to fab area.",
      "Supported high-voltage electrical construction activities, including the installation of cable trays, conduit systems, and power distribution infrastructure.",
      "Returned to Taiwan and obtained clearance for Micron's Maioli site, supporting facility infrastructure work under strict safety and security protocols.",
      "Gained hands-on experience in fab environment safety protocols, semiconductor facility construction standards, and coordination with engineering and contractor teams on-site.",
    ],
    tools: "Python, Git, AWS AI, AWS, Excel, Linux",
  },
  {
    company: "Xinosys, co.ltd",
    role: "Software Developer",
    period: "May 2024 - Sept 2024",
    location: "Taipei, Taiwan",
    link: "https://www.xinosys.com/",
    description: [
      "Developed a Translation AI in Python supporting 5+ languages, leveraging Amazon's Haiku AI for website multi-language functionality, and ensured translation accuracy for 2,000+ terms by cross-referencing Google Translate and ChatGPT",
      "Designed a web crawler in Python using Scrapy to collect Amazon product data for AI training, achieving a scraping rate of 5,300 results/hour with scalability to over 10,000 results/hour using proxies",
      "Improved company Linux server processing power by 30% by disassembling and combining existing hardware and installing software optimizations",
    ],
    tools: "Python, Git, AWS AI, AWS, Excel, Linux",
  },
  {
    company: "Xinosys, co.ltd",
    role: "Intern",
    period: "May 2023 - Aug 2023",
    location: "Taipei, Taiwan",
    link: "https://www.xinosys.com/",
    description: [
      "Developed the GraphQL API for the company's B2B platform, focusing on efficient resolver management, query customization, and seamless end-user data access",
      "Developed a front-end user interface using React.js, with backend integration powered by Spring Boot, and utilized Docker Desktop to set up a local testing environment",
      "Performed QA testing on Android devices, documenting bugs, performance issues, and UI inconsistencies, and communicated findings through detailed Slack reports",
    ],
    tools: "Java, JavaScript, HTML/CSS, Docker, Postman, React.js, Spring Framework",
  },
  {
    company: "Digitera",
    role: "Intern",
    period: "Nov 2021 - Feb 2021",
    location: "Ottawa, Canada (Remote)",
    link: "https://digitalmarketingplus.com/",
    description: [
      "Established secure user authentication protocols using MySQL and implemented Role Based Access Control (RBAC), ensuring data confidentiality and appropriate resource allocation.",
      "Designed a secure student voting protocol using HTTPS for encrypted data transfer and WebSockets for real-time voting alerts, ensuring integrity and fraud prevention",
      "Created a responsive data visualization dashboard using React.js for data analytics",
    ],
    tools: "Java, HTML/CSS, MySQL, JavaScript, React.js",
  },
  {
    company: "540 Royal Canadian Air Cadets",
    role: "Instructor",
    period: "Sept 2016 - May 2021",
    location: "Ontario, Canada",
    link: "https://540goldenhawks.ca/about/",
    description: [
      "Part of instructor team that ensures the squadron of 450+ people runs smoothly",
      "Created teaching material relating to aviation and military history for cadets ages ranging from 13-18 years old",
      "Participated in many fundraising events for the organization and for veterans",
    ],
    tools: "",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="lg:ml-56 py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">02.</span>
            Experience
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-32 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-48">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-32 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2" />

                {/* Date - Desktop */}
                <div className="hidden md:block absolute left-0 w-28 text-right text-sm text-muted-foreground font-mono">
                  {exp.period.split(" - ")[0]}
                  <br />
                  <span className="text-xs">{exp.period.split(" - ")[1]}</span>
                </div>

                {/* Card */}
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary">
                        {exp.link ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span>{exp.company}</span>
                        )}
                      </div>
                    </div>
                    {/* Mobile date */}
                    <div className="md:hidden text-sm text-muted-foreground font-mono">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4">
                    {exp.location}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0">
                          ▹
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.tools && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {exp.tools.split(", ").map((tool, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
