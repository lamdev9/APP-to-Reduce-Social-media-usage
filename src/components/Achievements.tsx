
import { Card } from "@/components/ui/card";
import { Award, Clock, Focus, Zap } from "lucide-react";

const achievements = [
  {
    icon: Focus,
    title: "Focus Champion",
    description: "Completed 5 focus sessions",
    progress: 80,
  },
  {
    icon: Clock,
    title: "Time Master",
    description: "Stayed under daily limit for 3 days",
    progress: 60,
  },
  {
    icon: Zap,
    title: "Productivity Guru",
    description: "Reduced social media time by 20%",
    progress: 40,
  },
];

export function Achievements() {
  return (
    <Card className="p-6 bg-white/50 backdrop-blur-sm border border-sage-200 animate-fade-in">
      <div className="flex items-center space-x-3 mb-6">
        <Award className="w-6 h-6 text-sage-600" />
        <h3 className="font-semibold text-sage-900">Achievements</h3>
      </div>
      <div className="space-y-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="flex items-center space-x-4 p-4 bg-white/50 rounded-lg border border-sage-100"
          >
            <div className="p-2 bg-sage-100 rounded-full">
              <achievement.icon className="w-5 h-5 text-sage-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sage-900">{achievement.title}</h4>
              <p className="text-sm text-sage-600">{achievement.description}</p>
              <div className="mt-2 w-full bg-sage-100 rounded-full h-2">
                <div
                  className="bg-sage-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${achievement.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
