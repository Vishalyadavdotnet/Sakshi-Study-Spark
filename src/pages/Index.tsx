import { Calendar, TrendingUp, Award, Target, Flame } from "lucide-react";
import StudentInfo from "@/components/StudentInfo";
import StatsCard from "@/components/StatsCard";
import TimeOfDayChart from "@/components/TimeOfDayChart";
import SubjectPerformance from "@/components/SubjectPerformance";
import WeeklyTrend from "@/components/WeeklyTrend";
import MonthlyTrend from "@/components/MonthlyTrend";
import WeekdayPattern from "@/components/WeekdayPattern";
import RewardsSection from "@/components/RewardsSection";
import BadgesSection from "@/components/BadgesSection";
import SubjectHours from "@/components/SubjectHours";
import { studyData } from "@/data/studyData";
import * as calc from "@/utils/studyCalculations";

const Index = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  // Calculate all metrics
  const todayHours = calc.calculateTodayHours(studyData);
  const weeklyTotal = calc.calculateWeeklyTotal(studyData);
  const monthlyTotal = calc.calculateMonthlyTotal(studyData, currentYear, currentMonth);
  const avgDaily = calc.calculateAverageDailyHours(studyData, currentYear, currentMonth);
  const bestDay = calc.findBestDay(studyData);
  const longestStreak = calc.calculateLongestStreak(studyData);
  const timeOfDay = calc.calculateTimeOfDay(studyData);
  const subjectStats = calc.calculateSubjectStats(studyData);
  const weekdayPattern = calc.calculateWeekdayPattern(studyData);
  const weeklyTrend = calc.calculateWeeklyTrend(studyData);
  const monthlyTrend = calc.calculateMonthlyTrend(studyData);
  const weekdayVsWeekend = calc.calculateWeekdayVsWeekend(studyData);
  const coins = calc.calculateCoins(studyData);
  const badges = calc.calculateBadges(studyData);
  
  const monthName = today.toLocaleString('default', { month: 'long' });
  
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <StudentInfo todayHours={todayHours} />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Weekly Total"
            value={`${weeklyTotal.toFixed(1)}h`}
            icon={Calendar}
            color="primary"
            subtitle="Last 7 days"
          />
          <StatsCard
            title={`${monthName} Total`}
            value={`${monthlyTotal.toFixed(1)}h`}
            icon={TrendingUp}
            color="success"
            subtitle="This month"
          />
          <StatsCard
            title="Average Daily"
            value={`${avgDaily.toFixed(2)}h`}
            icon={Target}
            color="accent"
            subtitle="This month"
          />
          <StatsCard
            title="Best Day"
            value={`${bestDay.hours.toFixed(1)}h`}
            icon={Award}
            color="info"
            subtitle={bestDay.date || "N/A"}
          />
        </div>

        {/* Longest Streak */}
        <div className="bg-card rounded-2xl p-6 shadow-card card-hover animate-slide-up">
          <div className="flex items-center gap-3">
            <div className="bg-destructive/10 p-3 rounded-xl">
              <Flame className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Longest Study Streak
              </p>
              <p className="text-3xl font-bold">
                {longestStreak} {longestStreak === 1 ? "day" : "days"} 🔥
              </p>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TimeOfDayChart timeOfDay={timeOfDay} />
          <SubjectPerformance
            subjectStats={subjectStats}
            studyData={studyData}
          />
        </div>

        {/* Trend Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WeeklyTrend weeklyTrend={weeklyTrend} />
          <MonthlyTrend monthlyTrend={monthlyTrend} />
        </div>

        {/* Subject Hours and Weekday Pattern */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SubjectHours subjectStats={subjectStats} />
          <WeekdayPattern
            weekdayPattern={weekdayPattern}
            weekdayVsWeekend={weekdayVsWeekend}
          />
        </div>

        {/* Rewards and Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RewardsSection coins={coins} />
          <BadgesSection badges={badges} />
        </div>
      </div>
    </div>
  );
};

export default Index;
