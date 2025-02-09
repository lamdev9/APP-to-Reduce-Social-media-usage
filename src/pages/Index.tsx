
import { UsageStats } from "@/components/UsageStats";
import { TimeReminder } from "@/components/TimeReminder";
import { FocusMode } from "@/components/FocusMode";
import { UsageChart } from "@/components/UsageChart";
import { Achievements } from "@/components/Achievements";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-sage-50">
      <div className="container py-8 space-y-8 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sage-900 mb-2">Mindful Moment Master</h1>
          <p className="text-sage-600">Take control of your digital well-being</p>
        </div>

        <UsageStats />
        <TimeReminder />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <UsageChart />
          </div>
          <div className="space-y-6">
            <FocusMode />
            <Achievements />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
