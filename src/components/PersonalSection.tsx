
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Music, BookOpen, Camera, Gamepad2, MapPin, Star, Heart, Code2, Download } from "lucide-react";

const PersonalSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Create a temporary link to download CV
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // You would need to add your CV file to the public folder
    link.download = 'Ruhi_Naaz_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const interests = [
    {
      icon: Coffee,
      title: "Coffee Enthusiast",
      description: "I start every coding session with a perfect cup of coffee",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Music,
      title: "Music Lover",
      description: "Lo-fi beats and ambient music fuel my most productive coding hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Continuous Learner",
      description: "Always exploring new technologies and development methodologies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and finding inspiration in everyday scenes",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Strategy games help me think through complex problem-solving approaches",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: MapPin,
      title: "Travel Dreams",
      description: "Planning to work remotely from different countries around the world",
      color: "from-violet-500 to-purple-500"
    }
  ];

  const achievements = [
    { icon: Star, text: "5+ Projects Completed", color: "text-yellow-500" },
    { icon: Heart, text: "Passionate Developer", color: "text-red-500" },
    { icon: Code2, text: "Full Stack Expertise", color: "text-blue-500" }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-violet-50/30 via-purple-50/30 to-indigo-50/30 dark:from-violet-950/20 dark:via-purple-950/20 dark:to-indigo-950/20">
      <div className="max-w-6xl mx-auto">
        {/* Main About Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating beautiful, functional web experiences. 
              With expertise in React, TypeScript, and modern web technologies, I transform ideas into digital reality.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-violet-200/50 dark:border-violet-500/30">
                  <achievement.icon size={20} className={achievement.color} />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => scrollToSection('projects')} 
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={downloadCV}
                className="border-violet-300 text-violet-700 hover:bg-violet-50 dark:border-violet-600 dark:text-violet-300 dark:hover:bg-violet-900/20 font-medium px-6 py-3 rounded-lg"
              >
                <Download size={18} className="mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>

        {/* Interests Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Beyond the Code
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <Card key={interest.title} className="group hover:shadow-xl transition-all duration-500 hover:scale-105 glass glow-box border-violet-200/50 dark:border-violet-500/30 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 bg-gradient-to-br ${interest.color} rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <interest.icon size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-lg gradient-text">{interest.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {interest.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Quote Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto glass glow-box border-violet-200/50 dark:border-violet-500/30">
            <CardContent className="p-8">
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                "Great code is not just about solving problems, it's about creating experiences that inspire and delight users."
              </blockquote>
              <div className="mt-4 text-violet-600 dark:text-violet-400 font-semibold">
                - My Development Philosophy
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
