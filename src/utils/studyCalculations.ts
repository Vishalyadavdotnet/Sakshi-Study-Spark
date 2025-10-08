import { StudySession } from "@/data/studyData";

export const calculateTodayHours = (data: StudySession[]): number => {
  const today = new Date().toISOString().split("T")[0]; // "2025-10-08"
  return data
    .filter(s => s.date === today)
    .reduce((sum, s) => sum + s.hours, 0);
};

export const calculateWeeklyTotal = (data: StudySession[]): number => {
  const today = new Date();
  const dayOfWeek = (d: Date) => (d.getDay() + 6) % 7; // Mon=0 ... Sun=6

  const mondayThisWeek = new Date(today);
  mondayThisWeek.setHours(0, 0, 0, 0);
  mondayThisWeek.setDate(today.getDate() - dayOfWeek(today));

  const sundayThisWeek = new Date(mondayThisWeek);
  sundayThisWeek.setDate(mondayThisWeek.getDate() + 6);

  return data
    .filter(session => {
      const sessionDate = new Date(session.date);
      sessionDate.setHours(0, 0, 0, 0);
      return sessionDate >= mondayThisWeek && sessionDate <= sundayThisWeek;
    })
    .reduce((sum, session) => sum + session.hours, 0);
};


export const calculateMonthlyTotal = (data: StudySession[], year: number, month: number): number => {
  return data
    .filter(session => {
      const sessionDate = new Date(session.date);
      return sessionDate.getFullYear() === year && sessionDate.getMonth() === month;
    })
    .reduce((sum, session) => sum + session.hours, 0);
};

export const calculateAverageDailyHours = (data: StudySession[], year: number, month: number): number => {
  const monthData = data.filter(session => {
    const sessionDate = new Date(session.date);
    return sessionDate.getFullYear() === year && sessionDate.getMonth() === month;
  });
  
  const uniqueDays = new Set(monthData.map(session => session.date)).size;
  const totalHours = monthData.reduce((sum, session) => sum + session.hours, 0);
  
  return uniqueDays > 0 ? totalHours / uniqueDays : 0;
};

export const findBestDay = (data: StudySession[]): { date: string; hours: number } => {
  const dailyHours = data.reduce((acc, session) => {
    acc[session.date] = (acc[session.date] || 0) + session.hours;
    return acc;
  }, {} as Record<string, number>);
  
  let bestDay = { date: "", hours: 0 };
  Object.entries(dailyHours).forEach(([date, hours]) => {
    if (hours > bestDay.hours) {
      bestDay = { date, hours };
    }
  });
  
  return bestDay;
};

export const calculateLongestStreak = (data: StudySession[]): number => {
  if (data.length === 0) return 0;
  
  const uniqueDates = [...new Set(data.map(s => s.date))].sort();
  let longestStreak = 1;
  let currentStreak = 1;
  
  for (let i = 1; i < uniqueDates.length; i++) {
    const prevDate = new Date(uniqueDates[i - 1]);
    const currDate = new Date(uniqueDates[i]);
    const diffDays = Math.floor((currDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      currentStreak++;
      longestStreak = Math.max(longestStreak, currentStreak);
    } else {
      currentStreak = 1;
    }
  }
  
  return longestStreak;
};

export const calculateTimeOfDay = (data: StudySession[]): { morning: number; afternoon: number; evening: number; night: number } => {
  const timeOfDay = { morning: 0, afternoon: 0, evening: 0, night: 0 };
  
  data.forEach(session => {
    const hour = parseInt(session.startTime.split(":")[0]);
    if (hour >= 6 && hour < 12) timeOfDay.morning += session.hours;
    else if (hour >= 12 && hour < 17) timeOfDay.afternoon += session.hours;
    else if (hour >= 17 && hour < 21) timeOfDay.evening += session.hours;
    else timeOfDay.night += session.hours;
  });
  
  return timeOfDay;
};

export const calculateSubjectStats = (data: StudySession[]) => {
  const subjectMap = data.reduce((acc, session) => {
    if (!acc[session.subject]) {
      acc[session.subject] = { hours: 0, dates: new Set<string>() };
    }
    acc[session.subject].hours += session.hours;
    acc[session.subject].dates.add(session.date);
    return acc;
  }, {} as Record<string, { hours: number; dates: Set<string> }>);
  
  return Object.entries(subjectMap).map(([subject, stats]) => ({
    subject,
    totalHours: stats.hours,
    uniqueDays: stats.dates.size,
    avgDaily: stats.hours / stats.dates.size
  })).sort((a, b) => b.totalHours - a.totalHours);
};

export const calculateSubjectStreak = (data: StudySession[], subject: string): number => {
  const subjectData = data.filter(s => s.subject === subject);
  return calculateLongestStreak(subjectData);
};

export const calculateWeekdayPattern = (data: StudySession[]): number[] => {
  const weekdays = [0, 0, 0, 0, 0, 0, 0]; // Sun to Sat
  
  data.forEach(session => {
    const day = new Date(session.date).getDay();
    weekdays[day] += session.hours;
  });
  
  return weekdays;
};

export const calculateWeeklyTrend = (data: StudySession[]) => {
  const today = new Date();
  const dayOfWeek = (d: Date) => (d.getDay() + 6) % 7; // Mon=0 ... Sun=6

  const mondayThisWeek = new Date(today);
  mondayThisWeek.setHours(0, 0, 0, 0); // Reset to start of day
  mondayThisWeek.setDate(today.getDate() - dayOfWeek(today));

  const mondayLastWeek = new Date(mondayThisWeek);
  mondayLastWeek.setDate(mondayThisWeek.getDate() - 7);

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const thisWeek = Array(7).fill(0);
  const lastWeek = Array(7).fill(0);

  data.forEach((session) => {
    const sessionDate = new Date(session.date);
    sessionDate.setHours(0, 0, 0, 0); // Reset to start of day
    const index = dayOfWeek(sessionDate);

    if (sessionDate >= mondayThisWeek && sessionDate < new Date(mondayThisWeek.getTime() + 7 * 86400000)) {
      thisWeek[index] += session.hours;
    } else if (sessionDate >= mondayLastWeek && sessionDate < mondayThisWeek) {
      lastWeek[index] += session.hours;
    }
  });

  return { labels, lastWeek, thisWeek };
};

export const calculateMonthlyTrend = (studyData: StudySession[]) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Last month info
  const lastMonthDate = new Date(currentYear, currentMonth - 1, 1);
  const lastMonthDays = new Date(lastMonthDate.getFullYear(), lastMonthDate.getMonth() + 1, 0).getDate();
  const lastMonth: { day: number; hours: number }[] = Array.from({ length: lastMonthDays }, (_, i) => {
    const day = i + 1;
    const hours = studyData
      .filter(s => {
        const d = new Date(s.date);
        return d.getFullYear() === lastMonthDate.getFullYear() &&
               d.getMonth() === lastMonthDate.getMonth() &&
               d.getDate() === day;
      })
      .reduce((sum, s) => sum + s.hours, 0);
    return { day, hours };
  });

  // This month info
  const thisMonthDate = new Date(currentYear, currentMonth, 1);
  const thisMonthDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  const thisMonth: { day: number; hours: number }[] = Array.from({ length: thisMonthDays }, (_, i) => {
    const day = i + 1;
    const hours = studyData
      .filter(s => {
        const d = new Date(s.date);
        return d.getFullYear() === thisMonthDate.getFullYear() &&
               d.getMonth() === thisMonthDate.getMonth() &&
               d.getDate() === day;
      })
      .reduce((sum, s) => sum + s.hours, 0);
    return { day, hours };
  });

  return { lastMonth, thisMonth };
};


export const calculateWeekdayVsWeekend = (data: StudySession[]): { weekdays: number; weekend: number } => {
  let weekdays = 0;
  let weekend = 0;
  
  data.forEach(session => {
    const day = new Date(session.date).getDay();
    if (day === 0 || day === 6) {
      weekend += session.hours;
    } else {
      weekdays += session.hours;
    }
  });
  
  return { weekdays, weekend };
};

export const calculateCoins = (data: StudySession[]): { earned: number; target: number; remaining: number } => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  const monthlyHours = calculateMonthlyTotal(data, currentYear, currentMonth);
  const earned = monthlyHours * 5; // 1 hour = ₹5
  const target = 1000;
  const remaining = target - earned;
  
  return { earned, target, remaining };
};

export const calculateBadges = (data: StudySession[]): string[] => {
  const badges: string[] = [];
  const totalHours = data.reduce((sum, s) => sum + s.hours, 0);
  const streak = calculateLongestStreak(data);
  
  if (totalHours >= 10) badges.push("10 Hour Hero");
  if (totalHours >= 50) badges.push("50 Hour Champion");
  if (totalHours >= 100) badges.push("100 Hour Legend");
  if (streak >= 7) badges.push("Week Warrior");
  if (streak >= 30) badges.push("Month Master");
  
  return badges;
};
