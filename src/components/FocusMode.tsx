
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Focus } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { invoke } from '@tauri-apps/api/core';
import { Window } from "@tauri-apps/api/window";

export function FocusMode() {
  const [isActive, setIsActive] = useState(false);
  const { toast } = useToast();

  // Load initial state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('focusMode');
    if (savedState) {
      setIsActive(JSON.parse(savedState));
    }
  }, []);

  // Save state changes to localStorage and update system tray
  useEffect(() => {
    localStorage.setItem('focusMode', JSON.stringify(isActive));
    
    // Update system tray state
    invoke('update_tray_state', { isActive })
      .catch(console.error);
    
    if (isActive) {
      toast({
        title: "Focus Mode Enabled",
        description: "Stay focused! You've enabled distraction-free mode.",
      });

      // Set a reminder for every 30 minutes
      const interval = setInterval(() => {
        toast({
          title: "Focus Check",
          description: "You're doing great! Keep staying focused on your tasks.",
        });
      }, 30 * 60 * 1000);

      return () => clearInterval(interval);
    }
  }, [isActive]);

  const toggleFocusMode = async () => {
    const newState = !isActive;
    setIsActive(newState);
    
    // Minimize window to system tray if focus mode is enabled
    if (newState) {
      const appWindow = new Window('main');
      await appWindow.minimize();
    }
  };

  return (
    <Card className="p-6 bg-white/50 backdrop-blur-sm border border-sage-200 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-full ${isActive ? 'bg-sage-400' : 'bg-sage-100'}`}>
            <Focus className={`w-6 h-6 ${isActive ? 'text-white' : 'text-sage-600'}`} />
          </div>
          <div>
            <h3 className="font-semibold text-sage-900">Focus Mode</h3>
            <p className="text-sm text-sage-600">
              {isActive ? "Currently active" : "Take a break from distractions"}
            </p>
          </div>
        </div>
        <Button
          variant={isActive ? "destructive" : "default"}
          className={isActive ? "bg-sage-600 hover:bg-sage-700" : "bg-sage-100 text-sage-700 hover:bg-sage-200"}
          onClick={toggleFocusMode}
        >
          {isActive ? "Disable" : "Enable"}
        </Button>
      </div>
    </Card>
  );
}
