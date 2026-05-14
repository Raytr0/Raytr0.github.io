"use client";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Databases",
    skills: ["Python", "Java", "JavaScript", "HTML5", "CSS3", "MySQL", "Firebase", "PHP", "C#", "C++"],
  },
  {
    title: "Libraries",
    skills: ["PyGame", "React.js"],
  },
  {
    title: "Frameworks",
    skills: ["Spring", "Bootstrap", "Node.js"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "AWS", "Docker", "Unity", "Linux", "Jira", "Scrum"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="lg:ml-56 py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">04.</span>
            Skills
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 pb-4 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group relative px-4 py-2 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-colors duration-200"
                  >
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Bars Alternative - Visual representation */}
        <div className="mt-12 bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Proficiency
          </h3>
          <div className="space-y-4">
            {[
              { name: "Python", level: 90 },
              { name: "Java", level: 85 },
              { name: "JavaScript/React", level: 80 },
              { name: "SQL/Databases", level: 85 },
              { name: "AWS/Cloud", level: 75 },
              { name: "Git/Version Control", level: 90 },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
