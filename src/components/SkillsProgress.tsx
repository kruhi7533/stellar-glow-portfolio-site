
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Monitor, Wrench, Star } from "lucide-react";

const SkillsProgress = () => {
  const skillCategories = {
    frontend: [
      { name: "React", level: "Expert", icon: Code, description: "Building interactive UIs" },
      { name: "TypeScript", level: "Advanced", icon: Code, description: "Type-safe development" },
      { name: "Tailwind CSS", level: "Expert", icon: Code, description: "Modern styling" },
      { name: "UI/UX Design", level: "Intermediate", icon: Monitor, description: "User-centered design" }
    ],
    backend: [
      { name: "Node.js", level: "Advanced", icon: Database, description: "Server-side development" },
      { name: "Next.js", level: "Advanced", icon: Code, description: "Full-stack React framework" }
    ],
    tools: [
      { name: "Git", level: "Expert", icon: Wrench, description: "Version control" },
      { name: "VS Code", level: "Expert", icon: Monitor, description: "Development environment" }
    ]
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200";
      case "Advanced": return "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200";
      case "Intermediate": return "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-200";
    }
  };

  const getLevelStars = (level: string) => {
    switch (level) {
      case "Expert": return 5;
      case "Advanced": return 4;
      case "Intermediate": return 3;
      default: return 2;
    }
  };

  const SkillCard = ({ skill }: { skill: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 glass border-violet-200/50 dark:border-violet-500/30">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
              <skill.icon size={20} className="text-white" />
            </div>
            <div>
              <CardTitle className="text-lg gradient-text">{skill.name}</CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{skill.description}</p>
            </div>
          </div>
          <Badge className={getLevelColor(skill.level)}>{skill.level}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < getLevelStars(skill.level)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300 dark:text-gray-600'
              } transition-colors duration-300`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="space-y-12">
          {/* Frontend Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg shadow-lg">
                <Monitor size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold gradient-text">Frontend Development</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.frontend.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-lg">
                <Database size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold gradient-text">Backend Development</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.backend.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg shadow-lg">
                <Wrench size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold gradient-text">Tools & Technologies</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.tools.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto glass glow-box border-violet-200/50 dark:border-violet-500/30">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold gradient-text mb-4">Always Learning</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and best practices to stay at the forefront of web development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsProgress;
