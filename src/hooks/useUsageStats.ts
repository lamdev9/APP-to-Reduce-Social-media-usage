
import { useState, useEffect } from 'react';

interface UsageStats {
  dailyUsage: number;
  focusSessions: number;
  lastSessionTime: string;
  weeklyProgress: number;
}

export function useUsageStats() {
  const [stats, setStats] = useState<UsageStats>({
    dailyUsage: 0,
    focusSessions: 0,
    lastSessionTime: new Date().toISOString(),
    weeklyProgress: 0,
  });

  // Load stats from localStorage on mount
  useEffect(() => {
    const savedStats = localStorage.getItem('usageStats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  // Save stats to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('usageStats', JSON.stringify(stats));
  }, [stats]);

  const updateDailyUsage = (minutes: number) => {
    setStats(prev => ({
      ...prev,
      dailyUsage: prev.dailyUsage + minutes,
    }));
  };

  const addFocusSession = () => {
    setStats(prev => ({
      ...prev,
      focusSessions: prev.focusSessions + 1,
      lastSessionTime: new Date().toISOString(),
    }));
  };

  const updateWeeklyProgress = (progress: number) => {
    setStats(prev => ({
      ...prev,
      weeklyProgress: progress,
    }));
  };

  return {
    stats,
    updateDailyUsage,
    addFocusSession,
    updateWeeklyProgress,
  };
}
