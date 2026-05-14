"use client";

import { Phone, Mail, Github, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 289 681 8510",
    href: "tel:+12896818510",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ryanhuang0519@gmail.com",
    href: "mailto:ryanhuang0519@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Raytr0",
    href: "https://github.com/Raytr0",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ryanhuan",
    href: "https://www.linkedin.com/in/ryanhuan/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="lg:ml-56 py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">06.</span>
            Contact
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="max-w-3xl">
          {/* Intro Text */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Get In Touch
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              I&apos;m currently looking for new opportunities. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-4 bg-card border border-border rounded-lg p-5 hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <contact.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {contact.label}
                  </p>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="mailto:ryanhuang0519@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
