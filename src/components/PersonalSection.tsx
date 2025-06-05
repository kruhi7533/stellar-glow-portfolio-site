
import { Card } from "@/components/ui/card";
import { Coffee, Music, BookOpen, Camera, Gamepad2, MapPin } from "lucide-react";

const PersonalSection = () => {
  const funFacts = [
    {
      icon: Coffee,
      title: "Coffee Enthusiast",
      description: "I start every coding session with a perfect cup of coffee"
    },
    {
      icon: Music,
      title: "Music Lover",
      description: "Lo-fi beats and ambient music fuel my most productive coding hours"
    },
    {
      icon: BookOpen,
      title: "Continuous Learner",
      description: "Always exploring new technologies and development methodologies"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and finding inspiration in everyday scenes"
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Strategy games help me think through complex problem-solving approaches"
    },
    {
      icon: MapPin,
      title: "Travel Dreams",
      description: "Planning to work remotely from different countries around the world"
    }
  ];

  return (
    <section id="personal" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">Beyond the Code</h2>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-2xl mx-auto">
          When I'm not building amazing web experiences, here's what keeps me inspired and motivated.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {funFacts.map((fact, index) => (
            <Card key={fact.title} className="glass p-6 hover:glow-box transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-violet-500/20 rounded-lg group-hover:bg-violet-500/30 transition-colors">
                  <fact.icon size={24} className="text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{fact.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{fact.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-violet-300 italic">
            "Life is about balance - great code, great coffee, and great experiences!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
