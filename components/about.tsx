"use client";

export default function About() {
  const skills = {
    languages: "Python, Java, JavaScript, HTML/CSS, PHP, C#, C++",
    databases: "MySQL, Firebase",
    libraries: "React.js",
    frameworks: "Node.js, Spring, Bootstrap",
    tools:
      "Linux, Git, Docker, AWS, AWS AI, Unity, Jira, Scrum Methodology, Oracle VM",
  };

  return (
    <section id="about" className="lg:ml-56 py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I am a Fourth Year Software Engineering Student at{" "}
              <span className="text-primary">Western University</span>. I enjoy
              coding, cybersecurity, and video game development. Always strive
              to bring 100% to the work I do.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I have worked on projects that involve Python, MySQL, HTML5, CSS,
              Java, Unity and many more. I have{" "}
              <span className="text-primary">3 internships</span> worth of
              professional work experience which helped me strengthen my
              experience in Java, Javascript, MySQL, and React.js.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I am passionate about creating anything that can benefit/entertain
              millions of users.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Looking for an opportunity to work in a challenging position
              utilizing my skills in Software Engineering.
            </p>

            {/* Skills List */}
            <div className="pt-6 space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="flex flex-wrap gap-x-2 text-sm"
                >
                  <span className="text-primary font-medium capitalize min-w-[120px]">
                    {category}:
                  </span>
                  <span className="text-muted-foreground">{items}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Image container */}
              <div className="relative w-64 h-64 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
                <img
                  src="/images/profile.jpg"
                  alt="Ryan Huang"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -inset-4 border-2 border-primary rounded-lg -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
