
import { Card } from "@/components/ui/card";
import { Clock, AlertCircle } from "lucide-react";
import { useUsageStats } from "@/hooks/useUsageStats";
import { formatDistanceToNow } from "date-fns";

export function UsageStats() {
  const { stats } = useUsageStats();

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      <Card className="p-6 bg-white/50 backdrop-blur-sm border border-sage-200 hover:border-sage-300 transition-all">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-sage-100 rounded-full">
            <Clock className="w-6 h-6 text-sage-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-sage-600">Daily Usage</p>
            <h3 className="text-2xl font-bold text-sage-900">{formatTime(stats.dailyUsage)}</h3>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-sage-100 rounded-full h-2">
            <div 
              className="bg-sage-400 h-2 rounded-full" 
              style={{ width: `${Math.min((stats.dailyUsage / (3 * 60)) * 100, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm text-sage-600 mt-2">
            {Math.min(Math.round((stats.dailyUsage / (3 * 60)) * 100), 100)}% of daily limit
          </p>
        </div>
      </Card>

      <Card className="p-6 bg-white/50 backdrop-blur-sm border border-sage-200 hover:border-sage-300 transition-all">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-cream-100 rounded-full">
            <AlertCircle className="w-6 h-6 text-cream-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-sage-600">Focus Sessions</p>
            <h3 className="text-2xl font-bold text-sage-900">{stats.focusSessions} today</h3>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-sage-600">
            Last session: {formatDistanceToNow(new Date(stats.lastSessionTime), { addSuffix: true })}
          </p>
        </div>
      </Card>

      <Card className="p-6 bg-white/50 backdrop-blur-sm border border-sage-200 hover:border-sage-300 transition-all">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-sage-100 rounded-full">
            <Clock className="w-6 h-6 text-sage-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-sage-600">Weekly Progress</p>
            <h3 className="text-2xl font-bold text-sage-900">{stats.weeklyProgress}%</h3>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-sage-600">
            {stats.weeklyProgress < 0 ? "Usage increased" : "Usage reduced"} from last week
          </p>
        </div>
      </Card>
    </div>
  );
}
