
import { Progress } from "@/components/ui/progress";
import { Code, Database, Monitor, Wrench } from "lucide-react";

const SkillsProgress = () => {
  const skillCategories = {
    frontend: [
      { name: "React", level: 90, icon: Code },
      { name: "TypeScript", level: 85, icon: Code },
      { name: "Tailwind CSS", level: 88, icon: Code },
      { name: "UI/UX Design", level: 80, icon: Monitor }
    ],
    backend: [
      { name: "Node.js", level: 82, icon: Database },
      { name: "Next.js", level: 85, icon: Code }
    ],
    tools: [
      { name: "Git", level: 88, icon: Wrench },
      { name: "VS Code", level: 95, icon: Monitor }
    ]
  };

  const SkillBar = ({ skill }: { skill: any }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <skill.icon size={16} className="text-violet-400" />
          <span className="text-white font-medium">{skill.name}</span>
        </div>
        <span className="text-violet-300 text-sm font-medium">{skill.level}%</span>
      </div>
      <Progress 
        value={skill.level} 
        className="h-2 bg-violet-900/30"
      />
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Frontend Skills */}
      <div>
        <h3 className="text-xl font-semibold text-violet-300 mb-4 flex items-center gap-2">
          <Monitor size={20} />
          Frontend Development
        </h3>
        <div className="space-y-4">
          {skillCategories.frontend.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>

      {/* Backend Skills */}
      <div>
        <h3 className="text-xl font-semibold text-violet-300 mb-4 flex items-center gap-2">
          <Database size={20} />
          Backend Development
        </h3>
        <div className="space-y-4">
          {skillCategories.backend.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h3 className="text-xl font-semibold text-violet-300 mb-4 flex items-center gap-2">
          <Wrench size={20} />
          Tools & Technologies
        </h3>
        <div className="space-y-4">
          {skillCategories.tools.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsProgress;
