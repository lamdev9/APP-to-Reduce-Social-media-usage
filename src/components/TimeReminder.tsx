
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useState } from "react";

export function TimeReminder() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border border-sage-200 my-6 animate-fade-in">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-cream-100 rounded-full shrink-0">
          <AlertTriangle className="w-6 h-6 text-cream-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-sage-900 mb-2">
            Mindful Moment Check
          </h3>
          <p className="text-sage-600 mb-4">
            What are you doing on  right now? Is it important?
          </p>
          <p className="text-sm text-sage-500 italic mb-4">
            "Remember: dont waste time."
          </p>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="bg-sage-50 text-sage-700 border-sage-200 hover:bg-sage-100 hover:text-sage-800"
              onClick={() => setVisible(false)}
            >
              Continue Browsing
            </Button>
            <Button
              className="bg-sage-600 text-white hover:bg-sage-700"
              onClick={() => setVisible(false)}
            >
              Take a Break
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
